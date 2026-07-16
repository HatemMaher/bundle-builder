import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

// Union type ensuring only valid section strings can be passed as state
type Section =
  | "cameras"
  | "plans"
  | "sensors"
  | "protection";

/**
 * Defines the shape of the Accordion context.
 */
interface AccordionContextType {
  openSection: Section;
  setOpenSection: (section: Section) => void;
}

const AccordionContext =
  createContext<AccordionContextType | null>(null);

  /**
 * AccordionProvider Component
 * * A simpler context provider (using useState instead of a reducer) designed to manage 
 * which section of the builder is currently expanded across different components.
 */
export const AccordionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // Defaults to the "cameras" section being open on first load
  const [openSection, setOpenSection] =
    useState<Section>("cameras");

  return (
    <AccordionContext.Provider
      value={{
        openSection,
        setOpenSection,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

/**
 * Custom Hook: useAccordion
 * * Enforces safe usage of the AccordionContext within its Provider tree.
 */
export const useAccordion = () => {
  const context = useContext(AccordionContext);

  if (!context)
    throw new Error(
      "useAccordion must be used inside AccordionProvider"
    );

  return context;
};