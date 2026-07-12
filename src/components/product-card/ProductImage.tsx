import ProductBadge from "./ProductBadge";

interface ProductImageProps {
  image?: string;
  title: string;
  badge?: string;
  
}

const ProductImage = ({
  image,
  title,
  badge,
}: ProductImageProps) => {
  return (
    <div
      className="
        relative

        flex
        shrink-0
        items-start
        justify-center

        w-[101px]
      "
    >
      {badge && (
        <ProductBadge
          label={badge}
        />
      )}

      <img
        src={image}
        alt={title}
        className="
          h-[137px]
          w-[101px]

          rounded-[6px]

          object-contain

          bg-white
        "
      />
    </div>
  );
};

export default ProductImage;