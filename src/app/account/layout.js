import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth/session";
import CustomerNavbar from "@/components/navbar/CustomerNavbar";
import CustomerDrawer from "@/components/navdrawer/CustomerDrawer";

export default async function AccountLayout({ children }) {
  const user = await getSessionUser();

  if (!user) redirect("/");
  

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomerNavbar user={user} />
      <CustomerDrawer user={user} />
      

      <main>{children}</main>
    </div>
  );
}