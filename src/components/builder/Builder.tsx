import { useMemo, useState } from "react";

import Accordion from "../accordion/Accordion";
import AccordionItem from "../accordion/AccordionItem";

import { useBuilder } from "../../context/BuilderContext";

import { builderSteps } from "./builderSteps";

const Builder = () => {
  const { state } = useBuilder();

  const [openStep, setOpenStep] = useState<1 | 2 | 3 | 4>(1);

  const cameraSelectedCount = useMemo(() => {
    return Object.values(state.selectedVariants).reduce(
      (total, variants) =>
        total +
        Object.values(variants).filter(
          (quantity) => quantity > 0
        ).length,
      0
    );
  }, [state.selectedVariants]);

  const getSelectedCount = (step: number) => {
    switch (step) {
      case 1:
        return cameraSelectedCount;

      default:
        return 0;
    }
  };

  return (
    <Accordion>
      {builderSteps.map((section) => (
        <AccordionItem
          key={section.step}
          step={section.step}
          title={section.title}
          selected={getSelectedCount(section.step)}
          open={openStep === section.step}
          onClick={() => setOpenStep(section.step)}
        >
          {section.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Builder;