interface AccordionStepProps {
  step: number;
  totalSteps?: number;
}

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