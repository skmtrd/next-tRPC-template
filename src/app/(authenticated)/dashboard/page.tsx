import { getCurrentUserInfo } from "@/app/actions/getUserInfo";
import DashboardPage from "@/components/domain/(authenticated)/dashboard/DashboardPage";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await getCurrentUserInfo();

  if (!user) {
    redirect("/login");
  }

  return <DashboardPage user={user} />;
};

export default Page;
