# Task Management System - Backend

NestJS + TypeScript REST API scaffold with DTO validation and CRUD endpoints.

## Run

```bash
npm install
npm run start:dev
```

API: http://localhost:4000/tasks

## Endpoints

- GET /tasks
- GET /tasks/:id
- POST /tasks
- PATCH /tasks/:id
- DELETE /tasks/:id

The service currently uses an in-memory repository so the frontend can be developed independently. Replace the repository with PostgreSQL/SQLite/MongoDB before final assessment submission if persistence is required.
