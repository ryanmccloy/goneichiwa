import DownloadIcon from "../ui/icons/DownloadIcon";
import Spinner from "../ui/Spinner";

function SuccessPageItem({ title, downloadUrl, isLoading }) {
  return (
    <li className="flex justify-between gap-30 w-[250px] bg-white rounded-global shadow-sm p-15">
      <p className="text-sm text-start flex-1 truncate">{title}</p>

      {isLoading ? (
        <Spinner />
      ) : (
        downloadUrl && <DownloadIcon downloadUrl={downloadUrl} />
      )}
    </li>
  );
}

export default SuccessPageItem;
