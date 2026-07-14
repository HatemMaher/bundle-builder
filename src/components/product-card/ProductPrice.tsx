interface ProductPriceProps {
  price: number;
  compareAtPrice?: number;
  suffix?: string;
}

const ProductPrice = ({ price, compareAtPrice, suffix = "" }: ProductPriceProps) => {
  const hasDiscount = compareAtPrice !== undefined && compareAtPrice > price;

  return (
    <div className="flex flex-col items-end gap-[2px] xl:gap-[3px]">
      {hasDiscount && (
        <span className="text-[15px] xl:text-[16px] font-medium leading-none xl:leading-[100%] text-[#D8392B] line-through">
          ${compareAtPrice.toFixed(2)}{suffix}
        </span>
      )}
      <span className="text-[16px] font-bold xl:font-medium leading-none xl:leading-[100%] text-[#1F1F1F] xl:text-[#575757]">
        ${price.toFixed(2)}{suffix}
      </span>
    </div>
  );
};

export default ProductPrice;