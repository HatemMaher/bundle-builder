interface ProductBadgeProps {
  label: string;
}

const ProductBadge = ({ label }: ProductBadgeProps) => {
  return (
    <div
      className="
        absolute
        left-1
        top-1
        

        flex
        h-[20px]
        min-w-[70px]
        items-center
        justify-center

        rounded-full

        bg-[#4E2FD2]
      "
    >
      <span
        className="

          text-[12px]
          font-semibold
          leading-none
          text-white
        "
      >
        {label}
      </span>
    </div>
  );
};

export default ProductBadge;