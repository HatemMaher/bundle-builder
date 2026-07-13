import type { Product } from "../../types";
import { useBuilder } from "../../context/BuilderContext";
import ProductFooter from "./ProductFooter";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import VariantSelector from "../variant-selector/VariantSelector";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { state, dispatch } = useBuilder();

  const activeVariant =
    state.activeVariant[product.id] ??
    product.variants?.[0]?.id ??
    "default";

  const quantity =
    state.selectedVariants[product.id]?.[activeVariant] ?? 0;

  const isSelected = quantity > 0;

  const increaseQuantity = () => {
    dispatch({
      type: "UPDATE_QUANTITY",
      productId: product.id,
      variantId: activeVariant,
      quantity: quantity + 1,
    });
  };

  const decreaseQuantity = () => {
    if (quantity === 0) return;
    dispatch({
      type: "UPDATE_QUANTITY",
      productId: product.id,
      variantId: activeVariant,
      quantity: quantity - 1,
    });
  };

  return (
    <article
      className={`
        flex
        w-full
        h-full           /* Allows cards in the same row to stretch to match each other */
        min-h-[159px]    /* REPLACED h-[159px]. Now the card can grow taller on mobile! */
        flex-row         
        items-stretch    
        p-[11px]         
        gap-[12px] sm:gap-[19px] 
        rounded-[10px]   
        bg-[#FFFFFF]     
        transition-all
        duration-200
        ${
          isSelected
            ? "border-[2px] border-[#4E2FD2]/70 shadow-sm"
            : "border-[1px] border-[#E4E9EF] hover:border-[#D0D6DC]"
        }
      `}
    >
      {/* Left side: The Image */}
      <div className="flex shrink-0 items-center justify-center h-full">
        <ProductImage
          image={product.image}
          title={product.title}
          badge={product.badge}
        />
      </div>

      {/* Right side: The Details */}
      {/* ADDED min-w-0: This ensures long text will wrap instead of pushing the card off-screen */}
      <div className="flex flex-1 flex-col justify-between min-w-0">
        
        <div className="flex flex-col gap-[8px]">
          <ProductInfo
            title={product.title}
            description={product.description}
            learnMoreUrl={product.learnMoreUrl}
          />

          {product.variants && (
            <VariantSelector
              productId={product.id}
              variants={product.variants}
              activeVariant={activeVariant}
              productImage={product.image}
            />
          )}
        </div>

        {/* Footer (Stepper & Price) pinned to the bottom */}
        <div className="w-full">
          <ProductFooter
            product={product}
            quantity={quantity}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
          />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;