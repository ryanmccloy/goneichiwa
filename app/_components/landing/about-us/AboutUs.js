import AboutUsProcess from "./AboutUsProcess";
import AboutUsParagraph from "./AboutUsParagraph";
import Benefits from "./Benefits";
import Button from "../../ui/Button";
import SectionHeading from "../../ui/SectionHeading";

export default function AboutUs() {
  return (
    <section className="width-size section-styles section-heading-spacing">
      <SectionHeading>What we&apos;re about</SectionHeading>

      <div className="flex flex-col gap-60 md:gap-90">
        <div className="flex flex-col gap-60 lg:flex-row ">
          <AboutUsProcess />

          <AboutUsParagraph />
        </div>

        <Benefits />

        <div className="flex justify-center">
          <Button href="/catalogue" center={true}>
            Explore Our Guides
          </Button>
        </div>
      </div>
    </section>
  );
}
