import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { projects, type Project } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={`glass group relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-2xl hover:shadow-black/50 ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      {/* Accent header band */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${project.accent} to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100 ${
          featured ? "lg:rounded-r-none" : ""
        }`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      <div className={`relative flex flex-1 flex-col p-7 sm:p-8 ${featured ? "lg:pr-10" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-night-900/80 text-cyan-300 shadow-lg shadow-black/30">
            <FolderGit2 className="h-5.5 w-5.5" aria-hidden />
          </span>
          <div className="flex gap-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.name} — live demo`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            )}
          </div>
        </div>

        <h3 className="mt-5 font-display text-xl font-semibold text-white">{project.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/40"
            >
              Live Demo
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          ) : (
            <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-slate-500">
              Demo — coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [first, second, third, fourth, fifth] = projects;

  return (
    <section id="projects" aria-label="Projects" className="relative scroll-mt-24 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 min-[370px]:px-5 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Featured <span className="text-gradient">Projects</span>
            </>
          }
          description="A selection of full-stack applications I have built and contributed to — from live production platforms to personal tools."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <ProjectCard project={first} />
          </Reveal>
          <Reveal delay={100}>
            <ProjectCard project={second} />
          </Reveal>
          <Reveal delay={80}>
            <ProjectCard project={third} />
          </Reveal>
          <Reveal delay={180}>
            <ProjectCard project={fourth} />
          </Reveal>
          <Reveal className="lg:col-span-2">
            <ProjectCard project={fifth} featured />
          </Reveal>
        </div>

      </div>
    </section>
  );
}
