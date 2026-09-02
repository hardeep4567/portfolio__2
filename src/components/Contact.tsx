import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { CircleCheck, Mail, MapPin, Phone, Send } from "lucide-react";
import { personal } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { LinkedinIcon, WhatsappIcon } from "./icons";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    hover: "hover:border-cyan-400/40 hover:text-cyan-300",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: personal.phoneHref,
    hover: "hover:border-emerald-400/40 hover:text-emerald-300",
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    value: personal.phone,
    href: `https://wa.me/${personal.phone.replace(/\D/g, "")}`,
    hover: "hover:border-emerald-400/40 hover:text-emerald-300",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personal.location,
    hover: "hover:border-violet-400/40 hover:text-violet-300",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: personal.linkedinLabel,
    href: personal.linkedin,
    hover: "hover:border-sky-400/40 hover:text-sky-300",
  },
];

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 transition-all duration-300 outline-none focus:border-cyan-400/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-cyan-400/20";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      return;
    }

    const mailSubject = subject || "Portfolio Inquiry";
    const mailBody = `Hi Hardeep,\n\n${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    try {
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: name,
            from_email: email,
            subject: mailSubject,
            message,
            to_email: personal.email,
          },
          EMAILJS_PUBLIC_KEY,
        );
      } else {
        const mailLink = document.createElement("a");
        mailLink.href = mailto;
        mailLink.style.display = "none";
        document.body.appendChild(mailLink);
        mailLink.click();
        document.body.removeChild(mailLink);
      }
    } catch (error) {
      console.error("EmailJS send failed:", error);
      const mailLink = document.createElement("a");
      mailLink.href = mailto;
      mailLink.style.display = "none";
      document.body.appendChild(mailLink);
      mailLink.click();
      document.body.removeChild(mailLink);
    } finally {
      setSent(true);
      form.reset();
      window.setTimeout(() => setSent(false), 6000);
    }
  };

  return (
    <section id="contact" aria-label="Contact" className="relative scroll-mt-24 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something <span className="text-gradient">great together</span>
            </>
          }
          description="Have a role, a project or just want to say hello? My inbox is always open — I'll get back to you as soon as I can."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* ------- Channels ------- */}
          <Reveal>
            <div className="space-y-4">
              {channels.map(({ icon: Icon, label, value, href, hover }) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-300 transition-colors duration-300">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium tracking-wide text-slate-500 uppercase">
                        {label}
                      </span>
                      <span className="block truncate text-sm font-medium text-slate-200">
                        {value}
                      </span>
                    </span>
                  </>
                );
                const classes = `group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06] ${hover}`;

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                    className={classes}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className={classes}>
                    {content}
                  </div>
                );
              })}

              <div className="glass rounded-2xl p-5">
                <p className="text-sm leading-relaxed text-slate-400">
                  <span className="font-semibold text-slate-200">Currently open to</span> full-time
                  Full Stack Developer roles. Based in Mohali, Punjab — comfortable with remote,
                  hybrid and on-site work.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ------- Form ------- */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="glass relative overflow-hidden rounded-2xl p-7 sm:p-8"
              aria-label="Contact form"
            >
              <div
                className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-medium tracking-wide text-slate-400 uppercase">
                      Your Name
                    </label>
                    <input id="name" name="name" type="text" required placeholder="John Doe" className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-medium tracking-wide text-slate-400 uppercase">
                      Your Email
                    </label>
                    <input id="email" name="email" type="email" required placeholder="john@company.com" className={inputClasses} />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="subject" className="mb-2 block text-xs font-medium tracking-wide text-slate-400 uppercase">
                    Subject
                  </label>
                  <input id="subject" name="subject" type="text" placeholder="Opportunity / Project inquiry" className={inputClasses} />
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="mb-2 block text-xs font-medium tracking-wide text-slate-400 uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about the role or project…"
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-500 to-cyan-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40 sm:w-auto"
                >
                  Send Message
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden />
                </button>

                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-4 flex items-center gap-2 text-sm font-medium text-emerald-300 transition-all duration-300 ${
                    sent ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                  }`}
                >
                  <CircleCheck className="h-4 w-4" aria-hidden />
                  Message sent successfully — thanks for reaching out!
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
