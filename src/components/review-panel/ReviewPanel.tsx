import { useMemo } from "react";
import { useBuilder } from "../../context/BuilderContext";
import { products } from "../../data/products";

import CheckoutActions from "./CheckoutActions";
import PricingSummary from "./PricingSummary";
import ReviewHeader from "./ReviewHeader";
import ReviewItem from "./ReviewItem";
import ReviewSection from "./ReviewSection";
import ShippingRow from "./ShippingRow";

const SHIPPING_PRICE = 5.99;

const ReviewPanel = () => {
  const { state, dispatch, saveState } = useBuilder();

  const handleUpdateQuantity = (productId: string, variantId: string, quantity: number) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      productId,
      variantId,
      quantity: Math.max(0, quantity),
    });
  };

  const selectedProducts = useMemo(() => {
    return products.flatMap((product) => {
      const variants = state.selectedVariants[product.id];
      if (!variants) return [];

      return Object.entries(variants)
        .filter(([, quantity]) => quantity > 0)
        .map(([variantId, quantity]) => {
          const variant = product.variants?.find((item) => item.id === variantId);
          return {
            id: `${product.id}-${variantId}`,
            productId: product.id,
            variantId: variantId,
            category: product.category,
            title: product.title,
            image: product.image ?? "",
            quantity,
            variantName: variant?.name !== "default" ? variant?.name : "",
            unitPrice: product.price,
            total: product.price * quantity,
            compareTotal: (product.compareAtPrice ?? product.price) * quantity,
            suffix: product.suffix,
          };
        });
    });
  }, [state.selectedVariants]);

  const subtotal = useMemo(
    () => selectedProducts.reduce((sum, item) => sum + item.total, 0),
    [selectedProducts]
  );

  const originalTotal = useMemo(
    () => selectedProducts.reduce((sum, item) => sum + item.compareTotal, 0),
    [selectedProducts]
  );

  const savings = originalTotal - subtotal + SHIPPING_PRICE;

  const grouped = {
    camera: selectedProducts.filter((p) => p.category === "camera"),
    sensor: selectedProducts.filter((p) => p.category === "sensor"),
    accessory: selectedProducts.filter((p) => p.category === "accessory"),
    plan: selectedProducts.filter((p) => p.category === "plan"),
  };

  return (
    <aside className="rounded-[10px] bg-[#EDF4FF]">
      {/* 
        RESPONSIVE GRID MAGIC:
        Mobile: grid-cols-1 (Stacked)
        Tablet: md:grid-cols-2 (Side-by-side)
        Desktop: xl:grid-cols-1 (Stacked in the narrow sidebar)
      */}
      <div className="!px-5 !py-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[24px] md:gap-[40px] ">
        
        {/* === LEFT COLUMN (Items & Shipping) === */}
        <div className="flex flex-col gap-[24px]">
          <ReviewHeader />

          <ReviewSection title="CAMERAS">
            {grouped.camera.length === 0 ? (
              <span className="text-[15px] font-medium text-[#8A94A6]">No cameras selected.</span>
            ) : (
              grouped.camera.map((item) => (
                <ReviewItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  subtitle={item.variantName}
                  quantity={item.quantity}
                  price={item.total}
                  compareAtPrice={item.compareTotal}
                  onIncrease={() => handleUpdateQuantity(item.productId, item.variantId, item.quantity + 1)}
                  onDecrease={() => handleUpdateQuantity(item.productId, item.variantId, item.quantity - 1)}
                />
              ))
            )}
          </ReviewSection>

          <ReviewSection title="SENSORS">
            {grouped.sensor.length === 0 ? (
              <span className="text-[15px] font-medium text-[#8A94A6]">No sensor selected.</span>
            ) : (
              grouped.sensor.map((item) => (
                <ReviewItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  quantity={item.quantity}
                  price={item.total}
                  compareAtPrice={item.compareTotal}
                  onIncrease={() => handleUpdateQuantity(item.productId, item.variantId, item.quantity + 1)}
                  onDecrease={() => handleUpdateQuantity(item.productId, item.variantId, item.quantity - 1)}
                />
              ))
            )}
          </ReviewSection>

          <ReviewSection title="ACCESSORIES">
            {grouped.accessory.length === 0 ? (
              <span className="text-[15px] font-medium text-[#8A94A6]">No accessories selected.</span>
            ) : (
              grouped.accessory.map((item) => (
                <ReviewItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  quantity={item.quantity}
                  price={item.total}
                  compareAtPrice={item.compareTotal}
                  onIncrease={() => handleUpdateQuantity(item.productId, item.variantId, item.quantity + 1)}
                  onDecrease={() => handleUpdateQuantity(item.productId, item.variantId, item.quantity - 1)}
                />
              ))
            )}
          </ReviewSection>

          <ReviewSection title="PLAN">
            {grouped.plan.length === 0 ? (
              <span className="text-[15px] font-medium text-[#8A94A6]">No plan selected.</span>
            ) : (
              grouped.plan.map((item) => (
                <ReviewItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  quantity={item.quantity}
                  price={item.total}
                  compareAtPrice={item.compareTotal}
                  suffix={item.suffix}
                  onIncrease={() => handleUpdateQuantity(item.productId, item.variantId, item.quantity + 1)}
                  onDecrease={() => handleUpdateQuantity(item.productId, item.variantId, item.quantity - 1)}
                />
              ))
            )}
          </ReviewSection>

          <ShippingRow />
        </div>

        {/* === RIGHT COLUMN (Summary & Checkout) === */}
        {/* On tablet, we push it down slightly with md:pt-[32px] to align it perfectly with the top row */}
        <div className="flex flex-col gap-[16px] md:pt-[32px] xl:pt-0">
          <PricingSummary subtotal={subtotal} originalTotal={originalTotal} />
          <CheckoutActions savings={savings} onSave={saveState} />
        </div>

      </div>
    </aside>
  );
};

export default ReviewPanel;