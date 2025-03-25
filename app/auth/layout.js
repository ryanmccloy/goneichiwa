import Image from "next/image";

export const metadata = {
  title: "Account",
};

export default function Page({ children }) {
  return (
 
    <section className="h-screen w-screen  lg:width-size  lg:grid lg:grid-cols-2 lg:gap-60 lg:p-30 lg:mb-60">
      <div className="relative h-full w-full flex justify-center items-center">
        <Image
          src="/images/landing/hero.webp"
          alt="Italian Dolomites"
          fill
          className="object-cover rounded-global"
          quality={100}
        />
        <div className="lg:hidden bg-off-white rounded-lg z-50 p-7">
          {children}
        </div>
      </div>
      <div className="hidden lg:block">{children}</div>
    </section>
  );
}
