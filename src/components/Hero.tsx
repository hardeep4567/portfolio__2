import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, CircleCheck } from "lucide-react";
import { personal } from "../data/portfolio";
import SocialLinks from "./SocialLinks";

const roles = ["Full Stack Developer", "MERN Stack Developer", "Next.js Developer"];

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
  { label: "React", className: "left-0 top-6 animate-float", dot: "bg-cyan-400" },
  { label: "Next.js", className: "right-2 top-0 animate-float-slow", dot: "bg-slate-100" },
  { label: "Node.js", className: "-left-4 bottom-16 animate-float-slow", dot: "bg-green-400" },
  { label: "MongoDB", className: "right-0 bottom-4 animate-float", dot: "bg-emerald-400" },
];

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background decor */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="bg-grid mask-radial absolute inset-0" />
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-indigo-600/25 blur-[130px] animate-blob" />
        <div className="absolute top-24 -right-32 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[130px] animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-violet-600/20 blur-[130px] animate-blob [animation-delay:-12s]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* ------- Left: copy ------- */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-4 py-1.5 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">{personal.firstName} {personal.lastName}</span>
          </h1>

          <p className="mt-4 font-mono text-lg text-slate-200 sm:text-xl" aria-live="polite">
            <span className="text-slate-500">&gt;_ </span>
            {typed}
            <span className="ml-0.5 inline-block w-[2px] animate-caret bg-cyan-400 align-middle text-transparent" aria-hidden>
              |
            </span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Full Stack Developer specializing in the MERN stack and Next.js with 1 year of
            experience — building scalable web applications, robust REST APIs and seamless
            user experiences.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-500 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <SocialLinks />
            <div className="hidden h-8 w-px bg-white/10 sm:block" aria-hidden />
            <p className="font-mono text-xs text-slate-500">
              React <span className="text-slate-600">·</span> Next.js{" "}
              <span className="text-slate-600">·</span> Node.js{" "}
              <span className="text-slate-600">·</span> MongoDB
            </p>
          </div>
        </div>

        {/* ------- Right: code editor visual ------- */}
        <div className="relative mx-auto w-full max-w-lg animate-fade-up [animation-delay:150ms] lg:max-w-none">
          {/* Glow ring */}
          <div
            className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-indigo-500/30 via-transparent to-cyan-500/30 blur-2xl"
            aria-hidden
          />

          <div className="glass relative rounded-2xl shadow-2xl shadow-black/50">
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3.5">
              <div className="flex items-center gap-2" aria-hidden>
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-xs text-slate-400">developer.ts</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                ready
              </span>
            </div>

            {/* Code */}
            <div className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-7 sm:text-sm">
              {codeLines.map((line, i) => (
                <div key={i} className="flex">
                  <span className="w-7 shrink-0 text-right text-slate-600 select-none">{i + 1}</span>
                  <pre className="pl-4">
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
              <div className="flex">
                <span className="w-7 shrink-0 text-right text-slate-600 select-none">9</span>
                <span className="pl-4">
                  <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-caret bg-cyan-400" aria-hidden />
                </span>
              </div>
            </div>
          </div>

          {/* Floating tech badges */}
          <div aria-hidden className="absolute inset-0 hidden sm:block">
            {floatingBadges.map((badge) => (
              <span
                key={badge.label}
                className={`glass absolute inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-200 shadow-xl shadow-black/30 ${badge.className}`}
              >
                <span className={`h-2 w-2 rounded-full ${badge.dot}`} />
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-slate-500 transition-colors hover:text-cyan-300 md:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden />
      </a>

      {/* Quick trust row */}
      <div className="relative mx-auto mt-16 flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 sm:px-8">
        {["Clean Code", "REST APIs", "MERN & Next.js", "Responsive UI"].map((item) => (
          <span key={item} className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm">
            <CircleCheck className="h-4 w-4 text-emerald-400/80" aria-hidden />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
