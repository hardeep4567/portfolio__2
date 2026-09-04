import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personal } from "../data/portfolio";
import { cn } from "../utils/cn";
import { LinkedinIcon } from "./icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scrollspy: highlight the section currently in view */
  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Lock body scroll while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-strong shadow-[0_8px_30px_rgb(0_0_0/0.35)]" : "bg-transparent"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:h-[72px]"
      >
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 font-mono text-lg font-semibold text-white"
          aria-label="Hardeep Singh — back to top"
        >
          <span className="text-cyan-400">&lt;</span>
          <span className="transition-colors group-hover:text-cyan-300">Hardeep</span>
          <span className="text-violet-400">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "page" : undefined}
                className={cn(
                  "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-300",
                  active === id
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                )}
              >
                {label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300",
                    active === id ? "opacity-100" : "opacity-0"
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + socials */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
          >
            <LinkedinIcon className="h-4.5 w-4.5" />
          </a>
          <a
            href={`https://wa.me/${personal.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hi Hardeep, I would like to hire you for a project.")}`}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-lg bg-gradient-to-r from-indigo-500 via-indigo-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/40"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-200 transition-colors hover:text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-white/5 transition-[max-height,opacity] duration-300 ease-out lg:hidden",
          open ? "max-h-[calc(100vh-5rem)] overflow-y-auto opacity-100" : "max-h-0 overflow-y-hidden opacity-0"
        )}
      >
        <ul className="glass-strong space-y-1 px-5 py-5">
          {navLinks.map(({ id, label }, i) => (
            <li
              key={id}
              style={{ transitionDelay: `${i * 40}ms` }}
              className={cn(
                "transition-all duration-300",
                open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
              )}
            >
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                aria-current={active === id ? "page" : undefined}
                className={cn(
                  "block rounded-lg px-4 py-2.5 text-[15px] font-medium transition-colors",
                  active === id
                    ? "bg-white/[0.06] text-cyan-300"
                    : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                )}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href={`https://wa.me/${personal.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hi Hardeep, I would like to hire you for a project.")}`}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:brightness-110"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
