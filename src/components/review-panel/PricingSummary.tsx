import GuaranteeBadge from "./GuaranteeBadge";

interface PricingSummaryProps {
  subtotal: number;
  originalTotal: number;
}

const PricingSummary = ({ subtotal, originalTotal }: PricingSummaryProps) => {
  return (
    <div className="flex w-[350px] items-center justify-between h-[78px]">
      <GuaranteeBadge />

      <div className="flex flex-col items-end gap-[8px] w-[145px] h-[78px] justify-center">
        
        {/* Monthly Callout */}
        <div className="flex items-center justify-center px-[8px] py-[5px] gap-[10px] bg-[#4E2FD2] rounded-[3px] w-[113px] h-[18px]">
          <span className="text-[12px] font-medium leading-[15px] tracking-[-0.05em] text-[#FFFFFF]">
            as low as $19.19/mo
          </span>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-[8px] h-[32px] w-[145px]">
          <span className="text-[18px] font-medium leading-[20px] tracking-[0.0025em] text-[#6F7882] line-through text-center w-[60px]">
            ${originalTotal.toFixed(2)}
          </span>
          <span className="text-[24px] font-bold leading-[32px] tracking-[-0.00125em] text-[#4E2FD2] text-right w-[77px]">
            ${subtotal.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PricingSummary;