# D&D Playing Page

A visually immersive, animated "Playing" page for a Dungeons & Dragons (D&D) themed web application, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Animated Greek-inspired border** with SVG vines and corner decorations
- **Large "PLAYING" title** for session status
- **Character avatar** with name and level display
- **Responsive and modern UI** using Tailwind CSS and Radix UI components
- **TypeScript** for type safety and maintainability

## Tech Stack

- [Next.js](https://nextjs.org/) (v15+)
- [React](https://react.dev/) (v19+)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [PostCSS](https://postcss.org/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn, but pnpm is preferred)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd dnd-playing-page
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```
   Or use `npm install` or `yarn install` if you prefer.

### Running Locally

Start the development server:

```bash
pnpm dev
```
Or with npm/yarn:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Building for Production

To build the app for production:

```bash
pnpm build
```

To start the production server:

```bash
pnpm start
```

### Linting

To run the linter:

```bash
pnpm lint
```

## Project Structure

- `app/` - Main Next.js app directory (entry point: `app/page.tsx`)
- `components/` - Reusable UI components
- `styles/` - Global and component styles
- `public/` - Static assets (e.g., avatar images)
- `lib/`, `hooks/` - Utilities and custom React hooks

## Customization

- Replace `/public/fantasy-character-avatar.png` with your own character image.
- Edit `app/page.tsx` to change the character name, level, or add more features.

## License

This project is for personal or educational use. Please contact the author for other uses.

---

Enjoy your D&D sessions with style! 