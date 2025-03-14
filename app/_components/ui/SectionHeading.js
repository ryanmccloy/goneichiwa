export default function SectionHeading({ children }) {
  return (
    <h2
      className="text-heading-small md:text-heading-medium lg:text-heading-large uppercase font-display leading-tight
  mb-60 lg:mb-90"
    >
      {children}
    </h2>
  );
}
