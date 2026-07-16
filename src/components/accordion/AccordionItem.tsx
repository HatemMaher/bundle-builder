import type { ReactNode } from "react";

import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import AccordionNextButton from "./AccordionNextButton";
import AccordionStep from "./AccordionStep";

import type { AccordionStep as Step } from "./AccordionIcons";

/**
 * Props interface for the individual AccordionItem component.
 */
interface AccordionItemProps {
  step: Step;
  title: string;
  selected: number;
  open?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  onNext?: () => void;
}

/**
 * Dictionary mapping the current step number to the text label of the NEXT step.
 * Used dynamically by the AccordionNextButton.
 */
const nextStepLabels: Partial<Record<Step, string>> = {
  1: "Choose your plan",
  2: "Choose your sensors",
  3: "Add extra protection",
};


/**
 * AccordionItem Component
 * * Represents a single, independently controllable section within the Builder.
 * Manages complex state-driven UI changes, including a dedicated active background layer,
 * border toggling, and conditional rendering of content and navigation buttons.
 */
const AccordionItem = ({
  step,
  title,
  selected,
  open = false,
  children,
  onClick,
  onNext,
}: AccordionItemProps) => {
  return (
    <div
      className={`
        relative flex w-full flex-col transition-all duration-300
        ${open ? "!my-[1px]" : "border-b border-[#E4E9EF] hover:bg-black/[0.01]"} 
      `}
    >
      {/* BACKGROUND DIV */}
      {open && (
        <div className="absolute inset-0 z-0 rounded-[12px] bg-[#EDF4FF]" />
      )}

      {/* CONTENT DIV */}
      <div 
        className={`
          relative z-10 flex w-full flex-col
          /* MATHEMATICAL FIX: Exactly 15px horizontal padding per Figma CSS */
          ${open ? "!px-[15px] !py-[20px]" : "!py-[24px] !px-[15px] md:px-0"}
        `}
      >
        
        <div className={`w-full flex ${open ? "!mb-[20px] border-b border-[#1F1F1F]/10 !pb-[12px]" : "!mb-[12px]"}`}>
          <AccordionStep step={step} />
        </div>

        {/* The clickable title and icon area */}  
        <AccordionHeader
          step={step}
          title={title}
          selected={selected}
          expanded={open}
          onClick={onClick}
        />

        {/* CONDITIONAL RENDER: Only mount the content and the 'Next' button if the item is open.
          This prevents hidden products from bloating the DOM or being accidentally clicked.
        */}
        {open && (
          <AccordionContent>

            {/* The injected children (Product Grid) */} 
            <div className="w-full !pt-[24px]">
              {children}
            </div>

            {/* Conditionally render the 'Next' button only if we are not on the final step (Step 4) */}
            {step < 4 && (
              <div className="!mt-[20px] flex w-full justify-center">
                <AccordionNextButton
                  label={`Next: ${nextStepLabels[step]}`}
                  onClick={onNext}
                />
              </div>
            )}
            
          </AccordionContent>
        )}

      </div>
    </div>
  );
};

export default AccordionItem;