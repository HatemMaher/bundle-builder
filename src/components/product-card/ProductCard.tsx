import type { Product } from "../../types";
import { useBuilder } from "../../context/BuilderContext";
import ProductFooter from "./ProductFooter";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductBadge from "./ProductBadge";
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
        relative
        flex
        w-full
        
        /* Mobile */ flex-row items-stretch !p-[12px] gap-[12px] min-h-[160px] h-full
        /* Tablet */ md:flex-col md:items-center md:p-[20px] md:gap-[16px] md:min-h-0
        /* Desktop */ xl:flex-row xl:items-center xl:!p-[6px] xl:gap-[19px] 
        
        rounded-[10px]
        bg-[#FFFFFF]
        transition-all
        duration-200
        overflow-hidden
        ${
          isSelected
            ? "border-[2px] border-[#4E2FD2]/70 shadow-sm"
            : "border-[1px] border-[#E4E9EF] hover:border-[#D0D6DC]"
        }
      `}
    >
      {/* THE BADGE: Pinned to the top left. On desktop, 11px perfectly aligns it with the padding edge! */}
      {product.badge && (
        <div className="absolute left-[10px] top-[10px] z-10 md:left-[16px] md:top-[16px] xl:left-[11px] xl:top-[11px]">
          <ProductBadge label={product.badge} />
        </div>
      )}

      {/* Image Section */}
      <div className="flex shrink-0 items-center justify-center w-[101px] md:w-full xl:w-[101px] xl:h-[137px] pt-[24px] md:pt-[12px] xl:pt-0">
        <ProductImage image={product.image} title={product.title} />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col justify-between min-w-0 w-full md:!mt-2 xl:!mt-0 xl:h-full xl:!py-[2px]">
        <div className="flex flex-col gap-[8px]">
          <ProductInfo
            title={product.title}
            description={product.description}
            learnMoreUrl={product.learnMoreUrl}
          />

          {product.variants && product.variants.length > 0 && product.category !== "plan" && (
            <VariantSelector
              productId={product.id}
              variants={product.variants}
              activeVariant={activeVariant}
              productImage={product.image}
            />
          )}
        </div>

        {/* Footer (Stepper & Price) */}
        <div className="w-full mt-auto !pt-[12px] xl:pt-0 !py-2 !px-2">
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