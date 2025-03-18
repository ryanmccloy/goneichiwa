function CardHeadings({ children, color = "dark", center = false }) {
  const textColor = color === "dark" ? "text-off-black" : "text-off-white";
  return (
    <h4
      className={`uppercase font-semibold text-regular  z-10 ${
        center === false ? "text-left" : "text-center"
      } ${textColor}`}
    >
      {children}
    </h4>
  );
}

export default CardHeadings;
