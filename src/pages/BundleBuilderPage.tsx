import Builder from "../components/builder/Builder";
import ReviewPanel from "../components/review-panel/ReviewPanel";

const BundleBuilderPage = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10 xl:px-[120px] xl:py-[50px]">
        <h1 className="mb-6 text-center text-[32px] font-bold tracking-tight text-[#1F1F1F] sm:text-left xl:mb-10 xl:text-[42px]">
          Let's get started!
        </h1>

        <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:gap-[30px]">
          <section className="w-full xl:max-w-[768px] xl:flex-1">
            <Builder />
          </section>

          <aside className="w-full xl:w-[400px] xl:flex-shrink-0">
            <ReviewPanel />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default BundleBuilderPage;