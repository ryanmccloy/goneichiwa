import { redirect } from "next/navigation";

export const metadata = {
  title: "Account",
};
export default function Page() {
  redirect("/account/my-guides");
}
