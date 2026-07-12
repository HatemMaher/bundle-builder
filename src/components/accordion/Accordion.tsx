import type { ReactNode } from "react";

interface AccordionProps {
  children: ReactNode;
}

const Accordion = ({ children }: AccordionProps) => {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        gap-4
      "
    >
      {children}
    </div>
  );
};

export default Accordion;