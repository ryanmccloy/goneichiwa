import SectionHeading from "../_components/ui/SectionHeading";
import TravelGuides from "./TravelGuides";

export default function FullCatalogue() {
  return (
    <section className="width-size section-styles">
      <SectionHeading>All Travel guides</SectionHeading>

      <TravelGuides />
    </section>
  );
}
