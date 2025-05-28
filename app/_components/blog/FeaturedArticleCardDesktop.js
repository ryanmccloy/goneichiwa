import Image from "next/image";
import Link from "next/link";
import ArrowRightSimpleIcon from "../ui/icons/ArrowRightSimpleIcon";
import ArticleTag from "./ArticleTag";
import ComingSoonOverlay from "../catalogue/ComingSoonOverlay";

function FeaturedArticleCardDesktop({ title, url, alt, href, tags }) {
  return (
    <div className="group  w-full h-[450px] grow-1">
      <div className="w-full h-full relative">
        <Image
          src={url}
          alt={alt}
          fill
          className="object-cover rounded-global"
        />
        <ComingSoonOverlay />
        <span className="absolute z-30 top-15 right-15">
          <ArrowRightSimpleIcon />
        </span>

        <div className=" flex flex-col z-30 absolute  -mt-1">
          <h5 className="uppercase font-normal bg-off-white rounded-br-sm py-3 px-4">
            {title}
          </h5>

          <div className="flex gap-15 flex-wrap bg-off-white py-3 px-4 w-fit -mt-1 rounded-tl-none rounded-br-sm">
            {tags.map((tag) => {
              return <ArticleTag key={tag} tag={tag} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedArticleCardDesktop;
