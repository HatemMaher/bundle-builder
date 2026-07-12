import GuaranteeBadge from "./GuaranteeBadge";

interface PricingSummaryProps {
  subtotal: number;
  originalTotal: number;
}

const PricingSummary = ({ subtotal, originalTotal }: PricingSummaryProps) => {
  return (
    <div className="flex w-full flex-col gap-[20px] py-[12px]">
      
      {/* Figma Match: Side-by-side Badge and Return Policy Text */}
      <div className="flex w-full items-center gap-[16px]">
        <GuaranteeBadge />
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-[14px] font-bold text-[#000000] leading-none">
            30-day hassle-free returns
          </h4>
          <p className="text-[12px] text-[#484848] leading-[1.4]">
            If you're not totally in love with the product, we will refund you 100%.
          </p>
        </div>
      </div>

      {/* Pricing Row */}
      <div className="flex w-full items-center justify-between mt-[8px]">
        <div className="flex items-center justify-center rounded-[3px] bg-[#4E2FD2] px-[8px] py-[4px]">
          <span className="text-[12px] font-medium leading-none text-[#FFFFFF]">
            as low as $19.19/mo
          </span>
        </div>

        <div className="flex items-baseline gap-[8px]">
          <span className="text-[18px] font-medium leading-none text-[#6F7882] line-through">
            ${originalTotal.toFixed(2)}
          </span>
          <span className="text-[24px] font-bold leading-none text-[#4E2FD2]">
            ${subtotal.toFixed(2)}
          </span>
        </div>
      </div>
      
    </div>
  );
};

export default PricingSummary;