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
    <div className="flex w-[350px] items-center gap-[16px] h-[41px]">
      
      {/* Image & Text Wrapper */}
      <div className="flex flex-1 items-center gap-[12px] min-w-0 h-[41px]">
        <div className="flex h-[41px] w-[41px] shrink-0 items-center justify-center rounded-[5px] bg-[#FFFFFF]">
          {image ? (
            <img src={image} alt={title} className="h-full w-full object-contain rounded-[5px]" />
          ) : (
            <div className="h-full w-full bg-[#FFFFFF] rounded-[5px]" />
          )}
        </div>

        <div className="flex flex-col min-w-0">
          <h4 className={`truncate ${isPlan ? 'text-[16px] font-bold text-[#000000] tracking-[-0.002em]' : 'text-[14px] font-medium text-[#0B0D10] tracking-[0.005em] leading-[16px]'}`}>
            {isPlan ? (
              <>
                <strong>Cam</strong> <span className="text-[#4E2FD2]">Unlimited</span>
              </>
            ) : (
              title
            )}
          </h4>
          {subtitle && (
            <span className="text-[12px] leading-[16px] text-[#6F7882]">{subtitle}</span>
          )}
        </div>
      </div>

      {/* Stepper & Price Wrapper */}
      <div className="flex items-center gap-[10px] shrink-0">
        
        {/* Quantity Stepper */}
        <div className="flex items-center gap-[10px] w-[72px] h-[28px] justify-between px-[4px] rounded-[4px]">
          <button
            onClick={onDecrease}
            className="flex h-[20px] w-[20px] items-center justify-center rounded-[4px] bg-[#FFFFFF] text-[#575757]"
          >
            <span className="text-[12px] leading-none mb-[2px]">−</span>
          </button>
          
          <span className="text-[14px] font-semibold text-[#0B0D10] leading-[16px] flex items-end">
            {quantity}
          </span>
          
          <button
            onClick={onIncrease}
            className="flex h-[20px] w-[20px] items-center justify-center rounded-[4px] bg-[#FFFFFF] text-[#575757]"
          >
            <span className="text-[12px] leading-none">+</span>
          </button>
        </div>

        {/* Pricing */}
        <div className="flex flex-col items-end w-[41px] justify-center">
          {compareAtPrice && compareAtPrice > price && (
            <span className="text-[14px] font-medium leading-[16px] tracking-[0.005em] text-[#6F7882] line-through">
              ${compareAtPrice.toFixed(2)}{suffix}
            </span>
          )}
          <span className={`text-[14px] font-semibold leading-[16px] tracking-[0.005em] ${isFree || suffix ? 'text-[#4E2FD2]' : 'text-[#4E2FD2]'}`}>
            {isFree ? "FREE" : `$${price.toFixed(2)}${suffix}`}
          </span>
        </div>
      </div>
      
    </div>
  );
};

export default ReviewItem;