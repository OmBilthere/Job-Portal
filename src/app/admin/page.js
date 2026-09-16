import AdminHome from "@/components/home/AdminHome";
import { getSessionUser } from "@/lib/auth/session";

export default async function AdminPage() {
  const user = await getSessionUser();
  if (!user) {
    return <div>User not found</div>;
  }

  return <AdminHome user={user} />;

}