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
        ${open ? "my-[16px]" : ""}
      `}
    >
      {/* 1. THE SEPARATED BACKGROUND DIV 
          This sits behind the content (z-0) and perfectly fills the wrapper.
      */}
      {open && (
        <div className="absolute inset-0 z-0 rounded-[12px] bg-[#EDF4FF]" />
      )}

      {/* 2. THE MAIN CONTENT DIV 
          This sits on top (z-10) and handles all the structural padding 
          and layout without worrying about the background color.
      */}
      <div 
        className={`
          relative z-10 flex w-full flex-col
          ${open ? "p-[20px] sm:p-[24px] md:p-[32px]" : "py-[20px] border-b border-[#E4E9EF] hover:bg-black/[0.01]"}
        `}
      >
        <div className={`w-full ${open ? "mb-[12px]" : "mb-[8px]"}`}>
          <AccordionStep step={step} className="!px-5 !py-2" />
        </div>

        {open && (
          <div className="mb-[24px] h-[1px] w-full bg-[#1F1F1F] opacity-10" />
        )}

        <AccordionHeader
          step={step}
          title={title}
          selected={selected}
          expanded={open}
          bordered={false}
          onClick={onClick}
          className="!px-5 !py-2"
        />

        {open && (
          <AccordionContent>
            
            {/* The Grid of Cards */}
            <div className="flex w-full justify-center pt-[24px] pb-[16px]">
              {children}
            </div>

            {step < 4 && (
              <div className="mt-[32px] flex w-full justify-center">
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