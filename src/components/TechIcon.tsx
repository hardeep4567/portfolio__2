import { useState } from "react";
import type { Skill } from "../data/portfolio";
import { cn } from "../utils/cn";

/**
 * Renders a skill icon. Brand icons are loaded from the Simple Icons CDN
 * with an inline monogram fallback if the image cannot load.
 */
export default function TechIcon({ skill, className }: { skill: Skill; className?: string }) {
  const [failed, setFailed] = useState(false);
  const Icon = skill.icon;

  if (Icon) {
    return <Icon className={cn("h-5 w-5", className)} style={{ color: skill.accent }} aria-hidden />;
  }

  if (skill.image && !failed) {
    return (
      <img
        src={skill.image}
        alt=""
        loading="lazy"
        width={20}
        height={20}
        onError={() => setFailed(true)}
        className={cn("h-5 w-5 shrink-0 object-contain", className)}
      />
    );
  }

  return (
    <span
      aria-hidden
      className={cn(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded text-[9px] font-bold",
        className
      )}
      style={{ backgroundColor: `${skill.accent}22`, color: skill.accent }}
    >
      {skill.name.slice(0, 2).toUpperCase()}
    </span>
  );
}
