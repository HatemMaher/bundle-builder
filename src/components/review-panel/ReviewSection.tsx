import type { ReactNode } from "react";

interface ReviewSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const ReviewSection = ({ title, children, className = "" }: ReviewSectionProps) => {
  return (
    <section className={`flex w-full flex-col border-t border-[#CED6DE] pt-[15px] gap-[8px] ${className}`}>
      <h3 className="!py-2 text-[12px] font-normal leading-[16px] tracking-[0.03em] uppercase text-[#A8B2BD]">
        {title}
      </h3>
      <div className="flex flex-col gap-[16px]">
        {children}
      </div>
    </section>
  );
};

export default ReviewSection;