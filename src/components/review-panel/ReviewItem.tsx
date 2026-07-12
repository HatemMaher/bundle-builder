interface ReviewItemProps {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  quantity: number;
  price: number;
  compareAtPrice?: number;
  suffix?: string;
  onIncrease: () => void;
  onDecrease: () => void;
}

const ReviewItem = ({
  image,
  title,
  subtitle,
  quantity,
  price,
  compareAtPrice,
  suffix = "",
  onIncrease,
  onDecrease,
}: ReviewItemProps) => {
  const isFree = price === 0;
  const isPlan = title.includes("Unlimited");

  return (
    <div className="flex w-full">
      
      {/* Image & Text Wrapper */}
      <div className="flex flex-1 items-center gap-[16px] min-w-0">
        
        {/* Figma exact match: 40x40 white square for the image background */}
        <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[6px] bg-[#FFFFFF] border border-[#E4E9EF]">
          {image ? (
            <img src={image} alt={title} className="h-[32px] w-[32px] object-contain" />
          ) : (
            <div className="h-full w-full bg-[#FFFFFF] rounded-[6px]" />
          )}
        </div>

        <div className="flex min-w-0 flex-col">
          <h4 className={`truncate ${isPlan ? 'text-[15px] font-bold text-[#1F1F1F]' : 'text-[14px] font-semibold text-[#1F1F1F]'} leading-[1.2]`}>
            {isPlan ? (
              <>
                <strong>Cam</strong> <span className="text-[#4E2FD2]">Unlimited</span>
              </>
            ) : (
              title
            )}
          </h4>
          {subtitle && (
            <span className="text-[12px] text-[#6F7882] mt-[2px]">{subtitle}</span>
          )}
        </div>
      </div>

      {/* Stepper & Price Wrapper */}
      <div className="flex shrink-0 items-center gap-[16px]">
        
        {/* Quantity Stepper - Figma uses small square buttons here */}
        <div className="flex items-center gap-[8px]">
          <button
            onClick={onDecrease}
            className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] border border-[#E4E9EF] bg-[#FFFFFF] text-[#1F1F1F] transition-colors hover:bg-gray-50"
          >
            <span className="text-[14px] font-medium leading-none">−</span>
          </button>
          
          <span className="w-[12px] text-center text-[14px] font-semibold text-[#1F1F1F]">
            {quantity}
          </span>
          
          <button
            onClick={onIncrease}
            className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] border border-[#E4E9EF] bg-[#FFFFFF] text-[#1F1F1F] transition-colors hover:bg-gray-50"
          >
            <span className="text-[14px] font-medium leading-none">+</span>
          </button>
        </div>

        {/* Pricing - Figma Stacked Right Alignment */}
        <div className="flex flex-col items-end justify-center min-w-[55px]">
          {compareAtPrice && compareAtPrice > price && (
            <span className="text-[11px] font-medium text-[#6F7882] line-through mb-[2px]">
              ${compareAtPrice.toFixed(2)}{suffix}
            </span>
          )}
          <span className={`text-[13px] font-bold tracking-tight ${isFree || suffix ? 'text-[#4E2FD2]' : 'text-[#4E2FD2]'}`}>
            {isFree ? "FREE" : `$${price.toFixed(2)}${suffix}`}
          </span>
        </div>
      </div>
      
    </div>
  );
};

export default ReviewItem;