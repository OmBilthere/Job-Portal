
"use client";

import { useState } from "react";
import PublicNavbar from "@/components/navbar/PublicNavbar";
import PublicDrawer from "@/components/navdrawer/PublicDrawer";

export default function PublicShell({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <PublicNavbar
        onMenuClick={() => setDrawerOpen(!drawerOpen)}
      />

      <PublicDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      <main>{children}</main>
    </div>
  );
}