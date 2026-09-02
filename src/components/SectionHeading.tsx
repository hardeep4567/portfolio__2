import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 max-w-2xl md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs tracking-wide text-cyan-300 uppercase min-[370px]:px-4 min-[370px]:tracking-widest">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="mt-5 break-words font-display text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white min-[370px]:text-3xl sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
