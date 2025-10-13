# Hackathrone Marketing Site

A modern marketing website built with Next.js 14, TypeScript, and Tailwind CSS for the Hackathrone event.

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Package Manager**: npm

## 🏗️ Development Guidelines

### File Organization Rules

1. **shadcn/ui Components**: All shadcn components should be placed in `src/components/ui/`
2. **Custom Components**: All custom components should be in `src/components/`. Globally used components go in `src/components/common/`
3. **Server Actions**: All server actions should be written in `src/app/actions/`. For specific collections (e.g., events), use descriptive filenames like `events.action.ts`
4. **Data Models**: All models should be written in `src/app/models/`. For specific collections, use descriptive filenames like `events.model.ts`
5. **Custom Hooks**: All hooks should be placed in `src/hooks/`
6. **Utilities**: All utility functions should be in `src/lib/utils`
7. **Styles**: All global styles should be in `src/app/globals.css`
8. **Images**: All images should be placed in `src/public/images/`
9. **Fonts**: All custom fonts should be in `src/app/fonts/`

### Commit Guidelines

**IMPORTANT**: All commits should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

Examples:

- `feat: add user authentication`
- `fix: resolve navigation bug`
- `docs: update README`
- `style: format code with prettier`
- `refactor: reorganize component structure`

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd hackathrone-marketing-site
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

This project uses:

- **shadcn/ui** for consistent, accessible UI components
- **Tailwind CSS** for utility-first styling
- **Lucide React** for consistent iconography

### Styling Guidelines

- Use Tailwind CSS classes for styling
- Follow the existing design patterns
- Maintain consistency with the established color scheme
- Use semantic HTML elements for accessibility

## 📚 Important Resources

- [Conventional Commits Documentation](https://www.conventionalcommits.org/en/v1.0.0/)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📝 Notes

- This project uses Next.js v14 and Tailwind CSS v3.4.1 - please do not change these dependency versions
- The UI/UX design will be provided soon
- All team members should familiarize themselves with this architecture before contributing
