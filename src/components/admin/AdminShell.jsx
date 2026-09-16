
"use client";

import { useState } from "react";
import AdminNavbar from "@/components/navbar/AdminNavbar";
import AdminDrawer from "@/components/navdrawer/AdminDrawer";

export default function AdminShell({ user, children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar
        user={user}
        onMenuClick={() => setDrawerOpen(!drawerOpen)}
      />

      <AdminDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      <main className="min-h-screen pt-16 lg:pl-64">
        {children}
      </main>
    </div>
  );
}