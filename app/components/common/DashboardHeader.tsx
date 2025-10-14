"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function DashboardHeader() {
  const router = useRouter();

  // ✅ Use useCallback to ensure stable function reference
  const handleLogout = useCallback(() => {
    try {
      // Clear any stored authentication data if applicable
      // localStorage.removeItem("token");
      // localStorage.removeItem("user");

      // Redirect to login page
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }, [router]);

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-gradient-to-r from-[#B5D9FF] to-[#D6E7FF] shadow-md flex items-center justify-between px-8 z-50">
      {/* Left Section: Logo */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => router.push("/dashboard/events")}
      >
        <Image
          src="/urological.png"
          alt="Urological Society of India"
          width={190}
          height={190}
          className="object-contain"
        />
      </div>

      {/* Right Section: Profile + Logout */}
      <div className="flex items-center gap-6">
        {/* Profile Icon → My Profile Page */}
        <button
          onClick={() => router.push("/dashboard/myprofile")}
          className="focus:outline-none"
        >
          <Image
            src="/profile.jpeg"
            alt="Profile"
            width={45}
            height={45}
            className="rounded-full object-cover border-2 border-white shadow-sm hover:opacity-90 transition"
          />
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
