interface ProductPriceProps {
  price: number;
  compareAtPrice?: number;
}

const ProductPrice = ({ price, compareAtPrice }: ProductPriceProps) => {
  const hasDiscount = compareAtPrice !== undefined && compareAtPrice > price;

  return (
    <div className="flex flex-col items-end gap-[2px] !py-3 !px-3">
      {hasDiscount && (
        <span className="text-[15px] font-medium leading-none text-[#D8392B] line-through">
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