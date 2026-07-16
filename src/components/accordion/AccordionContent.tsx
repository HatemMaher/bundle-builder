import type { ReactNode } from "react";

/**
 * Props interface for the AccordionContent component.
 */
interface AccordionContentProps {
  children: ReactNode;
}

/**
 * AccordionContent Component
 * * Serves as the wrapper for the expandable content area of an AccordionItem.
 * It ensures that whatever is passed inside (forms, grids, text) follows a 
 * consistent full-width, vertical flexbox layout.
 */
const AccordionContent = ({ children }: AccordionContentProps) => {
  return (
      <div className="flex w-full flex-col">
        {/* Renders the injected content (e.g., ProductGrid, text, or nested layouts) */}
        {children}
      </div>
  );
};

export default AccordionContent;