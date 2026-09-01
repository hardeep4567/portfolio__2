import { ArrowUp, Mail } from "lucide-react";
import { navLinks, personal } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.07]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-mono text-lg font-semibold text-white">
              <span className="text-cyan-400">&lt;</span>Hardeep<span className="text-violet-400">/&gt;</span>
            </a>
            <p className="mt-2 text-sm text-slate-400">
              {personal.name} — Full Stack Developer
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-sm text-slate-500 transition-colors duration-300 hover:text-cyan-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials + top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
            >
              <GithubIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
            >
              <LinkedinIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Send an email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/40"
            >
              <ArrowUp className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/[0.06] pt-6 text-center text-xs text-slate-600 sm:flex-row sm:justify-between">
          <p>
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="font-mono">
            Crafted with <span className="text-cyan-400">React</span>,{" "}
            <span className="text-sky-400">TypeScript</span> &{" "}
            <span className="text-violet-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
