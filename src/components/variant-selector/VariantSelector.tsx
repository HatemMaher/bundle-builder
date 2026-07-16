import { useBuilder } from "../../context/BuilderContext";

import type { ProductVariant } from "../../types";

import VariantButton from "./VariantButton";

/**
 * Props interface for the VariantSelector component.
 */
interface VariantSelectorProps {
  productId: string;
  variants: ProductVariant[];
  activeVariant: string;
  productImage?: string;
}

/**
 * VariantSelector Component
 * * A container that renders a list of interactive VariantButtons (e.g., color or style options).
 * It connects to the global builder context to dispatch state updates when a user 
 * switches between product variations.
 */
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
      {/* Iterate through the provided variants and render an interactive button for each */}
      {variants.map((variant) => (
        <VariantButton
          key={variant.id}
          image={variant.image ?? productImage ?? "/placeholder-product.png"}
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