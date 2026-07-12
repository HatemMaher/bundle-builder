interface ProductBadgeProps {
  label: string;
}

const ProductBadge = ({ label }: ProductBadgeProps) => {
  return (
    <div
      className="
        absolute
        left-0
        top-0
        z-10

        flex
        h-[20px]
        min-w-[63px]
        items-center
        justify-center

        rounded-full

        bg-[#4E2FD2]

        px-[8px]
      "
    >
      <span
        className="
          whitespace-nowrap

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