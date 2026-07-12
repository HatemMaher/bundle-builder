import { products } from "../../data/products";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-[16px] md:grid-cols-2">
      {products.map((product, index) => {
        // This math checks if it's the very last card AND if the total number is odd
        const isLastAndOdd = index === products.length - 1 && products.length % 2 !== 0;

        return (
          <div
            key={product.id}
            className={`flex w-full justify-center ${
              isLastAndOdd ? "md:col-span-2 md:justify-self-center" : ""
            }`}
          >
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductGrid;