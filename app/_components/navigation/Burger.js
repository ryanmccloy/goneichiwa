import { usePathname } from "next/navigation";

export default function Burger({ isOpen, toggleMenu, isHome }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleMenu();
    }
  };

  return (
    <div
      onClick={toggleMenu}
      onKeyDown={handleKeyDown}
      className="cursor-pointer relative w-8 h-6 lg:hidden"
      tabIndex="0"
    >
      {/* Top Bar */}
      <div
        className={`burger 
        ${isOpen ? "top-1/2 rotate-45" : "top-0"}
        ${isHome ? "bg-off-white" : "bg-off-black"}
        `}
      ></div>

      {/* Middle Bar (Hidden when Open) */}
      <div
        className={`burger top-1/2 
        ${isOpen ? "opacity-0" : ""}
         ${isHome ? "bg-off-white" : "bg-off-black"}
        `}
      ></div>

      {/* Bottom Bar */}
      <div
        className={`burger 
        ${isOpen ? "top-1/2 -rotate-45" : "bottom-0"}
         ${isHome ? "bg-off-white" : "bg-off-black"}
        `}
      ></div>
    </div>
  );
}
