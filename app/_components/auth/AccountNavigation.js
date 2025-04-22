"use client";

import { logout } from "@/app/_lib/auth-service";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/account/my-guides", label: "My Guides" },
  { href: "/account/orders", label: "Orders" },
  { href: "/account/saved-blog-posts", label: "Saved Blog Posts" },
  { href: "/account/settings", label: "Settings" },
];

function AccountNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-15 md:hidden">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-center pointer-cursor h-full flex justify-center items-center text-sm p-2 transition-all duration-200 font-medium bg-white shadow-sm rounded-md  ${
              pathname === link.href
                ? "text-accent-blue font-semibold"
                : "text-off-black hover:scale-[97%]"
            }`}
          >
            {link.label}
          </Link>
        ))}

        <button
          onClick={handleLogout}
          className="cursor-pointer text-sm p-2  bg-white shadow-sm text-red-500 hover:bg-red-200 
          hover:scale-[97%] rounded-md transition-all duration-200 "
        >
          Log out
        </button>
      </div>

      <aside className="hidden md:block">
        <nav className="flex flex-col justify-between gap-30 ">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition font-medium ${
                pathname === link.href
                  ? "text-accent-blue font-semibold"
                  : "text-off-black hover:text-accent-blue"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div>
            <button
              onClick={handleLogout}
              className="text-sm w-fit text-red-500 hover:underline "
            >
              Log out
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default AccountNavigation;
