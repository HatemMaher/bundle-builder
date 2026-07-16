import type { ReactNode } from "react";

/**
 * Props interface for the Accordion container.
 */
interface AccordionProps {
  children: ReactNode;
}

/**
 * Accordion Component
 * * Acts as the main layout wrapper for a group of accordion items. 
 * It manages the vertical stacking and spacing between the child components.
 */
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
      {/* Renders the nested child elements passed into the component */}
      {children}
    </div>
  );
};

export default Accordion;