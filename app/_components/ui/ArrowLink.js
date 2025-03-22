import RightArrow from "./icons/RightArrow";

function ArrowLink({ children, groupHover = true }) {
  return (
    <div
      className={`flex gap-15 items-center cursor-pointer ${
        groupHover ? "" : "group"
      }`}
    >
      <h4 className={`uppercase font-medium text-regular  z-10 `}>
        {children}
      </h4>
      <span className={`group-hover:ml-3 transition-all duration-300`}>
        <RightArrow />
      </span>
    </div>
  );
}

export default ArrowLink;
