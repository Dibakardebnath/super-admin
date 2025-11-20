# Multi-App CRM System

A modern monorepo built with Turborepo that includes a CRM, CMS, and Admin system.

## Tech Stack

### Frontend (TanStack Start)
- TanStack Start for full-stack React
- TanStack Router for routing
- TanStack Query for state management
- Tailwind CSS for styling
- TypeScript

### Backend (Elysia)
- Elysia framework with Bun runtime
- Drizzle ORM for database operations
- PostgreSQL database
- JWT authentication

### Shared Packages
- UI Components (reusable React components)
- Utils (shared utility functions)
- Types (TypeScript type definitions)
- Config (configuration management)
- Database (shared database schemas)

## Project Structure

```
my-monorepo/
  apps/
    web/      → TanStack Start (full-stack)
    api/      → Elysia backend
  packages/
    ui/       → Reusable React components
    utils/    → Utility functions
    types/    → TypeScript types
    config/   → Configuration
    db/       → Database schemas and client
```

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env` and configure your environment variables
3. Install dependencies:
   ```bash
   bun install
   ```
4. Set up your PostgreSQL database and update the `DATABASE_URL` in `.env`
5. Run database migrations:
   ```bash
   bun run db:push
   ```
6. Start the development servers:
   ```bash
   bun run dev
   ```

## Available Scripts

- `bun run dev` - Start all development servers
- `bun run build` - Build all applications
- `bun run test` - Run tests
- `bun run lint` - Run linting
- `bun run clean` - Clean build artifacts

## App URLs

- Frontend: http://localhost:3000
- API: http://localhost:3001
- API Docs: http://localhost:3001/swagger

## Applications

### CRM (/crm)
Customer Relationship Management with features for:
- Customer management
- Lead tracking
- Sales pipeline
- Analytics

### CMS (/cms)
Content Management System with features for:
- Blog post management
- Media library
- Content publishing
- Author management

### Admin (/admin)
System administration with features for:
- User management
- System settings
- Audit logs
- Monitoring

## Authentication

Authentication is handled through JWT tokens. The auth module includes:
- User registration
- Login/logout
- Profile management
- Role-based access control

## Database

The project uses PostgreSQL with Drizzle ORM. The database schema is defined in the `packages/db` directory and shared across all applications.