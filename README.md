# episuite-viewer

## description

Interactive viewer for EPA EPI Suite™ chemical properties predictions. This repository is a frontend test assignment that displays some chemical property. The app consumes a RESTful API and presents scientific data in organized tabbed sections with model descriptors, analogs matching, and detailed property estimations.

## Tech stack

- Nuxt 4 (Composition API + TypeScript)
- @nuxt/ui / Tailwind CSS
- openapi-typescript (auto-generated API types)
- Vue 3 Composition API

## How to run (recommended: pnpm)

Prerequisites: Node.js (LTS) and pnpm.

Install and run the dev server:

```bash
pnpm install
pnpm dev
```

Build / preview:

```bash
pnpm build
pnpm preview
```

## Project structure (high level)

- `pages/index.vue` — main dashboard displaying chemical properties with tabbed interface
- `components/` — UI building blocks:
  - `CardTitle.vue` — section header with description and guide link
  - `ChemicalPropertiesCard.vue` — displays basic chemical info
  - `ChemicalPropertyDisplay.vue` — shows individual chemical property with label (used in ChemicalPropertiesCard)
  - `SelectedValueCard.vue` — highlight selected property value with units
  - `SummaryTabLayout.vue` — layout wrapper for summary tab sections
  - `SummaryTable.vue` — tabular display of estimated and experimental values (Nuxt UI Table)
  - `ModelDescriptorsTable.vue` — tabular display of descriptors (Nuxt UI Table)
  - `LoadingCard.vue` — loading state placeholder when fetching data for ChemicalPropertiesCard
- `composables/` — reusable logic:
  - `useEpiSuiteApi.ts` — fetches chemical properties from EPI Suite API
  - `useLoadAnalogs.ts` — loads analog compounds for comparison
- `types/` — TypeScript definitions:
  - `episuite-api.d.ts` — auto-generated from OpenAPI spec
- `utils/` — helper functions:
  - `utils.ts` — value formatting with unit conversion

## API contract

- GET https://episuite.dev/EpiWebSuite/api/submit?cas=XXXXXX-XX-X
  - Query param: `cas` (chemical CAS number)
  - Response: `SubmitResult` object containing:
- GET https://episuite.dev/EpiWebSuite/api/draw-chemical?smiles=SMILES
  - Query param: `smiles`
  - Response: `Blob` (SVG image of chemical structure)

## Features & implementation notes

- **Tabbed interface**: Two main property sections (Log K_OW, Melting/Boiling Point) each with Summary, Model Descriptors, and AIM Analogs tabs
- **Analog compounds**: Dynamic loading of structurally similar compounds for property comparison
- **Value formatting**: Automatic conversion of large numbers to scientific notation, unit display (°C, °K)
- **Lazy loading**: To show loading state while opening the page


