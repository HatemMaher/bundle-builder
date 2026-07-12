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
    <div className="flex w-full items-end justify-between gap-4 pt-1">
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