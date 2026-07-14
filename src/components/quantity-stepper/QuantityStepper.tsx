interface QuantityStepperProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantityStepper = ({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityStepperProps) => {
  return (
    <div className="inline-flex items-center gap-[12px] xl:gap-[10px] select-none">
      
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity === 0}
        aria-label="Decrease quantity"
        className="
          flex items-center justify-center transition-all duration-200 
          h-[28px] w-[28px] rounded-[4px] bg-[#F0F4F7] 
          xl:h-[20px] xl:w-[20px] xl:border xl:border-[#E6EBF0] xl:bg-[#FFFFFF]
          hover:bg-[#E5EBF0] active:scale-95 
          disabled:cursor-not-allowed disabled:opacity-40
        "
      >
        <span className="text-[18px] xl:text-[12px] font-semibold leading-none text-[#525963]">
          −
        </span>
      </button>

      <span className="min-w-[24px] xl:min-w-[11px] text-center text-[16px] font-semibold leading-none text-[#0B0D10]">
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className="
          flex items-center justify-center transition-all duration-200 
          h-[28px] w-[28px] rounded-[4px] bg-[#F0F4F7] 
          xl:h-[20px] xl:w-[20px]
          hover:bg-[#E5EBF0] active:scale-95
        "
      >
        <span className="text-[18px] xl:text-[12px] font-semibold leading-none text-[#525963]">
          +
        </span>
      </button>
    </div>
  );
};

export default QuantityStepper;