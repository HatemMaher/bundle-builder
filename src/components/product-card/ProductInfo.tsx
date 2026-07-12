interface ProductInfoProps {
  title: string;
  description: string;
  learnMoreUrl?: string;
}

const ProductInfo = ({
  title,
  description,
  learnMoreUrl = "#",
}: ProductInfoProps) => {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        items-start
        gap-[8px]
      "
    >
      {/* Product Title */}

      <h3
        className="
          text-[16px]
          font-semibold
          leading-[20px]
          tracking-[0.01em]
          text-[#1F1F1F]
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          text-[12px]
          font-medium
          leading-[16px]
          tracking-[0.01em]
          text-[#1F1F1FBF]
        "
      >
        {description}

        <a
          href={learnMoreUrl}
          className="
            ml-1
            whitespace-nowrap

            font-semibold

            text-[#4E2FD2]

            transition-colors

            hover:text-[#3B22B4]
            hover:underline
          "
        >
          Learn More
        </a>
      </p>
    </div>
  );
};

export default ProductInfo;