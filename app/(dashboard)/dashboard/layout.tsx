"use client";

import { usePathname } from "next/navigation";
import DashboardHeader from "@/app/components/common/DashboardHeader";
import Sidebar from "@/app/components/common/Sidebar";
import EventSidebar from "@/app/components/common/EventSidebar";
import Footer from "@/app/components/common/footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // ✅ Detect when we are on `/dashboard/events/[id]`
  const isEventPage =
    pathname.startsWith("/dashboard/events/") &&
    pathname.split("/").length > 4;

  return (
    <div className="flex font-poppins min-h-screen bg-[#FAFAFA]">
      {/* ✅ Conditional Sidebar */}
      {isEventPage ? <EventSidebar /> : <Sidebar />}

      {/* ✅ Main Content Section */}
      <div className="flex flex-col flex-1 ml-64">
        {/* Header */}
        <DashboardHeader />

        {/* Page Content */}
        <main className="flex-1 mt-20 p-6 bg-[#FAFAFA]">{children}</main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
