import Builder from "../components/builder/Builder";
import ReviewPanel from "../components/review-panel/ReviewPanel";

const BundleBuilderPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div className="mx-auto w-full max-w-[1440px] !px-[24px] !py-[40px] md:!px-[40px] xl:!px-[50px] xl:!py-[60px]">
        
        <h1 className="md:hidden !mb-[24px] text-center text-[32px] font-bold tracking-tight text-[#1F1F1F] sm:text-left xl:mb-[40px] xl:text-[42px]">
            Let's get started!
        </h1>

        {/* CHANGES MADE HERE: 
          Removed all `lg:` prefixes and replaced them strictly with `xl:`.
          Now, the flex-col (stacked) layout applies to both mobile AND tablet.
          It only switches to flex-row (side-by-side) on desktop screens (1280px+).
        */}
        <div className="flex flex-col gap-[32px] xl:flex-row xl:items-start xl:gap-[55px]">
          
          <section className="w-full flex-1">
            <Builder />
          </section>

          {/* Removed the tablet fixed width (lg:w-[380px]). 
            Now it stays full-width under the accordion on tablet, 
            and locks to 420px wide on desktop. 
          */}
          <aside className="w-full shrink-0 xl:w-[420px]">
            <ReviewPanel />
          </aside>
          
        </div>
      </div>
    </main>
  );
};

export default BundleBuilderPage;