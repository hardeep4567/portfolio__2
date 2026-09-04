import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, CircleCheck } from "lucide-react";
import { personal, skillGroups } from "../data/portfolio";
import SocialLinks from "./SocialLinks";
import TechIcon from "./TechIcon";

const roles = ["Full Stack Developer", "MERN Stack Engineer", "Next.js Developer", "Frontend Engineer"];
const profileImage = "/WhatsApp Image 2026-09-03 at 9.37.38 PM.png";

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const delay = deleting ? 40 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

const codeLines = [
  { indent: 0, tokens: [{ t: "const", c: "text-violet-400" }, { t: " developer", c: "text-sky-300" }, { t: " = {", c: "text-slate-500" }] },
  { indent: 1, tokens: [{ t: "name:", c: "text-sky-300" }, { t: " 'Hardeep Singh',", c: "text-emerald-300" }] },
  { indent: 1, tokens: [{ t: "role:", c: "text-sky-300" }, { t: " 'Full Stack Developer',", c: "text-emerald-300" }] },
  { indent: 1, tokens: [{ t: "stack:", c: "text-sky-300" }, { t: " ['MERN', 'Next.js'],", c: "text-emerald-300" }] },
  { indent: 1, tokens: [{ t: "location:", c: "text-sky-300" }, { t: " 'Mohali, Punjab, IN',", c: "text-emerald-300" }] },
  { indent: 1, tokens: [{ t: "experience:", c: "text-sky-300" }, { t: " '1+ year',", c: "text-emerald-300" }] },
  { indent: 1, tokens: [{ t: "openToWork:", c: "text-sky-300" }, { t: " true,", c: "text-amber-300" }] },
  { indent: 0, tokens: [{ t: "};", c: "text-slate-500" }] },
];

const floatingBadges = [
  { label: "React", className: "left-[-2%] top-[8%] animate-float", dot: "bg-cyan-400" },
  { label: "Next.js", className: "right-[-2%] top-[2%] animate-float-slow", dot: "bg-slate-100" },
  { label: "Node.js", className: "left-[-4%] bottom-[20%] animate-float-slow", dot: "bg-green-400" },
  { label: "MongoDB", className: "right-[-2%] bottom-[10%] animate-float", dot: "bg-emerald-400" },
];

const allSkills = skillGroups.flatMap((group) => group.skills);

