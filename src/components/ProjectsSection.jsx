import { ArrowBigRight, ExternalLink, Github } from "lucide-react";

/* Screenshots live in src/assets and are imported (not string paths) so Vite
   fingerprints them and the build fails loudly if a file goes missing. */
import financialAnalyzerImg from "../assets/Financial Analyzer.png";
import supportDeskImg from "../assets/supportdesk-ai.png";

const projects = [
  {
    id: 1,
    title: "SentinelCopilot — Local AI Security Copilot",
    description:
      "An AI teammate for security analysts that runs 100% on your own machine. Ask about an incident and a LangGraph agent decides where to look — the runbook library or the live alert stream — then answers only from what it found, with sources. No security data ever leaves the box.",
    highlights: [
      "Agent picks its own tool: knowledge base or live alerts",
      "Hybrid search — BM25 + vectors, fused with RRF",
      "Live alert stream · semantic cache · full audit trail",
    ],
    image: null,
    tags: [
      "Python",
      "LangGraph",
      "FastAPI",
      "Elasticsearch",
      "Ollama",
      "Redpanda (Kafka)",
      "Redis",
      "Docker",
    ],
    githubUrl: "https://github.com/PRANEETH1659/Sentinel-Copilot-",
    status: "Phase 5 in progress",
  },
  {
    id: 2,
    title: "Autonomous Financial Research Agent",
    description:
      "A LangChain ReAct agent that decides its own next move: pull live market data, search the web, or run a full research pipeline — search, scrape, chunk, and BM25-retrieve — then synthesise a grounded answer. Also answers questions about an uploaded 10-K or earnings PDF.",
    highlights: [
      "2 LLM calls per query — the theoretical floor",
      "11/11 automated agent evals passing",
      "Live pipeline steps streamed to the UI",
    ],
    image: financialAnalyzerImg,
    tags: [
      "Python",
      "LangChain",
      "Groq · Llama 3.3",
      "BM25 Retrieval",
      "Firecrawl",
      "yfinance",
      "Streamlit",
    ],
    demoUrl:
      "https://autonomousfinancialagent-kveykyk53v4s7oflywacwm.streamlit.app",
    githubUrl: "https://github.com/PRANEETH1659/autonomous_financial_agent",
  },
  {
    id: 3,
    title: "SupportDesk AI",
    description:
      "A full-stack support platform where customers raise tickets — by typing, speaking, or attaching screenshots — and agents work them from a dashboard that updates live over WebSockets. A Gemini-backed assistant handles the questions that never needed a human.",
    highlights: [
      "Real-time ticket sync via Socket.io",
      "JWT auth with customer / agent role gating",
      "Voice-to-text and spoken replies in-browser",
    ],
    image: supportDeskImg,
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Gemini API",
      "Web Speech API",
    ],
    demoUrl: "https://support-desk-ai-three.vercel.app/",
    githubUrl: "https://github.com/PRANEETH1659/SupportDeskAI",
  },
  {
    id: 4,
    title: "DeepTrace — Real vs. AI Face Detector",
    description:
      "Real face or AI fake? DeepTrace learns the pixel-level tells the human eye misses. A ResNet18 fine-tuned in PyTorch on 140k real and StyleGAN-generated faces — stage one of a deepfake detector that grows into video, cloned voices, and an agent that explains its verdict.",
    highlights: [
      "A vision model I trained myself — not an API call",
      "140k faces: real Flickr photos vs. StyleGAN fakes",
      "Next: video, voice clones, lip-sync checks, LangGraph agent",
    ],
    image: null,
    tags: [
      "Python",
      "PyTorch",
      "ResNet18",
      "Transfer Learning",
      "Computer Vision",
      "Kaggle GPU",
    ],
    status: "Building now",
    /* Add demoUrl / githubUrl here once the repo and Hugging Face demo are live. */
  },
];

/* Shown until a real screenshot exists — keeps the card's proportions and the
   site's palette instead of leaving a broken <img> icon. */
const ProjectImageFallback = ({ title }) => (
  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/25 via-primary/10 to-card">
    <span className="px-6 text-lg font-semibold text-primary/70 text-glow">
      {title}
    </span>
  </div>
);

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h1>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Four projects, one thread: AI that does real work — a security
          copilot agent, an autonomous research agent, a deep learning model I
          train myself, and a support platform with an AI assistant built in.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-card border border-border rounded-lg overflow-hidden shadow-2xs card-hover text-left"
            >
              <div className="aspect-video overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <ProjectImageFallback title={project.title} />
                )}
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-${tag}-${index}`}
                      className="px-2 py-1 text-xs border border-border font-medium rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-6">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center gap-5 pt-4 border-t border-border">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={18} />
                      Source
                    </a>
                  )}

                  {project.status && (
                    <span className="flex items-center gap-2 text-sm text-primary">
                      <span className="size-2 rounded-full bg-primary animate-pulse" />
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            className="cosmic-button w-fit flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/PRANEETH1659"
          >
            Check My Github <ArrowBigRight size={16} />
          </a>

          <a
            className="cosmic-button w-fit flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/praneeth-ginjupalli-92bb60292/"
          >
            Review My LinkedIn <ArrowBigRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
