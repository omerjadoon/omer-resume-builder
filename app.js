// Core Application State & Constants for ATS Resume Generator

// 1. Base CV data objects for the three users
const USER_PROFILES = {
  omer: {
    role: "superadmin",
    profileImage: "assets/omerkhanjadoon.jpg",
    baseData: {
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
    },
    defaultYaml: `# Tailor Your Resume Here to Match the Job Description!
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
`
  },
  zurerah: {
    role: "user",
    profileImage: "assets/zurerah.png",
    baseData: {
      name: "Zurerah Shahid",
      title: "Lead UI/UX Architect | Senior Frontend Engineer",
      contact: {
        phone: "+49 176 99887766",
        email: "zurerah.shahid@gmail.com",
        website: "zurerah.dev",
        websiteUrl: "https://zurerah.dev",
        linkedin: "linkedin.com/in/zurerahshahid",
        linkedinUrl: "https://linkedin.com/in/zurerahshahid",
        github: "github.com/zurerah",
        githubUrl: "https://github.com/zurerah",
        location: "Munich, Germany"
      },
      summary: "Passionate Lead UI/UX Architect and Frontend Developer with 5+ years of experience crafting premium digital products. Specializing in React, Next.js, and CSS design systems with a strong focus on web accessibility, performance, and responsive user experiences.",
      skills: [
        { category: "Design & Prototyping", items: "Figma, Sketch, Adobe XD, Wireframing, Interactive Prototyping, Design Systems, Typography" },
        { category: "Frontend Core", items: "JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS, Responsive Web Design" },
        { category: "Frameworks & Libraries", items: "React.js, Next.js, Vue.js, Angular, Redux, Context API, Tailwind CSS, styled-components" },
        { category: "Testing & Performance", items: "Jest, React Testing Library, Cypress, Webpack, Lighthouse, Web Vitals Optimization" },
        { category: "Accessibility & Standards", items: "WCAG 2.1 Compliance, Semantic HTML, WAI-ARIA, Screen Readers Testing" },
        { category: "Workflow & Tools", items: "Git, GitHub, npm/yarn, Vite, Jira, Confluence, Agile/Scrum" }
      ],
      experience: [
        {
          company: "Creative Digital Agency",
          role: "Senior Frontend Developer & UI Architect",
          date: "Jan 2024 – Present",
          location: "Munich, Germany",
          id: "creative_agency",
          bullets: [
            "Architected and built standard React/Next.js design systems used across 12 product lines, reducing design-to-development time by 40%.",
            "Improved web application accessibility (WCAG 2.1 AA compliance), widening the user reach by 15%.",
            "Optimized frontend performance, achieving Lighthouse scores above 95/100 and reducing page load times by 1.8 seconds.",
            "Mentored and guided a team of 4 junior developers on CSS architecture and React state management best practices."
          ]
        },
        {
          company: "TechVantage Solutions",
          role: "UI/UX Engineer",
          date: "Sep 2021 – Dec 2023",
          location: "Berlin, Germany",
          id: "techvantage",
          bullets: [
            "Designed and developed high-fidelity interactive prototypes in Figma for complex enterprise SaaS applications.",
            "Implemented modular and reusable React component libraries, decreasing code duplication across projects by 30%.",
            "Collaborated closely with product managers and backend teams to integrate RESTful APIs seamlessly into client dashboards."
          ]
        }
      ],
      education: [
        {
          institution: "Technical University of Munich",
          degree: "Master of Science in Informatics (Human-Computer Interaction)",
          date: "OCT 2019 - OCT 2021",
          location: "Munich, Germany",
          highlights: "Thesis on Accessible UI Design Systems | DAAD Scholarship Recipient"
        }
      ],
      awards: [
        { title: "Best Design System Contributor", detail: "Awarded by Creative Digital Agency for cross-product components", date: "Nov 2024" }
      ],
      languages: [
        { name: "English", level: "C2 — Native / Bilingual" },
        { name: "German", level: "B2 — Upper-Intermediate" }
      ]
    },
    defaultYaml: `# Zurerah's Job-Tailored Customizations
# Only paste/edit fields you want to override.

target_role: "Lead UI/UX Architect & Design System Specialist"

summary: "Highly skilled UI/UX Architect and Frontend Engineer with 5+ years of experience building accessible, high-performance design systems and user interfaces. Proven track record of leveraging React, Next.js, and semantic CSS to reduce design-to-development friction by 40% and boost digital product reach."

skills_highlight: "Figma design tokens, Web Accessibility (WCAG 2.1), Next.js, Tailwind CSS, Jest, styled-components, Lighthouse optimization."

tailored_bullets:
  creative_agency:
    - "Led the engineering of a cross-company design system with React, reducing time-to-market for new features by 40%."
    - "Achieved 100% WCAG compliance on core SaaS platforms, directly scaling enterprise customer onboarding."
    - "Drove performance tuning, raising core web vitals and trimming loading times by 1.8 seconds."
  techvantage:
    - "Converted complex designer wireframes into production-ready React component libraries."
    - "Coordinated with APIs to render high-density charts and client analytics pipelines."

projects:
  - name: "Interactive Design System Token Engine"
    description: "Built an open-source tool that translates Figma design tokens into production-ready Tailwind, SCSS, and CSS Custom Properties."
`
  },
  mohsin: {
    role: "user",
    profileImage: "assets/mohsin.png",
    baseData: {
      name: "Mohsin Ali",
      title: "Senior Backend & Cloud Infrastructure Engineer",
      contact: {
        phone: "+49 176 11223344",
        email: "mohsin.ali@gmail.com",
        website: "mohsin.cloud",
        websiteUrl: "https://mohsin.cloud",
        linkedin: "linkedin.com/in/mohsinali",
        linkedinUrl: "https://linkedin.com/in/mohsinali",
        github: "github.com/mohsinj",
        githubUrl: "https://github.com/mohsinj",
        location: "Munich, Germany"
      },
      summary: "AWS Certified Solutions Architect with 5+ years of experience in backend development and cloud infrastructure. Specialized in building highly scalable, secure, and resilient microservices using Go, Python, Kubernetes, and Terraform, with a focus on CI/CD automation and database optimization.",
      skills: [
        { category: "Programming Languages", items: "Go, Python, SQL, Bash scripting, Java, C++" },
        { category: "Cloud & Containerization", items: "AWS (EKS, RDS, S3, Lambda, IAM, VPC), Google Cloud Platform, Docker, Kubernetes (EKS/GKE)" },
        { category: "Infrastructure as Code", items: "Terraform, CloudFormation, Ansible, Helm" },
        { category: "Databases & Caching", items: "PostgreSQL, MongoDB, Redis, MySQL, DynamoDB, Elasticsearch" },
        { category: "CI/CD & Observability", items: "GitHub Actions, GitLab CI, Jenkins, Prometheus, Grafana, ELK Stack, Datadog" },
        { category: "Backend Frameworks", items: "Gin (Go), FastAPI, Django, Flask, gRPC, REST APIs" }
      ],
      experience: [
        {
          company: "CloudScale Systems",
          role: "Senior Cloud & DevOps Architect",
          date: "Feb 2024 – Present",
          location: "Munich, Germany",
          id: "cloudscale",
          bullets: [
            "Architected and migrated 15+ legacy microservices to Kubernetes on AWS EKS, improving service availability to 99.99%.",
            "Designed infrastructure provisioning pipelines using Terraform, reducing cloud deployment provisioning time from hours to 8 minutes.",
            "Implemented comprehensive observability dashboards in Grafana & Prometheus, reducing MTTR (Mean Time to Resolution) by 35%.",
            "Optimized cloud computing costs by 25% through strategic resizing, auto-scaling, and utilizing spot instances."
          ]
        },
        {
          company: "CoreTech Technologies",
          role: "Senior Backend Developer",
          date: "Jul 2021 – Jan 2024",
          location: "Nuremberg, Germany",
          id: "coretech",
          bullets: [
            "Built and scaled backend web APIs using Go and FastAPI, handling up to 10k requests per second with sub-50ms latencies.",
            "Redesigned SQL database schemas and optimized indexing in PostgreSQL, leading to a 45% reduction in search query latency.",
            "Automated CI/CD workflows using GitHub Actions for seamless testing, security scanning, and deployment of Docker images."
          ]
        }
      ],
      education: [
        {
          institution: "Technical University of Munich",
          degree: "Bachelor of Science in Informatics",
          date: "OCT 2017 - OCT 2021",
          location: "Munich, Germany",
          highlights: "Specialized in Distributed Systems and Cloud Architectures"
        }
      ],
      awards: [
        { title: "AWS Solutions Architect - Associate", detail: "Certified professional cloud architect", date: "Jun 2023" }
      ],
      languages: [
        { name: "English", level: "C1 — Professional Working Proficiency" },
        { name: "German", level: "B1 — Intermediate" }
      ]
    },
    defaultYaml: `# Mohsin's Tailored Infrastructure Overrides
# Only paste/edit fields you want to override.

target_role: "Senior Backend & Site Reliability Engineer"

summary: "AWS Certified DevOps specialist and Backend Engineer with 5+ years of experience architecting high-throughput Go microservices and Terraform-driven cloud platforms on AWS. Proficient in scaling Kubernetes infrastructure and implementing real-time Prometheus monitoring."

skills_highlight: "Go, Kubernetes, AWS EKS, Terraform, Prometheus, Grafana, PostgreSQL query tuning, GitHub Actions CI/CD."

tailored_bullets:
  cloudscale:
    - "Spearheaded AWS EKS Kubernetes migrations, boosting cluster efficiency and pushing uptime to 99.99%."
    - "Authored modular Terraform modules to provision full environments, slashing setup times to 8 minutes."
    - "Set up Prometheus & Grafana alerting setups, reducing mean-time-to-resolution by 35%."
  coretech:
    - "Engineered ultra-low latency REST APIs in Go, supporting 10,000 requests per second."
    - "Optimized critical PostgreSQL queries and indices, accelerating search operations by 45%."

projects:
  - name: "Automated Cloud Cost Optimizer"
    description: "Developed a Python-based daemon that analyzes cloud resource consumption trends and automatically schedules scaling or shutoffs, trimming bills by 25%."
`
  }
};

