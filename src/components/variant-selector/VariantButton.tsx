interface VariantButtonProps {
  image: string;
  name: string;
  selected: boolean;
  onClick: () => void;
}

const VariantButton = ({ image, name, selected, onClick }: VariantButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex
        h-[26px]
        min-w-[60px]
        items-center
        gap-[6px]
        rounded-[4px]
        border-[1.5px]
        px-[6px]
        transition-all
        duration-200
        ${
          selected
            ? "border-[#0AA288] bg-[#F2FFFC] shadow-sm"
            : "border-[#E4E9EF] bg-white hover:border-[#B8C3CF]"
        }
      `}
    >
      {/* The chip swatches are usually flat colors or tiny images */}
      <div className="flex h-[14px] w-[14px] items-center justify-center overflow-hidden rounded-full border border-[#E4E9EF]">
         <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>

      <span className="truncate text-[11px] font-medium leading-none text-[#1F1F1F]">
        {name}
      </span>
    </button>
  );
};

export default VariantButton;