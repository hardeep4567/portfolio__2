import { ArrowUpRight, Code2, GitBranch, Star } from "lucide-react";
import { personal, projects } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { GithubIcon } from "./icons";

const githubHighlights = [
  { icon: Code2, label: "Full-stack builds", value: `${projects.length}+ projects` },
  { icon: GitBranch, label: "Core focus", value: "MERN and Next.js" },
  { icon: Star, label: "Code style", value: "Clean and maintainable" },
];

export default function Github() {
  return (
    <section id="github" aria-label="GitHub" className="relative scroll-mt-24 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 min-[370px]:px-5 sm:px-8">
        <SectionHeading
          eyebrow="GitHub"
          title={
            <>
              Explore my <span className="text-gradient">GitHub work</span>
            </>
          }
          description="Browse my repositories, project code and development activity."
        />

        <Reveal>
          <div className="glass relative mx-auto max-w-4xl overflow-hidden rounded-2xl p-5 min-[370px]:p-7 sm:p-8">
            <div
              className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl"
              aria-hidden
            />
            <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white shadow-lg shadow-black/30">
                  <GithubIcon className="h-7 w-7" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-2xl font-semibold text-white">{personal.githubLabel}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    See the source behind my portfolio projects and full-stack experiments.
                  </p>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40"
                  >
                    Explore GitHub
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {githubHighlights.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                    <Icon className="h-5 w-5 text-cyan-300" aria-hidden />
                    <p className="mt-4 text-xs font-medium tracking-wide text-slate-500 uppercase">{label}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-200">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
