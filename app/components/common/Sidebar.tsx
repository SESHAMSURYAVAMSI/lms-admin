"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const menuItems = [
  { label: "Events", path: "/dashboard/events", icon: "/icons/events.png" },
  { label: "Orders", path: "/dashboard/mypurchase", icon: "/icons/order.png" },
  // { label: "Speakers", path: "/dashboard/speakers", icon: "/icons/speaker.png" },
  { label: "My Profile", path: "/dashboard/myprofile", icon: "/icons/my-profile.png" },
  { label: "Users", path: "/dashboard/users", icon: "/icons/my-profile.png" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="fixed top-18 left-0 h-screen w-64 bg-white border-r flex flex-col justify-between font-poppins">
      {/* Menu Section */}
      <div className="mt-4">
        {menuItems.map((item) => (
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
        ))}
      </div>
    </aside>
  );
}