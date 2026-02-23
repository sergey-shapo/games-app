A simple, modern web application built with **Next.js 16** (App Router) to showcase video game cards featuring titles, optimized images, ratings, and clickable links to game details.

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
   
Install dependencies:

# Recommended (faster & cleaner lockfile)
pnpm install

# Or with npm
npm install

Running the Project
Development (with hot reloading)

# Recommended (faster & cleaner lockfile)
pnpm install

# Or with npm
npm install

# Or with yarn
yarn install

Production Build & Preview
Build the app:

npm run build
# or pnpm build / yarn build

Running Tests
The project includes component tests (e.g. GameCard.test.tsx, Footer.test.tsx).

npm test
# or
pnpm test

Best Practices in This Project

TypeScript for props and components
Accessible test queries (getByRole, getByText, getByAltText)
Mocked Next.js modules in tests (next/image, next/link)
Sass modules for scoped, maintainable CSS

