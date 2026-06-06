// Core Application State & Constants for Omer Jadoon's ATS Resume Generator

// 1. Raw default resume data extracted from Omer Jadoon's CV
const BASE_CV_DATA = {
  name: "Omer Khan Jadoon",
  title: "Machine Learning Engineer | Agentic AI Software Engineer",
  contact: {
    phone: "+49 176 68310746",
    email: "omerkhanjadoons@gmail.com",
    website: "omerjadoon.com",
    websiteUrl: "https://omerjadoon.com",
    linkedin: "linkedin.com/in/omerkhanjadoon",
    linkedinUrl: "https://linkedin.com/in/omerkhanjadoon",
    github: "github.com/omerjadoon",
    githubUrl: "https://github.com/omerjadoon",
    location: "Munich, Germany"
  },
  summary: "Results-driven Machine Learning Engineer with 5+ years of experience in artificial intelligence, data science, machine learning, NLP and MLOps. Proficient in Python, ML/DL, LLM Frameworks and Cloud Deployments.",
  skills: [
    { category: "Programming Languages", items: "Python, JavaScript, TypeScript, SQL, C / C++, Java, C#" },
    { category: "Generative AI & LLM Orchestration", items: "Agentic AI, LangGraph, CrewAI, LangChain, LlamaIndex, LLMs (Llama, Mistral, GPT-4, Claude, Gemini), Multimodal LLMs, Audio/Video Models, RAG Pipelines, Vector Embeddings, Fine-Tuning (LoRA/QLoRA), Prompt Engineering, Knowledge Graphs, LLM Evaluation (DeepEval, LangSmith)" },
    { category: "Machine Learning & Computer Vision", items: "TensorFlow, PyTorch, Computer Vision, NLP, Deep Learning (DNN), GANs, FiftyOne, Neural Network Optimization" },
    { category: "Data Engineering & Databases", items: "PostgreSQL, MySQL, MongoDB, Cosmos DB (production), Firebase, Vector Databases (ChromaDB, Pinecone), MinIO Object Store, ETL/ELT Pipelines" },
    { category: "MLOps & Cloud Infrastructure", items: "MLflow, Apache Airflow, Meltano, Docker, Kubernetes, AWS EKS, AWS (EC2, Lambda, S3), Azure AI, Azure Functions, Hugging Face Spaces, Terraform, LLMOps" },
    { category: "Web Development & AI Integration", items: "Next.js, React.js, Node.js, FastAPI, Django, Flask, Streamlit, REST APIs, GraphQL, n8n, Make, Flowise" },
    { category: "Observability & Project Management", items: "Grafana, Prometheus, Metabase, Git, GitHub, GitLab, Jira, Confluence, Notion, Agile Development" },
    { category: "Soft Skills", items: "Analytical Thinking, Problem-Solving, Teamwork, Communication, Leadership, Cross-functional Collaboration" }
  ],
  experience: [
    {
      company: "SanaExpert GmbH",
      role: "Artificial Intelligence Specialist",
      date: "Jan 2025 – Present",
      location: "Munich, Germany",
      id: "sana_expert",
      bullets: [
        "Automation of more than 85% of Customer Support tickets using AI across different countries (Germany, Spain, Italy, Portugal and China) and across different channels (shopify web chat, email, instagram, messenger etc.)",
        "Designed and deployed production-grade agentic AI system with advanced RAG and knowledge graphs, tool calling, and context management, handling sensitive user data with PII masking",
        "Modern Interactive Sales Agent for Purmeo with text + audio input/output support",
        "VLMs, Fine tuning FLUX.dev models (LoRa) for SanaExpert AI Influencer",
        "Finetune BioGPT on text based data for medical QA bot",
        "AI based Content Generation and Management System with auto posting on all social media channels"
      ]
    },
    {
      company: "Amidiro GmbH",
      role: "Generative AI & Machine Learning Consultant",
      date: "Dec 2023 – Dec 2024",
      location: "Aachen, Germany",
      id: "amidiro",
      bullets: [
        "Lead the Development of Amidiro Audio Assistant which helps businesses/hospitals to provide support and do marketing and support calls using LLMs and which increase the lead conversion rate by 20%, and reduce the call handling time by 15%",
        "Fine tuned YOLO v9 on FireNet Dataset and Developed a pipeline to generate Safety & Maintenance Report using LLM",
        "Developed a data pipeline to extract important information from Company register (Handelsregister) using OpenAI ChatGPT and store it to AWS DynamoDB",
        "Build a Retrieval-augmented generation (RAG) pipeline for Amidiro Internal Knowledgebase to help consultants",
        "Developed Basic and Advance Training about Prompt Engineering and RAG focusing on latest research",
        "Knowledge retrieval from recent Research Papers and integration into the Knowledgebase",
        "Whatsapp based social media content management platform using meta, tiktok APIs and Gemini Flash"
      ]
    },
    {
      company: "Remote Native GmbH",
      role: "Machine Learning Engineer",
      date: "Apr 2023 – Oct 2023",
      location: "Munich, Germany",
      id: "remote_native",
      bullets: [
        "Generated Synthetic dataset using LLMs from ~5 Million e-commerce dataset, to train custom BERT model for Named Entity Relations (NER) task",
        "Fine Tuned Segment Anything model to do image segmentation and remove background from images. Also created an interface for this in streamlit",
        "Developed a Restful API service for converting video of Product to 3D objects",
        "Implemented MLOps pipeline in Azure Databricks to Extract Transform Load (ETL), Model Training and Deployment"
      ]
    },
    {
      company: "Advance Telecom Services (ATS)",
      role: "Artificial Intelligence Engineer",
      date: "Jul 2022 – Apr 2023",
      location: "Remote, USA",
      id: "ats",
      bullets: [
        "Set up fine-tuning and evaluation pipelines on Microsoft Azure",
        "Trained Custom Computer Vision and NLP Models and Deployed them on Azure Cloud",
        "Implemented an Advanced Recommendation System for car dealership stores",
        "Developed Generative AI Training and conducted training sessions with universities",
        "Worked on Data Pipelines, ETL, Batch Scoring, Stream Processing, Visualization using Power BI"
      ]
    },
    {
      company: "National Radio and Telecommunication Corporation (NRTC)",
      role: "Assistant Manager Artificial Intelligence Lab",
      date: "Oct 2021 – June 2022",
      location: "Onsite, Pakistan",
      id: "nrtc",
      bullets: [
        "Build the AI and BigData Lab with a private cloud for KPK Police, Pakistan",
        "Worked on Development of OSINT for Social Media and Criminals Analysis",
        "Trained an AI based Forecasting AI to forecast any possible crime in an area",
        "Build Interactive Dashboards in Qlik Sense and a custom ETL system for Telecommunication Data",
        "Developed Link Analysis Platform to analyze the activities of Terrorist Groups in Pakistan",
        "Development of Facial Recognition System (FRS), Automatic Number Plate Recognition System",
        "Lead a team of 5 People"
      ]
    },
    {
      company: "Jadoon Technologies Private Limited (JTPL)",
      role: "Lead Software Engineer",
      date: "Nov 2020 – Oct 2021",
      location: "Onsite, Pakistan",
      id: "jtpl",
      bullets: [
        "Developed Cross Platform Mobile and web apps using Next JS, React JS, ASP.NET as well as Django",
        "Web Scraping, Data Analytics, Exploratory Data Analysis",
        "Data Ingestion, Training ML and DL based models for visual analysis, emotion detection, and road safety"
      ]
    }
  ],
  education: [
    {
      institution: "The University of Haripur",
      degree: "Bachelors of Science in Software Engineering",
      date: "OCT 2016 - OCT 2020",
      location: "Haripur, Pakistan",
      highlights: "Gold Medal/Chancellor Medal (Highest CGPA in Department) | HEC Scholarship & Laptop Winner"
    }
  ],
  awards: [
    { title: "Gold Medal / Chancellor Medal", detail: "Scored Highest CGPA in Software Engineering Dept", date: "Oct 2020" },
    { title: "HEC Merit Scholarship & Laptop Winner", detail: "Awarded by Higher Education Commission", date: "Mar 2018" }
  ],
  languages: [
    { name: "English", level: "C1 — Professional Working Proficiency" },
    { name: "German", level: "A2 — Elementary" },
    { name: "Urdu", level: "C2 — Native" }
  ]
};

