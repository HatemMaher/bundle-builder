import type { ReactNode } from "react";
import ProductGrid from "../product-card/ProductGrid";

/**
 * Interface defining the structure of a single step in the bundle builder flow.
 */
export interface BuilderStep {
  step: number;
  title: string;
  content: ReactNode;
}

/**
 * Generates the configuration for all builder steps.
 * * This centralizes the step data, making it easy to map over in the main Builder component.
 * Each step dynamically renders the ProductGrid component, filtering it to only show
 * products belonging to that specific category.
 * * @returns An array of BuilderStep objects.
 */
export const getBuilderSteps = (): BuilderStep[] => [
  {
    step: 1,
    title: "Choose your cameras",
    content: <ProductGrid category="camera" />,
  },
  {
    step: 2,
    title: "Choose your plan",
    content: <ProductGrid category="plan" />,
  },
  {
    step: 3,
    title: "Choose your sensors",
    content: <ProductGrid category="sensor" />,
  },
  {
    step: 4,
    title: "Add extra protection",
    content: <ProductGrid category="accessory" />,
  },
];