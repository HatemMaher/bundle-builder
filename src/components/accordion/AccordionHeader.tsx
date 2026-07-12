import { accordionIcons, type AccordionStep } from "./AccordionIcons";

interface AccordionHeaderProps {
  step: AccordionStep;
  title: string;
  selected: number;
  expanded: boolean;
  bordered?: boolean;
  onClick?: () => void;
  className?: string; // <-- Added this
}

const AccordionHeader = ({
  step,
  title,
  selected,
  expanded: open,
  onClick,
  className = "",
}: AccordionHeaderProps) => {
  const Icon = accordionIcons[step];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex
        w-full
        justify-between
        px-[20px]
        ${!open ? "hover:bg-black/[0.02]" : ""}
        ${className} 
      `}
    >
      {/* LEFT SIDE */}
      <div className="flex gap-[10px]">
        <Icon className={`shrink-0 ${open ? "text-[#1F1F1F]" : "text-[#6F7882]"}`} />
        <h2 className="text-left text-[22px] font-semibold leading-[22px] tracking-[0.6px] text-[#0B0D10]">
          {title}
        </h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-[8px]">
        {selected > 0 && (
          <span className="whitespace-nowrap text-[14px] font-medium leading-[16px] text-[#4E2FD2]">
            {selected} selected
          </span>
        )}

        <div className={`flex h-[24px] w-[24px] items-center justify-center transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 6.5L0 0.5H10L5 6.5Z" fill="#4E2FD2" />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default AccordionHeader;