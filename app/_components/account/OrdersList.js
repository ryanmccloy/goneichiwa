"use client";

import { useAccountStore } from "@/app/_lib/stores/accountStore";
import { format } from "date-fns";

function OrdersList() {
  const { orders, isLoading } = useAccountStore();

  if (isLoading) return <p>Loading your orders...</p>;

  if (orders.length === 0) {
    return <p className="text-sm">You haven&apos;t placed any orders yet.</p>;
  }

  console.log(orders);

  return (
    <ul className="flex flex-col gap-30 text-sm ">
      {orders.map((order) => (
        <li
          key={order.id}
          className="rounded-md p-15 bg-white shadow-sm flex flex-col md:flex-row gap-30 flex-wrap justify-between"
        >
          <div className="flex flex-col gap-15 lg:gap-30 min-w-0 flex-1">
            <p>
              <span className="font-medium">Purchased:</span>{" "}
              {order.items?.length > 0
                ? order.items.map((item) => item.title).join(", ")
                : "No guides"}
            </p>
            <p>
              <span className="font-medium">Order Number:</span>{" "}
              {order.orderNumber}
            </p>

            <p>
              <span className="font-medium">Date:</span>{" "}
              {order.createdAt
                ? format(new Date(order.createdAt), "dd MMM yyyy")
                : "Unknown"}
            </p>
          </div>

          <div className="flex flex-row md:flex-col min-w-[120px]  md:items-end justify-between  ">
            {order.totalAmount && (
              <p className=" font-semibold ">
                {new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: order.currency || "GBP",
                }).format(order.totalAmount)}
              </p>
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
