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
        flex items-center transition-all duration-200
        h-[26px] gap-[6px] pr-[8px] pl-[4px] rounded-[4px] border-[1px]
        xl:gap-[3px] xl:!px-[5px] xl:rounded-[2px] xl:border-[0.5px]
        ${
          selected
            ? "border-[#0AA288] xl:bg-[#1DF0BB]/[0.04]" 
            : "border-[#E4E9EF] xl:border-[#CCCCCC] bg-white hover:border-[#B8C3CF]"
        }
      `}
    >
      <div className="flex h-[16px] w-[16px] xl:h-[22px] xl:w-[22px] shrink-0 items-center justify-center overflow-hidden rounded-full xl:rounded-[5px]">
         <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>

      <span className={`text-[12px] xl:text-[10px] leading-none ${selected ? 'font-bold xl:font-medium text-[#1F1F1F]' : 'font-medium text-[#6F7882] xl:text-[#1F1F1F]'}`}>
        {name}
      </span>
    </button>
  );
};

export default VariantButton;