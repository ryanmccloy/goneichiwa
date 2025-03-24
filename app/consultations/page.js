import Image from "next/image";
import SectionHeading from "../_components/ui/SectionHeading";
import ConsultationDetails from "../_components/consultations/ConsultationDetails";

export const metadata = {
  title: "Consultations",
};

export default function Page() {
  return (
    <div className="width-size top-page-spacing">
      <SectionHeading>
        Get A Personalised Travel Guide, Just For You!
      </SectionHeading>
      <div className="relative  rounded-global h-[250px]  lg:h-[350px]">
        <Image
          src="/images/consultations/roadtrip.webp"
          alt=""
          fill
          quality={100}
          priority={true}
          className="object-cover rounded-global"
        />
      </div>
      <ConsultationDetails />
    </div>
  );
}
