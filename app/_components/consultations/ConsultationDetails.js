import ConsultationForm from "./ConsultationForm";
import ConsultationSummary from "./ConsultationSummary";

function ConsultationDetails() {
  return (
    <section className="section-styles grid grid-cols-1  lg:grid-cols-2 gap-60 lg:gap-120">
      <ConsultationSummary />
      <ConsultationForm />
    </section>
  );
}

export default ConsultationDetails;
