"use client";

import {  useState } from "react";
import { Button } from "@/components/ui/button";
import { EventRecord } from "@/app/(dashboard)/dashboard/events/page";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: EventRecord) => void;
  defaultValues?: EventRecord;
}

export default function AddEventDrawer({
  open,
  onClose,
  onSubmit,
  defaultValues,
}: Props) {
  const [form, setForm] = useState<EventRecord>(
    defaultValues || {
      id: "",
      fullName: "",
      shortName: "",
      
    imageUrl: "",

      startDate: "",
      endDate: "",
      venue: "",
      city: "",
      state: "",
      country: "India",
      registrationType: "Free",
      amount: 0,
      status: "Active",
    }
  );

//   useEffect(() => {
//     setForm(
//       defaultValues || {
//         id: "",
//         fullName: "",
//         shortName: "",
//         imageUrl: "",
//         startDate: "",
//         endDate: "",
//         venue: "",
//         city: "",
//         state: "",
//         country: "India",
//         registrationType: "Free",
//         amount: 0,
//         status: "Active",
//       }
//     );
//   }, [defaultValues]);

  const handleChange = (key: keyof EventRecord, value: string | number) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose}></div>

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white shadow-lg z-50 transform transition-transform duration-300">
        <form
          onSubmit={handleSubmit}
          className="h-full flex flex-col p-6 space-y-4 overflow-y-auto"
        >
          <h2 className="text-xl font-semibold mb-2">
            {defaultValues ? "Edit Event" : "Add Event"}
          </h2>

          {/* Event Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Event Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Event Short Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Event Short Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.shortName}
              onChange={(e) => handleChange("shortName", e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-sm font-medium mb-1  ">
              Upload Image <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  handleChange("imageUrl", file.name);
                }
              }}
              className="w-full border rounded p-2"
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Start Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={form.startDate}
              onChange={(e) => handleChange("startDate", e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium mb-1">
              End Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={form.endDate}
              onChange={(e) => handleChange("endDate", e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Venue */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Venue Name <span className="text-red-500">*</span>
            </label>
            <select
              value={form.venue}
              onChange={(e) => handleChange("venue", e.target.value)}
              className="w-full border rounded p-2"
              required
            >
              <option value="">Select venue</option>
              <option value="Venue 1">Venue 1</option>
              <option value="Venue 2">Venue 2</option>
              <option value="Venue 3">Venue 3</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.city}
              onChange={(e) => handleChange("city", e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium mb-1">
              State <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.state}
              onChange={(e) => handleChange("state", e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              value={form.country}
              onChange={(e) => handleChange("country", e.target.value)}
              className="w-full border rounded p-2"
              required
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </div>

          {/* Registration Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Registration Type <span className="text-red-500">*</span>
            </label>
            <select
              value={form.registrationType}
              onChange={(e) => handleChange("registrationType", e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
              <option value="Invite">Invite</option>
            </select>
          </div>

          {/* Amount */}
          {form.registrationType === "Paid" && (
            <div>
              <label className="block text-sm font-medium mb-1">
                Amount (in rupees) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={form.amount || ""}
                onChange={(e) => handleChange("amount", Number(e.target.value))}
                className="w-full border rounded p-2"
                required={form.registrationType === "Paid"}
              />
            </div>
          )}

          {/* Status */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Status <span className="text-red-500">*</span>
            </label>
            <select
              value={form.status}
              onChange={(e) => handleChange("status", e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="mt-auto flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
              {defaultValues ? "Update" : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
