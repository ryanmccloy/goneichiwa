"use client";
import MyGuidesCard from "@/app/_components/account/MyGuidesCard";
import { useOrderStore } from "@/app/_lib/stores/ordersStore";

function Page() {
  const { orders, isLoading } = useOrderStore();

  if (isLoading) {
    return <p>Loading your guides</p>;
  }

  if (orders.length === 0) {
    return <p>You haven&apos;t purchased any travel guides yet...</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-30 gap-y-60 ">
      {orders.map((order) => (
        <MyGuidesCard key={order.id} guideId={order.guideId} />
      ))}
    </div>
  );
}

export default Page;
