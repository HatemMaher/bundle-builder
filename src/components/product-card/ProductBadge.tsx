interface ProductBadgeProps {
  label: string;
}

const ProductBadge = ({ label }: ProductBadgeProps) => {
  return (
    <div className="flex h-[22px] min-w-[70px] items-center justify-center rounded-full bg-[#4E2FD2] !px-[8px]">
      <span className="text-[11px] font-bold leading-none tracking-[0.02em] text-white">
        {label}
      </span>
    </div>
  );
};

export default ProductBadge;