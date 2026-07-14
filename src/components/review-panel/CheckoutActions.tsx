interface CheckoutActionsProps {
  savings: number;
  onSave: () => void;
}

const CheckoutActions = ({ savings, onSave }: CheckoutActionsProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-[12px] pt-[12px]">
      
      {savings > 0 && (
        <span className="w-full px-[10px] text-center text-[13px] font-semibold leading-normal tracking-[-0.02em] text-[#0AA288]">
          Congrats! You're saving ${savings.toFixed(2)} on your security bundle!
        </span>
      )}

      <button className="flex w-full items-center justify-center rounded-[6px] bg-[#4E2FD2] !px-[16px] !py-[14px] transition-colors hover:bg-[#3B22B4] shadow-sm">
        <span className="text-[17px] font-bold text-white text-center" style={{ fontFamily: "'TT Norms Pro', sans-serif" }}>
          Checkout
        </span>
      </button>

      <button
        onClick={onSave}
        className="mt-[4px] w-full px-[10px] py-[8px] text-[14px] italic text-[#484848] underline transition-colors hover:text-[#1F1F1F] text-center"
      >
        Save my system for later
      </button>
    </div>
  );
};

export default CheckoutActions;