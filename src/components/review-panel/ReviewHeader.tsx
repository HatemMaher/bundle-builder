const ReviewHeader = () => {
  return (
    <header className="flex flex-col ">
      <div className="flex items-center">
        <span className="!py-4 text-[12px] font-medium tracking-[1.6px] uppercase text-[#484848] leading-[100%]">
          Review
        </span>
      </div>

      <div className="flex flex-col gap-[10px]">
        <h2 className="text-[22px] font-semibold leading-[22px] tracking-[0.6px] text-[#1F1F1F]">
          Your security system
        </h2>
        <p className="text-[16px] font-medium leading-[18px] tracking-[0.6px] text-[#1F1F1F]/75">
          Review your personalized protection system designed to keep what
          matters most safe.
        </p>
      </div>
    </header>
  );
};

export default ReviewHeader;
