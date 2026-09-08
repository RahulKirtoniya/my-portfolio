# Rahul Kirtoniya — Portfolio

A single-page developer portfolio built with **React 18 + TypeScript + Vite**.
Clean, standard light design — fully responsive and mobile-friendly, no
animated background. All content is data-driven: sections render from typed
data models, so updating the site means editing a data file, never touching
markup.

## Run it

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build
npm run type-check
```

> Font Awesome and Google Fonts are loaded via CDN in `index.html`.
> Place your CV at `public/Rahul_Kirtoniya_CV.pdf` so the "Download CV" button resolves.

## Project structure

```
src/
├── main.tsx                # entry point, mounts <App/>
├── App.tsx                 # composes every section in order
├── vite-env.d.ts
├── types/
│   └── index.ts            # all domain models (Profile, Experience, Project, …)
├── data/                   # content only — one file per section, typed
│   ├── index.ts            # barrel export
│   ├── profile.ts
│   ├── navigation.ts
│   ├── socials.ts
│   ├── codeWindow.ts
│   ├── education.ts
│   ├── experience.ts
│   ├── skills.ts
│   ├── projects.ts
│   ├── certifications.ts   # certifications + LeetCode profile
│   └── services.ts
├── components/             # one presentational component per section
│   ├── index.ts            # barrel export
│   ├── NeuralBackground.tsx
│   ├── Navbar.tsx
│   ├── SocialSidebar.tsx
│   ├── SectionHeader.tsx   # shared eyebrow + title + description
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Certifications.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── hooks/
│   ├── useScrollSpy.ts     # highlights the active nav link
│   └── useReveal.ts        # reveal-on-scroll via IntersectionObserver
└── styles/
    └── global.css          # design tokens + all styling
```

## How to edit content

| To change…                | Edit…                          |
| ------------------------- | ------------------------------ |
| Name, hero, contact info  | `src/data/profile.ts`          |
| Work experience           | `src/data/experience.ts`       |
| Education                 | `src/data/education.ts`        |
| Projects                  | `src/data/projects.ts`         |
| Skills                    | `src/data/skills.ts`           |
| Certifications / LeetCode | `src/data/certifications.ts`   |
| Services                  | `src/data/services.ts`         |
| Social links              | `src/data/socials.ts`          |
| Nav order                 | `src/data/navigation.ts`       |
| Colors / spacing / layout | `src/styles/global.css`        |

Every data file is checked against the interfaces in `src/types/index.ts`, so a
typo in a field name or a missing property is caught at build time.
```
