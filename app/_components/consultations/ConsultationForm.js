"use client";

import Button from "../ui/Button";

export default function ConsultationForm() {
  const layoutSpacing = "flex flex-col gap-30 lg:flex-row";
  const inputStyles = "bg-light-grey rounded-global p-2 grow";

  const handleSubmit = (e) => {
    e.preventDefault();
    // FORM SUBMISSION LOGIC
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-30`}>
      <h4 className={`uppercase  text-regular`}>Request A Consultation</h4>

      <div className={`${layoutSpacing}`}>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Name"
          aria-label="Name"
          className={`${inputStyles} `}
        />
        <input
          type="text"
          name="consultation-date"
          id="consultation-date"
          required
          placeholder="Requested date"
          aria-label="Requested date"
          className={`${inputStyles} `}
        />
      </div>

      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="Email"
        aria-label="Email"
        className={`${inputStyles} max-h-fit`}
      />

      <div className={`${layoutSpacing}`}>
        <input
          type="text"
          name="destination"
          id="destination"
          required
          placeholder="Destination"
          aria-label="Destination"
          className={`${inputStyles} `}
        />
        <input
          type="text"
          name="duration"
          id="duration"
          required
          placeholder="Trip duration"
          aria-label="Trip duration"
          className={`${inputStyles} `}
        />
      </div>

      <textarea
        name="message"
        id="message"
        placeholder="Any questions or specific requests?..."
        aria-label="Message"
        className={`${inputStyles} min-h-[150px] `}
      />

      <span className="flex justify-center lg:justify-start mt-30">
        <Button>Send Request</Button>
      </span>
    </form>
  );
}
