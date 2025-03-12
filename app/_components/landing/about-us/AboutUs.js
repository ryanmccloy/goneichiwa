import AboutUsProcess from "./AboutUsProcess";
import AboutUsParagraph from "./AboutUsParagraph";
import Benefits from "./Benefits";

export default function AboutUs() {
  return (
    <section className="width-size section-styles section-heading-spacing">
      <h2 className="section-heading">What we&apos;re about</h2>

      <div className="flex flex-col gap-60 md:gap-90">
        <div className="flex flex-col gap-60 lg:flex-row ">
          <AboutUsProcess />

          <AboutUsParagraph />
        </div>

        <Benefits />
      </div>
    </section>
  );
}
