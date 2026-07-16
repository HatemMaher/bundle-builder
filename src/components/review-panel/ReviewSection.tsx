import type { ReactNode } from "react";

/**
 * Props interface for the ReviewSection container.
 */
interface ReviewSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * ReviewSection Component
 * * A purely structural wrapper component used to enforce consistent 
 * top-borders, padding, and layout rules between item categories in the cart.
 */
const ReviewSection = ({ title, children, className = "" }: ReviewSectionProps) => {
  return (
    <section className={`flex w-full flex-col border-t border-[#CED6DE] !pt-[16px] !pb-[16px] gap-[12px] ${className}`}>
      
      {/* Eyebrow Category Title */}
      <h3 className="text-[12px] font-medium leading-none tracking-[0.05em] uppercase text-[#A8B2BD]">
        {title}
      </h3>
      
      {/* Content wrapper for nested mapped items */}
      <div className="flex flex-col gap-[12px]">
        {children}
      </div>
      
    </section>
  );
};

export default ReviewSection;