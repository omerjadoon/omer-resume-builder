// netlify/functions/generate-pdf.js
// Mirrors the local serve.py PDF endpoint so the app works on Netlify without a server.
// Uses @sparticuz/chromium (a stripped-down Chromium for serverless) + puppeteer-core.
//
// Deploy requirements (add to package.json devDependencies or run once):
//   npm install --save-dev @sparticuz/chromium puppeteer-core
//
// This function is automatically mapped to /.netlify/functions/generate-pdf.
// The netlify.toml redirect below makes it appear at /api/generate-pdf (same URL
// the app already posts to) so zero changes are needed in app.js.

const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer-core");

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders() };
  }
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const htmlBody = event.isBase64Encoded
    ? Buffer.from(event.body, "base64").toString("utf-8")
    : event.body;

  if (!htmlBody) {
    return { statusCode: 400, body: "No HTML body provided" };
  }

  let browser;
  try {
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });

    const page = await browser.newPage();

    // Set the HTML content and wait for network idle (fonts, etc.)
    await page.setContent(htmlBody, { waitUntil: "networkidle0", timeout: 25000 });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    return {
      statusCode: 200,
      headers: {
        ...corsHeaders(),
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=\"Resume.pdf\"",
        "Content-Length": pdfBuffer.length.toString(),
      },
      body: pdfBuffer.toString("base64"),
      isBase64Encoded: true,
    };
  } catch (err) {
    console.error("PDF generation error:", err);
    return { statusCode: 500, body: `PDF generation failed: ${err.message}` };
  } finally {
    if (browser) await browser.close();
  }
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}
