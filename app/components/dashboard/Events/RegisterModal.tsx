"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddEventPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    shortName: "",
    startDate: "",
    endDate: "",
    venue: "",
    city: "",
    state: "",
    country: "India",
    registrationType: "Paid",
    amount: "",
    status: "Active",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    router.push("/dashboard/events"); // Redirect back to events page
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4">
      <div className="w-full sm:w-[600px] bg-white border border-gray-200 rounded-lg shadow-md p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={() => router.push("/dashboard/events")}
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-semibold mb-6">Add Event</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">
              Event Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Event Short Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="shortName"
              value={formData.shortName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Upload Image <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="image"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">
                Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                End Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Venue Name <span className="text-red-500">*</span>
            </label>
            <select
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option>Select venue</option>
              <option>Chennai Convention Center</option>
              <option>ITC Grand Chola</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">
                Registration Type <span className="text-red-500">*</span>
              </label>
              <select
                name="registrationType"
                value={formData.registrationType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option>Paid</option>
                <option>Free</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">
                Amount (in rupees) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Status <span className="text-red-500">*</span>
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              className="bg-gray-200 text-gray-800 hover:bg-gray-300"
              onClick={() => router.push("/dashboard/events")}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-[#FF6600] hover:bg-[#e65500] text-white">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
