/**
 * Props interface for the AccordionNextButton component.
 */
interface AccordionNextButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

// AccordionNextButton Component
const AccordionNextButton = ({
  label,
  onClick,
  disabled = false,
}: AccordionNextButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="
        group
        flex
        h-[48px]
        w-full
        max-w-[280px]
        items-center
        justify-center
        rounded-[8px]
        border-[1.5px]
        border-[#4E2FD2]
        bg-transparent
        transition-all
        duration-200
        hover:bg-[#4E2FD2]
        disabled:cursor-not-allowed
        disabled:opacity-40
      "
    >
      <span className="text-[16px] font-bold text-[#4E2FD2] transition-colors duration-200 group-hover:text-white">
        {label}
      </span>
    </button>
  );
};

export default AccordionNextButton;