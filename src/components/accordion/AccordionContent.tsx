import type { ReactNode } from "react";

interface AccordionContentProps {
  children: ReactNode;
}

const AccordionContent = ({ children }: AccordionContentProps) => {
  return (
    <div className="w-full pt-[20px]">
      <div className="flex flex-col gap-[20px]">
        {children}
      </div>
    </div>
  );
};

export default AccordionContent;