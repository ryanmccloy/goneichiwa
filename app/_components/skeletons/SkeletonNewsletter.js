import SectionHeading from "../ui/SectionHeading";

function SkeletonNewsletter() {
  return (
    <div className="width-size section-styles negative-bottom-spacing">
      <SectionHeading>Sign Up For Our NewsLetter</SectionHeading>

      <div className="flex flex-col gap-60 lg:flex-row lg:gap-90">
        {/* Left: Paragraph placeholder */}
        <div className="lg:flex-1 bg-gray-200 h-[120px] rounded-global animate-pulse" />

        {/* Right: Input + Button placeholders */}
        <div className="flex flex-col md:flex-row lg:flex-col gap-30 items-center lg:flex-1 lg:items-start w-full">
          {/* Input placeholder */}
          <div className="bg-gray-200 h-[44px] w-full rounded-global animate-pulse" />

          {/* Button placeholder */}
          <div className="bg-gray-200 h-[44px] w-[160px] rounded-global animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonNewsletter;
