import { products } from "../../data/products";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <div
  className="
    grid

    grid-cols-2

    gap-[15px]

    max-xl:grid-cols-1

    justify-items-center
  "
>
      {products.map((product, index) => {
        // This math checks if it's the very last card AND if the total number is odd
        const isLastAndOdd =
          index === products.length - 1 && products.length % 2 !== 0;

        return (
          <div
            key={product.id}
            className={`flex w-full justify-center ${
              isLastAndOdd ? "col-span-2 justify-self-center" : ""
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