# Task Management System

A modern, responsive task management application for organizing tasks,
projects, team members, and workflows. The application provides both
board and list-based task views with search, filtering, task details,
subtasks, comments, and persistent data storage.

## Features

### Task Management

-   Create new tasks
-   Edit existing tasks
-   Delete tasks
-   Change task status
-   Change task priority
-   Assign members
-   Add labels
-   Set due dates
-   View detailed task information
-   Add and manage subtasks
-   Add comments and updates

### Task Views

-   Kanban-style Board view
-   List view
-   Drag and drop tasks between status columns
-   Configurable visible fields

### Search & Filtering

-   Search tasks by title and description
-   Filter by priority
-   Filter by members
-   Filter by labels
-   Filter by status
-   Combine search and filters

### Projects

-   View projects
-   Organize work by project
-   View project-related tasks

### User Experience

-   Guest access
-   Responsive layout
-   Light and dark themes
-   Configurable accent/color mode
-   Persistent user preferences
-   Loading and empty states
-   Reusable UI components

## Tech Stack

### Frontend

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS

### Backend

-   NestJS
-   TypeScript
-   REST APIs
-   DTO validation

### Database

-   SQLite
-   Prisma ORM

## Project Structure

``` text
task-management-system/
├── frontend/
│   ├── app/
│   │   ├── components/
│   │   ├── tasks/
│   │   ├── projects/
│   │   ├── settings/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   │   ├── tasks/
│   │   ├── prisma/
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── prisma/
│   ├── package.json
│   └── ...
│
└── README.md
```

## Requirements

Make sure the following are installed:

-   Node.js 20.9 or later
-   npm

You can verify your versions with:

``` bash
node -v
npm -v
```

## Installation

Clone the repository:

``` bash
git clone <repository-url>
cd task-management-system
```

### Backend Setup

Navigate to the backend:

``` bash
cd backend
```

Install dependencies:

``` bash
npm install
```

Create the environment file:

``` bash
copy .env.example .env
```

Generate the Prisma client:

``` bash
npx prisma generate
```

Create/update the database:

``` bash
npx prisma db push
```

Start the development server:

``` bash
npm run start:dev
```

The backend will run on:

``` text
http://localhost:4000
```

### Frontend Setup

Open another terminal and navigate to the frontend:

``` bash
cd frontend
```

Install dependencies:

``` bash
npm install
```

Create the environment file:

``` bash
copy .env.local.example .env.local
```

Start the development server:

``` bash
npm run dev
```

The frontend will run on:

``` text
http://localhost:3000
```

## Environment Variables

### Backend

Create `backend/.env`:

``` env
DATABASE_URL="file:./dev.db"
PORT=4000
```

### Frontend

Create `frontend/.env.local`:

``` env
NEXT_PUBLIC_API_URL="http://localhost:4000"
```

For production, replace the API URL with the deployed backend URL.

## API Endpoints

The backend exposes REST APIs for task management.

  Method   Endpoint       Description
  -------- -------------- ------------------
  GET      `/tasks`       Get all tasks
  GET      `/tasks/:id`   Get a task by ID
  POST     `/tasks`       Create a task
  PATCH    `/tasks/:id`   Update a task
  DELETE   `/tasks/:id`   Delete a task

## Example Task

``` json
{
  "title": "Design Homepage",
  "description": "Create the homepage design and layout.",
  "priority": "High",
  "status": "todo",
  "dueDate": "2026-09-12",
  "members": ["AD"],
  "labels": ["Design", "UI"]
}
```

## Database

The project uses Prisma as the database ORM and SQLite for local
persistence.

Useful Prisma commands:

``` bash
npx prisma generate
npx prisma db push
npx prisma studio
```

`prisma studio` can be used to inspect and manage database records
during development.

## Development

Run the frontend and backend in separate terminals.

### Frontend

``` bash
cd frontend
npm run dev
```

### Backend

``` bash
cd backend
npm run start:dev
```

After both services are running, open:

``` text
http://localhost:3000
```

## Production Build

### Frontend

``` bash
cd frontend
npm run build
npm start
```

### Backend

``` bash
cd backend
npm run build
npm run start:prod
```

Make sure production environment variables point to the appropriate
backend and database services.

## Code Organization

The application follows a component-based architecture.

-   **Pages** handle application-level screens and routing.
-   **Components** contain reusable UI elements.
-   **API services** handle communication with the backend.
-   **NestJS modules** organize backend functionality.
-   **DTOs** validate incoming API requests.
-   **Prisma** handles database access and persistence.

## Error Handling

The application includes basic handling for:

-   Invalid requests
-   Missing resources
-   API errors
-   Empty task lists
-   Loading states
-   Database/API failures

## Responsive Design

The interface is designed to work across:

-   Desktop
-   Laptop
-   Tablet
-   Mobile devices

## Future Improvements

Possible extensions include:

-   Full authentication and authorization
-   Multiple workspaces
-   Real-time collaboration
-   Notifications
-   File attachments
-   Advanced project analytics
-   Activity history
-   Role-based permissions
-   PostgreSQL/MySQL support
-   Automated testing
-   CI/CD integration

## License

This project is provided for personal and educational purposes.

You are free to view, study, and modify the source code for learning and development purposes. Please do not use, redistribute, or publish the project as your own work without permission.

© 2026 Bhumika Kumari. All rights reserved.
