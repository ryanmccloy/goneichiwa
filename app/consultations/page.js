import SectionHeading from "../_components/ui/SectionHeading";
import Image from "next/image";
import ConsultationDetails from "../_components/consultations/ConsultationDetails";
import ReviewsBanner from "../_components/landing/reviews-banner/ReviewsBanner";
import ConsultationProcess from "../_components/consultations/ConsultationProcess";

export const metadata = {
  title: "Consultations",
  description:
    "Book a personalized travel consultation and receive expert planning help tailored to your dream destination.",
};

export default function Page() {
  return (
    <div className=" top-page-spacing">
      <div className="width-size">
        <SectionHeading>
          Get A Personalised Travel Guide, Just For You!
        </SectionHeading>
        <div className="relative  rounded-global h-[250px]  lg:h-[350px]">
          <Image
            src="/images/consultations/italy.webp"
            alt="Kyoto skyline with Japanese pagoda"
            fill
            quality={100}
            priority={true}
            className="object-cover rounded-global"
          />
        </div>
        <ConsultationDetails />
      </div>
      <ReviewsBanner />

      <ConsultationProcess />
    </div>
  );
}
