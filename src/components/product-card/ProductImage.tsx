interface ProductImageProps {
  image?: string;
  title: string;
}

const ProductImage = ({ image, title }: ProductImageProps) => {
  return (
    <div className="relative flex shrink-0 items-center justify-center w-[101px]">
      <img
        src={image}
        alt={title}
        className="h-[137px] w-[101px] rounded-[6px] object-contain bg-white"
      />
    </div>
  );
};

export default ProductImage;