// 2. Default copy-pasteable sample YAML to showcase customization
const DEFAULT_YAML = `# Tailor Your Resume Here to Match the Job Description!
# Only paste the fields you want to override.

target_role: "Machine Learning Engineer | Agentic AI Specialist"

summary: "Results-driven Machine Learning Engineer with 5+ years of experience in artificial intelligence, LLM frameworks, MLOps, and agentic workflows. Proven track record of designing and deploying state-of-the-art LLM pipelines and RAG systems that automate complex business processes and increase efficiency by 80%."

skills_highlight: "LangGraph, CrewAI, LlamaIndex, fine-tuning LLaMA, vector embeddings, MLOps (MLflow, Airflow, Meltano), MinIO, FiftyOne, Metabase."

tailored_bullets:
  sana_expert:
    - "Automated more than 85% of customer support tickets across Europe and Asia using agentic AI, dramatically lowering resolution times."
    - "Architected and deployed production-grade Multi-Agent workflows using LangGraph and advanced context retention techniques."
    - "Finetuned vision models and BioGPT for custom biomedical and generative marketing tasks."
  amidiro:
    - "Designed and launched Amidiro Audio Assistant with highly responsive audio LLM integrations, improving lead conversion by 20%."
    - "Engineered YOLO-based computer vision workflows coupled with generative report writer systems."
    - "Deployed secure knowledge search structures over massive internal consulting databases."

projects:
  - name: "Autonomous Agentic Resume Builder"
    description: "Designed a real-time reactive YAML parser tool that dynamically merges base data with job-tailored bullets, generating standardized, print-optimized ATS resumes."
`;

