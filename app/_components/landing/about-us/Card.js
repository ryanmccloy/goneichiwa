import Image from "next/image";

export default function Card({ title, description, url, alt }) {
  return (
    <div className="group bg-light-grey h-[400px] rounded-global relative flex justify-center items-center hover:cursor-pointer">
      <Image
        src={url}
        alt={alt}
        fill
        style={{
          objectFit: "cover",
        }}
        className="rounded-global"
        quality={70}
      />
      <div className="text-off-white z-50 bg-off-black-80  w-full h-[62px]  transition-all py-15 px-30 duration-700 group-hover:h-full group-hover:rounded-xl group-hover:py-[75px] overflow-hidden ">
        <h4 className="card-headings ">{title}</h4>
        <p className="text-center mt-30">{description}</p>
      </div>
    </div>
  );
}
