import type { Dispatch, ReactNode, SetStateAction } from "react";
import ProductGrid from "../product-card/ProductGrid";

export interface BuilderStep {
  step: number;
  title: string;
  content: ReactNode;
}

// Wrap in a function so we can pass the step-advancer down if needed inside custom content
export const getBuilderSteps = (setOpenStep: Dispatch<SetStateAction<1 | 2 | 3 | 4>>): BuilderStep[] => [
  {
    step: 1,
    title: "Choose your cameras",
    content: <ProductGrid />, // Assuming ProductGrid now filters for category="camera" internally or you handle it there
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