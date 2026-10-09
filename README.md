# Praneeth Ginjupalli — Portfolio

Portfolio of an AI / ML engineer — agentic AI systems, RAG pipelines, and deep
learning models trained in PyTorch. Built with React, Vite and Tailwind CSS v4.

**Live:** https://praneeth-portfolio-sooty.vercel.app

## Featured projects

| Project | What it is | Stack |
| --- | --- | --- |
| [SentinelCopilot](https://github.com/PRANEETH1659/Sentinel-Copilot-) *(in progress)* | A fully local AI security copilot: a LangGraph agent that chooses between a runbook knowledge base (hybrid BM25 + vector search, RRF) and a live alert stream fed by Redpanda, with Redis + semantic caching and audit logging | Python, LangGraph, FastAPI, Elasticsearch, Ollama, Redpanda, Redis, Docker |
| [Autonomous Financial Research Agent](https://github.com/PRANEETH1659/autonomous_financial_agent) | A LangChain ReAct agent that pulls live market data, searches and scrapes the web, and answers questions about uploaded financial PDFs via BM25 retrieval | Python, LangChain, Groq (Llama 3.3), Firecrawl, Streamlit |
| [SupportDesk AI](https://github.com/PRANEETH1659/SupportDeskAI) | A full-stack support-ticket platform with real-time agent dashboards, role-based access, and a Gemini-backed assistant with voice I/O | React, Node/Express, MongoDB, Socket.io, Gemini API |
| DeepTrace *(in progress)* | A deepfake detector that starts as a ResNet18 fine-tuned to tell real faces from StyleGAN fakes, growing into video, voice, and an agent that explains its verdict | Python, PyTorch, ResNet18, Computer Vision |

## Certifications

- **Deep Learning with PyTorch: Image Segmentation** — Coursera Project Network, Oct 2026 · [Verify](https://coursera.org/verify/C3BHZQBN7MPE)

## Tech stack

- **React 19** + **Vite 7**
- **Tailwind CSS v4** — theming via CSS custom properties in `src/index.css`
- **lucide-react** for icons, **Radix UI** toast primitives
- **react-router-dom** for routing

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # eslint
```

## Project layout

```
src/
├── components/       # Navbar, Hero, About, Skills, Projects, Certifications, Contact, Footer
│   └── ui/           # toast primitives
├── pages/            # Home, NotFound
├── assets/           # project screenshots
├── hooks/            # use-toast
└── index.css         # Tailwind theme tokens + custom utilities
```

## Theming

Colours are defined as HSL triples on `:root` and `.dark` in `src/index.css`,
then registered with Tailwind through the `@theme` block. To adjust the palette,
edit the custom properties — every component picks the change up automatically.
