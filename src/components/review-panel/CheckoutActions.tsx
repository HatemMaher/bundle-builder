interface CheckoutActionsProps {
  savings: number;
  onSave: () => void;
}

const CheckoutActions = ({ savings, onSave }: CheckoutActionsProps) => {
  return (
    <div className="flex w-[350px] flex-col items-center gap-[4px] pt-[10px] h-[74px]">
      
      {savings > 0 && (
        <span className="w-[350px] h-[12px] text-center text-[12px] font-semibold leading-[100%] tracking-[-0.056px] text-[#0AA288] flex items-center justify-center">
          Congrats! You're saving ${savings.toFixed(2)} on your security bundle!
        </span>
      )}

      <button className="flex flex-row justify-center items-center px-[16px] py-[13px] gap-[8px] w-[350px] h-[48px] rounded-[4px] bg-[#4E2FD2] transition-colors hover:bg-[#3B22B4]">
        <span className="w-[318px] h-[22px] text-[17px] font-bold text-[#FFFFFF] leading-[22px] text-center flex items-center justify-center" style={{ fontFamily: "'TT Norms Pro', sans-serif" }}>
          Checkout
        </span>
      </button>

      <button
        onClick={onSave}
        className="w-[350px] h-[17px] text-[14px] italic text-[#484848] leading-[120%] tracking-[-0.016px] underline decoration-solid flex items-center justify-center text-center hover:text-[#1F1F1F] mt-[4px]"
      >
        Save my system for later
      </button>
    </div>
  );
};

export default CheckoutActions;