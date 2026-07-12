import type { ReactNode } from "react";
import ProductGrid from "../product-card/ProductGrid";

export interface BuilderStep {
  step: number;
  title: string;
  content: ReactNode;
}

// Removed the unused parameter to clear the TypeScript warning
export const getBuilderSteps = (): BuilderStep[] => [
  {
    step: 1,
    title: "Choose your cameras",
    content: <ProductGrid />,
  },
  {
    step: 2,
    title: "Choose your plan",
    content: <div className="py-8 text-sm text-[#6F7882]">Plans coming soon...</div>,
  },
  {
    step: 3,
    title: "Choose your sensors",
    content: <div className="py-8 text-sm text-[#6F7882]">Sensors coming soon...</div>,
  },
  {
    step: 4,
    title: "Add extra protection",
    content: <div className="py-8 text-sm text-[#6F7882]">Accessories coming soon...</div>,
  },
];