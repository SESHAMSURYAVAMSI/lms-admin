"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, MapPin, MoreVertical, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Event {
  id: string;
  title: string;
  dateRange: string;
  location: string;
  imageUrl: string;
  price?: number;
}

interface Props {
  entries: Event[];
}

export default function Events({ entries }: Props) {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("live");

  const filteredEntries = entries.filter((entry) =>
    entry.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* ====== Header Bar ====== */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-xl font-semibold text-gray-800">Events</h1>
        <Button className="bg-[#FF6600] hover:bg-[#e65500] text-white rounded-md flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Event
        </Button>
      </div>

      {/* ====== Tabs ====== */}
      <div className="flex items-center gap-6 border-b border-gray-200 mb-6 text-sm font-medium">
        {["Live", "Drafts", "All", "Trash"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`pb-2 ${
              activeTab === tab.toLowerCase()
                ? "text-[#FF6600] border-b-2 border-[#FF6600]"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ====== Search Bar ====== */}
      <div className="relative mb-8 w-full sm:w-1/2">
        <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
        />
      </div>

      {/* ====== Event Cards ====== */}
      <div className="space-y-6">
        {filteredEntries.map((entry) => (
          <div
            key={entry.id}
            className="flex flex-col sm:flex-row gap-4 border border-gray-200 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow duration-200"
          >
            {/* Left: Image */}
            <div className="w-full sm:w-[120px] h-[160px] relative rounded-md overflow-hidden border border-gray-100">
              <Image
                src={entry.imageUrl}
                alt={entry.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Middle: Event Info */}
            <div className="flex-1 flex flex-col justify-center sm:pl-4">
              {/* ===== Title Row with Buttons on Right ===== */}
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-[#0d47a1]">
                  {entry.title}
                </h2>

                <div className="flex items-center gap-2">
                  <Link href={`/dashboard/events/${entry.id}/edit`}>
                    <Button className="bg-[#FF6600] hover:bg-[#e65500] text-white px-6 rounded-md">
                      Edit
                    </Button>
                  </Link>

                  <Button
                    variant="ghost"
                    className="p-2 text-gray-500 hover:text-gray-700"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* ===== Date & Location ===== */}
              <div className="flex items-center text-sm text-black mb-1">
                <CalendarDays className="w-4 h-4 mr-2 text-black" />
                {entry.dateRange}
              </div>

              <div className="flex items-center text-sm text-black mb-1">
                <MapPin className="w-4 h-4 mr-2 text-black" />
                {entry.location}
              </div>

              <div className="flex items-center text-sm text-black mt-2">
                {entry.price && entry.price > 0 ? (
                  <span className="flex items-center gap-1">
                    💳 <span>Paid Event</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    🎟️ <span>Free Event</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}

        {filteredEntries.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            No events found.
          </div>
        )}
      </div>
    </div>
  );
}
