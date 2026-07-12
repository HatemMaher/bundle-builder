// Utilizing standard Tailwind CSS to create the closest structural representation 
// of the Wyze Satisfaction Guarantee seal from the Figma design.
const GuaranteeBadge = () => {
  return (
    <div className="relative flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-full bg-[#4E2FD2] shadow-[0_4px_12px_rgba(78,47,210,0.25)]">
      {/* Decorative dashed ring simulating the scalloped inner edge */}
      <div className="absolute inset-[4px] rounded-full border border-dashed border-white/30"></div>
      
      <div className="flex flex-col items-center justify-center text-center text-white z-10 pt-[2px]">
        <span className="text-[16px] font-bold leading-none">
          100%
        </span>
        <span className="mt-[2px] text-[10px] font-bold uppercase tracking-[0.1em] leading-none">
          WYZE
        </span>
        <span className="mt-[4px] max-w-[56px] text-[8px] font-medium leading-[10px]">
          Satisfaction Guarantee
        </span>
      </div>
    </div>
  );
};

export default GuaranteeBadge;