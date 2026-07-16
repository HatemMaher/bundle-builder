import type { Product } from "../../types";
import QuantityStepper from "../quantity-stepper/QuantityStepper";
import ProductPrice from "./ProductPrice";


/**
 * Props interface for the ProductFooter component.
 */
interface ProductFooterProps {
  product: Product;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

/**
 * ProductFooter Component
 * * Renders the bottom action row of the product card.
 * Handles the logic of displaying either a quantity stepper (for physical goods)
 * or a toggle button (for subscription plans).
 */
const ProductFooter = ({
  product,
  quantity,
  onIncrease,
  onDecrease,
}: ProductFooterProps) => {
  const isPlan = product.category === "plan";
  const isSelected = quantity > 0;

  return (
    <div className="flex w-full items-center justify-between mt-auto">
      
      {/* If it's a plan, show a simple Select button. Otherwise, show the +/- stepper! */}
      {isPlan ? (
        <button
          type="button"
          onClick={isSelected ? onDecrease : onIncrease}
          className={`
            flex h-[28px] items-center justify-center rounded-[4px] !px-[16px] text-[14px] font-bold transition-all
            ${
              isSelected
                ? "bg-[#4E2FD2] text-white border border-[#4E2FD2]"
                : "bg-white text-[#4E2FD2] border border-[#4E2FD2] hover:bg-[#EDF4FF]"
            }
          `}
        >
          {isSelected ? "Selected" : "Select"}
        </button>
      ) : (
        <QuantityStepper
          quantity={quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      )}

      {/* Passing the suffix down so the plan correctly says /mo */}
      <ProductPrice
        price={product.price}
        compareAtPrice={product.compareAtPrice}
        suffix={product.suffix} 
      />
    </div>
  );
};

export default ProductFooter;