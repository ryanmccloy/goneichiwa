"use client";
import MyGuidesCard from "@/app/_components/account/MyGuidesCard";
import { useAccountStore } from "@/app/_lib/stores/accountStore";

function Page() {
  const { orders, isLoading } = useAccountStore();

  const purchasedGuideIds = new Set();

  orders.forEach((order) => {
    order.items?.forEach((guide) => {
      purchasedGuideIds.add(guide.id);
    });
  });

  const purchasedGuides = Array.from(purchasedGuideIds);

  if (isLoading) {
    return <p>Loading your guides</p>;
  }

  if (orders.length === 0) {
    return (
      <p className="text-sm">
        You haven&apos;t purchased any travel guides yet...
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-30 gap-y-60 ">
      {purchasedGuides.map((order) => (
        <MyGuidesCard key={order} guideId={order} />
      ))}
    </div>
  );
}

export default Page;
