import Builder from "../components/builder/Builder";
import ReviewPanel from "../components/review-panel/ReviewPanel";

/**
 * BundleBuilderPage Component
 * * Acts as the primary layout wrapper for the entire bundle builder experience.
 * It enforces the maximum page width, handles the global background, and orchestrates 
 * the responsive macro-layout between the main builder accordion and the review sidebar.
 */
const BundleBuilderPage = () => {
  return (
    // main wrapper ensuring the page takes up at least the full viewport height
    <main className="flex min-h-screen flex-col items-center bg-white">
      {/* Central content container locked to a maximum width of 1440px with responsive padding */}
      <div className="mx-auto w-full max-w-[1440px] !px-[24px] !py-[40px] md:!px-[40px] xl:!px-[50px] xl:!py-[60px]">
        
        {/* Mobile-only Header: 
            Visible only on smaller screens (md:hidden) to introduce the flow.
            On desktop, this space is typically handled by the global nav or page header. 
        */}
        <h1 className="md:hidden !mb-[24px] text-center text-[32px] font-bold tracking-tight text-[#1F1F1F] sm:text-left xl:mb-[40px] xl:text-[42px]">
            Let's get started!
        </h1>

        {/* MACRO LAYOUT CONTAINER
          Mobile & Tablet: Stacks the Builder and Review Panel vertically (flex-col).
          Desktop (xl/1280px+): Switches to a side-by-side layout (flex-row) with a 55px gap.
        */}
        <div className="flex flex-col gap-[32px] xl:flex-row xl:items-start xl:gap-[55px]">
          
          {/* Main Builder Area: Uses flex-1 to aggressively expand and fill all available space */}
          <section className="w-full flex-1">
            <Builder />
          </section>

          {/* Review Panel Sidebar: 
            Mobile/Tablet: Takes up 100% width, sitting directly beneath the Builder.
            Desktop (xl): Locks to a fixed width of 420px and uses shrink-0 to prevent 
            flexbox from squishing it when the viewport resizes.
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