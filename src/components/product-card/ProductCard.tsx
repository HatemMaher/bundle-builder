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
        max-w-[361.5px]
        min-h-[159px]
        items-center
        gap-[16px]
        rounded-[10px]
        bg-white
        p-[16px]
        transition-all
        duration-200
        ${
          isSelected
            ? "border-[2px] border-[#4E2FD2] shadow-sm"
            : "border-[1px] border-[#E4E9EF] hover:border-[#D0D6DC]"
        }
      `}
    >
      <ProductImage
        image={product.image}
        title={product.title}
        badge={product.badge}
      />

      <div className="flex flex-1 flex-col gap-[10px] self-stretch">
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

        <ProductFooter
          product={product}
          quantity={quantity}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
        />
      </div>
    </article>
  );
};

export default ProductCard;