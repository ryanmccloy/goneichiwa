import OrdersList from "@/app/_components/account/OrdersList";

export const metadata = {
  title: "Order History",
};

export default function page() {
  return (
    <div>
      <OrdersList />
    </div>
  );
}
