export default function Burger({ isOpen, toggle }) {
  return (
    <div onClick={toggle} className="cursor-pointer relative w-8 h-6">
      {/* Top Bar */}
      <div
        className={`burger transition-all duration-300
        ${isOpen ? "top-1/2 rotate-45" : "top-0"}
        `}
      ></div>

      {/* Middle Bar (Hidden when Open) */}
      <div
        className={`burger top-1/2 transition-all duration-300
        ${isOpen ? "opacity-0" : ""}
        `}
      ></div>

      {/* Bottom Bar */}
      <div
        className={`burger transition-all duration-300
        ${isOpen ? "top-1/2 -rotate-45" : "bottom-0"}
        `}
      ></div>
    </div>
  );
}
