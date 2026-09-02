# Portfolio Website

A modern portfolio website built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- Responsive single-page portfolio layout
- Smooth animated sections
- Skills, experience, education, projects, and contact sections
- Clean dark theme design
- Built for static hosting and deployment

## Tech Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS
- Lucide icons

## Prerequisites

Make sure you have the following installed:

- Node.js 18 or newer
- npm or yarn

## Installation

1. Clone the project
2. Open the project folder
3. Install dependencies:

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Production build

```bash
npm run build
```

The build output is generated in the `dist` folder.

## Deployment

This project is configured for static hosting. After building, deploy the contents of the `dist` folder to your hosting provider.

Common options:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## Project structure

```bash
src/
  App.tsx
  main.tsx
  index.css
  components/
  data/
  utils/
```

## Notes

- The Vite config uses a relative base path for safer static deployment.
- The app is bundled into a single HTML output for easy hosting.

## License

This project is for personal portfolio use.
