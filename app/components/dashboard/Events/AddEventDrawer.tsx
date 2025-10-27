"use client";

import { useState } from "react";
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

  const handleChange = (key: keyof EventRecord, value: string | number | File) => {
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
      <div className="fixed top-0 right-0 h-full w-full sm:w-[700px] bg-white shadow-lg z-50 transform transition-transform duration-300">
        <form
          onSubmit={handleSubmit}
          className="h-full flex flex-col p-6 space-y-4 overflow-y-auto"
        >
          <h2 className="text-xl font-semibold mb-2">
            {defaultValues ? "Edit Event" : "Add Event"}
          </h2>

          <div className="space-y-3">
            {/* Full Name */}
            <div className="flex items-center gap-4">
              <label className="w-[40%] text-sm font-medium">
                Event Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className="w-[60%] border rounded p-2"
                required
              />
            </div>

            {/* Short Name */}
            <div className="flex items-center gap-4">
              <label className="w-[40%] text-sm font-medium">
                Event Short Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.shortName}
                onChange={(e) => handleChange("shortName", e.target.value)}
                className="w-[60%] border rounded p-2"
                required
              />
            </div>

            {/* Upload Image (Improved Section) */}
            <div className="flex items-center gap-4">
              <label className="w-[40%] text-sm font-medium">
                Upload Image <span className="text-red-500">*</span>
              </label>

              <div className="w-[60%]">
                <div className="border border-gray-300 rounded-md bg-gray-50 p-3 flex items-center justify-between">
                  <label
                    htmlFor="imageUpload"
                    className="cursor-pointer px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium hover:bg-gray-100"
                  >
                    Choose File
                  </label>
                  <span className="text-gray-600 text-sm truncate ml-3 flex-1">
                    {form.imageUrl
                      ? typeof form.imageUrl === "string"
                        ? form.imageUrl.split("/").pop()
                        : form.imageUrl.name
                      : "No file chosen"}
                  </span>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleChange("imageUrl", file);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Start Date */}
            <div className="flex items-center gap-4">
              <label className="w-[40%] text-sm font-medium">
                Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={form.startDate}
                onChange={(e) => handleChange("startDate", e.target.value)}
                className="w-[60%] border rounded p-2"
                required
              />
            </div>

            {/* End Date */}
            <div className="flex items-center gap-4">
              <label className="w-[40%] text-sm font-medium">
                End Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={form.endDate}
                onChange={(e) => handleChange("endDate", e.target.value)}
                className="w-[60%] border rounded p-2"
                required
              />
            </div>

            {/* Venue */}
            <div className="flex items-center gap-4">
              <label className="w-[40%] text-sm font-medium">
                Venue Name <span className="text-red-500">*</span>
              </label>
              <select
                value={form.venue}
                onChange={(e) => handleChange("venue", e.target.value)}
                className="w-[60%] border rounded p-2"
                required
              >
                <option value="">Select venue</option>
                <option value="Venue 1">Venue 1</option>
                <option value="Venue 2">Venue 2</option>
                <option value="Venue 3">Venue 3</option>
              </select>
            </div>

            {/* City */}
            <div className="flex items-center gap-4">
              <label className="w-[40%] text-sm font-medium">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="w-[60%] border rounded p-2"
                required
              />
            </div>

            {/* State */}
            <div className="flex items-center gap-4">
              <label className="w-[40%] text-sm font-medium">
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.state}
                onChange={(e) => handleChange("state", e.target.value)}
                className="w-[60%] border rounded p-2"
                required
              />
            </div>

            {/* Country */}
            <div className="flex items-center gap-4">
              <label className="w-[40%] text-sm font-medium">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                value={form.country}
                onChange={(e) => handleChange("country", e.target.value)}
                className="w-[60%] border rounded p-2"
                required
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>

            {/* Registration Type */}
            <div className="flex items-center gap-4">
              <label className="w-[40%] text-sm font-medium">
                Registration Type <span className="text-red-500">*</span>
              </label>
              <select
                value={form.registrationType}
                onChange={(e) =>
                  handleChange("registrationType", e.target.value)
                }
                className="w-[60%] border rounded p-2"
              >
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
                <option value="Invite">Invite</option>
              </select>
            </div>

            {/* Amount (only if Paid) */}
            {form.registrationType === "Paid" && (
              <div className="flex items-center gap-4">
                <label className="w-[40%] text-sm font-medium">
                  Amount (in rupees) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={form.amount || ""}
                  onChange={(e) =>
                    handleChange("amount", Number(e.target.value))
                  }
                  className="w-[60%] border rounded p-2"
                  required={form.registrationType === "Paid"}
                />
              </div>
            )}

            {/* Status */}
            <div className="flex items-center gap-4">
              <label className="w-[40%] text-sm font-medium">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                value={form.status}
                onChange={(e) => handleChange("status", e.target.value)}
                className="w-[60%] border rounded p-2"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
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
