import DashboardHeader from "@/app/components/common/DashboardHeader";
import Sidebar from "@/app/components/common/Sidebar";
import Footer from "@/app/components/common/footer"; // ✅ fixed naming (Footor → Footer)

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex font-poppins min-h-screen bg-[#FAFAFA] ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 ml-64">
        {/* Header */}
        <DashboardHeader />

        {/* Main Content */}
        <main className="flex-1 mt-20 p-6 bg-[#FAFAFA]">{children}</main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
