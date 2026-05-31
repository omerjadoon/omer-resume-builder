import http.server
import socketserver
import os
import sys
import json
import subprocess
import tempfile

PORT = 8000
DIRECTORY = "/Users/omerkhanjadoon/Documents/new job"

CHROME_PATHS = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
]

def find_chrome():
    for path in CHROME_PATHS:
        if os.path.exists(path):
            return path
    return None

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        if self.path == '/api/generate-pdf':
            self.handle_generate_pdf()
        else:
            self.send_error(404, "Not Found")

    def handle_generate_pdf(self):
        chrome = find_chrome()
        if not chrome:
            self.send_error(500, "Chrome not found. Please install Google Chrome.")
            return

        content_length = int(self.headers.get('Content-Length', 0))
        html_body = self.rfile.read(content_length).decode('utf-8')

        # Write HTML to a temp file
        with tempfile.NamedTemporaryFile(suffix='.html', delete=False, mode='w', encoding='utf-8') as f:
            f.write(html_body)
            html_path = f.name

        pdf_path = html_path.replace('.html', '.pdf')

        try:
            result = subprocess.run([
                chrome,
                '--headless=new',
                '--disable-gpu',
                '--no-sandbox',
                '--disable-web-security',
                '--allow-file-access-from-files',
                f'--print-to-pdf={pdf_path}',
                '--print-to-pdf-no-header',
                '--no-margins',
                '--run-all-compositor-stages-before-draw',
                '--virtual-time-budget=5000',
                f'file://{html_path}'
            ], capture_output=True, timeout=30)

            if os.path.exists(pdf_path) and os.path.getsize(pdf_path) > 0:
                with open(pdf_path, 'rb') as f:
                    pdf_data = f.read()
                self.send_response(200)
                self.send_header('Content-Type', 'application/pdf')
                self.send_header('Content-Disposition', 'attachment; filename="Omer_Khan_Jadoon_Resume.pdf"')
                self.send_header('Content-Length', str(len(pdf_data)))
                self.end_headers()
                self.wfile.write(pdf_data)
            else:
                stderr = result.stderr.decode('utf-8', errors='ignore')
                print(f"Chrome failed: {stderr}")
                self.send_error(500, "PDF generation failed")
        except Exception as e:
            print(f"Error: {e}")
            self.send_error(500, str(e))
        finally:
            for path in [html_path, pdf_path]:
                if os.path.exists(path):
                    os.unlink(path)

    def log_message(self, format, *args):
        pass  # Suppress access logs for cleanliness

def run_server():
    os.chdir(DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True

    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        chrome = find_chrome()
        print("\n" + "="*55)
        print("🚀  ATS CV ARCHITECT - LOCAL SERVER RUNNING")
        print("="*55)
        print(f"👉  Open:    http://localhost:{PORT}")
        print(f"🖨️   Chrome:  {'Found ✓' if chrome else 'NOT FOUND ✗ (Direct Download will fail)'}")
        print("="*55)
        print("Press Ctrl+C to stop.\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
            sys.exit(0)

if __name__ == "__main__":
    run_server()
