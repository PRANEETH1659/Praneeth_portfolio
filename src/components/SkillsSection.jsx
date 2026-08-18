import { useEffect, useRef, useState } from "react";
import { Bot, Layers, Layout, Server, Sparkles, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

/* Depth, not percentages. Three tiers say something a number can't defend:
   how far into a thing I actually am. Every label names knowledge held rather
   than knowledge missing — "Working" is a working knowledge, not a shortfall —
   and the floor fill stays at half a ring so nothing ever reads as empty.
   The fill derives from the tier, so a skill's standing lives in one word. */
const TIERS = {
  core: { label: "Core", blurb: "day to day", fill: 0.92 },
  strong: { label: "Strong", blurb: "shipped with it", fill: 0.72 },
  working: { label: "Working", blurb: "know the fundamentals", fill: 0.5 },
};

/* The tree: one root, five limbs.
   Each limb carries its own hue as a CSS custom property, so a single set of
   styles below colours every node in that column. The hues stay in the site's
   cool/cosmic range rather than introducing a second palette, and are spaced
   far enough apart to stay tellable apart at ring size. */
const branches = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Layout,
    hue: "190 85% 58%",
    skills: [
      { name: "React", tier: "strong" },
      { name: "JavaScript", tier: "core" },
      { name: "Tailwind CSS", tier: "strong" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    hue: "222 80% 66%",
    skills: [
      { name: "Node.js", tier: "strong" },
      { name: "Express", tier: "working" },
      { name: "MongoDB", tier: "working" },
    ],
  },
  {
    id: "ai-engineering",
    label: "AI Engineering",
    icon: Bot,
    hue: "258 70% 68%",
    skills: [
      { name: "Python", tier: "core" },
      { name: "Agentic AI", tier: "strong" },
      { name: "RAG Pipelines", tier: "strong" },
      { name: "LangChain", tier: "working" },
    ],
  },
  {
    id: "ai-assisted",
    label: "Building with AI",
    icon: Sparkles,
    hue: "292 70% 66%",
    skills: [
      { name: "Claude", tier: "core" },
      { name: "ChatGPT", tier: "core" },
      { name: "Antigravity", tier: "working" },
    ],
  },
  {
    id: "tooling",
    label: "Tooling",
    icon: Wrench,
    hue: "160 60% 52%",
    skills: [
      { name: "Git & GitHub", tier: "working" },
      { name: "Postman", tier: "working" },
      { name: "Vite", tier: "working" },
    ],
  },
];

const RADIUS = 30;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/* One leaf: a ring that draws itself to the tier's fill when scrolled into
   view. strokeDashoffset starts at the full circumference (an empty ring) and
   animates down to the remainder — the standard radial-progress trick. */
const SkillNode = ({ skill, index, revealed, delay }) => {
  const tier = TIERS[skill.tier];

  return (
    <li className="relative flex flex-col items-center gap-2">
      {index > 0 && (
        <span
          aria-hidden="true"
          className="hidden lg:block absolute -top-5 left-1/2 h-5 w-px -translate-x-1/2"
          style={{ background: "hsl(var(--branch) / 0.3)" }}
        />
      )}

      <div className="relative">
        <svg
          viewBox="0 0 72 72"
          className="size-[72px] -rotate-90"
          aria-hidden="true"
        >
          <circle
            cx="36"
            cy="36"
            r={RADIUS}
            fill="none"
            strokeWidth="4"
            stroke="hsl(var(--branch) / 0.15)"
          />
          <circle
            cx="36"
            cy="36"
            r={RADIUS}
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            stroke="hsl(var(--branch))"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={
              revealed ? CIRCUMFERENCE * (1 - tier.fill) : CIRCUMFERENCE
            }
            style={{
              transition: `stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
              filter: "drop-shadow(0 0 6px hsl(var(--branch) / 0.55))",
            }}
          />
        </svg>

        <span className="absolute inset-0 grid place-items-center text-[10px] font-semibold uppercase tracking-wide">
          {tier.label}
        </span>
      </div>

      <span className="text-xs font-medium text-muted-foreground text-center leading-tight">
        {skill.name}
      </span>
    </li>
  );
};

const Branch = ({ branch, index, total, revealed }) => {
  const Icon = branch.icon;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <div className="relative pt-10 lg:pt-14" style={{ "--branch": branch.hue }}>
      {/* Horizontal spine. Each column draws its own segment and overhangs the
          grid gap by half (gap-6 -> 24px -> -left-3/-right-3), so the segments
          meet exactly at column centres at any viewport width. */}
      <span
        aria-hidden="true"
        className={cn(
          "hidden lg:block absolute top-0 h-px",
          isFirst
            ? "left-1/2 -right-3"
            : isLast
              ? "-left-3 right-1/2"
              : "-left-3 -right-3"
        )}
        style={{ background: "hsl(var(--branch) / 0.35)" }}
      />

      {/* Drop from the spine into this limb's head */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-1/2 h-10 w-px -translate-x-1/2 lg:h-14"
        style={{
          background:
            "linear-gradient(to bottom, hsl(var(--branch) / 0.35), hsl(var(--branch) / 0.9))",
        }}
      />

      <div className="flex flex-col items-center gap-3">
        <div
          className="grid size-12 place-items-center rounded-full border transition-transform duration-300 hover:scale-110"
          style={{
            borderColor: "hsl(var(--branch) / 0.45)",
            background: "hsl(var(--branch) / 0.12)",
            boxShadow: "0 0 24px hsl(var(--branch) / 0.28)",
          }}
        >
          <Icon className="size-5" style={{ color: "hsl(var(--branch))" }} />
        </div>

        <h3
          className="text-center text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "hsl(var(--branch))" }}
        >
          {branch.label}
        </h3>
      </div>

      <ul className="mt-8 grid grid-cols-3 gap-5 lg:grid-cols-1">
        {branch.skills.map((skill, skillIndex) => (
          <SkillNode
            key={skill.name}
            skill={skill}
            index={skillIndex}
            revealed={revealed}
            delay={index * 110 + skillIndex * 85}
          />
        ))}
      </ul>
    </div>
  );
};

/* Tells the reader how to decode a ring before they meet twenty of them. */
const TierLegend = () => (
  <ul className="mb-16 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
    {Object.entries(TIERS).map(([key, tier]) => {
      const r = 7;
      const c = 2 * Math.PI * r;

      return (
        <li
          key={key}
          className="flex items-center gap-2 text-xs text-muted-foreground"
        >
          <svg viewBox="0 0 20 20" className="size-4 -rotate-90" aria-hidden="true">
            <circle
              cx="10"
              cy="10"
              r={r}
              fill="none"
              strokeWidth="2.5"
              className="stroke-muted-foreground/25"
            />
            <circle
              cx="10"
              cy="10"
              r={r}
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="stroke-primary"
              strokeDasharray={c}
              strokeDashoffset={c * (1 - tier.fill)}
            />
          </svg>
          <span>
            <span className="font-semibold text-foreground">{tier.label}</span>
            <span className="hidden sm:inline"> — {tier.blurb}</span>
          </span>
        </li>
      );
    })}
  </ul>
);

export const SkillsSection = () => {
  const [revealed, setRevealed] = useState(false);
  const treeRef = useRef(null);

  useEffect(() => {
    const el = treeRef.current;
    if (!el) return;

    // Anyone who asked for less motion gets the finished state immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 px-4 bg-secondary/30"
    >
      {/* Light pooling behind the root, so the tree reads as lit from within */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-32 size-[420px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.22), transparent 70%)",
        }}
      />

      <div className="container relative mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
          One stack, five limbs — what I build with, what I build, and what I
          build alongside.
        </p>

        <TierLegend />

        <div ref={treeRef}>
          {/* Root */}
          <div className="flex flex-col items-center">
            <div className="relative grid size-24 place-items-center rounded-full border border-primary/40 bg-primary/10 shadow-[0_0_50px_hsl(var(--primary)/0.35)]">
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-primary/20 animate-pulse-subtle"
              />
              <Layers className="size-9 text-primary" />
            </div>

            <p className="mt-4 text-lg font-bold tracking-wide text-glow">
              Full Stack
            </p>
          </div>

          {/* Trunk */}
          <span
            aria-hidden="true"
            className="mx-auto block h-12 w-px bg-linear-to-b from-primary/70 to-primary/30"
          />

          {/* Limbs */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-6 lg:items-start">
            {branches.map((branch, index) => (
              <Branch
                key={branch.id}
                branch={branch}
                index={index}
                total={branches.length}
                revealed={revealed}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
