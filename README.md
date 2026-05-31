# Agentic ATS Resume Architect 🚀

An interactive, real-time, YAML-based **ATS Resume Builder & Auditor** designed for engineers and professionals to tailor their resumes for job descriptions in seconds. It merges a comprehensive baseline CV profile with job-specific YAML custom configurations, scoring the output dynamically for ATS compliance.

---

## Key Features 🌟

*   **Real-time YAML Editing & Parsing**: Paste job-tailored experience bullets, skills highlights, and target roles in YAML format. The app parses it on-the-fly and merges it seamlessly with your baseline profile.
*   **Dual PDF Export Pipelines**:
    *   **Server-Side Headless Chrome (Local Development)**: Generates pixel-perfect, high-fidelity PDFs via a Python-driven Chrome Headless container, maintaining pristine layouts, fonts, and page breaks.
    *   **Client-Side `html2pdf.js` (Production/Netlify Deployments)**: Serves as a zero-dependency static fallback. Downloads the resume directly within the browser without requiring any backend.
    *   **Native Browser Print System**: Optimized print media stylesheets let you export your resume via browser standard printing (`Cmd+P` or `Ctrl+P`) with UI control elements hidden automatically.
*   **Real-time ATS Compliance Auditor**: Instantly evaluates your document against critical ATS rules:
    *   Searchable/Selectable text integrity
    *   Standardized single-column flow layout (avoids parsing failures caused by multi-columns)
    *   Proper typography scaling and layout density
    *   Margin dimensions check
    *   Critical contact information presence
    *   Optimal word count boundaries (400 - 1200 words)
*   **Fine-Tuning Controls**: Interactive sliders to adjust document margins, base font size, and line height dynamically, automatically recalculating layout alignment.
*   **Visual Presets**: Switch instantly between styles:
    *   *Executive Clean*: Single-column slate design.
    *   *Modern Indigo*: Indigo accent visuals.
    *   *Strict ATS Standard*: Plain text Times New Roman formatting designed for maximum compatibility with old-school ATS software.

---

## Local Development & Setup 💻

### Running the Headless Chrome Server

For high-fidelity PDF exports using the local Python server, the application uses **Google Chrome** in headless mode:

1.  **Clone this repository** to your local system.
2.  Ensure you have **Google Chrome** or **Chromium** installed in your Applications directory (standard location on macOS/Linux/Windows).
3.  Start the local server by running:
    ```bash
    python3 serve.py
    ```
4.  Open the local address in your web browser:
    ```
    http://localhost:8000
    ```
5.  *Note:* The local server automatically detects your system Chrome binary to compile high-fidelity PDFs when you click **Direct Download PDF**.

---

## Netlify Deployment Guide ☁️

This project is fully compatible with **Netlify**'s static web hosting. When deployed on Netlify, the application runs client-side, and the "Direct Download PDF" button automatically falls back to utilizing `html2pdf.js` to compile the PDF inside your browser.

### Deploying via GitHub (Recommended)

1.  **Create a GitHub Repository**:
    *   Go to GitHub and create a new repository (e.g. `ats-cv-architect`).
    *   Push your project files (including `index.html`, `style.css`, `app.js`, `netlify.toml`, and the `assets` folder) to your repository:
        ```bash
        git init
        git add .
        git commit -m "Initial commit of ATS Resume Architect"
        git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
        git branch -M main
        git push -u origin main
        ```

2.  **Connect to Netlify**:
    *   Log in to your [Netlify Dashboard](https://app.netlify.com/).
    *   Click on **Add new site** > **Import an existing project**.
    *   Connect your GitHub account and select your repository.
    *   **Configure Build Settings**:
        *   **Build command**: *(Leave blank)*
        *   **Publish directory**: `.` (or check that it reads the root folder containing `index.html`)
    *   Click **Deploy site**. Netlify will host the site and automatically update it whenever you push changes to GitHub.

---

## Customizing Your Baseline Resume Data 📄

You can permanently edit the default resume details to represent your own background.

1.  Open [app.js](file:///Users/omerkhanjadoon/Documents/new%20job/app.js).
2.  Locate the `BASE_CV_DATA` object at the top of the file (lines 4-137).
3.  Replace the placeholder values, company roles, dates, education history, and bullet points with your professional details.
4.  Save the file. When the application loads, your personal profile will serve as the core template.

### How to Use the YAML Customization Canvas

The editor interface allows you to paste minimal structural YAML to customize the layout for a specific job application. Any fields not specified in the YAML will automatically fall back to your `BASE_CV_DATA`.

Example YAML customization payload:
```yaml
# Tailor Your Resume Here to Match the Job Description!
# Only paste the fields you want to override.

target_role: "Senior Machine Learning Engineer | Generative AI Lead"

summary: "Results-driven Machine Learning Engineer with 5+ years of experience in artificial intelligence, LLM frameworks, MLOps, and agentic workflows. Proven track record of designing and deploying state-of-the-art LLM pipelines and RAG systems that automate complex business processes and increase efficiency by 80%."

skills_highlight: "LangGraph, CrewAI, LlamaIndex, fine-tuning LLaMA, vector embeddings, cloud deployments (Azure/AWS), MLOps pipelines."

tailored_bullets:
  sana_expert:
    - "Automated more than 85% of customer support tickets across Europe and Asia using agentic AI, dramatically lowering resolution times."
    - "Architected and deployed production-grade Multi-Agent workflows using LangGraph and advanced context retention techniques."
  amidiro:
    - "Designed and launched Amidiro Audio Assistant with highly responsive audio LLM integrations, improving lead conversion by 20%."

projects:
  - name: "Autonomous Agentic Resume Builder"
    description: "Designed a real-time reactive YAML parser tool that dynamically merges base data with job-tailored bullets, generating standardized, print-optimized ATS resumes."
```

---

## Technology Stack 🛠️

*   **UI/UX**: HTML5, Vanilla CSS3 (custom CSS variables & keyframe animations), Tailwind CSS CDN (for editor grid and controls layout).
*   **Libraries**:
    *   [JS-YAML](https://github.com/nodeca/js-yaml): Fast client-side YAML parsing.
    *   [html2pdf.js](https://github.com/eKoopmans/html2pdf.js): Client-side HTML-to-PDF conversion fallback.
*   **Local Backend (Optional)**: Python 3 `http.server` & `subprocess` executing Headless Google Chrome API parameters.
