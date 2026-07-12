interface ShippingRowProps {
  originalPrice?: number;
  shippingPrice?: string;
}

const ShippingRow = ({
  originalPrice = 5.99,
  shippingPrice = "FREE",
}: ShippingRowProps) => {
  return (
    <div className="flex w-[350px] items-center justify-between border-t border-[#CED6DE] pt-[15px] h-[56px]">
      
      {/* Left */}
      <div className="flex items-center gap-[12px] w-[301px] h-[41px]">
        <div className="flex h-[41px] w-[41px] items-center justify-center rounded-[5px] bg-[#FFFFFF] text-[20px]">
          🚚
        </div>
        <span className="text-[14px] font-medium leading-[16px] tracking-[0.005em] text-[#0B0D10]">
          Fast Shipping
        </span>
      </div>

      {/* Right */}
      <div className="flex flex-col items-end w-[33px] h-[32px] justify-center">
        <span className="text-[14px] font-medium leading-[16px] tracking-[0.005em] text-[#6F7882] line-through">
          ${originalPrice.toFixed(2)}
        </span>
        <span className="text-[14px] font-semibold leading-[16px] tracking-[0.005em] text-[#4E2FD2] text-center w-[31px]">
          {shippingPrice}
        </span>
      </div>
    </div>
  );
};

export default ShippingRow;