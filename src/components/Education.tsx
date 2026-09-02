import { CalendarDays, GraduationCap, MapPin, School } from "lucide-react";
import { education } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" aria-label="Education" className="relative scroll-mt-24 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-4 min-[370px]:px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Academic <span className="text-gradient">Background</span>
            </>
          }
        />

        <Reveal>
          <article className="glass group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/40 min-[370px]:p-7 sm:p-10">
            <div
              className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full bg-gradient-to-br from-violet-500/15 to-cyan-500/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden
            />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-xl shadow-indigo-500/30">
                <GraduationCap className="h-8 w-8" aria-hidden />
              </span>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-slate-400">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                    {education.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {education.location}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold text-white sm:text-2xl">
                  {education.degree}
                </h3>
                <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-cyan-300">
                  <School className="h-4 w-4" aria-hidden />
                  {education.school}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                  {education.note}
                </p>
              </div>

              <ul className="flex shrink-0 flex-wrap gap-2.5 md:max-w-[240px] md:flex-col">
                {education.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-center text-sm font-medium text-slate-300 transition-colors duration-300 hover:border-violet-400/40 hover:text-violet-300 md:text-left"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
