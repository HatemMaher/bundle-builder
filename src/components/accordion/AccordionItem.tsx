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
  onNext?: () => void;
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
  onNext,
}: AccordionItemProps) => {
  
  return (
    <div
      className={`
        relative flex w-full flex-col transition-all duration-300
        ${open ? "my-[16px]" : "hover:bg-black/[0.01] border-b"} 
      `}
    >
      {/* 1. THE SEPARATED BACKGROUND DIV */}
      {open && (
        <div className="absolute inset-0 z-0 rounded-[12px] bg-[#EDF4FF]" />
      )}

      {/* 2. THE MAIN CONTENT DIV */}
      <div 
        className={`
          relative z-10 flex w-full flex-col
          ${open ? "p-[20px] sm:p-[24px] md:p-[32px]" : "py-[20px]"}
        `}
      >
        
        {/* Step Label and Dynamic Border */}
        {/* We moved the border logic here. If open, the border has opacity-10. 
            If closed, the border sits exactly here, underneath the step label! */}
        <div className={`w-full ${open ? "mb-[24px] border-b " : "mb-[16px] border-b"}`}>
          <AccordionStep step={step} className="!py-3 !px-4" />
        </div>

        <AccordionHeader
          step={step}
          title={title}
          selected={selected}
          expanded={open}
          bordered={false}
          onClick={onClick}
          className="!py-5 !px-4"
        />

        {open && (
          <AccordionContent>
            
            {/* The Grid of Cards */}
            <div className="!px-6">
              {children}
            </div>

            {step < 4 && (
              <div className="flex w-full justify-center !py-4">
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