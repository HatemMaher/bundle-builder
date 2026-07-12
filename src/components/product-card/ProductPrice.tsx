interface ProductPriceProps {
  price: number;
  compareAtPrice?: number;
}

const ProductPrice = ({ price, compareAtPrice }: ProductPriceProps) => {
  const hasDiscount = compareAtPrice !== undefined && compareAtPrice > price;

  return (
    <div className="flex flex-col items-end gap-[2px]">
      {hasDiscount && (
        <span className="text-[12px] font-medium leading-none text-[#D8392B] line-through">
          ${compareAtPrice.toFixed(2)}
        </span>
      )}
      <span className="text-[16px] font-bold leading-none text-[#1F1F1F]">
        ${price.toFixed(2)}
      </span>
    </div>
  );
};

export default ProductPrice;