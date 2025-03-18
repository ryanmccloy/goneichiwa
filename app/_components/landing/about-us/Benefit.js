export default function Benefit({ icon, title, description }) {
  return (
    <div className="flex flex-col gap-30 items-center">
      <span>{icon}</span>
      <div className="flex flex-col gap-15">
        <h4 className="uppercase font-medium text-center">{title}</h4>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
}
