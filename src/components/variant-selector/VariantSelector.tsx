import { useBuilder } from "../../context/BuilderContext";

import type { ProductVariant } from "../../types";

import VariantButton from "./VariantButton";

interface VariantSelectorProps {
  productId: string;
  variants: ProductVariant[];
  activeVariant: string;
  productImage?: string;
}

const VariantSelector = ({
  productId,
  variants,
  activeVariant,
  productImage,
}: VariantSelectorProps) => {
  const { dispatch } = useBuilder();

  return (
    <div
      className="
        flex
        flex-wrap
        gap-[6px]
      "
    >
      {variants.map((variant) => (
        <VariantButton
          key={variant.id}
          image={productImage ?? "/placeholder-product.png"}
          name={variant.name}
          selected={activeVariant === variant.id}
          onClick={() =>
            dispatch({
              type: "SET_ACTIVE_VARIANT",
              productId,
              variantId: variant.id,
            })
          }
        />
      ))}
    </div>
  );
};

export default VariantSelector;