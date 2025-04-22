import ProtectedRoute from "@/app/_components/auth/ProtectedRoute";
import AccountNavigation from "../_components/auth/AccountNavigation";

export default function AccountLayout({ children }) {
  return (
    <ProtectedRoute>
      <section className="section-styles top-page-spacing width-size flex flex-col md:grid md:grid-cols-[220px_1fr] gap-30 lg:gap-60">
        {/* Sidebar or Top Nav */}
        <AccountNavigation />
        {/* Main Content */}
        <div className="min-h-[400px]">{children}</div>
      </section>
    </ProtectedRoute>
  );
}
