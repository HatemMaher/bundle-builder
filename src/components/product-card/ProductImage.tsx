/**
 * Props interface for the ProductImage component.
 */
interface ProductImageProps {
  image?: string;
  title: string;
}

/**
 * ProductImage Component
 * * A standardized wrapper for product thumbnails ensuring uniform sizing and scaling behavior.
 */
const ProductImage = ({ image, title }: ProductImageProps) => {
  return (
    <div className="relative flex shrink-0 items-center justify-center w-[101px]">
      <img
        src={image}
        alt={title}
        // object-contain ensures the image fits within the bounds without stretching or cropping
        className="h-[137px] w-[101px] rounded-[6px] object-contain bg-white"
      />
    </div>
  );
};

export default ProductImage;