import SectionHeading from "../ui/SectionHeading";
import TravelGuides from "./TravelGuides";

export default async function FullCatalogue() {
  return (
    <section className="width-size section-styles">
      <SectionHeading>All Travel guides</SectionHeading>

      <TravelGuides />
    </section>
  );
}
