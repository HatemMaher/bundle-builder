/**
 * Props interface for the ProductInfo component.
 */
interface ProductInfoProps {
  title: string;
  description: string;
  learnMoreUrl?: string;
}

/**
 * ProductInfo Component
 * * Renders the core textual information (title, description, and link) of a product card.
 */
const ProductInfo = ({
  title,
  description,
  learnMoreUrl = "#",
}: ProductInfoProps) => {
  return (
    <div className="flex w-full flex-col items-start xl:gap-[8px]">
      
      <h3 className="text-[16px] font-bold tracking-tight text-[#1F1F1F] xl:leading-[100%]">
        {title}
      </h3>

      <p className="text-[13px] xl:text-[12px] font-medium leading-[1.4] xl:leading-[130%] text-[#1F1F1F]/75">
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