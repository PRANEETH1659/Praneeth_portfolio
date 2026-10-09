import { Bot, BrainCircuit, ScanEye } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold ">
              AI Engineer — Agents, Models &amp; the Hard Parts
            </h3>

            <p className="text-muted-foreground">
              I build AI systems that do real work: agents that plan their own
              steps and call the right tools, and deep learning models I train
              from the data up.
            </p>

            <p className="text-muted-foreground">
              B.Tech CSE at VIT-AP (2027). I go after the parts tutorials skip —
              evaluating agents honestly, and testing whether a model still
              holds up on data it has never seen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get in Touch{" "}
              </a>

              <a
                href="https://docs.google.com/document/d/1t4GCW3rC9pLAIkrm-Y5Ma1u5-XQTZoCPjmpmiQx9u9c/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                View Resume{" "}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 ">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Agentic AI</h4>

                  <p className="text-muted-foreground">
                    Systems that plan their own steps, pick their own tools, and
                    act on what comes back — backed by real evals, not a demo
                    that worked once.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <ScanEye className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Deep Learning &amp; Computer Vision
                  </h4>

                  <p className="text-muted-foreground">
                    Training my own models in PyTorch — starting with a detector
                    that catches AI-generated faces, growing into video and
                    voice deepfakes.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">LLMs &amp; RAG</h4>

                  <p className="text-muted-foreground">
                    Grounding LLMs in real data — retrieval, chunking, and tight
                    prompts that keep answers accurate, fast, and cheap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
