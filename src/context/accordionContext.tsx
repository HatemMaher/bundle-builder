import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type Section =
  | "cameras"
  | "plans"
  | "sensors"
  | "protection";

interface AccordionContextType {
  openSection: Section;
  setOpenSection: (section: Section) => void;
}

const AccordionContext =
  createContext<AccordionContextType | null>(null);

export const AccordionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
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

export const useAccordion = () => {
  const context = useContext(AccordionContext);

  if (!context)
    throw new Error(
      "useAccordion must be used inside AccordionProvider"
    );

  return context;
};