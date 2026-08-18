import {
  BrainCircuit,
  Briefcase,
  Code,
  Crop,
  MonitorSmartphone,
  User,
} from "lucide-react";

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
              Passionate Web Developer & Tech Explorer{" "}
            </h3>

            <p className="text-muted-foreground">
              Building web applications that are sleek, accessible, and
              optimized for performance.
            </p>

            <p className="text-muted-foreground">
              I am passionate about creating elegant solutions to complex
              problems, and I'm constantly leraning new tech and techniques to
              stay at the forefront over the ever-evolving web landscape
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
                  <Code className="h-6 w-6 text-white" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Developlment</h4>

                  <p className="text-muted-foreground">
                    Creating responsive Websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Problem Solving Area{" "}
                  </h4>

                  <p className="text-muted-foreground ">
                    Debugging DSA puzzles to refine my backend instincts and
                    Solving Skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Crop className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Designing</h4>

                  <p className="text-muted-foreground">
                    Crafting visual experiences that speak to both logic and
                    emotion.
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
