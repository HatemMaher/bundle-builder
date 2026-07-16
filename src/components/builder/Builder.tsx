import {useState } from "react";
import Accordion from "../accordion/Accordion";
import AccordionItem from "../accordion/AccordionItem";
import { useBuilder } from "../../context/BuilderContext";
import { getBuilderSteps } from "./builderSteps";
import type { ProductCategory } from "../../types";
import { products } from "../../data/products";


/**
 * Builder Component
 * * Acts as the main orchestrator for the step-by-step product selection flow.
 * It manages which accordion step is currently open and calculates real-time 
 * selection metrics based on the global builder state.
 */
const Builder = () => {
  const { state } = useBuilder();
  const [openStep, setOpenStep] = useState<1 | 2 | 3 | 4>(1);

  /**
   * Helper function to dynamically calculate how many distinct products 
   * a user has selected within a specific category.
   * * @param category - The product category to filter by (e.g., "camera", "plan")
   * @returns The total number of distinct products selected in that category.
   */
  const getSelectedCountForCategory = (category: ProductCategory) => {
    return products
      .filter((p) => p.category === category)
      .reduce((count, product) => {
        const variants = state.selectedVariants[product.id] || {};
        const hasSelectedVariant = Object.values(variants).some((qty) => qty > 0);
        return hasSelectedVariant ? count + 1 : count;
      }, 0);
  };

  /**
   * Maps the current accordion step number to its respective product category 
   * to fetch the accurate selection count for the AccordionItem header.
   */
  const getSelectedCount = (step: number) => {
    switch (step) {
      case 1: return getSelectedCountForCategory("camera");
      case 2: return getSelectedCountForCategory("plan");
      case 3: return getSelectedCountForCategory("sensor");
      case 4: return getSelectedCountForCategory("accessory");
      default: return 0;
    }
  };

  // Fetch the configuration for each step (title, step number, and the UI content grid)
  const steps = getBuilderSteps();

  return (
    <Accordion>
      {steps.map((section) => (
        <AccordionItem
          key={section.step}
          step={section.step as 1 | 2 | 3 | 4}
          title={section.title}
          selected={getSelectedCount(section.step)}
          open={openStep === section.step}
          onClick={() => setOpenStep(section.step as 1 | 2 | 3 | 4)}
          onNext={() => setOpenStep((section.step + 1) as 1 | 2 | 3 | 4)} // Pass onNext prop
        >
          {section.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Builder;