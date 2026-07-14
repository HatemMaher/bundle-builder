import GuaranteeBadge from "./GuaranteeBadge";

interface PricingSummaryProps {
  subtotal: number;
  originalTotal: number;
}

const PricingSummary = ({ subtotal, originalTotal }: PricingSummaryProps) => {
  return (
    // Default (Mobile): Side-by-side (flex-row)
    // Tablet (md): Stacked vertically (flex-col)
    // Desktop (xl): Back to Side-by-side (flex-row)
    <div className="flex w-full flex-row items-center justify-between md:flex-col md:items-stretch md:gap-[20px] xl:flex-row xl:items-center xl:justify-between xl:gap-0">
      
      {/* === LEFT SIDE (Mobile/Desktop) / TOP ROW (Tablet) === */}
      <div className="flex items-center gap-[16px]">
        <GuaranteeBadge />
        
        {/* The Returns Text: 
            hidden -> Hidden on mobile
            md:flex -> Visible on tablet
            xl:hidden -> Hidden again on desktop 
        */}
        <div className="hidden md:flex xl:hidden flex-col gap-[4px]">
          <h4 className="text-[14px] font-bold text-[#000000] leading-none">
            30-day hassle-free returns
          </h4>
          <p className="text-[12px] text-[#484848] leading-[1.4]">
            If you're not totally in love with the product, we will refund you 100%.
          </p>
        </div>
      </div>

      {/* === RIGHT SIDE (Mobile/Desktop) / BOTTOM ROW (Tablet) === */}
      {/* Mobile: flex-col items-end (Stacked on right)
          Tablet: md:flex-row md:items-center md:justify-between (Split left/right)
          Desktop: xl:flex-col xl:items-end (Back to stacked on right)
      */}
      <div className="flex flex-col items-end justify-center gap-[8px] md:w-full md:flex-row md:items-center md:justify-between md:gap-0 xl:w-auto xl:flex-col xl:items-end xl:justify-center xl:gap-[8px]">
        
        {/* "As low as" Badge */}
        <div className="flex items-center justify-center rounded-[3px] bg-[#4E2FD2] !px-[8px] !py-[3px]">
          <span className="text-[12px] font-medium leading-[15px] tracking-[-0.05em] text-[#FFFFFF]">
            as low as $19.19/mo
          </span>
        </div>

        {/* Prices */}
        <div className="flex items-baseline gap-[8px]">
          <span className="text-[18px] font-medium leading-[20px] tracking-[0.0025em] text-[#6F7882] line-through">
            ${originalTotal.toFixed(2)}
          </span>
          <span className="text-[24px] font-bold leading-[32px] tracking-[-0.00125em] text-[#4E2FD2]">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        
      </div>

    </div>
  );
};

export default PricingSummary;