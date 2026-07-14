import type { ReactNode } from "react";

interface ReviewSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const ReviewSection = ({ title, children, className = "" }: ReviewSectionProps) => {
  return (
    <section className={`flex w-full flex-col border-t border-[#CED6DE] !pt-[16px] !pb-[16px] gap-[12px] ${className}`}>
      
      <h3 className="text-[12px] font-medium leading-none tracking-[0.05em] uppercase text-[#A8B2BD]">
        {title}
      </h3>
      
      <div className="flex flex-col gap-[12px]">
        {children}
      </div>
      
    </section>
  );
};

export default ReviewSection;