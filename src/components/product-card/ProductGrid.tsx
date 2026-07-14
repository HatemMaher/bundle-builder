import { products } from "../../data/products";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    // Mobile: 1 col | Tablet: 5 cols | Desktop: 2 cols with exact 15px Figma gap
    <div className="grid w-full grid-cols-1 gap-[16px] md:grid-cols-5 xl:grid-cols-2 xl:gap-[16px] justify-items-center">
      {products.map((product, index) => {
        const isLastAndOdd = index === products.length - 1 && products.length % 2 !== 0;

        return (
          <div
            key={product.id}
            className={`flex w-full justify-center ${
              isLastAndOdd ? "xl:col-span-2" : ""
            }`}
          >
            {/* Desktop is locked to exactly 361.5px per Figma CSS */}
            <div className="w-full max-w-[400px] xl:w-[500px] xl:max-w-[450px] xl:h-[179px] xl:min-h-[170px]">
              <ProductCard product={product} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductGrid;