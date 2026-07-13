import type { Product } from "../../types";
import QuantityStepper from "../quantity-stepper/QuantityStepper";
import ProductPrice from "./ProductPrice";

interface ProductFooterProps {
  product: Product;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const ProductFooter = ({
  product,
  quantity,
  onIncrease,
  onDecrease,
}: ProductFooterProps) => {
  return (
    // mt-auto pushes this row to the very bottom of the card, matching Figma's spacing
    <div className="flex w-full  justify-between mt-aut">
      <QuantityStepper
        quantity={quantity}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />

      <ProductPrice
        price={product.price}
        compareAtPrice={product.compareAtPrice}
      />
    </div>
  );
};

export default ProductFooter;