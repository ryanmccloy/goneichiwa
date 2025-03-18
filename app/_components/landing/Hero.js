import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="hero-styles">
      <Image
        src="/images/hero.webp"
        alt="Italian Dolomites in the winter"
        fill
        style={{
          objectFit: "cover",
        }}
        className="-z-10 "
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

// import Image from "next/image";
// import Button from "../ui/Button";

// export default function Hero() {
//   return (
//     <section className="hero-styles relative">
//       {/* ✅ Hero Image */}
//       <Image
//         src="/images/hero.webp"
//         alt="Italian Dolomites in the winter"
//         fill
//         style={{ objectFit: "cover" }}
//         className="-z-10"
//         quality={100}
//         priority={true}
//       />

//       {/* ✅ Gradient Overlay (Fades Only at the Bottom) */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-off-white)] via-60%"></div>

//       {/* ✅ Content */}
//       <div className="flex flex-col gap-30 width-size relative z-10">
//         <h1 className="font-display text-heading-landing-small uppercase leading-normal flex flex-col md:text-heading-landing-medium lg:text-heading-landing-large">
//           <div>Your Next Adventure,</div>
//           <div>Perfectly Planned</div>
//         </h1>
//         <p className="max-w-[415px]">
//           Handpicked travel guides designed by experts. Save time, avoid hassle,
//           and explore like a local.
//         </p>
//         <Button href="/catalogue">Find Your Perfect Guide</Button>
//       </div>
//     </section>
//   );
// }
