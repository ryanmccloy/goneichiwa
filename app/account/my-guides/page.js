import MyGuidesCard from "@/app/_components/account/MyGuidesCard";

function page() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-30 gap-y-60 ">
      <MyGuidesCard />
      <MyGuidesCard />
      <MyGuidesCard />
      <MyGuidesCard />
      <MyGuidesCard />
      <MyGuidesCard />
      <MyGuidesCard />
    </div>
  );
}

export default page;
