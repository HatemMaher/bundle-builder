import { accordionIcons, type AccordionStep } from "./AccordionIcons";

/**
 * Props interface for the AccordionHeader component.
 */
interface AccordionHeaderProps {
  step: AccordionStep;
  title: string;
  selected: number;
  expanded: boolean;
  onClick?: () => void;
}

/**
 * AccordionHeader Component
 * Renders the accessible, clickable header area of an accordion item.
 * Features dynamic icon resolution, an active selection counter, and a state-driven animated chevron.
 */
const AccordionHeader = ({
  step,
  title,
  selected,
  expanded: open,
  onClick,
}: AccordionHeaderProps) => {
  // Dynamically resolve the correct SVG icon component based on the current step number
  const Icon = accordionIcons[step];

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between group transition-opacity"
    >
      {/* LEFT SIDE: Icon and Title */}
      <div className="flex items-center gap-[16px]">
        {/* The icon stays dark if open, otherwise it remains gray and turns dark on parent hover */}
        <Icon className={`shrink-0 transition-colors duration-200 ${open ? "text-[#1F1F1F]" : "text-[#6F7882] group-hover:text-[#1F1F1F]"}`} />
        <h2 className="text-left text-[22px] md:text-[24px] font-semibold leading-[1.2] tracking-tight text-[#0B0D10]">
          {title}
        </h2>
      </div>

      {/* RIGHT SIDE: Selection Counter & Animated Chevron */}
      <div className="flex items-center gap-[12px]">
        {/* Conditionally render the selection counter text if items are actually selected */}
        {selected > 0 && (
          <span className="whitespace-nowrap text-[14px] font-semibold leading-[16px] text-[#4E2FD2]">
            {selected} selected
          </span>
        )}
        {/* Chevron wrapper with a smooth 180-degree rotation transition when the accordion opens */}
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