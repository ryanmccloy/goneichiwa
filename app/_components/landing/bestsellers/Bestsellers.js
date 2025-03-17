import Button from "../../ui/Button";
import SectionHeading from "../../ui/SectionHeading";
import GuidesCards from "./GuidesCards";

function Bestsellers() {
  return (
    <section className="width-size section-styles ">
      <SectionHeading>Bestsellers</SectionHeading>

      <GuidesCards />

      <div className="mt-90 flex flex-col gap-60 items-center lg:flex-row  lg:gap-120 lg:items-start">
        <p>
          Need a trip tailored just for you? Our private video consultations
          give you direct access to a travel expert who will help you craft the
          perfect itinerary based on your interests, budget, and travel style.{" "}
        </p>
        <Button href="/catalogue">See All Travel Guides</Button>
      </div>
    </section>
  );
}

export default Bestsellers;
