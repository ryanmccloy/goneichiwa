export default function ProductDestinationHeadings({ children, price }) {
  return (
    <div className="">
      <h4 className={`uppercase font-semibold text-regular  z-10`}>
        {children}
      </h4>
      <span>£{price}</span>
    </div>
  );
}
