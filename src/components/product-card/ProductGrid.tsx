import { products } from "../../data/products";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    // Explicitly 1 column on mobile, 2 columns on desktop (xl)
    <div className="grid w-full grid-cols-1 gap-[16px] xl:grid-cols-2 xl:gap-[24px] justify-items-center">
      {products.map((product, index) => {
        const isLastAndOdd = index === products.length - 1 && products.length % 2 !== 0;

        return (
          <div
            key={product.id}
            className={`flex w-full justify-center ${
              // ONLY span 2 columns on desktop. Spanning 2 on mobile breaks the screen width!
              isLastAndOdd ? "xl:col-span-2" : ""
            }`}
          >
            {/* Fluid on mobile (max-w-[400px]), 
              but exactly 362px on desktop for the perfect Figma match! 
            */}
            <div className="w-full max-w-[400px] xl:max-w-[362px]">
              <ProductCard product={product} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductGrid;