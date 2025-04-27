import { toast } from "react-hot-toast";

export const toastConfirmAction = (message, onConfirm) => {
  toast(
    (t) => (
      <span className="flex flex-col gap-30 p-15">
        {message}
        <div className="flex justify-center gap-30">
          <button
            onClick={() => {
              onConfirm();
              toast.dismiss(t.id);
            }}
            className="bg-accent-blue text-white px-2 py-1 rounded cursor-pointer"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-gray-300 px-2 py-1 rounded cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </span>
    ),
    { duration: 10000 }
  );
};
