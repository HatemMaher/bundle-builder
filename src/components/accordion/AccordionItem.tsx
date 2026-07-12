import type { ReactNode } from "react";

import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import AccordionNextButton from "./AccordionNextButton";
import AccordionStep from "./AccordionStep";

import type { AccordionStep as Step } from "./AccordionIcons";

interface AccordionItemProps {
  step: Step;
  title: string;
  selected: number;
  open?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const nextStepLabels: Partial<Record<Step, string>> = {
  1: "Choose your plan",
  2: "Choose your sensors",
  3: "Add extra protection",
};

const AccordionItem = ({
  step,
  title,
  selected,
  open = false,
  children,
  onClick,
}: AccordionItemProps) => {
  return (
    <div
        className={`
          w-full 
          overflow-hidden 
          transition-all 
          duration-300
          ${
            open 
              ? "flex justify-center items-center min-h-[650px] bg-[#EDF4FF] rounded-[10px] " 
              : "bg-transparent border-b border-[#E4E9EF] hover:bg-black/[0.01]"
          }
        `}
      >
    <section className="flex ">
      
      {/* 2. VISUAL BOX (Blue background, active spacing) */}
      
        
        {/* 3. INNER CONTENT: We increase the padding here to create that wide empty space */}
        <div 
          className={`
            flex 
            w-full 
            flex-col 
            ${open ? "px-[40px] pt-[24px] pb-[40px]" : "py-[16px] px-[15px]"}
          `}
        >
          
          {/* Step Label */}
          <div className={`w-full ${open ? "mb-[12px]" : "mb-[8px]"}`}>
            <AccordionStep step={step} className="!px-0" />
          </div>

          {/* Thin dark line separator */}
          {open && (
            <div className="w-full h-[1px] bg-[#1F1F1F] opacity-10 mb-[16px]" />
          )}

          {/* Accordion Header */}
          <AccordionHeader
            step={step}
            title={title}
            selected={selected}
            expanded={open}
            bordered={false}
            onClick={onClick}
            className="!px-0"
          />

          {/* Expanded Content Wrapper */}
          {open && (
            <AccordionContent>
              {children}

              {step < 4 && (
                <div className="mt-[32px] flex w-full justify-center">
                  <AccordionNextButton
                    label={`Next: ${nextStepLabels[step]}`}
                    onClick={() => {
                      // Logic to advance to the next step
                    }}
                  />
                </div>
              )}
            </AccordionContent>
          )}

        </div>
    </section>
    </div>
  );
};

export default AccordionItem;