import Button from "../../ui/Button";
import SectionHeading from "../../ui/SectionHeading";
import GuidesCards from "./GuidesCards";

function Bestsellers() {
  return (
    <section className="width-size section-styles -mt-30 lg:-mt-60">
      <SectionHeading>Featured</SectionHeading>

      <GuidesCards />

      <div className="mt-90 flex flex-col gap-60 justify-center lg:flex-row  lg:gap-120 ">
        <Button href="/catalogue">See All Travel Guides</Button>
      </div>
    </section>
  );
}

export default Bestsellers;
