# 1CloudHub Sales Strategy Microsite

This microsite showcases the 1CloudHub sales transformation strategy, SPARK framework, and performance metrics.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/       # Reusable UI components
│   └── ui/          # shadcn/ui components
├── constants/       # Constants and configuration
├── hooks/          # Custom React hooks
├── layouts/        # Page layouts
├── lib/            # Utility functions
├── pages/          # Route pages
├── styles/         # Global styles
├── types/          # TypeScript type definitions
└── utils/          # Helper functions
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Routes

- `/` - Hero/Home page
- `/sales-transformation` - Sales model evolution
- `/spark-framework` - SPARK customer journey
- `/sales-interlocks` - Functional coordination
- `/execution-governance` - Systems and processes
- `/kpi-metrics` - Performance metrics

## Design Principles

- **Accessibility First**: WCAG AA compliant
- **Mobile Responsive**: Mobile-first design approach
- **Progressive Disclosure**: Information revealed as needed
- **Performance**: Optimized for fast load times

## Color System

The design uses a custom color palette for the SPARK framework:
- Spark: Yellow tones
- Kindle: Orange tones
- Flare: Deep orange tones
- Ignite: Red-orange tones
- Blaze: Deep red tones

## Development Notes

- Use semantic HTML elements
- Maintain consistent heading hierarchy
- Include ARIA labels for interactive elements
- Test keyboard navigation
- Ensure minimum 44x44px touch targets
