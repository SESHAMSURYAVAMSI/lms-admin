"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { MapPin, Presentation, BookOpen, Users } from "lucide-react";
import { useSidebar } from "@/app/components/dashboard/Events/SidebarContext";

const mainMenu = [
  { label: "Events", path: "/dashboard/events", icon: "/icons/events.png" },
  { label: "Orders", path: "/dashboard/mypurchase", icon: "/icons/order.png" },
  { label: "My Profile", path: "/dashboard/myprofile", icon: "/icons/my-profile.png" },
  { label: "Users", path: "/dashboard/users", icon: "/icons/my-profile.png" },
];

const manageEventMenu = [
  { name: "Speakers", icon: <MapPin className="w-4 h-4" /> },
  { name: "Sessions", icon: <Presentation className="w-4 h-4" /> },
  { name: "Topics", icon: <BookOpen className="w-4 h-4" /> },
  { name: "Registered Users", icon: <Users className="w-4 h-4" /> },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { sidebarType, setSidebarType } = useSidebar();

  return (
    <aside className="fixed top-18 left-0 h-screen w-64 bg-white border-r flex flex-col justify-between font-poppins transition-all duration-300">
      <div className="mt-4">
        {sidebarType === "main" ? (
          mainMenu.map((item) => (
            <button
              key={item.label}
              onClick={() => router.push(item.path!)}
              className={`flex items-center gap-3 w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                pathname === item.path
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 hover:bg-orange-100"
              }`}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
                className="object-contain"
              />
              <span>{item.label}</span>
            </button>
          ))
        ) : (
          <>
            <div className="flex items-center justify-between px-4 py-2 border-b">
              <h3 className="font-semibold text-gray-800">Manage Event</h3>
              <button
                onClick={() => setSidebarType("main")}
                className="text-xs text-gray-500 hover:text-orange-500"
              >
                ← Back
              </button>
            </div>
            {manageEventMenu.map((item) => (
              <button
                key={item.name}
                className="flex items-center gap-3 w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-100"
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </>
        )}
      </div>
    </aside>
  );
}
