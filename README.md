A simple, modern web application built with **Next.js 16** (App Router) to showcase video game cards featuring titles, optimized images, ratings, and clickable links to game details.

## Why Next.js?

This project uses **Next.js 16** (built on React) instead of pure React, Angular, or AngularJS for the following reasons (February 2026 perspective):

- **Performance & SEO out of the box** — SSR, SSG, image optimization, and fast loads are built-in (critical for any public-facing catalog/app).
- **Modern React with zero boilerplate** — file-based routing, API routes, TypeScript support, and App Router without extra libraries.
- **Developer experience** — fast iteration, great DX, and seamless Vercel deployment (see live demo).
- **Future-proof & scalable** — handles growth (add API, auth, dynamic data) without rewriting the stack.
- **Better fit than alternatives**:
  - Pure React → too much manual setup for routing/rendering/optimization.
  - Angular (modern) → steeper curve, heavier for CSR-focused apps, less hybrid rendering flexibility.
  - AngularJS → legacy, unmaintained, insecure, and obsolete in 2026.

Next.js delivers the speed, simplicity, and modern features this game showcase deserves while staying firmly in the React ecosystem.

![Project Preview] 

https://games-app-mocha.vercel.app/


## Features

- Responsive game card component (`GameCard`)
- Static footer with personal credit
- Type-safe components with TypeScript
- Scoped styling using Sass modules (`.module.scss`)
- Unit & component tests with Jest + React Testing Library
- Optimized images via `next/image`
- Navigation using `next/link`
- - **Reusable `useAxios` custom hook** for API calls:  
  - Built on a centralized Axios instance (`lib/api.ts`) with request/response interceptors  
  - Automatically handles loading state, errors, and global error messages (e.g., 401, 404, 429 for RAWG API)  
  - Supports easy integration in Client Components with React hooks  
  - Keeps API logic separated from UI components for better maintainability and reusability

## Tech Stack

- **Next.js** 16.1.6 (App Router)
- **React** 19.2.3
- **TypeScript** ^5
- **Sass** ^1.97.3 (modules)
- **Jest** ^30.2.0 + **React Testing Library** ^16.3.2
- **Axios** ^1.13.5 (for potential API requests)
- **ESLint** with **eslint-config-next**

## Prerequisites

- Node.js ≥ 18.17 (recommended: 20.x or higher)
- npm, pnpm (recommended), or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sergey-shapo/games-app.git
   cd chall
   
## Install dependencies:

# Recommended (faster & cleaner lockfile)
pnpm install

# Or with npm
npm install

## Running the Project
Development (with hot reloading)

Recommended (faster & cleaner lockfile)
pnpm install

Or with npm
npm install

Or with yarn
yarn install

## Production Build & Preview
Build the app:

npm run build
or pnpm build / yarn build


## Running Tests
The project includes component tests (e.g. GameCard.test.tsx, Footer.test.tsx).

npm test
pnpm test

## Best Practices in This Project

TypeScript for props and components

Accessible test queries (getByRole, getByText, getByAltText)

Mocked Next.js modules in tests (next/image, next/link)

Sass modules for scoped, maintainable CSS

