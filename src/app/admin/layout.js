
import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth/session";
import AdminShell from "@/components/admin/AdminShell";

export default async function AdminLayout({ children }) {
  const user = await getSessionUser();
  console.log("AdminLayout user:", user);
  if (!user || user.role_id !== 1) {
    redirect("/");
  }

  return <AdminShell user={user}>{children}</AdminShell>;
}
