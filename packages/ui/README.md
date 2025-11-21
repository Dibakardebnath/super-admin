# UI Components

A collection of reusable React components and CRM-specific components for the CRM application.

## Structure

### Base UI Components
Located in `src/components/ui/`, these are base UI components built with shadcn/ui:

- **Button** - Customizable button component with variants
- **Card** - Container component with header, content, and footer
- **Input** - Form input component with validation styling
- **Badge** - Status and category badges
- **Avatar** - User avatar with fallback
- **Separator** - Visual separator for content
- **Tabs** - Tabbed navigation component
- **Table** - Data table with header, body, and footer
- **DropdownMenu** - Contextual menu with actions
- **Sidebar** - Layout sidebar component

### CRM Components
Organized by functionality in `src/components/crm/`:

#### Analytics (`src/components/crm/analytics/`)
- **StatsCard** - Metric display with trend indicators
- **Insights** - Survey and feedback overview

#### Billing (`src/components/crm/billing/`)
- **BillingOverview** - Customer billing status and plans

#### Support (`src/components/crm/support/`)
- **SupportMessages** - Recent support tickets and messages

#### Users (`src/components/crm/users/`)
- **UserManagement** - User organization and status management

#### General (`src/components/crm/`)
- **Updates** - Announcements and product updates

## Usage

Import components from the main package:

```tsx
import { Button, Card, StatsCard } from '@crm/ui'
```

For CRM-specific components:

```tsx
import { StatsCard, UserManagement } from '@crm/ui'

// Or import specific categories
import { StatsCard } from '@crm/ui/analytics'
import { UserManagement } from '@crm/ui/users'
```

## Dependencies

- React 18
- Tailwind CSS
- Radix UI primitives
- Lucide React icons
- Class Variance Authority (CVA)
- clsx & tailwind-merge

## Development

Install dependencies:
```bash
bun install
```

Type check:
```bash
bun run type-check
```

Lint:
```bash
bun run lint
```