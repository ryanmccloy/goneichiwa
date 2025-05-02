import ClientCartPage from "../_components/cartComponents/ClientCartPage";

export const metadata = {
  title: "Cart",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <ClientCartPage />;
}
