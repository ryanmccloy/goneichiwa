import ProtectedRoute from "@/app/_components/account/ProtectedRoute";
import AccountNavigation from "../_components/account/AccountNavigation";
import AccountClientProvider from "../_components/account/AccountClientProvider";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AccountLayout({ children }) {
  return (
    <ProtectedRoute>
      <section className="section-styles top-page-spacing width-size flex flex-col md:grid md:grid-cols-[220px_1fr] gap-30 lg:gap-60">
        {/* Sidebar or Top Nav */}
        <AccountNavigation />
        {/* Main Content */}
        <AccountClientProvider>{children}</AccountClientProvider>
      </section>
    </ProtectedRoute>
  );
}
