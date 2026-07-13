import type { ReactNode } from "react";

interface AccordionContentProps {
  children: ReactNode;
}

const AccordionContent = ({ children }: AccordionContentProps) => {
  return (
      <div className="flex w-full flex-col !px-3">
        {children}
      </div>
  );
};

export default AccordionContent;