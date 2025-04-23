import { useOrderStore } from "@/app/_lib/stores/ordersStore";
import { format } from "date-fns";

function OrdersList() {
  const { orders, isLoading } = useOrderStore();

  if (isLoading) return <p>Loading your orders...</p>;

  if (orders.length === 0) {
    return <p className="text-sm">You haven&apos;t placed any orders yet.</p>;
  }

  return (
    <ul className="flex flex-col gap-30 text-sm">
      {orders.map((order) => (
        <li
          key={order.id}
          className="rounded-md p-15 bg-white shadow-sm flex flex-row gap-30 flex-wrap justify-between items-center"
        >
          <div className="flex flex-col lg:flex-row gap-15 lg:gap-30 lg:justify-between lg:min-w-[300px]">
            <p>
              <span className="font-medium">Guide:</span> {order.title}
            </p>
            <p>
              <span className="font-medium">Date:</span>{" "}
              {order.createdAt?.toDate
                ? format(order.createdAt.toDate(), "dd MMM yyyy")
                : "Unknown"}
            </p>
          </div>

          <div className="flex flex-col items-end lg:flex-row-reverse gap-15 lg:gap-30 ">
            {order.amount && (
              <p className=" font-semibold ">${order.amount.toFixed(2)}</p>
            )}
            <p
              className={` uppercase ${
                order.status === "fulfilled"
                  ? "text-green-600"
                  : "text-yellow-500"
              } `}
            >
              {order.status || "processing"}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default OrdersList;
