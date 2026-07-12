interface ShippingRowProps {
  originalPrice?: number;
  shippingPrice?: string;
}

const ShippingRow = ({
  originalPrice = 5.99,
  shippingPrice = "FREE",
}: ShippingRowProps) => {
  return (
    <div className="flex w-full justify-between border-t border-[#CED6DE] !py-3">
      
      {/* Left */}
      <div className="flex items-center gap-[12px]">
        <div className="flex h-[41px] w-[41px] shrink-0 items-center justify-center rounded-[5px] bg-[#FFFFFF] text-[20px]">
          🚚
        </div>
        <span className="text-[14px] font-medium text-[#0B0D10]">
          Fast Shipping
        </span>
      </div>

      {/* Right */}
      <div className="flex flex-col items-end justify-center">
        <span className="text-[14px] font-medium text-[#6F7882] line-through">
          ${originalPrice.toFixed(2)}
        </span>
        <span className="text-[14px] font-semibold text-[#4E2FD2]">
          {shippingPrice}
        </span>
      </div>
    </div>
  );
};

export default ShippingRow;