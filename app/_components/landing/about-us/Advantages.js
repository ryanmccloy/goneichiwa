import SectionHeading from "../../ui/SectionHeading";
import Benefit from "./Benefit";
import MapIcon from "./MapIcon";
import MoneyIcon from "./MoneyIcon";
import TimeIcon from "./TimeIcon";
import WorldIcon from "./WorldIcon";

export default function Advantages() {
  const benefits = [
    {
      icon: <TimeIcon />,
      title: "Save Hours of Planning",
      description: " Skip the research with ready-made travel guides.",
    },
    {
      icon: <WorldIcon />,
      title: "Discover Hidden Gems",
      description: "Explore secret spots beyond the tourist traps.",
    },
    {
      icon: <MapIcon />,
      title: "Stress-Free Travel",
      description: "Travel with expert tips, maps, and must-sees.",
    },
    {
      icon: <MoneyIcon />,
      title: "Budget & Time Efficient",
      description: "Maximize your trip without overspending.",
    },
  ];

  return (
    <div className=" pt-90 pb-60 md:pt-120 flex flex-col gap-60 lg:gap-90   width-size">
      <h3 className="uppercase font-bold md:text-heading-small text-center">
        Expertly crafted travel guides that save you time, reduce stress, and
        help you explore like a local — effortlessly.
      </h3>

      <div className="grid gap-30 md:grid-cols-2 lg:grid-cols-4 bg-light-grey p-30 rounded-global">
        {benefits.map((benefit) => {
          return (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          );
        })}
      </div>
    </div>
  );
}
