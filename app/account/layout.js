"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/app/_lib/auth-service";
import ProtectedRoute from "@/app/_components/auth/ProtectedRoute";

const links = [
  { href: "/account", label: "Overview" },
  { href: "/account/guides", label: "My Guides" },
  { href: "/account/orders", label: "Orders" },
  { href: "/account/settings", label: "Settings" },
];

export default function AccountLayout({ children }) {
  const pathname = usePathname();

  return (
    <ProtectedRoute>
      <section className="section-style top-page-spacing width-size flex flex-col lg:grid lg:grid-cols-[220px_1fr] gap-30 lg:gap-60">
        {/* Sidebar or Top Nav */}
        <aside className="border-b lg:border-b-0 lg:border-r pb-15  lg:pr-30">
          <nav className="flex flex-row lg:flex-col justify-between flex-wrap ">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm px-2 transition font-medium ${
                  pathname === link.href
                    ? "text-accent-blue font-semibold"
                    : "text-neutral-600 hover:text-accent-blue"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={logout}
              className="text-sm w-fit text-red-500 hover:underline "
            >
              Log out
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="min-h-[400px]">{children}</div>
      </section>
    </ProtectedRoute>
  );
}
