import OrdersList from "@/app/_components/account/OrdersList";

export const metadata = {
  title: "Order History | Goneichiwa",
};

export default function page() {
  return (
    <div>
      <OrdersList />
    </div>
  );
}
