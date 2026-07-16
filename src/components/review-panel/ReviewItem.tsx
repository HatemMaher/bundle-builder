/**
 * Props interface for the ReviewItem component.
 */
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

/**
 * ReviewItem Component
 * * Renders an individual line item in the cart/review panel.
 * Contains significant conditional logic to alter its layout completely if the item
 * is identified as a digital Plan rather than a physical product.
 */
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
      
      {/* === LEFT SIDE: Image & Text Wrapper === */}
      {/* min-w-0 prevents flexbox children from overflowing their container when text truncates */}
      <div className="flex flex-1 items-center gap-[16px] min-w-0">
        
        {/* CONDITIONAL RENDER: Physical Products get a 40x40 white thumbnail container. Hidden for the plan! */}
        {!isPlan && (
          <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[6px] bg-[#FFFFFF] border border-[#E4E9EF]">
            {image ? (
              <img src={image} alt={title} className="h-[32px] w-[32px] object-contain" />
            ) : (
              <div className="h-full w-full bg-[#FFFFFF] rounded-[6px]" />
            )}
          </div>
        )}

        {/* Text Area: If it's a plan, stack text horizontally with the SVG. If physical, stack Title/Subtitle vertically. */}
        <div className={`flex min-w-0 ${isPlan ? "flex-row items-center gap-[6px]" : "flex-col"}`}>
          
          {/* THE PLAN SVG: Injected inline and visible ONLY for the subscription plan */}
          {isPlan && (
            <div className="flex shrink-0 items-center justify-center">
              <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_74_20005)">
                  <path d="M0.93907 2.54734C0.93907 2.54734 0 2.71817 0 3.51161V9.29343C0 12.3836 4.53073 15.8231 6.06841 16.8481C6.3752 17.0531 6.77178 17.0531 7.07857 16.8481C8.61999 15.8269 13.147 12.3874 13.147 9.29343V3.51161C13.147 2.71817 12.2079 2.54734 12.2079 2.54734L7.13095 0.945281C6.76804 0.831391 6.37894 0.831391 6.01604 0.945281L0.93907 2.54734Z" fill="#E7EFFD"/>
                  <path d="M2.08006 1.8716C2.08006 1.8716 2.10999 1.864 2.12869 1.86021L7.20566 0.258153C7.49 0.167041 7.79678 0.167041 8.08112 0.258153L13.1581 1.86021C13.1581 1.86021 13.188 1.8678 13.2067 1.8716C13.2067 1.8716 13.2142 1.8716 13.2254 1.87539C13.2441 1.87919 13.2703 1.88678 13.304 1.89817C13.3713 1.92095 13.4574 1.95512 13.5434 2.00447C13.7081 2.10317 13.8166 2.23225 13.8166 2.42966V8.21148C13.8166 8.88343 13.5696 9.60474 13.1394 10.345C12.7129 11.0815 12.1217 11.8066 11.4745 12.4786C10.1763 13.8263 8.68348 14.9234 7.93147 15.4207C7.75937 15.5346 7.53863 15.5346 7.36653 15.4207C6.61079 14.9196 5.12174 13.8225 3.82351 12.4748C3.17626 11.8028 2.58513 11.0777 2.15862 10.3412C1.73211 9.60474 1.48145 8.88343 1.48145 8.20768V2.42966C1.48145 2.23225 1.5862 2.10317 1.75456 2.00447C1.83687 1.95512 1.92292 1.92095 1.99401 1.89817C2.02768 1.88678 2.05387 1.87919 2.07257 1.87539C2.08006 1.87539 2.08754 1.87539 2.09128 1.8716H2.08006Z" stroke="#0046C7" strokeWidth="0.5"/>
                  <path d="M4.38483 5.95264H4.00696L4.38483 6.85616L4.05186 7.63821L3.34101 5.95264H2.96313L3.93588 8.276H4.17158L4.57564 7.31932L4.9797 8.276H5.21541L6.18815 5.95264H5.81028L5.09943 7.6534L4.38858 5.95264H4.38483Z" fill="#0046C7"/>
                  <path d="M7.98387 5.95264L7.33288 7.12191L6.68189 5.95264H6.27783L7.16826 7.53571V8.26461H7.51247V7.53571L8.38793 5.95264H7.98387Z" fill="#0046C7"/>
                  <path d="M10.5093 8.27593H12.3089V7.87732H10.5093V8.27593Z" fill="#0046C7"/>
                  <path d="M10.5093 6.35125H12.3089V5.95264H10.5093V6.35125Z" fill="#0046C7"/>
                  <path d="M10.5093 7.30792H12.3089V6.9093H10.5093V7.30792Z" fill="#0046C7"/>
                  <path d="M8.49276 5.95264V6.33986H9.67875L8.35059 8.27979H10.2811V7.89636H9.06144L10.4008 5.95643H8.49276V5.95264Z" fill="#0046C7"/>
                </g>
                <defs>
                  <clipPath id="clip0_74_20005">
                    <rect width="14" height="17" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          )}

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
        
        {/* Quantity Stepper - HIDDEN FOR THE PLAN! */}
        {!isPlan && (
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
        )}

        {/* Pricing Layout */}
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