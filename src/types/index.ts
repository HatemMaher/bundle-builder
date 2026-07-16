/**
 * Barrel Export File
 * * Simplifies imports across the application by aggregating type definitions.
 * This allows components to import multiple types from a single path (e.g., `import { Product, Selection } from "../../types";`)
 * rather than writing separate import statements for every file.
 */
export * from "./product";
export * from "./bundle"