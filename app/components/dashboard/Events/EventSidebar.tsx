// "use client";

// import { MapPin, Presentation, BookOpen, Users } from "lucide-react";
// import { useSidebar } from "@/app/components/dashboard/Events/SidebarContext";
// import { useRouter, usePathname } from "next/navigation";

// const manageEventMenu = [
//   { name: "Speakers", path: "speakers", icon: <MapPin className="w-4 h-4" /> },
//   { name: "Sessions", path: "sessions", icon: <Presentation className="w-4 h-4" /> },
//   { name: "Topics", path: "topics", icon: <BookOpen className="w-4 h-4" /> },
//   { name: "Registered Users", path: "users", icon: <Users className="w-4 h-4" /> },
// ];

// export default function ManageEventSidebar({ eventId }: { eventId: string }) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const { sidebarType, setSidebarType } = useSidebar();

//   if (sidebarType !== "manageEvent") return null; // 👈 Hide by default

//   const handleClick = (path: string) => {
//     router.push(`/dashboard/events/${eventId}/${path}`);
//   };

//   return (
//     <aside className="fixed top-18 left-64 h-screen w-64 bg-white border-r flex flex-col font-poppins transition-all duration-300">
//       <div className="flex items-center justify-between px-4 py-2 border-b bg-white sticky top-0">
//         <h3 className="font-semibold text-gray-800">Manage Event</h3>
//         <button
//           onClick={() => {
//             setSidebarType("main");
//             router.push("/dashboard/events");
//           }}
//           className="text-xs text-gray-600 hover:text-orange-500"
//         >
//           ← Back
//         </button>
//       </div>

//       {manageEventMenu.map((item) => (
//         <button
//           key={item.name}
//           onClick={() => handleClick(item.path)}
//           className={`flex items-center gap-3 w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
//             pathname.includes(item.path)
//               ? "bg-orange-500 text-white"
//               : "text-gray-700 hover:bg-orange-100"
//           }`}
//         >
//           {item.icon}
//           <span>{item.name}</span>
//         </button>
//       ))}
//     </aside>
//   );
// }
