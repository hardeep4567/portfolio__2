import { skillGroups } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TechIcon from "./TechIcon";

export default function Skills() {
  return (
    <section id="skills" aria-label="Technical skills" className="relative scroll-mt-24 py-24 md:py-32">
      {/* subtle divider glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 min-[370px]:px-5 sm:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              Skills & <span className="text-gradient">Technologies</span>
            </>
          }
          description="The tools I use to design, build and ship full-stack products — from responsive frontends to robust APIs and databases."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 100}>
              <div className="glass group relative h-full overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-xl hover:shadow-black/40 min-[370px]:p-6">
                <div
                  className={`pointer-events-none absolute -top-14 -right-14 h-36 w-36 rounded-full bg-gradient-to-br ${group.gradient} opacity-[0.12] blur-2xl transition-opacity duration-500 group-hover:opacity-25`}
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${group.gradient} text-white shadow-lg`}
                    >
                      <group.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-white">{group.title}</h3>
                      <p className="text-xs text-slate-500">{group.subtitle}</p>
                    </div>
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <li key={skill.name}>
                        <span
                          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[13px] font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
                          style={{ boxShadow: "0 0 0 0 transparent" }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px -8px ${skill.accent}55`;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 transparent";
                          }}
                        >
                          <TechIcon skill={skill} />
                          {skill.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
