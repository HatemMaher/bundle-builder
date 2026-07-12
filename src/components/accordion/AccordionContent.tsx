import type { ReactNode } from "react";

interface AccordionContentProps {
  children: ReactNode;
}

const AccordionContent = ({ children }: AccordionContentProps) => {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col">
        {children}
      </div>
    </div>
  );
};

export default AccordionContent;