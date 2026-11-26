# Developer Portfolio

A modern, dark-themed developer portfolio built with React, TypeScript, and Tailwind CSS. The site is organised into focused sections so visitors can explore the developer's profile, skills, experience, projects, education, GitHub activity, and contact information.

## Sections

- **Hero** – introduction and primary calls to action
- **About** – professional overview
- **Skills** – technical skills and technologies
- **Experience** – work and practical experience
- **Projects** – selected development projects
- **GitHub** – GitHub profile and activity section
- **Education** – academic background
- **Resume** – resume access section
- **Contact** – contact area

## Tech Stack

- **React 19** and **TypeScript**
- **Vite** for local development and production builds
- **Tailwind CSS 4** for styling
- **Lucide React** for icons
- **EmailJS** for the contact-form integration

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/hardeep4567/portfolio__2.git
cd portfolio__2
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build |

## Project Structure

```text
src/
├── components/  # Portfolio sections and reusable components
├── data/        # Portfolio content and data
├── utils/       # Helper utilities
├── App.tsx      # Main page composition
└── main.tsx     # Application entry point
```

## Configuration

If you use the EmailJS contact form, configure its service, template, and public key in the relevant integration before deploying. Do not commit private credentials or secrets.

## Purpose

This project highlights frontend skills, component organisation, TypeScript usage, responsive styling, and the presentation of professional work.

---

Built by [Hardeep Singh](https://github.com/hardeep4567).
