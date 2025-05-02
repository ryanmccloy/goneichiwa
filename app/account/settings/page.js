import AccountSettingsForm from "@/app/_components/account/AccountSettingsForm";

export const metadata = {
  title: "Settings | Goneichiwa",
};

function page() {
  return (
    <div className="">
      <AccountSettingsForm />
    </div>
  );
}

export default page;
