# Nodus Protocol Frontend

Marketing and landing page for the Nodus Protocol AMM DEX — built with Next.js 16 and Tailwind CSS v4.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Runtime | React 19 |

---

## Project Structure

```
Nodus-Protocol-Frontend/
├── app/
│   ├── layout.tsx        # Root layout with Navbar
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles
├── components/
│   └── Navbar.tsx        # Sticky nav with mobile menu
├── public/               # Static assets
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Getting Started

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Type-check without emitting |

---

## License

MIT License — see [LICENSE](LICENSE) for details.
