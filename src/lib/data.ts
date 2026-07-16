export const siteConfig = {
  name: "Muhammad Ahmad",
  title: "AI Engineer | Machine Learning Engineer | Full Stack Software Engineer",
  tagline:
    "I build production AI systems end to end: computer vision pipelines, RAG platforms, voice agents, and the backend architecture that keeps them running in the real world.",
  location: "Lahore, Pakistan",
  email: "ahmadakmal777@gmail.com",
  github: "https://github.com/MuhammadAhmad777",
  linkedin: "https://www.linkedin.com/in/muhammad-ahmad-akmal/",
  resumePath: "/resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
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
  isPrivate?: boolean;
}

export const featuredProjects: Project[] = [
  {
    title: "CareOnix",
    category: "Enterprise RAG",
    description:
      "Multi-tenant knowledge platform where teams upload internal documents and query them through a RAG-backed assistant. Handles tenant isolation, vector indexing with pgvector, and deployment on AWS.",
    techStack: ["FastAPI", "PostgreSQL", "pgvector", "RAG", "LLMs", "AWS"],
    size: "lg",
    bentoClass: "lg:col-span-7",
    isPrivate: true,
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

export const philosophyPrinciples = [
  {
    title: "Systems over features",
    description:
      "Every feature ships as part of a system with clear interfaces, defined failure modes, and a path to scale. I design for the whole lifecycle, not the demo.",
  },
  {
    title: "Production is the only benchmark",
    description:
      "A model that works in a notebook is a starting point. I care about data pipelines, deployment, monitoring, and what happens when traffic spikes at 2 AM.",
  },
  {
    title: "Simplicity scales",
    description:
      "The best architectures fit in a short conversation. I avoid unnecessary abstraction and optimize for clarity, testability, and maintainability.",
  },
  {
    title: "Bridge the gap",
    description:
      "The hardest problems sit between AI capability and engineering rigor. I work across both: training models, building APIs, and shipping interfaces people actually use.",
  },
];
