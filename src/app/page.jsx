"use client";
import usePageStore from "@/lib/useStore";
import CenterSection from "@/sections/CenterSection/CenterSection";
import Profile from "@/sections/Profile/Profile";
import TransactionTable from "@/sections/Transaction/TransactionTable";

export default function Home() {
  const { selectedPage } = usePageStore();

  let content;
  switch (selectedPage) {
    case "Transactions":
      content = (
        <div className="w-full h-full">
          <TransactionTable />
        </div>
      );
      break;
    case "Profile":
      content = <Profile/>;
      break;
    default:
      content = <CenterSection />;
  }

  return <>{content}</>;
}
