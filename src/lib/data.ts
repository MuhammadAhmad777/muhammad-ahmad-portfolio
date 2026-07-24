export const siteConfig = {
  name: "Muhammad Ahmad",
  title: "AI Engineer | Machine Learning Engineer | Full Stack Software Engineer",
  tagline:
    "I build production AI systems end to end: computer vision pipelines, RAG platforms, voice agents, and the backend architecture that keeps them running in the real world.",
  location: "Lahore, Pakistan",
  email: "ahmadakmal777@gmail.com",
  github: "https://github.com/MuhammadAhmad777",
  linkedin: "https://www.linkedin.com/in/muhammad-ahmad-akmal/",
  resumePath: "/Muhammad_Ahmad_Resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export interface Metric {
  value: number;
  suffix?: string;
  label: string;
}

export const metrics: Metric[] = [
  { value: 3, suffix: "+", label: "Years of experience" },
  { value: 1, suffix: "", label: "Peer-reviewed publication" },
  { value: 15, suffix: "+", label: "Technologies across the stack" },
  { value: 99, suffix: "%", label: "Peak CV model accuracy" },
];

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  span?: "lg" | "sm";
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    span: "lg",
    skills: [
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "RAG Pipelines" },
      { name: "AI Agents" },
      { name: "OpenAI API" },
      { name: "Computer Vision" },
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "Hugging Face" },
      { name: "Deep Learning" },
      { name: "Voice AI" },
      { name: "Prompt Engineering" },
    ],
  },
  {
    title: "Backend",
    span: "sm",
    skills: [
      { name: "FastAPI" },
      { name: "Python" },
      { name: "Node.js" },
      { name: "REST APIs" },
      { name: "WebSockets" },
      { name: "Celery" },
    ],
  },
  {
    title: "Frontend",
    span: "sm",
    skills: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
    ],
  },
  {
    title: "Cloud & DevOps",
    span: "sm",
    skills: [
      { name: "AWS ECS" },
      { name: "AWS Lambda" },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "Vercel" },
      { name: "Linux" },
    ],
  },
  {
    title: "Databases & Vector Search",
    span: "sm",
    skills: [
      { name: "PostgreSQL" },
      { name: "pgvector" },
      { name: "FAISS" },
      { name: "Pinecone" },
      { name: "MongoDB" },
      { name: "Redis" },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  size: "lg" | "sm";
  category: string;
  stats?: string;
  bentoClass?: string;
  githubUrl?: string;
  viewUrl?: string;
  readMoreUrl?: string;
  isPrivate?: boolean;
}

export const featuredProjects: Project[] = [
  {
    title: "OnixMend",
    category: "Enterprise RAG",
    description:
      "Multi-tenant knowledge platform where teams upload internal documents and query them through a RAG-backed assistant. Handles tenant isolation, vector indexing with pgvector, and deployment on AWS.",
    techStack: ["FastAPI", "PostgreSQL", "pgvector", "RAG", "LLMs", "AWS"],
    size: "lg",
    bentoClass: "lg:col-span-7",
    isPrivate: true,
    viewUrl: "https://onixmend.careonix.io/",
  },
  {
    title: "OnixAsk",
    category: "AI Knowledge Assistant",
    description:
      "Embeddable RAG chatbot that answers questions from your own documents. Deploy with a snippet, customize branding via admin panel, and generate API keys for integration. Semantic search delivers contextually relevant answers across any industry.",
    techStack: ["RAG", "Multi-tenant", "Embeddings", "Vector Search", "Admin Portal"],
    size: "lg",
    bentoClass: "lg:col-span-5",
    isPrivate: true,
    readMoreUrl: "https://www.careonix.io/products/onixask",
  },
  {
    title: "AI Voice Agent",
    category: "Voice AI",
    description:
      "Production voice agent that handles inbound calls: intent detection, appointment scheduling, and domain-specific Q&A via RAG. Built on Whisper ASR, Azure OpenAI, and real-time telephony integration.",
    techStack: ["FastAPI", "Azure OpenAI", "Whisper ASR", "AWS", "RAG"],
    size: "lg",
    bentoClass: "lg:col-span-5",
    isPrivate: true,
  },
  {
    title: "InsightLens",
    category: "Document Intelligence",
    description:
      "Research-grade document Q&A platform. Ingests large document collections, runs RAG retrieval with LLM reasoning, and returns answers grounded in source material.",
    techStack: ["Python", "FastAPI", "ChromaDB", "RAG", "LLMs"],
    size: "sm",
    bentoClass: "lg:col-span-5",
    githubUrl: "https://github.com/MuhammadAhmad777/InsightLens",
  },
  {
    title: "CricketSense",
    category: "Semantic Search",
    description:
      "Cricket analytics assistant using FAISS retrieval with Chain-of-Thought and ReAct prompting. Answers complex match and player queries with context-aware reasoning.",
    techStack: ["Python", "FAISS", "Groq LLM API", "CoT", "ReAct"],
    size: "sm",
    bentoClass: "lg:col-span-7",
    githubUrl: "https://github.com/MuhammadAhmad777/cricketsense",
  },
];

export const cvProjects: Project[] = [
  {
    title: "Musculoskeletal Radiograph Abnormality Detection",
    category: "Computer Vision",
    description:
      "Final-year capstone: multiple CNN models packaged into a desktop app for automated X-ray classification and abnormality flagging.",
    techStack: ["TensorFlow", "CNNs", "Medical Imaging", "Desktop App"],
    size: "sm",
  },
];

export const research = {
  title: "Classification of Cloud Attacks Using Deep Learning",
  publication:
    "Springer, Communications in Computer and Information Science (CCIS), Vol. 2056",
  description:
    "Applied deep learning to classify cloud network traffic for cybersecurity threat detection. Published in Springer academic proceedings (ICCET 2023).",
  type: "Published Research",
  url: "https://link.springer.com/chapter/10.1007/978-3-031-77620-5_22",
};

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    company: "Careonix",
    role: "Full Stack AI Engineer",
    duration: "January 2026 - Present",
    location: "Lahore, Pakistan",
    current: true,
    description:
      "I build healthcare AI products at Careonix: voice agents, RAG tools, and the cloud stack behind them. Most of my work sits where clinical workflows meet production web systems.",
    highlights: [
      "Built RAG and agentic workflows that handle real healthcare tasks, from document Q&A to multi-step tool calls teams use every day.",
      "Shipped real-time voice AI with Azure OpenAI, Whisper, and FastAPI streaming for natural phone conversations.",
      "Ran services on AWS with Docker, ECS, and Cognito, treating uptime and deployment hygiene as part of the feature.",
      "Wired PostgreSQL and vector search into knowledge bases over large document sets.",
    ],
    technologies: [
      "FastAPI",
      "Next.js",
      "React",
      "Python",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Azure OpenAI",
      "RAG",
      "LLMs",
    ],
  },
  {
    company: "Cyberautix Technologies",
    role: "Software Engineer",
    duration: "March 2023 - December 2025",
    location: "Lahore, Pakistan",
    description:
      "Built AI desktop apps and computer vision tools for clients who needed software they could run, not slide decks. Covered the full path from training models and shipping APIs to wiring Electron frontends.",
    highlights: [
      "Integrated Electron clients with FastAPI ML backends into desktop apps clients used daily.",
      "Built computer vision pipelines with TensorFlow, YOLO, and OpenCV for document and image-heavy workflows.",
      "Tuned data and inference paths to cut processing time and keep models practical at scale.",
      "Helped clients replace manual review steps with automation they could trust in daily operations.",
    ],
    technologies: [
      "FastAPI",
      "Python",
      "Electron.js",
      "TensorFlow",
      "YOLO",
      "OpenCV",
      "Computer Vision",
    ],
  },
  {
    company: "Devsinc",
    role: "Software Engineer Intern",
    duration: "December 2022 - February 2023",
    location: "Lahore, Pakistan",
    description:
      "Started in industry on a Ruby on Rails team. Learned how production code gets reviewed, planned, and shipped alongside senior engineers.",
    highlights: [
      "Implemented and maintained features in a production Rails application used by real users.",
      "Improved responsive UI with Bootstrap across form factors.",
      "Picked up Agile delivery through code reviews, sprint planning, and pairing with senior engineers.",
    ],
    technologies: ["Ruby on Rails", "Bootstrap", "JavaScript", "Agile"],
  },
];

export const philosophyPrinciples = [
  {
    title: "Ship the system, not the slide",
    description:
      "A polished demo is easy. A reliable pipeline under real traffic is the work. I design APIs, failure modes, and monitoring as carefully as the model itself.",
  },
  {
    title: "Measure what users feel",
    description:
      "Latency, accuracy, and cost only matter when they show up in someone's day. I tune for outcomes people notice: faster answers, fewer handoffs, fewer broken flows.",
  },
  {
    title: "Keep the stack honest",
    description:
      "I add complexity only when the problem demands it. Clear interfaces, readable code, and boring infrastructure beat clever layers you cannot debug at midnight.",
  },
  {
    title: "Own the gap between model and product",
    description:
      "Training a model is one step. Wiring it into data, auth, UX, and ops is the rest. I work across that seam so AI capabilities become something teams can actually run.",
  },
];
