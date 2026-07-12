interface AccordionStepProps {
  step: number;
  totalSteps?: number;
  className?: string;
}

const AccordionStep = ({
  step,
  totalSteps = 4,
  className = "",
}: AccordionStepProps) => {
  return (
    <div className={`flex w-full items-center px-[15px] ${className}`}>
      <span className="text-[12px] font-medium uppercase tracking-[1.6px] leading-none text-[#484848] select-none">
        Step {step} of {totalSteps}
      </span>
    </div>
  );
};

export default AccordionStep;