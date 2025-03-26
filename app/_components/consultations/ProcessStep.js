export default function ProcessStep({ icon, title, description }) {
  return (
    <div className="flex flex-col gap-30 text-center items-center">
      <span>{icon}</span>
      <span className="uppercase font-semibold">{title}</span>
      <p>{description}</p>
    </div>
  );
}
