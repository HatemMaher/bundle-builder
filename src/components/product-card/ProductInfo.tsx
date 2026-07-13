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
    // Figma Match: Tighter gap between title and description
    <div className="flex w-full flex-col items-start !px-2">
      
      <h3 className="text-[16px] font-bold tracking-tight text-[#1F1F1F] !py-2 ">
        {title}
      </h3>

      <p className="text-[13px] font-medium leading-[1.4] text-[#1F1F1F]/70">
        {description}
        <a
          href={learnMoreUrl}
          className="ml-1 whitespace-nowrap font-bold text-[#4E2FD2] transition-colors hover:text-[#3B22B4] hover:underline"
        >
          Learn More
        </a>
      </p>
      
    </div>
  );
};

export default ProductInfo;