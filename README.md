# Modern aimated Portfolio

A Next.js (React 19) application that serves as a portfolio and website. This project uses an Express server to handle specific backend operations and integrates various modern front-end tools for an engaging user experience.

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Scripts](#scripts)
5. [Project Structure](#project-structure)
6. [Author](#author)

---

## Overview

- **Purpose**: Provide a platform to showcase the company'portfolio.
- **Framework**: Built with Next.js (v13.4.3) and React (v19.0).
- **Server**: Utilizes an Express server for backend routes and CORS handling.
- **Styling**: Tailwind CSS for efficient, utility-first styling.
- **Animation**: Framer Motion and `react-tsparticles` for interactive effects.
- **Data**: Uses `mysql2` to connect to MySQL databases (if needed).
- **Other**: Integrates Swiper for carousels and `react-icons` for icons.

---

## Tech Stack

- **Framework**: [Next.js 13.4.3](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) & [JavaScript](https://www.javascript.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/),
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [react-tsparticles](https://github.com/matteobruni/tsparticles)
- **Icons**: [react-icons](https://react-icons.github.io/react-icons)
- **Slider/Carousel**: [Swiper](https://swiperjs.com/)

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yburdakova/ccs_website.git

2. **Navigate to the project folder**:
```bash
cd ccs_website
```

3. **Install dependencies**:
```bash
npm install

```

4. **Scripts**:
In the project directory, you can run:

```bash 
npm run dev
```
Starts the development server at http://localhost:3000. Hot reloading is enabled.

```bash
npm run build
```
Builds the application for production. It bundles React in production mode and optimizes the build for the best performance.

```bash
npm run start
```
Runs the compiled production build. Make sure you run npm run build first.

```bash
npm run lint
```
Checks your code for potential errors and style issues using ESLint.

5. **Project Structure**:
Here is a high-level overview:
```bash
ccs_website/
├─ public/               // Public static files
├─ pages/ or app/       // Next.js routing
├─ components/          // Reusable components
├─ styles/              // Global or module-specific styles
├─ server/              // Express server configuration
├─ package.json
├─ tsconfig.json
├─ tailwind.config.js
└─ ...
```
Note: Depending on the Next.js version (App Router vs. Pages Router), your file structure may vary.

6.**Author**:

- **Author Name**: Yana Burdakova
- **Email**: burdakovacom@gmail.com
- **Portfolio**: https://burdakova.com
- **GitHub**: [Your GitHub Profile](https://github.com/yburdakova)
- **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/yana-burdakova/)