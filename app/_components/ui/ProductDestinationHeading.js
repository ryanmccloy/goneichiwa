export default function ProductDestinationHeadings({ children }) {
  return (
    <div className="">
      <h4 className={`uppercase font-semibold text-regular  z-10`}>
        {children}
      </h4>
      <span>£5</span>
    </div>
  );
}
