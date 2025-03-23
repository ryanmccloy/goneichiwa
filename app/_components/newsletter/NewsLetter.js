import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

export default function NewsLetter() {
  return (
    <section className="width-size section-styles negative-bottom-spacing">
      <SectionHeading>Sign Up For Our NewsLetter</SectionHeading>

      <div className="flex flex-col gap-60 lg:flex-row lg:gap-90 ">
        <p className="lg:flex-1">
          Join our newsletter and get exclusive travel tips, insider guides, and
          special discounts on our curated itineraries. Be the first to discover
          hidden gems, expert recommendations, and limited-time deals—delivered
          straight to your inbox.
        </p>
        <form className="flex flex-col md:flex-row lg:flex-col gap-30 items-center lg:flex-1 lg:items-start">
          <input
            type="email"
            className="bg-light-grey rounded-global px-6 py-2 w-full"
            placeholder="Email"
          ></input>

          <Button>Subscribe</Button>
        </form>
      </div>
    </section>
  );
}
