import { ArrowUpRight, Briefcase, CircleCheck, GraduationCap, Mail, MapPin, UserRound } from "lucide-react";
import { personal } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const strengths = [
  { icon: CircleCheck, label: "Clean, maintainable code" },
  { icon: CircleCheck, label: "Strong debugging skills" },
  { icon: CircleCheck, label: "REST API development" },
  { icon: CircleCheck, label: "Scalable web applications" },
];

const facts = [
  { icon: Briefcase, label: "Experience", value: "1+ year, Full Stack" },
  { icon: MapPin, label: "Location", value: personal.location },
  { icon: GraduationCap, label: "Education", value: "B.Voc — Web Tech & Multimedia" },
  { icon: Mail, label: "Email", value: personal.email },
];

export default function About() {
  return (
    <section id="about" aria-label="About me" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 min-[370px]:px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              A developer who cares about <span className="text-gradient">clean, working software</span>
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* ------- Narrative ------- */}
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg">
              <p className="text-slate-300">
                {personal.about[0]}
              </p>
              <p>{personal.about[1]}</p>

              <div className="flex flex-wrap gap-3 pt-2">
                {strengths.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 transition-colors duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <Icon className="h-4 w-4 text-cyan-400" aria-hidden />
                    {label}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 pt-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
              >
                Let&apos;s work together
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </a>
            </div>
          </Reveal>

          {/* ------- Quick facts card ------- */}
          <Reveal delay={120}>
            <div className="glass relative overflow-hidden rounded-2xl p-5 min-[370px]:p-7">
              <div
                className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30">
                    <UserRound className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">Quick Facts</h3>
                    <p className="text-xs text-slate-500">At a glance</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {facts.map(({ icon: Icon, label, value }) => (
                    <li key={label} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-cyan-300">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">{label}</p>
                        <p className="truncate text-sm font-medium text-slate-200">{value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ------- Stats ------- */}
        <Reveal delay={100} className="mt-14">
          <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {personal.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass group rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20 min-[370px]:p-6"
              >
                <dd className="text-gradient font-display text-3xl font-bold sm:text-4xl">{stat.value}</dd>
                <dt className="mt-2 text-xs font-medium tracking-wide text-slate-500 uppercase sm:text-sm">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
