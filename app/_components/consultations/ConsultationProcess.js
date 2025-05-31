import CalendarIcon from "../ui/icons/CalendarIcon";
import PencilIcon from "../ui/icons/PencilIcon";
import VideoIcon from "../ui/icons/VideoIcon";
import ProcessStep from "./ProcessStep";

const processes = [
  {
    icon: <CalendarIcon />,
    title: "Book Your Video Consultation",
    description:
      "Request a consultation in just a few clicks. Secure your session, and receive a confirmation email with all the details—including a private video call link.",
  },
  {
    icon: <VideoIcon />,
    title: "1-on-1 Expert Travel Consultation",
    description:
      "Jump on a live video call with a travel expert who will discuss the details of your trip, and get all of the information required to create your personal travel guide",
  },
  {
    icon: <PencilIcon />,
    title: "Receive a Customized PDF Travel Guide",
    description:
      "Receive a customized PDF travel guide packed with recommendations, must-see spots, hidden gems, and everything discussed in the session—so you have a plan tailored just for you.",
  },
];

export default function ConsultationProcess() {
  return (
    <div className="bg-light-grey section-styles">
      <div className="width-size flex flex-col gap-60 lg:flex-row">
        {processes.map((processStep) => {
          return (
            <ProcessStep
              key={processStep.title}
              icon={processStep.icon}
              title={processStep.title}
              description={processStep.description}
            />
          );
        })}
      </div>
    </div>
  );
}
