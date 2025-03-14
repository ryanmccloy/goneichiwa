function CardHeadings({ children, color = "dark", center = false }) {
  const textColor = color === "dark" ? "text-off-black" : "text-off-white";
  return (
    <h4
      className={`font-display uppercase text-large ${
        center === false ? "text-left" : "text-center"
      } ${textColor}`}
    >
      {children}
    </h4>
  );
}

export default CardHeadings;
