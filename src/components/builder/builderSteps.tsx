import type { ReactNode } from "react";
import ProductGrid from "../product-card/ProductGrid";

export interface BuilderStep {
  step: number;
  title: string;
  content: ReactNode;
}

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