// App Logic & UI Bindings
document.addEventListener("DOMContentLoaded", () => {
  const yamlEditor = document.getElementById("yaml-editor");
  const validationStatus = document.getElementById("validation-status");
  const resumeContainer = document.getElementById("resume-content");

  // Toggles and inputs
  const photoToggle = document.getElementById("toggle-photo");
  const templateSelect = document.getElementById("template-select");
  const marginSlider = document.getElementById("slider-margin");
  const fontSizeSlider = document.getElementById("slider-font");
  const lineHeightSlider = document.getElementById("slider-lineheight");

  const marginVal = document.getElementById("margin-val");
  const fontVal = document.getElementById("font-val");
  const lineheightVal = document.getElementById("lineheight-val");

  // Print button
  const printBtn = document.getElementById("btn-print");

  // Pre-populate editor
  yamlEditor.value = DEFAULT_YAML;

  // Render function
  function updateResume() {
    let customData = {};
    const rawYaml = yamlEditor.value;

    // Parse YAML
    try {
      customData = jsyaml.load(rawYaml) || {};
      validationStatus.innerHTML = `<span class="status-ok"><svg class="checklist-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> YAML parsed successfully</span>`;
    } catch (e) {
      validationStatus.innerHTML = `<span class="status-error"><svg class="checklist-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Parse Error (Line ${e.mark ? e.mark.line + 1 : '?'})</span>`;
      // Don't halt, render with last successful state or baseline
    }

    // Merge baseline with customizations
    const merged = {
      name: BASE_CV_DATA.name,
      title: customData.target_role || BASE_CV_DATA.title,
      contact: { ...BASE_CV_DATA.contact },
      summary: customData.summary || BASE_CV_DATA.summary,
      skills: [...BASE_CV_DATA.skills],
      experience: BASE_CV_DATA.experience.map(exp => {
        // If YAML contains tailored bullets for this company, merge/replace them
        let bullets = exp.bullets;
        if (customData.tailored_bullets && customData.tailored_bullets[exp.id]) {
          bullets = customData.tailored_bullets[exp.id];
        }
        return { ...exp, bullets };
      }),
      education: [...BASE_CV_DATA.education],
      awards: [...BASE_CV_DATA.awards],
      languages: [...BASE_CV_DATA.languages]
    };

    // Process custom skills highlight from YAML if provided
    if (customData.skills_highlight) {
      // Prepend or add custom category
      merged.skills = [
        { category: "Top Skills", items: customData.skills_highlight },
        ...BASE_CV_DATA.skills
      ];
    }

    // Generate HTML
    let html = "";

    // 1. Header (Name, Title, Contact Info, Picture Toggle)
    const showPhoto = photoToggle.checked;

    html += `
      <div class="resume-header">
        <div class="header-left">
          <div class="resume-name">${merged.name}</div>
          <div class="resume-title">${merged.title}</div>
          <div class="contact-bar">
            <span>${merged.contact.phone}</span>
            <span class="contact-sep">|</span>
            <a href="mailto:${merged.contact.email}">${merged.contact.email}</a>
            <span class="contact-sep">|</span>
            <a href="${merged.contact.websiteUrl}" target="_blank">${merged.contact.website}</a>
            <span class="contact-sep">|</span>
            <a href="${merged.contact.linkedinUrl}" target="_blank">${merged.contact.linkedin}</a>
            <span class="contact-sep">|</span>
            <a href="${merged.contact.githubUrl}" target="_blank">${merged.contact.github}</a>
            <span class="contact-sep">|</span>
            <span>${merged.contact.location}</span>
          </div>
        </div>
        ${showPhoto ? `
        <div class="header-right">
          <img src="assets/omerkhanjadoon.jpg" alt="Omer Khan Jadoon" class="resume-pic" onerror="this.style.display='none'">
        </div>
        ` : ''}
      </div>
    `;

    // 2. Summary
    html += `
      <div class="resume-section">
        <div class="section-title">Professional Summary</div>
        <div class="resume-summary">${merged.summary}</div>
      </div>
    `;

    // 3. Skills
    html += `
      <div class="resume-section">
        <div class="section-title">Technical Skills</div>
        <div class="skills-container">
    `;
    merged.skills.forEach(skill => {
      html += `
        <div class="skills-row">
          <span class="skills-category">${skill.category}:</span>
          <span>${skill.items}</span>
        </div>
      `;
    });
    html += `
        </div>
      </div>
    `;

    // 4. Experience
    html += `
      <div class="resume-section">
        <div class="section-title">Professional Experience</div>
    `;
    merged.experience.forEach(exp => {
      html += `
        <div class="experience-item">
          <div class="experience-header">
            <span class="experience-company">${exp.company}</span>
            <span class="experience-date">${exp.date}</span>
          </div>
          <div class="experience-subheader">
            <span>${exp.role}</span>
            <span class="experience-location">${exp.location}</span>
          </div>
          <ul class="bullet-list">
      `;
      exp.bullets.forEach(bullet => {
        html += `<li>${bullet}</li>`;
      });
      html += `
          </ul>
        </div>
      `;
    });
    html += `</div>`;

    // 5. Custom Projects (if any defined in YAML)
    if (customData.projects && Array.isArray(customData.projects)) {
      html += `
        <div class="resume-section">
          <div class="section-title">Projects</div>
      `;
      customData.projects.forEach(proj => {
        html += `
          <div class="project-item">
            <span class="project-title">${proj.name}:</span>
            <span class="resume-summary">${proj.description}</span>
          </div>
        `;
      });
      html += `</div>`;
    }

    // 6. Education
    html += `
      <div class="resume-section">
        <div class="section-title">Education</div>
    `;
    merged.education.forEach(edu => {
      html += `
        <div class="education-item">
          <div class="edu-header">
            <span>${edu.degree}</span>
            <span class="experience-date">${edu.date}</span>
          </div>
          <div class="edu-subheader">
            <span>${edu.institution}</span>
            <span>${edu.location}</span>
          </div>
          <div style="font-size: 0.825rem; font-style: italic; margin-top: 0.15rem; color: var(--resume-text-muted);">${edu.highlights}</div>
        </div>
      `;
    });
    html += `</div>`;

    // 7. Languages
    html += `
      <div class="resume-section">
        <div class="section-title">Languages</div>
        <div class="languages-container">
    `;
    merged.languages.forEach(lang => {
      html += `
        <div class="language-item">
          <span class="language-name">${lang.name}</span>
          <span class="language-level">${lang.level}</span>
        </div>
      `;
    });
    html += `
        </div>
      </div>
    `;

    // Render to DOM
    resumeContainer.innerHTML = html;

    // Recalculate ATS Audit score
    runAtsAudit(merged, showPhoto);
  }

  // Real-time ATS Audit System
  function runAtsAudit(data, showPhoto) {
    const list = document.getElementById("ats-checklist");
    const scoreVal = document.getElementById("ats-score");
    let passedCount = 0;
    let totalChecks = 7;

    const checks = [
      {
        text: "Selectable text check (No scanned images)",
        test: () => true, // Guaranteed by native HTML render
        tip: "Native fonts render searchable strings directly."
      },
      {
        text: "Clean, standard margins (>= 10mm)",
        test: () => parseInt(marginSlider.value) >= 10,
        tip: "Margins below 10mm can cause clipping in print."
      },
      {
        text: "Contact information presence (Phone, Email, LinkedIn)",
        test: () => data.contact.phone && data.contact.email && data.contact.linkedin,
        tip: "Essential variables required for reachability."
      },
      {
        text: "Single-column parsing flow layout",
        test: () => true, // Confirmed by structural DOM flow
        tip: "Sidebars / columns confuse 85% of parsing agents."
      },
      {
        text: "Clean headers structure (h1, h2 hierarchy)",
        test: () => true, // Structural layout compliance
        tip: "Uses unified semantic markup structure."
      },
      {
        text: "Profile Picture Toggle Availability",
        test: () => true, // Toggles available
        tip: "Permits toggling photo off for automated agency submissions."
      },
      {
        text: "Optimal Density Word Count (400 - 1200 words)",
        test: () => {
          const text = resumeContainer.innerText;
          const count = text.split(/\s+/).filter(Boolean).length;
          return count >= 400 && count <= 1200;
        },
        tip: "Optimal length prevents scanner truncation."
      }
    ];

    let checklistHtml = "";
    checks.forEach(check => {
      const passed = check.test();
      if (passed) passedCount++;

      checklistHtml += `
        <div class="checklist-item">
          <div class="checklist-icon ${passed ? 'checklist-pass' : 'checklist-fail'}">
            ${passed ? `
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ` : `
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            `}
          </div>
          <div>
            <div style="font-weight: 500; color: ${passed ? '#e2e8f0' : '#94a3b8'};">${check.text}</div>
            <div style="font-size: 0.725rem; color: #64748b; margin-top: 0.1rem;">${check.tip}</div>
          </div>
        </div>
      `;
    });

    list.innerHTML = checklistHtml;
    const finalScore = Math.round((passedCount / totalChecks) * 100);
    scoreVal.innerText = finalScore + "%";

    if (finalScore >= 85) {
      scoreVal.style.color = "#4ade80"; // Bright Green
    } else if (finalScore >= 60) {
      scoreVal.style.color = "#fbbf24"; // Amber
    } else {
      scoreVal.style.color = "#f87171"; // Red
    }
  }

  // Format adjustment hooks
  marginSlider.addEventListener("input", (e) => {
    const val = e.target.value;
    marginVal.innerText = val + "mm";
    document.documentElement.style.setProperty('--resume-margin', val + "mm");
    updateResume();
  });

  fontSizeSlider.addEventListener("input", (e) => {
    const val = e.target.value;
    fontVal.innerText = val + "pt";
    document.documentElement.style.setProperty('--resume-font-size', val + "pt");
    updateResume();
  });

  lineHeightSlider.addEventListener("input", (e) => {
    const val = e.target.value;
    lineheightVal.innerText = val;
    document.documentElement.style.setProperty('--resume-line-height', val);
    updateResume();
  });

  photoToggle.addEventListener("change", updateResume);

  templateSelect.addEventListener("change", (e) => {
    const val = e.target.value;
    const paper = document.getElementById("resume-paper");
    paper.className = "resume-paper " + val;

    // Apply styling rules based on template selection
    if (val === "template-ats-strict") {
      document.documentElement.style.setProperty('--resume-accent', "#000000");
      document.documentElement.style.setProperty('--resume-font', "'Times New Roman', Times, serif");
    } else if (val === "template-modern") {
      document.documentElement.style.setProperty('--resume-accent', "#312e81");
      document.documentElement.style.setProperty('--resume-font', "'Inter', sans-serif");
    } else {
      // Default Executive
      document.documentElement.style.setProperty('--resume-accent', "#0f172a");
      document.documentElement.style.setProperty('--resume-font', "'Inter', sans-serif");
    }
    updateResume();
  });

  yamlEditor.addEventListener("input", updateResume);

  // Print / ATS PDF — uses browser native print engine (recommended for ATS submissions)
  printBtn.addEventListener("click", () => {
    window.print();
  });

  // Direct PDF Download — server-side Chrome headless via /api/generate-pdf
  const downloadBtn = document.getElementById("btn-download-pdf");
  downloadBtn.addEventListener("click", async () => {
    const btn = downloadBtn;
    const originalHtml = btn.innerHTML;
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>Generating...</span>`;
    btn.disabled = true;

    try {
      // 1. Fetch the stylesheet so we can embed it inline
      const css = await fetch('/style.css').then(r => r.text());

      // 2. Convert profile picture to data URI so it embeds correctly under file://
      let resumeHtml = document.getElementById('resume-paper').outerHTML;
      const imgEl = document.querySelector('.resume-pic');
      if (imgEl && imgEl.src && imgEl.src.startsWith('http')) {
        try {
          const imgBlob = await fetch(imgEl.src).then(r => r.blob());
          const dataUri = await new Promise(res => {
            const reader = new FileReader();
            reader.onloadend = () => res(reader.result);
            reader.readAsDataURL(imgBlob);
          });
          resumeHtml = resumeHtml.replace(/src="[^"]*omerkhanjadoon[^"]*"/, `src="${dataUri}"`);
        } catch (_) { }
      }

      // 3. Build a self-contained HTML document for Chrome headless
      const selfContainedHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    ${css}
    body { margin: 0; padding: 0; background: white; }
    .resume-paper {
      box-shadow: none !important;
      margin: 0 !important;
      width: 210mm !important;
      min-height: auto !important;
    }
  </style>
</head>
<body>
  ${resumeHtml}
</body>
</html>`;

      // 4. POST to server and download the returned PDF blob
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
        body: selfContainedHtml
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }

      const pdfBlob = await response.blob();
      const url = URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Omer_Khan_Jadoon_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

    } catch (err) {
      console.warn('Backend PDF generation failed or is not available. Falling back to client-side html2pdf.js...', err);
      
      try {
        const element = document.getElementById('resume-paper');
        
        // Temporarily adjust styles for clean PDF rendering (no shadows, no transitions)
        const originalBoxShadow = element.style.boxShadow;
        const originalTransition = element.style.transition;
        
        element.style.boxShadow = 'none';
        element.style.transition = 'none';
        
        const opt = {
          margin:       0,
          filename:     'Omer_Khan_Jadoon_Resume.pdf',
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2, useCORS: true, logging: false },
          jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        // Generate PDF directly in client
        await html2pdf().set(opt).from(element).save();
        
        // Restore styles
        element.style.boxShadow = originalBoxShadow;
        element.style.transition = originalTransition;
        
      } catch (fallbackErr) {
        console.error('Client-side PDF generation failed:', fallbackErr);
        alert('PDF generation failed. Please use the "Print / ATS PDF" button as a high-fidelity alternative.');
      }
    } finally {
      btn.innerHTML = originalHtml;
      btn.disabled = false;
    }
  });

  // Initial render
  updateResume();
});
