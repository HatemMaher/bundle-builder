import type { ReactNode } from "react";

interface AccordionContentProps {
  children: ReactNode;
}

const AccordionContent = ({ children }: AccordionContentProps) => {
  return (
      <div className="flex w-full flex-col">
        {children}
      </div>
  );
};

export default AccordionContent;