import {
  BadgeCheck,
  ChartLine,
  GitBranch,
  Layers,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Personal                                                           */
/* ------------------------------------------------------------------ */

export const personal = {
  name: "Hardeep Singh",
  firstName: "Hardeep",
  lastName: "Singh",
  title: "Full Stack Developer | MERN | Next.js",
  role: "Full Stack Developer",
  location: "Mohali, Punjab, India",
  email: "singh123hardeep546@gmail.com",
  phone: "+91-6280666620",
  phoneHref: "tel:+916280666620",
  linkedin: "https://linkedin.com/in/hardeep-singh",
  linkedinLabel: "linkedin.com/in/hardeep-singh",
  github: "https://github.com/hardeep4567",
  githubLabel: "github.com/hardeep4567",
  about: [
    "I am a highly motivated Full Stack Developer with 1 year of experience, skilled in JavaScript, Next.js, Node.js, Express.js, and MongoDB. I enjoy building scalable web applications, RESTful APIs and seamless user experiences.",
    "I have strong debugging and problem-solving skills and focus on writing clean, efficient and maintainable code. I have worked on live production projects and cross-functional teams, contributing to everything from pixel-perfect frontend interfaces to robust backend services and optimized database queries.",
  ],
  focus: [
    "Full-stack web development with MERN & Next.js",
    "Designing and consuming RESTful APIs",
    "Clean, efficient & maintainable code",
    "Debugging and performance optimization",
  ],
  stats: [
    { value: "1+", label: "Year of Experience" },
    { value: "5", label: "Projects Built" },
    { value: "15", label: "Technologies" },
    { value: "2", label: "Companies" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Skills                                                             */
/* ------------------------------------------------------------------ */

const brandIcon = (slug: string, color: string) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

export interface Skill {
  name: string;
  image?: string;
  icon?: LucideIcon;
  accent: string;
}

export interface SkillGroup {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  gradient: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    subtitle: "Responsive, interactive & accessible UIs",
    icon: Layers,
    gradient: "from-sky-500 to-indigo-600",
    skills: [
      { name: "JavaScript ES6+", image: brandIcon("javascript", "f7df1e"), accent: "#f7df1e" },
      { name: "TypeScript", image: brandIcon("typescript", "3178c6"), accent: "#3178c6" },
      { name: "React.js", image: brandIcon("react", "61dafb"), accent: "#61dafb" },
      { name: "Next.js", image: brandIcon("nextdotjs", "ffffff"), accent: "#e2e8f0" },
      { name: "Redux Toolkit", image: brandIcon("redux", "764abc"), accent: "#a78bfa" },
      { name: "HTML5", image: brandIcon("html5", "e34f26"), accent: "#e34f26" },
      { name: "CSS3", image: brandIcon("css3", "1572b6"), accent: "#38bdf8" },
      { name: "Tailwind CSS", image: brandIcon("tailwindcss", "38bdf8"), accent: "#38bdf8" },
      { name: "Bootstrap", image: brandIcon("bootstrap", "7952b3"), accent: "#a78bfa" },
    ],
  },
  {
    title: "Backend",
    subtitle: "Robust APIs & server-side logic",
    icon: Network,
    gradient: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Node.js", image: brandIcon("nodedotjs", "5fa04e"), accent: "#5fa04e" },
      { name: "Express.js", image: brandIcon("express", "ffffff"), accent: "#cbd5e1" },
      { name: "Flask", image: brandIcon("flask", "ffffff"), accent: "#cbd5e1" },
      { name: "FastAPI", image: brandIcon("fastapi", "009688"), accent: "#2dd4bf" },
    ],
  },
  {
    title: "Database",
    subtitle: "Schema design & query optimization",
    icon: ChartLine,
    gradient: "from-amber-500 to-orange-600",
    skills: [
      { name: "MongoDB", image: brandIcon("mongodb", "47a248"), accent: "#47a248" },
      { name: "MySQL", image: brandIcon("mysql", "4479a1"), accent: "#4479a1" },
    ],
  },
  {
    title: "Tools & Practices",
    subtitle: "The workflow behind the work",
    icon: GitBranch,
    gradient: "from-violet-500 to-fuchsia-600",
    skills: [
      { name: "Git & GitHub", icon: GitBranch, accent: "#a78bfa" },
      { name: "REST APIs", icon: Network, accent: "#38bdf8" },
      { name: "JWT Auth", icon: ShieldCheck, accent: "#34d399" },
      { name: "Joi Validation", icon: BadgeCheck, accent: "#fbbf24" },
      { name: "MVC Architecture", icon: Layers, accent: "#818cf8" },
      { name: "Agile & Code Reviews", icon: Users, accent: "#f472b6" },
      { name: "MQL2 API", icon: ChartLine, accent: "#2dd4bf" },
      { name: "GenAI Integration", icon: Sparkles, accent: "#c084fc" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Experience                                                         */
/* ------------------------------------------------------------------ */

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  tag?: string;
  gradient: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Fresco Webservices",
    location: "Mohali, Punjab",
    period: "Dec 2025 – Jun 2026",
    tag: "Most Recent",
    gradient: "from-indigo-500 to-cyan-500",
    points: [
      "Developed and enhanced frontend interfaces for live projects including AhujaBooks.com and GymAdvisors.com using Next.js.",
      "Worked with the backend team on Node.js integration and REST API connectivity.",
      "Participated in agile code reviews and collaborated across cross-functional teams.",
      "Worked with MQL2 API queries and improved data handling and state management.",
    ],
  },
  {
    role: "MERN Stack Intern",
    company: "Apptechies",
    location: "Mohali, Punjab",
    period: "Jan 2025 – Jul 2025",
    gradient: "from-emerald-500 to-teal-500",
    points: [
      "Built authentication and authorization systems using the MERN stack.",
      "Implemented OTP verification, JWT authentication and Joi validation.",
      "Developed modular RESTful APIs following the MVC architecture.",
      "Worked with controllers, services and async/await patterns.",
      "Contributed to a Next.js cadre and voter management system.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/* ------------------------------------------------------------------ */

export interface Project {
  name: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
  accent: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "AhujaBooks.com",
    description:
      "Full-stack online bookstore with role-based authentication, secure REST APIs, book and user management, full CRUD functionality and online payment gateway integration.",
    tech: ["Next.js", "Node.js", "SQL", "MERN"],
    live: "https://ahujabooks.com",
    accent: "from-sky-500/20 to-indigo-500/10",
  },
  {
    name: "GymAdvisors.com",
    description:
      "Full-stack gym management platform with authentication, role-based access control, membership management, workout and trainer modules, dynamic content management and optimized database operations.",
    tech: ["MERN Stack", "Next.js"],
    live: "https://gymadvisors.com",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    name: "Resume Builder",
    description:
      "Resume builder platform with customizable templates, real-time resume preview, dynamic forms and PDF export functionality, enhanced with GenAI assistance.",
    tech: ["React.js", "Node.js", "MongoDB", "GenAI"],
    accent: "from-violet-500/20 to-fuchsia-500/10",
  },
  {
    name: "Cadre & Voter Management System",
    description:
      "Voting management system for voter records, candidate information, constituency-wise voting data and election results — with secure APIs, vote tracking, result aggregation and database query optimization.",
    tech: ["Next.js", "Node.js", "Express.js", "MySQL"],
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    name: "E-Commerce Web Application",
    description:
      "Full-featured e-commerce platform with secure authentication, transaction handling and a smooth, end-to-end shopping experience built on the MERN stack.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    accent: "from-rose-500/20 to-pink-500/10",
    featured: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Education                                                          */
/* ------------------------------------------------------------------ */

export const education = {
  degree: "Bachelor of Vocational — Web Technology & Multimedia",
  school: "SSM College (GNDU)",
  period: "2022 – 2024",
  location: "Punjab, India",
  highlights: ["Web Technology", "Multimedia", "Software Development"],
  note: "Focused on modern web development fundamentals, multimedia design and software engineering practices.",
};

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
