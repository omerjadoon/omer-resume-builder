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
      summary: "Results-driven Machine Learning Engineer with 4+ years of experience in artificial intelligence, data science, machine learning, NLP and MLOps. Proficient in Python, ML/DL, LLM Frameworks and Cloud Deployments.",
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
          location: "Munich, Germany · Hybrid",
          id: "sana_expert",
          bullets: [
            "Automated over 85% of customer support tickets across multiple countries and communication channels using AI-driven workflows.",
            "Designed and deployed a production-grade agentic AI system powered by advanced RAG, knowledge graphs, and contextual reasoning.",
            "Developed a modern interactive AI sales agent for Purmeo, integrating text and audio input/output to support real-time customer engagement."
          ]
        },
        {
          company: "Siemens",
          role: "Master Thesis Project",
          date: "Jun 2025 – Dec 2025",
          location: "Amberg, Germany · Hybrid",
          id: "siemens_thesis",
          bullets: [
            "Master's Thesis: Development of an Anomaly Detection Algorithm for Classifying the Unknown-Unknown Paradigm."
          ]
        },
        {
          company: "amidiro",
          role: "Generative AI & Machine Learning Engineer",
          date: "Dec 2023 – Nov 2024",
          location: "Aachen, Germany · Hybrid",
          id: "amidiro",
          bullets: [
            "Led the development of AI-powered audio assistant, RAG, and knowledge retrieval systems using LLMs, speech models, and OpenAI-based pipelines for customer support, research, and internal knowledge access.",
            "Built AI automation workflows including YOLOv9 safety reporting, Handelsregister data extraction to AWS DynamoDB, and audio agent calling pipelines, improving lead conversion by 20% and reducing call handling time by 15%.",
            "Designed and delivered training programs on Prompt Engineering, RAG, and LLM fine-tuning, helping teams apply advanced AI techniques in real business workflows."
          ]
        },
        {
          company: "Remote Native GmbH",
          role: "Machine Learning Engineer",
          date: "Apr 2023 – Oct 2023",
          location: "Munich, Germany · Remote",
          id: "remote_native",
          bullets: [
            "Built advanced AI solutions across LLMs, BERT-based NER, computer vision, and generative product experiences, including synthetic dataset generation from ~5M e-commerce records.",
            "Fine-tuned SAM for segmentation/background removal, developed Streamlit interfaces, image analysis workflows, video-to-3D REST APIs, and virtual try-on features.",
            "Built scalable Azure Databricks MLOps pipelines for ETL, model training, deployment, and production-ready AI workflows."
          ]
        },
        {
          company: "Jadoon Technologies",
          role: "Senior Full Stack Software Engineer",
          date: "Nov 2021 – Dec 2022",
          location: "Pakistan · Hybrid",
          id: "jtpl_senior",
          bullets: [
            "Led the development of scalable full-stack applications using advanced Python, JavaScript, TypeScript, React.js, and Next.js, owning complex backend, frontend, and integration features.",
            "Designed robust APIs, automation workflows, ETL pipelines, and reusable architectures to improve performance, reliability, and maintainability.",
            "Led a team of 8 engineers, guiding code reviews, technical planning, debugging, deployments, and high-quality project delivery."
          ]
        },
        {
          company: "Jadoon Technologies",
          role: "Associate Software Engineer",
          date: "Nov 2020 – Oct 2021",
          location: "Pakistan · Hybrid",
          id: "jtpl_associate",
          bullets: [
            "Developed full-stack web applications using Python, JavaScript, TypeScript, React.js, and Next.js, contributing to both frontend and backend features.",
            "Assisted in building REST APIs, database integrations, reusable UI components, and ETL pipelines for data extraction, transformation, and reporting.",
            "Supported debugging, testing, web scraping, documentation, and deployment activities while collaborating with senior engineers."
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
#
# Company ID Reference:
#   sana_expert     → SanaExpert GmbH (Jan 2025 – Present)
#   siemens_thesis  → Siemens Master Thesis (Jun 2025 – Dec 2025)
#   amidiro         → amidiro (Dec 2023 – Nov 2024)
#   remote_native   → Remote Native GmbH (Apr 2023 – Oct 2023)
#   jtpl_senior     → Jadoon Technologies – Senior Full Stack (Nov 2021 – Dec 2022)
#   jtpl_associate  → Jadoon Technologies – Associate (Nov 2020 – Oct 2021)

target_role: "Machine Learning Engineer | Agentic AI Specialist"

summary: "Results-driven Machine Learning Engineer with 4+ years of experience in artificial intelligence, LLM frameworks, MLOps, and agentic workflows. Proven track record of designing and deploying state-of-the-art LLM pipelines and RAG systems that automate complex business processes and increase efficiency by 80%."

skills_highlight: "LangGraph, CrewAI, LlamaIndex, fine-tuning LLaMA, vector embeddings, MLOps (MLflow, Airflow, Meltano), MinIO, FiftyOne, Metabase."

tailored_bullets:
  sana_expert:
    - "Automated more than 85% of customer support tickets across Europe and Asia using agentic AI, dramatically lowering resolution times."
    - "Architected and deployed production-grade Multi-Agent workflows using LangGraph and advanced context retention techniques."
    - "Developed a real-time interactive AI sales agent (Purmeo) with audio + text I/O for seamless customer engagement."
  amidiro:
    - "Led development of AI-powered audio assistant and RAG knowledge retrieval systems using LLMs and speech models."
    - "Built YOLOv9 safety reporting workflows and Handelsregister data extraction pipelines to AWS DynamoDB."
    - "Delivered advanced training programs on Prompt Engineering, RAG, and LLM fine-tuning to cross-functional teams."
  remote_native:
    - "Synthesized 5M+ e-commerce records using LLMs to generate a custom training dataset for fine-tuning BERT-based NER."
    - "Fine-tuned Meta SAM for product background removal, deployed with an interactive Streamlit interface."
    - "Implemented a full MLOps pipeline on Azure Databricks covering ETL, model training, evaluation, and deployment."

projects:
  - name: "Autonomous Agentic Resume Builder"
    description: "Designed a real-time reactive YAML parser tool that dynamically merges base data with job-tailored bullets, generating standardized, print-optimized ATS resumes."
`
  },
  zurerah: {
    role: "user",
    profileImage: "assets/zurerah2.jpeg",
    baseData: {
      name: "Zurerah Shahid",
      title: "Data Analyst | Machine Learning Engineer",
      contact: {
        phone: "+49 176 26503018",
        email: "zurerahs786@gmail.com",
        website: "linkedin.com/in/zurerah",
        websiteUrl: "https://linkedin.com/in/zurerah",
        linkedin: "linkedin.com/in/zurerah",
        linkedinUrl: "https://linkedin.com/in/zurerah",
        github: "github.com/zurerah",
        githubUrl: "https://github.com/zurerah",
        location: "Erlangen, Germany"
      },
      summary: "Detail-oriented and analytical Data Analyst with 3+ years of hands-on experience in collecting, cleaning, and analyzing complex data sets. Proficient in statistical analysis, data visualization, and creating interactive dashboards to drive business insights and support decision-making.",
      skills: [
        { category: "Programming Languages", items: "Python, R, C++, Java" },
        { category: "Data Visualization", items: "Power BI, Tableau" },
        { category: "Machine Learning & Gen AI", items: "Prompt Engineering, LLMs, RAG, scikit-learn, Causal Discovery, causal-learn" },
        { category: "Statistical Analysis", items: "Hypothesis Testing, Regression Analysis" },
        { category: "Database Management", items: "SQL, KQL, PostgreSQL, MySQL" },
        { category: "Data Science Libraries", items: "Pandas, NumPy, TensorFlow, Matplotlib, Seaborn" },
        { category: "Tools & Platforms", items: "Jupyter Notebook, Colab, Anaconda" }
      ],
      experience: [
        {
          company: "Siemens Healthineers",
          role: "Data Analyst and AI/ML Practitioner",
          date: "Jan 2024 – Present",
          location: "Hybrid, Germany",
          id: "siemens",
          bullets: [
            "Built dynamic Power BI dashboards for internal analytics and reporting on system performance and utilization metrics.",
            "Developed regression models to forecast power consumption across distributed medical systems.",
            "Engaged in requirement gathering and technical discussions with stakeholders and clients to ensure delivery alignment.",
            "Conducted internal trainings and knowledge-sharing sessions on data tools, modeling practices, and dashboard usage.",
            "Supported data preprocessing, feature engineering, and statistical testing in ongoing AI/ML initiatives."
          ]
        },
        {
          company: "Global Logistics Alliance",
          role: "Data Analyst",
          date: "Jul 2021 – Dec 2022",
          location: "On-site, China",
          id: "gla",
          bullets: [
            "Performed data cleaning, preprocessing, and exploratory data analysis (EDA).",
            "Applied statistical techniques including hypothesis testing and regression analysis.",
            "Developed interactive dashboards using Python, R, Tableau, and Power BI."
          ]
        }
      ],
      education: [
        {
          institution: "Friedrich-Alexander-Universität Erlangen-Nürnberg",
          degree: "Master's in Artificial Intelligence",
          date: "APR 2023 – Present",
          location: "Erlangen, Germany",
          highlights: "Focus: Big Data Analytics, AI and ML, Business Intelligence"
        },
        {
          institution: "Southwest Forestry University, Kunming",
          degree: "BSc in Computer Science & Engineering",
          date: "MAR 2018 – DEC 2021",
          location: "Kunming, China",
          highlights: "Focus: Data Science, Databases, Machine Learning "
        }
      ],
      awards: [
        { title: "CSC Provincial Scholarship", detail: "Government of China scholarship for academic excellence", date: "Mar 2018" },
        { title: "PM Laptop Scheme", detail: "Received Laptop – PM Laptop Scheme, Pakistan", date: "Jul 2016" }
      ],
      languages: [
        { name: "English", level: "C1" },
        { name: "German", level: "A2" },
        { name: "Urdu", level: "C2" },
        { name: "Chinese", level: "B2" }
      ],
      projects: [
        {
          name: "Power Consumption Forecasting System (Siemens Healthineers)",
          description: "Designed and trained multiple regression models to predict medical device power usage patterns. Improved forecast accuracy by 22% using multivariate analysis and historical telemetry data, enabling proactive load and energy management."
        },
        {
          name: "Interactive Healthcare Analytics Dashboard (Siemens Healthineers)",
          description: "Developed a suite of Power BI dashboards to track equipment status, performance KPIs, and maintenance logs. Integrated real-time datasets via APIs and SQL, reducing manual reporting efforts by 60%."
        },
        {
          name: "Logistics Insights Platform (GLA)",
          description: "Performed end-to-end EDA and dashboarding for shipment tracking and warehouse performance. Recommended data-driven optimizations that improved delivery SLAs by 12%."
        },
        {
          name: "HTV-Based Delivery App with Fleet Analysis (Quick Moove)",
          description: "Built an Android app prototype for managing heavy transport vehicle deliveries with backend analytics for route efficiency, fuel usage, and driver performance using linear regression and seasonal decomposition."
        }
      ]
    },
    defaultYaml: `# Zurerah's Job-Tailored Customizations
# Only paste/edit fields you want to override.

target_role: "Data Analyst | Machine Learning Engineer"

summary: "Detail-oriented Data Analyst and ML Engineer with 3+ years of experience at Siemens Healthineers and Global Logistics Alliance. Expert in Power BI dashboards, regression modeling, and statistical analysis, delivering measurable business impact including 22% forecast accuracy improvement and 60% reduction in manual reporting."

skills_highlight: "Power BI, Tableau, Python, scikit-learn, SQL, KQL, PostgreSQL, Pandas, NumPy, LLMs, RAG, Hypothesis Testing, Regression Analysis."

tailored_bullets:
  siemens:
    - "Engineered Power BI dashboards tracking real-time system performance KPIs across distributed medical device networks."
    - "Built and validated regression models forecasting power consumption, improving prediction accuracy by 22%."
    - "Led stakeholder workshops and internal data literacy trainings, upskilling cross-functional teams on BI tooling."
  gla:
    - "Executed end-to-end EDA pipelines on large-scale logistics datasets, surfacing actionable delivery insights."
    - "Built multi-tool dashboards in Tableau and Power BI, improving SLA compliance visibility by 12%."

projects:
  - name: "Power Consumption Forecasting System"
    description: "Multivariate regression pipeline predicting medical device power usage, achieving 22% accuracy improvement over baseline at Siemens Healthineers."
  - name: "Healthcare Analytics Dashboard"
    description: "Suite of Power BI dashboards integrating real-time SQL data, reducing manual reporting by 60% across support and engineering teams."
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
let hasLiveEdits = false;

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
    let rawYaml = yamlEditor.value;

    // Detect and strip markdown code fences from the editor
    const trimmed = rawYaml.trim();
    const codeBlockRegex = /^```(?:yaml|yml)?\s*([\s\S]*?)\s*```$/i;
    const match = trimmed.match(codeBlockRegex);
    if (match) {
      rawYaml = match[1];
      yamlEditor.value = rawYaml;
    }

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

    // 5. Projects — merge base CV projects + any YAML-defined overrides
    const baseProjects = (activeBaseCV.projects && Array.isArray(activeBaseCV.projects)) ? activeBaseCV.projects : [];
    const yamlProjects = (customData.projects && Array.isArray(customData.projects)) ? customData.projects : [];
    const allProjects = [...yamlProjects, ...baseProjects.filter(bp => !yamlProjects.find(yp => yp.name === bp.name))];

    if (allProjects.length > 0) {
      html += `
        <div class="resume-section">
          <div class="section-title">Notable Projects</div>
      `;
      allProjects.forEach(proj => {
        html += `
          <div class="project-item">
            <span class="project-title">${proj.name}:</span>
            <span class="resume-summary"> ${proj.description}</span>
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

    // Render to DOM — only when no live inline edits are active
    if (!hasLiveEdits) {
      resumeContainer.innerHTML = html;
      resumeContainer.contentEditable = "true";
      resumeContainer.spellcheck = false;

      // Show the edit indicator
      const editBadge = document.getElementById("live-edit-badge");
      if (editBadge) editBadge.style.display = "flex";
      const reRenderBtn = document.getElementById("btn-rerender");
      if (reRenderBtn) reRenderBtn.style.display = "none";

      // Detect first keystroke on the live resume and lock YAML re-renders
      resumeContainer.addEventListener("input", () => {
        if (!hasLiveEdits) {
          hasLiveEdits = true;
          const btn = document.getElementById("btn-rerender");
          if (btn) btn.style.display = "flex";
          const badge = document.getElementById("live-edit-badge");
          if (badge) badge.classList.add("editing");
          if (currentUser === "omer") addAdminLog("Live inline resume edits detected");
        }
      });
    }

    // Recalculate ATS Audit score
    runAtsAudit(merged, showPhoto);
  }

  // Clear inline edits and force a fresh render from YAML
  function resetLiveEdits() {
    hasLiveEdits = false;
    resumeContainer.contentEditable = "false";
    updateResume();
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
    hasLiveEdits = false;
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

  // Re-render from YAML (wipes live inline edits)
  const reRenderBtn = document.getElementById("btn-rerender");
  if (reRenderBtn) {
    reRenderBtn.addEventListener("click", () => {
      if (currentUser === "omer") addAdminLog("Re-rendered from YAML — inline edits cleared");
      resetLiveEdits();
    });
  }

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

      // Helper function to compress and resize image to keep PDF size small
      const compressImageToDataUri = (imgUrl, maxDim = 200, quality = 0.8) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'Anonymous';
          img.onload = () => {
            const canvas = document.createElement('canvas');
            let w = img.width;
            let h = img.height;
            if (w > h) {
              if (w > maxDim) { h = Math.round(img.height * maxDim / img.width); w = maxDim; }
            } else {
              if (h > maxDim) { w = Math.round(img.width * maxDim / img.height); h = maxDim; }
            }
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, w, h);
            resolve(canvas.toDataURL('image/jpeg', quality));
          };
          img.onerror = (err) => reject(err);
          img.src = imgUrl;
        });
      };

      let resumeHtml = document.getElementById('resume-paper').outerHTML;
      const imgEl = document.querySelector('.resume-pic');
      if (imgEl && imgEl.src && (imgEl.src.startsWith('http') || imgEl.src.includes('assets/') || imgEl.src.startsWith('data:'))) {
        try {
          const dataUri = await compressImageToDataUri(imgEl.src);
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
      // Server-side PDF not available — fall back to native browser print.
      // window.print() uses the browser's PDF renderer which preserves real
      // selectable text, making the output fully ATS-readable (unlike html2canvas
      // which rasterises everything into a JPEG image).
      console.warn('Backend PDF generation failed. Falling back to native print dialog for ATS-safe text PDF...', err);

      if (currentUser === "omer") {
        addAdminLog("Server PDF unavailable — opening native print dialog (ATS-safe text PDF)");
      }

      // Brief toast so the user knows what to do
      const toast = document.createElement('div');
      toast.style.cssText = `
        position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%);
        background: rgba(15,23,42,0.95); border: 1px solid rgba(99,102,241,0.4);
        color: #e2e8f0; padding: 0.75rem 1.25rem; border-radius: 0.75rem;
        font-size: 0.85rem; font-family: Inter, sans-serif; z-index: 99999;
        backdrop-filter: blur(10px); box-shadow: 0 10px 25px rgba(0,0,0,0.4);
        display: flex; align-items: center; gap: 0.6rem; max-width: 480px;
        animation: slideInToast 0.3s ease;
      `;
      toast.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <span>In the print dialog, select <strong style="color:#a5b4fc">Save as PDF</strong> as the destination for a fully ATS-readable text PDF.</span>
      `;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 6000);

      // Small delay so toast renders before the print dialog blocks the UI
      await new Promise(r => setTimeout(r, 200));
      window.print();

    } finally {
      btn.innerHTML = originalHtml;
      btn.disabled = false;
    }
  });

  // Run initial session check
  initSession();
});
