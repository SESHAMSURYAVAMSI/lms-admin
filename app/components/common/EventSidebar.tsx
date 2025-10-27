"use client";

import { useRouter, usePathname } from "next/navigation";
import { Users, MapPin, BookOpen } from "lucide-react";

const menuItems = [
  { label: "Speakers", icon: Users, path: "speakers" },
  { label: "Sessions", icon: MapPin, path: "sessions" },
  { label: "Topics", icon: BookOpen, path: "topics" },
  { label: "Registered Users", icon: Users, path: "users" },
];

export default function EventSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  // Extract the event ID from URL
  const parts = pathname.split("/");
  const eventId = parts[parts.indexOf("events") + 1];

  return (
    <aside className="fixed top-18 left-0 h-screen w-64 bg-white border-r flex flex-col justify-between font-poppins">
      <div>
        <div className="px-4 py-3 border-b text-sm font-medium text-gray-600 flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/dashboard/events")}
        >
          ← Main Menu
        </div>

        {menuItems.map((item) => {
          const active = pathname.includes(item.path);
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => router.push(`/dashboard/events/${eventId}/${item.path}`)}
              className={`flex items-center gap-3 w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                active
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 hover:bg-orange-100"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="p-4 text-xs text-center text-gray-400">
        Educational Grant By
      </div>
    </aside>
  );
}
