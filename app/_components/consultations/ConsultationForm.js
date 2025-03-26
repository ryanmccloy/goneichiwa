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
        <label htmlFor="name" className="sr-only">
          Name
        </label>

        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Name"
          aria-label="Name"
          className={`${inputStyles} `}
          autoComplete="name"
        />
        <label htmlFor="consultation-date" className="sr-only">
          Consultation date
        </label>

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

      <label htmlFor="email" className="sr-only">
        Email
      </label>

      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="Email"
        aria-label="Email"
        className={`${inputStyles} max-h-fit`}
        autoComplete="email"
      />
      <label htmlFor="destination" className="sr-only">
        Destination
      </label>

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
        <label htmlFor="duration" className="sr-only">
          Trip Duration
        </label>

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

      <label htmlFor="message" className="sr-only">
        Message
      </label>

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