const floatingTechIcons = [
  { name: "JavaScript ES6+", className: "left-[5%] top-[12%] animate-tech-float", delay: "0s" },
  { name: "React.js", className: "left-[18%] bottom-[-5%] animate-tech-float-slow", delay: "-2s" },
  { name: "Node.js", className: "right-[5%] top-[18%] animate-tech-float", delay: "-4s" },
  { name: "MongoDB", className: "right-[15%] bottom-[-5%] animate-tech-float-slow", delay: "-6s" },
  { name: "TypeScript", className: "left-[45%] top-[-6%] animate-tech-float", delay: "-3s" },
]
  .map((item) => ({
    ...item,
    skill: allSkills.find((skill) => skill.name === item.name),
  }))
  .filter((item) => item.skill);

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="home" aria-label="Introduction" className="relative max-w-full overflow-x-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28">
      {/* Background decor */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="bg-grid mask-radial absolute inset-0" />
        <div className="absolute -top-24 -left-28 h-72 w-72 rounded-full bg-indigo-600/25 blur-[90px] animate-blob sm:-top-32 sm:-left-32 sm:h-[480px] sm:w-[480px] sm:blur-[130px]" />
        <div className="absolute top-20 -right-28 h-72 w-72 rounded-full bg-cyan-500/20 blur-[90px] animate-blob [animation-delay:-6s] sm:top-24 sm:-right-32 sm:h-[420px] sm:w-[420px] sm:blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-violet-600/20 blur-[90px] animate-blob [animation-delay:-12s] sm:left-1/3 sm:h-[360px] sm:w-[360px] sm:blur-[130px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:px-8 lg:grid-cols-12 lg:gap-8">
        
        {/* ------- Left Column: Text & CTAs ------- */}
        <div className="order-1 min-w-0 animate-fade-up text-center sm:text-left lg:col-span-7">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-4 py-1.5 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to full-time opportunities
          </span>

          <h1 className="mt-6 max-w-full break-words font-display text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building <span className="text-gradient">clean, scalable</span>
            <br /> digital products.
          </h1>

          <p className="mx-auto mt-4 min-h-7 max-w-full font-mono text-base text-slate-200 sm:mx-0 sm:text-xl" aria-live="polite">
            <span className="text-slate-500">&gt;_ </span>
            {typed}
            <span className="ml-0.5 inline-block w-[2px] animate-caret bg-cyan-400 align-middle text-transparent" aria-hidden>
              |
            </span>
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:mx-0 sm:text-lg">
            I design and build high-performing web applications with a strong focus on
            user experience, clean architecture, and dependable backend systems across the
            MERN stack and Next.js ecosystem.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-start sm:gap-4">
            <a
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-500 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40 sm:w-auto"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08] hover:text-white sm:w-auto"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Social Links & Stack Overview */}
          <div className="mt-8 flex flex-col items-center gap-y-4 sm:flex-row sm:flex-wrap sm:gap-x-6">
            <SocialLinks />
            <div className="hidden h-8 w-px bg-white/10 sm:block" aria-hidden />
            <p className="text-center font-mono text-xs leading-6 text-slate-500 sm:text-left">
              React <span className="text-slate-600">·</span> Next.js{" "}
              <span className="text-slate-600">·</span> Node.js{" "}
              <span className="text-slate-600">·</span> MongoDB
            </p>
          </div>
        </div>

        {/* ------- Right Column: Profile Image & Floating Elements ------- */}
        <div className="order-2 min-w-0 animate-fade-up lg:col-span-5 [animation-delay:150ms]">
          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[400px]">
            {/* Soft Glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-indigo-500/35 via-cyan-500/20 to-emerald-400/30 blur-3xl" aria-hidden />
            
            {/* Avatar Frame */}
            <div className="relative overflow-hidden rounded-full border border-white/10 bg-slate-900/70  shadow-[0_30px_90px_rgba(15,23,42,0.7)] backdrop-blur-sm ">
              <img
                src={profileImage}
                alt="Hardeep Singh"
                className="aspect-square h-full w-full rounded-full object-cover object-center"
              />
            </div>

            {/* Floating Tech Icons */}
            <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
              {floatingTechIcons.map(({ name, className, delay, skill }) => (
                <span
                  key={name}
                  className={`glass absolute flex h-11 w-11 items-center justify-center rounded-2xl shadow-xl shadow-black/30 ${className}`}
                  style={{ animationDelay: delay }}
                >
                  <TechIcon skill={skill!} className="h-5 w-5" />
                </span>
              ))}
            </div>

            {/* Floating Text Badges */}
            <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
              {floatingBadges.map((badge) => (
                <span
                  key={badge.label}
                  className={`glass absolute inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-200 shadow-xl shadow-black/30 ${badge.className}`}
                >
                  <span className={`h-2 w-2 rounded-full ${badge.dot}`} />
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Status Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-300 sm:gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to work
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              Based in Mohali
            </span>
          </div>
        </div>

        {/* ------- Full Width Code Block Section (Bottom) ------- */}
        <div className="order-3 min-w-0 lg:col-span-12">
          <div className="relative mx-auto max-w-2xl">
            <div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-500/20 blur-2xl"
              aria-hidden
            />

            <div className="glass relative overflow-hidden rounded-2xl shadow-2xl shadow-black/50 border border-white/10">
              {/* Window Header */}
              <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] px-4 py-3">
                <div className="flex items-center gap-2" aria-hidden>
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="min-w-0 truncate font-mono text-xs text-slate-400">developer.ts</span>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                  ready
                </span>
              </div>

              {/* Code Snippet Container */}
              <div className="w-full overflow-x-auto px-4 py-4 font-mono text-xs leading-6 sm:px-6 sm:py-5 sm:text-sm sm:leading-7">
                {codeLines.map((line, i) => (
                  <div key={i} className="flex items-center">
                    <span className="w-8 shrink-0 text-right text-slate-600 select-none pr-3 sm:w-10 sm:pr-4">{i + 1}</span>
                    <pre className="min-w-0">
                      <code>
                        <span className="text-slate-600">{"  ".repeat(line.indent)}</span>
                        {line.tokens.map((token, j) => (
                          <span key={j} className={token.c}>
                            {token.t}
                          </span>
                        ))}
                      </code>
                    </pre>
                  </div>
                ))}
                <div className="flex items-center">
                  <span className="w-8 shrink-0 text-right text-slate-600 select-none pr-3 sm:w-10 sm:pr-4">9</span>
                  <pre className="min-w-0">
                    <code>
                      <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-caret bg-cyan-400" aria-hidden />
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-slate-500 transition-colors hover:text-cyan-300 md:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden />
      </a>

      {/* Quick Trust Badges */}
      <div className="relative mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 sm:mt-16 sm:gap-x-8 sm:px-8">
        {["Clean Architecture", "REST APIs", "MERN & Next.js", "Responsive UX"].map((item) => (
          <span key={item} className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm">
            <CircleCheck className="h-4 w-4 text-emerald-400/80" aria-hidden />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}