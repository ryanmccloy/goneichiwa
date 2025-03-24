import CalendarIcon from "../ui/icons/CalendarIcon";
import PencilIcon from "../ui/icons/PencilIcon";
import VideoIcon from "../ui/icons/VideoIcon";
import Process from "./Process";

const processes = [
  {
    icon: <CalendarIcon />,
    title: "Book Your Video Consultation",
    description:
      "Choose a time that works for you and book your consultation in just a few clicks. Secure your session instantly, and receive a confirmation email with all the details—including a private video call link.",
  },
  {
    icon: <VideoIcon />,
    title: "1-on-1 Expert Travel Consultation",
    description:
      "Jump on a live video call with a travel expert who will answer your questions, fine-tune your itinerary, and provide tailored recommendations based on your interests, budget, and travel style.",
  },
  {
    icon: <PencilIcon />,
    title: "Receive a Customized PDF Travel Guide",
    description:
      "After your consultation, we’ll send you a customized PDF travel guide packed with recommendations, must-see spots, hidden gems, and everything discussed in the session—so you have a plan tailored just for you.",
  },
];

export default function ConsultationProcess() {
  return (
    <div className="bg-light-grey section-styles">
      <div className="width-size flex flex-col gap-60 lg:flex-row">
        {processes.map((process) => {
          return (
            <Process
              key={process.title}
              icon={process.icon}
              title={process.title}
              description={process.description}
            />
          );
        })}
      </div>
    </div>
  );
}
