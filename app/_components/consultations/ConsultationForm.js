import Button from "../ui/Button";

export default function ConsultationForm() {
  const layoutSpacing = "flex flex-col gap-30";
  const inputStyles = "bg-light-grey rounded-global p-2";

  return (
    <form className={` ${layoutSpacing}`}>
      <h4 className={`uppercase  text-regular`}>Request A Consultation</h4>

      <div className={`${layoutSpacing}`}>
        <input type="name" placeholder="Name" className={`${inputStyles}`} />
        <input
          type="date"
          placeholder="Consultation date"
          className={`${inputStyles}`}
        />
      </div>

      <input type="email" placeholder="Email" className={`${inputStyles}`} />

      <div className={`${layoutSpacing}`}>
        <input
          type="text"
          placeholder="Destination"
          className={`${inputStyles}`}
        />
        <input
          type="date"
          placeholder="Travel Dates"
          className={`${inputStyles}`}
        />
      </div>

      <input
        type="textarea"
        placeholder="Any questions or specific requests?..."
        className={`${inputStyles}`}
      />

      <span className="flex justify-center lg:justify-start mt-30">
        <Button>Send Request</Button>
      </span>
    </form>
  );
}
