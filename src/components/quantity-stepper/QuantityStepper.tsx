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
    <div
      className="
        inline-flex
        items-center
        gap-[10px]
        select-none
      "
    >
      {/* Decrease */}

      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity === 0}
        aria-label="Decrease quantity"
        className="
          flex
          h-[24px]
          w-[24px]
          items-center
          justify-center

          rounded-[4px]

          bg-[#F0F4F7]

          transition-all
          duration-200

          hover:bg-[#E5EBF0]
          active:scale-95

          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        <span
          className="
            text-[16px]
            font-semibold
            leading-none
            text-[#525963]
          "
        >
          −
        </span>
      </button>

      {/* Quantity */}

      <span
        className="
          min-w-[16px]
          text-center

          text-[16px]
          font-semibold
          leading-none

          text-[#0B0D10]
        "
      >
        {quantity}
      </span>

      {/* Increase */}

      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className="
          flex
          h-[24px]
          w-[24px]
          items-center
          justify-center

          rounded-[4px]

          bg-[#F0F4F7]

          transition-all
          duration-200

          hover:bg-[#E5EBF0]
          active:scale-95
        "
      >
        <span
          className="
            text-[16px]
            font-semibold
            leading-none
            text-[#525963]
          "
        >
          +
        </span>
      </button>
    </div>
  );
};

export default QuantityStepper;