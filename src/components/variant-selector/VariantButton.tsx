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
        h-[24px] 
        items-center
        gap-[6px]
        border-[1px]
        transition-all
        duration-200
        ${
          selected
            ? "border-[#1F1F1F] bg-white shadow-sm" /* Black border for selected state per Figma */
            : "border-[#E4E9EF] bg-white hover:border-[#B8C3CF]"
        }
      `}
    >
      {/* The color circle */}
      <div className="flex h-[12px] w-[12px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E4E9EF]">
         {/* If it's a solid color, you can use bg-color, else use the image slice */}
         <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>

      <span className={`text-[11px] leading-none ${selected ? 'font-bold text-[#1F1F1F]' : 'font-medium text-[#6F7882]'}`}>
        {name}
      </span>
    </button>
  );
};

export default VariantButton;