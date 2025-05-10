import DownloadIcon from "../ui/icons/DownloadIcon";

function SuccessPageItem({ title }) {
  return (
    <li className="flex justify-between gap-30  w-[250px] bg-white rounded-global shadow-sm p-15">
      <p className="text-sm text-start flex-1 truncate">{title}</p>

      <DownloadIcon />
    </li>
  );
}

export default SuccessPageItem;
