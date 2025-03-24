import TickIcon from "../ui/icons/TickIcon";

function ConsultationSummary() {
  const processes = [
    " Step 1: Fill out the contact form with your destination, trip details, and questions.",
    "Step 2: We’ll review your request and send available time slots.",
    "Step 3: Confirm your session, and we’ll send a secure payment link.",
    "Step 4: Join the consultation and get expert recommendations!",
  ];

  return (
    <div className="flex flex-col gap-60">
      <h2 className="uppercase text-medium ld:text-large font-semibold ">
        Book a 1-on-1 Travel Consultation & Plan the Perfect Trip!
      </h2>

      <p>
        Skip the hours of research—get expert travel advice tailored to your
        needs. Whether you need help planning a dream vacation or fine-tuning
        your itinerary, our travel experts are here to help!
      </p>

      <ul>
        <span className="font-normal">
          <span className="icon-gap">📍</span>How It Works:
        </span>

        {processes.map((process, index) => {
          return (
            <li key={index} className="flex items-center gap-[5px] mt-2">
              <TickIcon />
              <span>{process}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ConsultationSummary;
