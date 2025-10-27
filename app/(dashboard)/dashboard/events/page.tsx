'use client';

import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventsList from "@/app/components/dashboard/Events/EventsList";
import AddEventDrawer from "@/app/components/dashboard/Events/AddEventDrawer";


/**
 * Event type used across these files
 */
export type EventRecord = {
  id: string;
  fullName: string;
  shortName?: string;
  imageUrl?: string;
  startDate?: string; // ISO or localized
  endDate?: string;
  venue?: string;
  city?: string;
  state?: string;
  country?: string;
  registrationType?: "Free" | "Paid" | "Invite";
  amount?: number;
  status?: "Active" | "Draft" | "Trash" | "Inactive";
};

const generateDummyEvents = (): EventRecord[] => [
  {
    id: "uro-complicon-2025",
    fullName: "URO-Complicon 2025",
    shortName: "URO-Complicon",
    imageUrl: "/images/event-poster-1.png",
    startDate: "2025-08-09",
    endDate: "2025-08-10",
    venue: "HICC Novotel, Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    registrationType: "Paid",
    amount: 1200,
    status: "Active",
  },
  {
    id: "urocon-2025",
    fullName: "UROCON 2025",
    shortName: "UROCON",
    imageUrl: "/images/event-poster-1.png",
    startDate: "2025-08-19",
    endDate: "2025-08-20",
    venue: "HICC Novotel, Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    registrationType: "Free",
    amount: 0,
    status: "Active",
  },
];

export default function EventsPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [events, setEvents] = useState<EventRecord[]>(generateDummyEvents());
  const [editingEvent, setEditingEvent] = useState<EventRecord | undefined>(
    undefined
  );

  // Add new event
  const handleAddNew = () => {
    setEditingEvent(undefined); // reset form data
    setDrawerOpen(true);
  };

  // Edit event
  const handleEdit = (record: EventRecord) => {
    setEditingEvent(record); // prefill form
    setDrawerOpen(true);
  };

  // Save event (add or edit)
  const handleSubmit = (data: EventRecord) => {
    if (data.id) {
      setEvents((prev) =>
        prev.map((e) => (e.id === data.id ? { ...e, ...data } : e))
      );
    } else {
      const newData = { ...data, id: Date.now().toString() };
      setEvents((prev) => [newData, ...prev]);
    }
    setDrawerOpen(false);
  };

  // Delete event
  const handleDelete = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold textblack font-francois-one mb-0 pb-4">
        Events
      </h1>

      <div className="flex justify-end ">
        <Button
          onClick={handleAddNew}
          className="bg-[#ff7a1a] hover:bg-[#f26d0e] text-white cursor-pointer flex items-center gap-2"
        >
          <PlusCircle className=" h-4 w-4" />
          Add Event
        </Button>
      </div>

      <EventsList
        data={events}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Key prop forces drawer to reset when switching between Add and Edit */}
      {drawerOpen && (
        <AddEventDrawer
          key={editingEvent ? editingEvent.id : "new"} 
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onSubmit={handleSubmit}
          defaultValues={editingEvent}
        />
      )}
    </div>
  );
}
