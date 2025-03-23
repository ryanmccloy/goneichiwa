import Image from "next/image";
import Button from "../ui/Button";
import hero from "@/public/images/landing/hero.webp";

export default function Hero() {
  return (
    <section className="hero-styles">
      <Image
        src={hero}
        alt="Italian Dolomites in the winter"
        fill
        placeholder="blur"
        className="-z-10 object-cover object-top"
        quality={100}
        priority={true}
      />

      <div className="flex flex-col gap-30 width-size">
        <h1 className="font-display text-heading-landing-small uppercase leading-normal flex flex-col md:text-heading-landing-medium lg:text-heading-landing-large ">
          <div>Your Next Adventure,</div>
          <div>Perfectly Planned</div>
        </h1>
        <p className="max-w-[415px]">
          Handpicked travel guides designed by experts. Save time, avoid hassle,
          and explore like a local.
        </p>
        <Button href="/catalogue">Find Your Perfect Guide</Button>
      </div>
    </section>
  );
}
