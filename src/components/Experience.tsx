import { Briefcase, CircleCheck, MapPin } from "lucide-react";
import { experience } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" aria-label="Work experience" className="relative scroll-mt-24 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-4 min-[370px]:px-5 sm:px-8">
        <SectionHeading
          eyebrow="Career Path"
          title={
            <>
              Work <span className="text-gradient">Experience</span>
            </>
          }
          description="A year of hands-on development — shipping live products, building secure backends and learning how real-world software is delivered."
        />

        <div className="relative">
          {/* Timeline spine */}
          <div
            className="absolute top-2 bottom-2 left-[22px] w-px bg-gradient-to-b from-indigo-500/60 via-cyan-400/40 to-transparent md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <ol className="space-y-12 md:space-y-16">
            {experience.map((job, index) => {
              const leftSide = index % 2 === 0;
              return (
                <li key={job.company} className="relative">
                  {/* Node dot */}
                  <span
                    className="absolute top-2 left-[22px] z-10 flex h-[9px] w-[9px] -translate-x-1/2 items-center justify-center rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)] md:left-1/2"
                    aria-hidden
                  >
                    <span className="h-2 w-2 rounded-full bg-night-950" />
                  </span>

                  <Reveal
                    className={`md:w-[calc(50%-2.5rem)] ${leftSide ? "md:mr-auto" : "md:ml-auto"}`}
                    delay={80}
                  >
                    <article className="glass group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/40 min-[370px]:p-6 sm:p-7">
                      <div
                        className={`pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-gradient-to-br ${job.gradient} opacity-[0.12] blur-2xl transition-opacity duration-500 group-hover:opacity-25`}
                        aria-hidden
                      />

                      <div className="relative">
                        <div className="flex flex-wrap items-center gap-3">
                          <span
                            className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${job.gradient} text-white shadow-lg`}
                          >
                            <Briefcase className="h-5 w-5" aria-hidden />
                          </span>
                          <div className="min-w-0">
                            <h3 className="font-display text-lg font-semibold text-white">{job.role}</h3>
                            <p className="text-sm font-medium text-cyan-300">{job.company}</p>
                          </div>
                          {job.tag && (
                            <span className="ml-auto rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-[10px] font-semibold tracking-wider text-indigo-300 uppercase">
                              {job.tag}
                            </span>
                          )}
                        </div>

                        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                          <span className="inline-flex items-center gap-1.5 font-mono text-slate-400">
                            {job.period}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5" aria-hidden />
                            {job.location}
                          </span>
                        </div>

                        <ul className="mt-5 space-y-2.5">
                          {job.points.map((point) => (
                            <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-400">
                              <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/90" aria-hidden />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
