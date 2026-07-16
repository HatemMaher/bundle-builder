/**
 * Props interface for the ProductPrice component.
 */
interface ProductPriceProps {
  price: number;
  compareAtPrice?: number;
  suffix?: string;
}

/**
 * ProductPrice Component
 * * Handles the display of pricing, including conditional rendering of struck-through MSRPs if a discount exists.
 */
const ProductPrice = ({ price, compareAtPrice, suffix = "" }: ProductPriceProps) => {
  const hasDiscount = compareAtPrice !== undefined && compareAtPrice > price;

  return (
    <div className="flex flex-col items-end gap-[2px] xl:gap-[3px]">
      {hasDiscount && (
        <span className="font-normal text-[16px] leading-[100%] tracking-[0.6px] text-[#D8392B] line-through">
          ${compareAtPrice.toFixed(2)}{suffix}
        </span>
      )}
      <span className="font-normal text-[16px] leading-[100%] tracking-[0.6px] text-[#575757]">
        ${price.toFixed(2)}{suffix}
      </span>
    </div>
  );
};

export default ProductPrice;