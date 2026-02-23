// jest.config.ts
import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest", // Permite usar TypeScript
  testEnvironment: "jsdom", // Necesario para React/Next.js
  roots: ["<rootDir>"], // Carpeta raíz
  moduleNameMapper: {
    // Mapea los alias de tsconfig
    "^@/(.*)$": "<rootDir>/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Para estilos
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // setup global
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(ts|tsx|mts|js|jsx)$": "ts-jest", // Transpila TS/JSX
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "/.next/"],
};

export default config;