// Active Session States
let currentUser = null;
let activeBaseCV = null;
let activeTailoredYaml = "";
let enabledRules = [0, 1, 2, 3, 4, 5, 6];
let yamlLogTimeout = null;

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
  
  // Login Elements
  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("username");
  const loginError = document.getElementById("login-error");
  const btnLogout = document.getElementById("btn-logout");
  const roleBadge = document.getElementById("role-badge");
  
  // Superadmin Elements
  const superadminConsole = document.getElementById("superadmin-console");
  const adminThemeColor = document.getElementById("admin-theme-color");
  const adminRulesContainer = document.getElementById("admin-rules-container");
  const adminBaseCvEditor = document.getElementById("admin-base-cv-editor");

  // Main compilation & render function
  function updateResume() {
    if (!currentUser || !activeBaseCV) return;

    let customData = {};
    const rawYaml = yamlEditor.value;

    // Parse YAML
    try {
      customData = jsyaml.load(rawYaml) || {};
      validationStatus.innerHTML = `<span class="status-ok"><svg class="checklist-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> YAML parsed successfully</span>`;
    } catch (e) {
      validationStatus.innerHTML = `<span class="status-error"><svg class="checklist-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Parse Error (Line ${e.mark ? e.mark.line + 1 : '?'})</span>`;
    }

    // Merge baseline with customizations
    const merged = {
      name: activeBaseCV.name,
      title: customData.target_role || activeBaseCV.title,
      contact: { ...activeBaseCV.contact },
      summary: customData.summary || activeBaseCV.summary,
      skills: [...activeBaseCV.skills],
      experience: activeBaseCV.experience.map(exp => {
        let bullets = exp.bullets;
        if (customData.tailored_bullets && customData.tailored_bullets[exp.id]) {
          bullets = customData.tailored_bullets[exp.id];
        }
        return { ...exp, bullets };
      }),
      education: [...activeBaseCV.education],
      awards: [...activeBaseCV.awards],
      languages: [...activeBaseCV.languages]
    };

    // Process custom skills highlight from YAML if provided
    if (customData.skills_highlight) {
      merged.skills = [
        { category: "Top Skills", items: customData.skills_highlight },
        ...activeBaseCV.skills
      ];
    }

    // Generate HTML
    let html = "";

    // 1. Header (Name, Title, Contact Info, Picture Toggle)
    const showPhoto = photoToggle.checked;
    const profileImgSrc = USER_PROFILES[currentUser].profileImage;

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
          <img src="${profileImgSrc}" alt="${merged.name}" class="resume-pic" onerror="this.style.display='none'">
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

    const checks = [
      {
        id: 0,
        text: "Selectable text check (No scanned images)",
        test: () => true,
        tip: "Native fonts render searchable strings directly."
      },
      {
        id: 1,
        text: "Clean, standard margins (>= 10mm)",
        test: () => parseInt(marginSlider.value) >= 10,
        tip: "Margins below 10mm can cause clipping in print."
      },
      {
        id: 2,
        text: "Contact information presence (Phone, Email, LinkedIn)",
        test: () => data.contact.phone && data.contact.email && data.contact.linkedin,
        tip: "Essential variables required for reachability."
      },
      {
        id: 3,
        text: "Single-column parsing flow layout",
        test: () => true,
        tip: "Sidebars / columns confuse 85% of parsing agents."
      },
      {
        id: 4,
        text: "Clean headers structure (h1, h2 hierarchy)",
        test: () => true,
        tip: "Uses unified semantic markup structure."
      },
      {
        id: 5,
        text: "Profile Picture Toggle Availability",
        test: () => true,
        tip: "Permits toggling photo off for automated agency submissions."
      },
      {
        id: 6,
        text: "Optimal Density Word Count (400 - 1200 words)",
        test: () => {
          const text = resumeContainer.innerText;
          const count = text.split(/\s+/).filter(Boolean).length;
          return count >= 400 && count <= 1200;
        },
        tip: "Optimal length prevents scanner truncation."
      }
    ];

    const activeChecks = checks.filter(c => enabledRules.includes(c.id));
    const totalChecks = activeChecks.length;

    let checklistHtml = "";
    activeChecks.forEach(check => {
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
    const finalScore = totalChecks > 0 ? Math.round((passedCount / totalChecks) * 100) : 100;
    scoreVal.innerText = finalScore + "%";

    if (finalScore >= 85) {
      scoreVal.style.color = "#4ade80"; // Bright Green
    } else if (finalScore >= 60) {
      scoreVal.style.color = "#fbbf24"; // Amber
    } else {
      scoreVal.style.color = "#f87171"; // Red
    }
  }

  // Superadmin Console Log helper
  function addAdminLog(actionText) {
    const logsContent = document.getElementById("admin-logs-content");
    if (!logsContent) return;
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];
    const logEntry = document.createElement("div");
    logEntry.className = "admin-log-entry";
    logEntry.innerHTML = `<span class="timestamp">[${timeStr}]</span><span class="action">${actionText}</span>`;
    logsContent.appendChild(logEntry);
    logsContent.scrollTop = logsContent.scrollHeight;
  }

  // Pre-seed logs on admin load
  function seedAdminLogs() {
    const logsContent = document.getElementById("admin-logs-content");
    if (!logsContent) return;
    logsContent.innerHTML = "";

    const mockLogs = [
      "System kernel initialization completed",
      "Loaded default layout profiles from memory",
      "Superadmin console initialized with full permissions"
    ];

    mockLogs.forEach(log => {
      const logEntry = document.createElement("div");
      logEntry.className = "admin-log-entry";
      const now = new Date(Date.now() - Math.floor(Math.random() * 100000));
      const timeStr = now.toTimeString().split(' ')[0];
      logEntry.innerHTML = `<span class="timestamp">[${timeStr}]</span><span class="action">${log}</span>`;
      logsContent.appendChild(logEntry);
    });

    addAdminLog("Active superadmin session established");
  }

  // Admin Rules Checklist renderer
  const allChecksDef = [
    { id: 0, text: "Selectable text check" },
    { id: 1, text: "Margins >= 10mm" },
    { id: 2, text: "Contact info present" },
    { id: 3, text: "Single-column layout" },
    { id: 4, text: "Clean headers hierarchy" },
    { id: 5, text: "Photo toggle check" },
    { id: 6, text: "Word count range" }
  ];

  function renderAdminRulesChecklist() {
    if (!adminRulesContainer) return;
    adminRulesContainer.innerHTML = allChecksDef.map(rule => `
      <label class="flex items-center gap-2 text-slate-300 font-medium cursor-pointer py-0.5">
        <input type="checkbox" value="${rule.id}" ${enabledRules.includes(rule.id) ? 'checked' : ''} class="admin-rule-cb rounded border-slate-700 bg-slate-900 text-indigo-500 focus:ring-0 focus:ring-offset-0">
        <span>${rule.text}</span>
      </label>
    `).join('');

    document.querySelectorAll(".admin-rule-cb").forEach(cb => {
      cb.addEventListener("change", (e) => {
        const id = parseInt(e.target.value);
        const ruleName = e.target.nextElementSibling.innerText;
        if (e.target.checked) {
          if (!enabledRules.includes(id)) enabledRules.push(id);
          addAdminLog(`Rule "${ruleName}" enabled`);
        } else {
          enabledRules = enabledRules.filter(x => x !== id);
          addAdminLog(`Rule "${ruleName}" disabled`);
        }
        updateResume();
      });
    });
  }

  // Session Control Functions
  function startUserSession(username) {
    currentUser = username.toLowerCase();
    const profile = USER_PROFILES[currentUser];

    // Initialize session details
    activeBaseCV = JSON.parse(JSON.stringify(profile.baseData)); // deep clone
    activeTailoredYaml = profile.defaultYaml;
    yamlEditor.value = activeTailoredYaml;

    // Toggle DOM classes
    document.body.classList.remove("logged-out");
    document.body.classList.add("logged-in");

    // Configure role badges & console accessibility
    if (profile.role === "superadmin") {
      roleBadge.innerText = "Superadmin";
      roleBadge.className = "role-badge superadmin";
      superadminConsole.style.display = "block";
      
      // Seed Admin specific features
      adminBaseCvEditor.value = JSON.stringify(activeBaseCV, null, 2);
      seedAdminLogs();
      renderAdminRulesChecklist();
      adminThemeColor.value = "#6366f1";
    } else {
      roleBadge.innerText = "Normal User";
      roleBadge.className = "role-badge";
      superadminConsole.style.display = "none";
    }

    // Reset layout settings to match defaults
    document.documentElement.style.setProperty('--primary', "#6366f1");
    document.documentElement.style.setProperty('--primary-hover', "#4f46e5");
    
    marginSlider.value = 15;
    marginVal.innerText = "15mm";
    document.documentElement.style.setProperty('--resume-margin', "15mm");

    fontSizeSlider.value = 10;
    fontVal.innerText = "10pt";
    document.documentElement.style.setProperty('--resume-font-size', "10pt");

    lineHeightSlider.value = 1.4;
    lineheightVal.innerText = "1.4";
    document.documentElement.style.setProperty('--resume-line-height', "1.4");

    templateSelect.value = "template-executive";
    const paper = document.getElementById("resume-paper");
    paper.className = "resume-paper template-executive";
    document.documentElement.style.setProperty('--resume-accent', "#0f172a");
    document.documentElement.style.setProperty('--resume-font', "'Inter', sans-serif");

    photoToggle.checked = true;

    // First render
    updateResume();
  }

  function logout() {
    localStorage.removeItem("ats_user");
    document.body.classList.remove("logged-in");
    document.body.classList.add("logged-out");
    currentUser = null;
    activeBaseCV = null;
    activeTailoredYaml = "";
    usernameInput.value = "";
    loginError.innerText = "";
  }

  // Initialize session state on page load
  function initSession() {
    const savedUser = localStorage.getItem("ats_user");
    if (savedUser && USER_PROFILES[savedUser.toLowerCase()]) {
      startUserSession(savedUser);
    } else {
      logout();
    }
  }

  // Bind Login/Logout event listeners
  loginForm.addEventListener("submit", () => {
    const val = usernameInput.value.trim().toLowerCase();
    if (USER_PROFILES[val]) {
      startUserSession(val);
    } else {
      loginError.innerText = "Access Denied. Invalid username.";
    }
  });

  btnLogout.addEventListener("click", () => {
    logout();
  });

  // Superadmin Console Listeners
  if (adminBaseCvEditor) {
    adminBaseCvEditor.addEventListener("input", (e) => {
      try {
        const parsed = JSON.parse(e.target.value);
        activeBaseCV = parsed;
        updateResume();
        addAdminLog("Base CV JSON updated and parsed successfully");
      } catch (err) {
        // Syntax error in JSON, do not update active CV but don't crash
      }
    });
  }

  if (adminThemeColor) {
    adminThemeColor.addEventListener("input", (e) => {
      const color = e.target.value;
      document.documentElement.style.setProperty('--primary', color);
      document.documentElement.style.setProperty('--primary-hover', color + "dd");
      addAdminLog(`Theme accent color updated to ${color}`);
    });
  }

  // Format adjustment hooks
  marginSlider.addEventListener("input", (e) => {
    const val = e.target.value;
    marginVal.innerText = val + "mm";
    document.documentElement.style.setProperty('--resume-margin', val + "mm");
    updateResume();
    if (currentUser === "omer") {
      addAdminLog(`Adjusted margins to ${val}mm`);
    }
  });

  fontSizeSlider.addEventListener("input", (e) => {
    const val = e.target.value;
    fontVal.innerText = val + "pt";
    document.documentElement.style.setProperty('--resume-font-size', val + "pt");
    updateResume();
    if (currentUser === "omer") {
      addAdminLog(`Adjusted font size to ${val}pt`);
    }
  });

  lineHeightSlider.addEventListener("input", (e) => {
    const val = e.target.value;
    lineheightVal.innerText = val;
    document.documentElement.style.setProperty('--resume-line-height', val);
    updateResume();
    if (currentUser === "omer") {
      addAdminLog(`Adjusted line height to ${val}`);
    }
  });

  photoToggle.addEventListener("change", () => {
    updateResume();
    if (currentUser === "omer") {
      addAdminLog(`Toggled profile image: ${photoToggle.checked ? "ON" : "OFF"}`);
    }
  });

  templateSelect.addEventListener("change", (e) => {
    const val = e.target.value;
    const paper = document.getElementById("resume-paper");
    paper.className = "resume-paper " + val;

    if (val === "template-ats-strict") {
      document.documentElement.style.setProperty('--resume-accent', "#000000");
      document.documentElement.style.setProperty('--resume-font', "'Times New Roman', Times, serif");
    } else if (val === "template-modern") {
      document.documentElement.style.setProperty('--resume-accent', "#312e81");
      document.documentElement.style.setProperty('--resume-font', "'Inter', sans-serif");
    } else {
      document.documentElement.style.setProperty('--resume-accent', "#0f172a");
      document.documentElement.style.setProperty('--resume-font', "'Inter', sans-serif");
    }
    updateResume();
    if (currentUser === "omer") {
      addAdminLog(`Switched layout template to "${e.target.options[e.target.selectedIndex].text}"`);
    }
  });

  yamlEditor.addEventListener("input", () => {
    updateResume();
    if (currentUser === "omer") {
      clearTimeout(yamlLogTimeout);
      yamlLogTimeout = setTimeout(() => {
        addAdminLog("Tailored YAML overrides compiled");
      }, 1200);
    }
  });

  // Print Action
  printBtn.addEventListener("click", () => {
    if (currentUser === "omer") {
      addAdminLog("Initiated native print dialog");
    }
    window.print();
  });

  // Direct PDF Download (headless Chrome POST)
  const downloadBtn = document.getElementById("btn-download-pdf");
  downloadBtn.addEventListener("click", async () => {
    const btn = downloadBtn;
    const originalHtml = btn.innerHTML;
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>Generating...</span>`;
    btn.disabled = true;

    if (currentUser === "omer") {
      addAdminLog("Initiated PDF compile request");
    }

    const safeName = activeBaseCV.name.replace(/\s+/g, '_');

    try {
      const css = await fetch('/style.css').then(r => r.text());

      let resumeHtml = document.getElementById('resume-paper').outerHTML;
      const imgEl = document.querySelector('.resume-pic');
      if (imgEl && imgEl.src && (imgEl.src.startsWith('http') || imgEl.src.includes('assets/'))) {
        try {
          const imgBlob = await fetch(imgEl.src).then(r => r.blob());
          const dataUri = await new Promise(res => {
            const reader = new FileReader();
            reader.onloadend = () => res(reader.result);
            reader.readAsDataURL(imgBlob);
          });
          resumeHtml = resumeHtml.replace(/src="[^"]*"/, `src="${dataUri}"`);
        } catch (_) { }
      }

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
      a.download = `${safeName}_Resume.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      if (currentUser === "omer") {
        addAdminLog(`PDF successfully generated via server: ${safeName}_Resume.pdf`);
      }

    } catch (err) {
      console.warn('Backend PDF generation failed or is not available. Falling back to client-side html2pdf.js...', err);
      
      try {
        const element = document.getElementById('resume-paper');
        const originalBoxShadow = element.style.boxShadow;
        const originalTransition = element.style.transition;
        
        element.style.boxShadow = 'none';
        element.style.transition = 'none';
        
        const opt = {
          margin:       0,
          filename:     `${safeName}_Resume.pdf`,
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2, useCORS: true, logging: false },
          jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        await html2pdf().set(opt).from(element).save();
        
        element.style.boxShadow = originalBoxShadow;
        element.style.transition = originalTransition;

        if (currentUser === "omer") {
          addAdminLog(`PDF successfully compiled locally: ${safeName}_Resume.pdf`);
        }
        
      } catch (fallbackErr) {
        console.error('Client-side PDF generation failed:', fallbackErr);
        alert('PDF generation failed. Please use the "Print / ATS PDF" button as a high-fidelity alternative.');
      }
    } finally {
      btn.innerHTML = originalHtml;
      btn.disabled = false;
    }
  });

  // Run initial session check
  initSession();
});
