import { Suspense } from "react";
import Button from "../../ui/Button";
import SectionHeading from "../../ui/SectionHeading";
import GuidesCards from "./GuidesCards";
import GuidesCardsSkeleton from "../../skeletons/GuidesCardsSkeletons";

function Bestsellers({ button = true }) {
  return (
    <section className="width-size section-styles -mt-30 lg:-mt-60 ">
      <SectionHeading>Featured</SectionHeading>

      <Suspense fallback={<GuidesCardsSkeleton />}>
        <GuidesCards />
      </Suspense>

      {button && (
        <div className="mt-90 flex flex-col gap-60 justify-center lg:flex-row lg:gap-120">
          <Button href="/catalogue">See All Travel Guides</Button>
        </div>
      )}
    </section>
  );
}

export default Bestsellers;
