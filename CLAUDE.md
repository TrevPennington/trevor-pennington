@AGENTS.md

# Project notes

- Package manager is **npm** (`package-lock.json`); yarn was dropped. Don't reintroduce `yarn.lock`.
- Next.js 16 + Turbopack, React 19, Tailwind v4. Check `node_modules/next/dist/docs/` before using Next APIs.
- Scripts: `npm run dev`, `npm run build`, `npm run lint` (`eslint .`; `next lint` no longer exists).
- View transitions use React's `<ViewTransition>` plus `next/link` (no `next-view-transitions` package).
- `@splidejs/react-splide` types come from the shim in `src/types/react-splide.d.ts`. Don't add a tsconfig `paths` entry for it, because Turbopack would resolve it to the `.d.ts`.
- MCP servers in `.mcp.json`: `next-devtools` and `playwright`.
