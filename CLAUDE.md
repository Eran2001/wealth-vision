# Wealth Vision — Project Conventions

## Design System Rules

All visual tokens must be configured in `src/index.css` and referenced through Tailwind utility classes. **Never hardcode values directly in component files.**

### 1. Text sizes
Define all custom text sizes in `@theme` inside `index.css` using `--text-*`.
Use the semantic class name in components (e.g. `text-eyebrow`, `text-sm`, `text-display`).
Do not write `text-[11px]` or any arbitrary text size in a component.

### 2. Font sizes
Same rule as text sizes — configure in `@theme`, use the class name.
Do not write `font-size` inline or use arbitrary values like `text-[1.375rem]`.

### 3. Leading (line-height)
Define custom leading values in `@theme` as `--leading-*`.
Use `leading-display`, `leading-relaxed`, etc. from the configured scale.
Do not write `leading-[1.05]` or similar arbitraries in components.

### 4. Tracking (letter-spacing)
Define custom tracking in `@theme` as `--tracking-*`.
Use `tracking-wide`, `tracking-wider`, etc. from the scale.
Do not write `tracking-[0.2em]` or similar arbitraries in components.

### 5. Rounded (border-radius)
All border-radius values must be defined in `@theme` as `--radius-*`.
Use `rounded-xs`, `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full`.
Do not write `rounded-[2px]` or any arbitrary radius in components.

### 6. Colors
All colors — including toast variants, status badges, white — must be defined as CSS variables in `:root` inside `index.css` and mapped in `@theme inline` as `--color-*`.
Use semantic class names: `bg-toast-success`, `text-success-fg`, `bg-status-ok`, etc.
Do not write `bg-green-600`, `bg-red-600`, `text-emerald-800`, `text-white` (use `text-toast-foreground`), or any raw Tailwind palette color in components.

---

## Project Stack
- React 18 + TypeScript
- Tailwind CSS v4 (Vite plugin — no postcss.config, no tailwind.config)
- All theme config lives in `src/index.css`
- shadcn/ui components live in `src/components/ui/` — minimise changes there
- Data files: `src/data/` — update these for content changes
- Package manager: **npm only** (no bun, no yarn)
