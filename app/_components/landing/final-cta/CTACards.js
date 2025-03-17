import Image from "next/image";
import CardHeadings from "../../ui/CardHeadings";
import Link from "next/link";

export default function CTACards() {
  return (
    <div className="w-screen flex flex-col gap-30 md:flex-row">
      <Link
        href="/catalogue"
        className="group  h-[400px] lg:h-[600px]  relative flex justify-center items-center hover:cursor-pointer md:flex-grow-1"
      >
        <Image
          src="/images/bestsellers/kyoto-pagoda.webp"
          alt="Kyoto Pagoda"
          fill
          style={{
            objectFit: "cover",
          }}
          className="md:rounded-r-sm"
          quality={100}
        />
        <div className="text-off-white z-50 bg-off-black-80  w-full h-[62px]  py-15 px-30  ">
          <CardHeadings center={true} color="light">
            Browse Travel Guides
          </CardHeadings>
        </div>
      </Link>

      <Link
        href="/consultations"
        className="group h-[400px] lg:h-[600px]  relative flex justify-center items-center hover:cursor-pointer md:flex-grow-1"
      >
        <Image
          src="/images/bestsellers/wanaka.webp"
          alt="Lake Wanaka"
          fill
          style={{
            objectFit: "cover",
          }}
          className="md:rounded-l-sm"
          quality={100}
        />
        <div className="text-off-white z-50 bg-off-black-80  w-full h-[62px] py-15 px-30  ">
          <CardHeadings center={true} color="light">
            Schedule A Video Consultation
          </CardHeadings>
        </div>
      </Link>
    </div>
  );
}
