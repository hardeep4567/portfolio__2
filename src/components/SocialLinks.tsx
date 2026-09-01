import { Mail } from "lucide-react";
import { personal } from "../data/portfolio";
import { cn } from "../utils/cn";
import { GithubIcon, LinkedinIcon } from "./icons";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  withLabels?: boolean;
}

export default function SocialLinks({
  className,
  iconClassName,
  withLabels = false,
}: SocialLinksProps) {
  const links = [
    {
      label: "GitHub",
      href: personal.github,
      icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      href: personal.linkedin,
      icon: LinkedinIcon,
    },
    {
      label: "Email",
      href: `mailto:${personal.email}`,
      icon: Mail,
    },
  ];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map(({ label, href, icon: Icon }) =>
        withLabels ? (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
            aria-label={label}
            className={cn(
              "inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-white",
              iconClassName
            )}
          >
            <Icon className="h-4.5 w-4.5" aria-hidden />
            {label}
          </a>
        ) : (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
            aria-label={label}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300",
              iconClassName
            )}
          >
            <Icon className="h-5 w-5" aria-hidden />
          </a>
        )
      )}
    </div>
  );
}
