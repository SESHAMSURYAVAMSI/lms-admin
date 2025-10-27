"use client";

import { useRouter,  } from "next/navigation";

import {
  ArrowLeft,
  MapPin,
  Users,
  Presentation,
  BookOpen,
} from "lucide-react";
import { useState } from "react";
// import Link from "next/link";

export default function ManageEventPage() {
  const router = useRouter();
//   const { id } = useParams();
  const [activeMenu, setActiveMenu] = useState("Topics");

  const menuItems = [
    { name: "Speakers", icon: <MapPin className="w-4 h-4" /> },
    { name: "Sessions", icon: <Presentation className="w-4 h-4" /> },
    { name: "Topics", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Registered Users", icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-[220px] border-r flex flex-col bg-white">
        <div className="p-4 border-b flex items-center gap-2 text-gray-700 cursor-pointer hover:text-[#ff7a1a]"
          onClick={() => router.push("/dashboard/events")}>
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Main Menu</span>
        </div>

        <nav className="flex-1">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveMenu(item.name)}
              className={`flex items-center gap-2 w-full text-left px-4 py-3 text-sm border-b
                ${
                  activeMenu === item.name
                    ? "bg-[#ff7a1a] text-white font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>

        <div className="p-4 text-xs text-gray-500 border-t text-center">
          Educational Grant By
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-8 bg-[#f9f9f9] overflow-y-auto">
        {activeMenu === "Speakers" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Speakers Management
            </h2>
            <p className="text-gray-600">Add or manage event speakers here.</p>
          </div>
        )}

        {activeMenu === "Sessions" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Sessions Management
            </h2>
            <p className="text-gray-600">
              Create and edit sessions for this event.
            </p>
          </div>
        )}

        {activeMenu === "Topics" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Topics Management
            </h2>
            <p className="text-gray-600">
              Manage topics related to this event.
            </p>
          </div>
        )}

        {activeMenu === "Registered Users" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Registered Users
            </h2>
            <p className="text-gray-600">
              View and manage users who registered for this event.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
