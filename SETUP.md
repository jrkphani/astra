# Installation and Setup Instructions

## Prerequisites

- Node.js 18+ and npm installed
- Git installed

## Installation

1. Navigate to the project directory:
```bash
cd /Users/jrkphani/Projects/Astra/1cloudhub-sales-site
```

2. Install dependencies:
```bash
npm install
```

3. Install additional shadcn/ui components as needed:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add navigation-menu
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add accordion
npx shadcn-ui@latest add hover-card
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add progress
npx shadcn-ui@latest add separator
```

## Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure Overview

- `/src/components` - Reusable UI components
  - `/ui` - shadcn/ui components
  - `/sections` - Page sections
  - `/charts` - Data visualization components
- `/src/pages` - Route pages
- `/src/layouts` - Layout components
- `/src/constants` - Static data and configuration
- `/src/types` - TypeScript type definitions
- `/src/hooks` - Custom React hooks
- `/src/utils` - Utility functions
- `/src/data` - Data files and APIs
- `/src/styles` - Global styles

## Next Steps

1. Complete the navigation component with dropdown menus
2. Build out each page with the content from the markdown document
3. Create interactive components for:
   - SPARK journey visualization
   - Territory maturity map
   - KPI dashboards
   - Conversion funnel charts
4. Implement progressive disclosure patterns
5. Add animations and transitions
6. Test accessibility features
7. Optimize for mobile devices
