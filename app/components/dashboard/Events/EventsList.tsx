// @/components/EventsList.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CalendarDays, MapPin, MoreVertical, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { EventRecord } from "@/app/(dashboard)/dashboard/events/page";
import { useState } from "react";

interface Props {
  data: EventRecord[];
  onEdit: (record: EventRecord) => void;
  onDelete: (id: string) => void;
  onAdd?: () => void;
}

export default function EventsList({ data, onEdit, onDelete }: Props) {
  const [activeTab, setActiveTab] = useState("Live");
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filteredData = data.filter((ev) =>
    ev.fullName.toLowerCase().includes(search.toLowerCase())
  );

  // Helper to get the preview URL whether it's a File or a string URL
  const getImagePreview = (img?: string | File) => {
    if (!img) return null;
    return typeof img === "string" ? img : URL.createObjectURL(img);
  };

  return (
    <div className="space-y-6">
      {/* Header Bar (Tabs + Add Event) */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-6">
          {["Live", "Drafts", "All", "Trash"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 font-medium ${
                activeTab === tab
                  ? "text-[#ff7a1a] border-b-2 border-[#ff7a1a]"
                  : "text-gray-600 hover:text-[#ff7a1a]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="mb-4">
        <Input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs border-gray-300 focus-visible:ring-[#ff7a1a]"
        />
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {filteredData.map((ev) => {
          const imgPreview = getImagePreview(ev.imageUrl);
          return (
            <div
              key={ev.id}
              className="rounded-lg border bg-white shadow-sm p-4 flex gap-4 items-start"
            >
              {/* Poster */}
              <div className="flex-shrink-0 w-[84px] h-[120px] rounded-md overflow-hidden border">
                {imgPreview ? (
                  <Image
                    src={imgPreview}
                    alt={ev.fullName}
                    width={84}
                    height={120}
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center text-sm text-gray-500">
                    Poster
                  </div>
                )}
              </div>

              {/* Event Details */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0061A8]">
                      {ev.fullName}
                    </h3>

                    <p className="text-sm text-gray-600 mt-2 flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {ev.startDate
                        ? new Date(ev.startDate).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : "-"}
                      {ev.endDate
                        ? ` - ${new Date(ev.endDate).toLocaleDateString(
                            "en-GB",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}`
                        : ""}
                    </p>

                    <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {ev.venue ??
                        `${ev.city ?? ""}${ev.city ? ", " : ""}${
                          ev.country ?? ""
                        }`}
                    </p>

                    <p className="text-sm text-gray-600 mt-1">
                      {ev.registrationType === "Paid"
                        ? "Paid Event"
                        : ev.registrationType === "Free"
                        ? "Free Event"
                        : "Invite Only"}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Edit Button */}
                    <Button
                      size="sm"
                      onClick={() => onEdit(ev)}
                      className="bg-[#ff7a1a] hover:bg-[#f26d0e] text-white px-4 py-1"
                    >
                      Edit
                    </Button>

                    {/* Dropdown Menu */}
                    <DropdownMenu modal={false}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="border rounded-md"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onSelect={(e) => {
                            e.preventDefault();
                            router.push(`/dashboard/events/${ev.id}`);
                          }}
                        >
                          <Edit3 className="mr-2 h-4 w-4" /> Manage Event
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          onSelect={(e) => {
                            e.preventDefault();
                            onDelete(ev.id);
                          }}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {filteredData.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No events found</p>
        )}
      </div>
    </div>
  );
}
