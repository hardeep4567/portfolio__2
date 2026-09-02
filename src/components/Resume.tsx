import { Download, FileText, Mail } from "lucide-react";
import { personal } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const resumeHref = "/HardeepCv.pdf";

export default function Resume() {
  return (
    <section id="resume" aria-label="Resume" className="relative scroll-mt-24 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 min-[370px]:px-5 sm:px-8">
        <SectionHeading
          eyebrow="Resume"
          title={
            <>
              Download my <span className="text-gradient">latest resume</span>
            </>
          }
          description="Get a PDF copy of my experience, projects and technical skills."
        />

        <Reveal>
          <div className="glass mx-auto max-w-3xl overflow-hidden rounded-2xl p-5 min-[370px]:p-7 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/[0.08] text-cyan-300">
                  <FileText className="h-6 w-6" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {personal.name} Resume
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    Full Stack Developer focused on MERN, Next.js, REST APIs and responsive web applications.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 min-[430px]:flex-row sm:shrink-0">
                <a
                  href={resumeHref}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40"
                >
                  Download PDF
                  <Download className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href={`mailto:${personal.email}?subject=${encodeURIComponent("Resume request")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
                >
                  Request Copy
                  <Mail className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
