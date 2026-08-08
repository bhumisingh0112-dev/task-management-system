# Pyramid — Task Management System

Full-stack implementation for the AbleSpace Full Stack Developer (Fresher) Technical Assessment.

The assessment requires a Next.js + Tailwind frontend, NestJS backend, database persistence, Guest Login, reusable components, clean APIs/validation, responsive design, theme support, a public GitHub repository, a deployed URL, README and a Part 2 product-understanding submission. The supplied assessment also states that design fidelity and attention to detail are primary evaluation criteria. 

## Stack

- Next.js 16 / App Router / TypeScript
- Tailwind CSS 4
- NestJS 11 / TypeScript
- Prisma 6
- SQLite (chosen because it is explicitly allowed by the brief and is easy to run locally)

## Features

- Guest login flow
- Responsive task workspace
- Board and List views
- Search
- Filters
- Field visibility controls
- Add, edit and delete tasks
- Drag tasks between statuses
- Persistent status/priority/subtasks/comments
- Task details drawer
- Projects page
- Profile page
- Light / Dark / System theme
- Persistent accent/color mode
- Mobile navigation
- Validated NestJS REST API
- Prisma/SQLite persistence
- Loading and error states

## Local setup

### Backend

```bash
cd backend
npm install
copy .env.example .env
npm run db:generate
npm run db:push
npm run start:dev
```

API: `http://localhost:4000`

### Frontend

Open a second terminal:

```bash
cd frontend
npm install
copy .env.local.example .env.local
npm run dev
```

App: `http://localhost:3000`

## API

- `GET /tasks`
- `GET /tasks/:id`
- `POST /tasks`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`

## Validation

NestJS uses a global `ValidationPipe` with `whitelist` and `transform`, and DTOs validate titles, priorities, statuses, dates, members, labels, subtasks and comments.

## Design notes / intentional deviations

- The Figma screenshots supplied with the assessment were used as the visual reference for the login, sidebar, task board/list, fields/filter menus, task details and settings experiences.
- Icons are implemented with lightweight text/CSS symbols rather than a third-party icon package to keep installation deterministic after the earlier native/icon dependency issues.
- Google Login is represented as a non-authenticated UI action; Guest Login is the implemented authentication path because the assessment explicitly requires Guest Login. A production OAuth provider can be connected later without changing the task API.
- SQLite was selected instead of MongoDB/PostgreSQL because the brief permits any of the listed databases and SQLite keeps the assessment easy to run locally.

## Part 2

See `docs/Part2_Product_Understanding.pdf` and `docs/Part2_Product_Understanding.md`.

## Submission checklist

Before submitting, replace the placeholder repository/deployment values in `docs/SUBMISSION_CHECKLIST.md`, push the repository publicly with multiple meaningful commits, deploy the frontend/backend, verify the live URL, and keep the deployment accessible for at least 45 days as requested by the assessment.

## AI-use note

The assessment explicitly allows AI tools but requires the candidate to understand and explain submitted code. Review the architecture, API flow, validation, state management and styling before submission/interview.
