//Props interface for the AccordionStep indicator component.
interface AccordionStepProps {
  step: number;
  totalSteps?: number;
}

/**
 * AccordionStep Component
 * * A small visual indicator displaying the current progress in the builder flow (e.g., "STEP 1 OF 4").
 * Designed to look like a subtle UI label rather than interactive text.
 */
const AccordionStep = ({
  step,
  totalSteps = 4,
}: AccordionStepProps) => {
  return (
    <span className="text-[12px] font-medium uppercase tracking-[1.6px] leading-none text-[#484848] select-none">
      Step {step} of {totalSteps}
    </span>
  );
};

export default AccordionStep;