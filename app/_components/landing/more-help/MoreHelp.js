import Image from "next/image";
import Button from "../../ui/Button";
import SectionHeading from "../../ui/SectionHeading";

function MoreHelp() {
  return (
    <section className="bg-light-grey overflow-hidden">
      <div className="flex flex-col width-size lg:relative">
        <div className=" section-styles lg:w-3/5 section-heading-spacing">
          <SectionHeading>Need A Little More Help?</SectionHeading>

          <p className="lg:max-w-4/5 mb-60">
            Need a trip tailored just for you? Our private video consultations
            give you direct access to a travel expert who will help you craft
            the perfect itinerary based on your interests, budget, and travel
            style. Whether you need insider tips, personalized recommendations,
            or a full itinerary built from scratch, we&apos;ll take the
            guesswork out of planning—so you can travel with confidence.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button href="/consultations">Book A Consultation Today</Button>
          </div>
        </div>

        <div className="lg:absolute relative lg:w-[40vw]  lg:h-full lg:left-2/3 h-[350px] w-screen -mx-30 md:-mx-60">
          <Image
            src="/images/snow-mountains.webp"
            alt="Snowy Mountains in the Winter"
            fill
            style={{
              objectFit: "cover",
            }}
            className=" object-[0%_33%] lg:object-center"
            quality={100}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}

export default MoreHelp;
