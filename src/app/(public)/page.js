import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth/session";
import PublicHome from "@/components/home/PublicHome";

export default async function HomePage() {
  const user = await getSessionUser();

  if (!user) {
    return <PublicHome />;
  }

  if (user.role_id === 1) redirect("/admin");
  if (user.role_id === 2) redirect("/child-admin");
  if (user.role_id === 3) redirect("/account");

  return <PublicHome />;
}