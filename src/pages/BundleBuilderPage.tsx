import Builder from "../components/builder/Builder";
import ReviewPanel from "../components/review-panel/ReviewPanel";

const BundleBuilderPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      {/* ADDED: px-[24px] and py-[40px] to ensure the whole app has a safe distance from the browser edges */}
      <div className="mx-auto w-full max-w-[1440px] px-[24px] py-[40px] md:px-[40px] xl:px-[120px] xl:py-[60px]">
        
        <h1 className="mb-[24px] text-center text-[32px] font-bold tracking-tight text-[#1F1F1F] sm:text-left xl:mb-[40px] xl:text-[42px]">
          Let's get started!
        </h1>

        {/* ADDED: gap-[32px] to push the left accordion and right review panel away from each other */}
        <div className="flex flex-col gap-[32px] lg:flex-row lg:items-start lg:gap-[40px] xl:gap-[64px]">
          
          <section className="w-full flex-1">
            <Builder />
          </section>

          <aside className="w-full shrink-0 lg:w-[380px] xl:w-[420px]">
            <ReviewPanel />
          </aside>
          
        </div>
      </div>
    </main>
  );
};

export default BundleBuilderPage;