"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { users } from "@/app/data/users";
import { Button } from "@/components/ui/button";

export default function EditUserModal() {
  const router = useRouter();
  const { id } = useParams();
  const user = users.find((u) => u.id === id);

  const [formData, setFormData] = useState(
    user || {
      name: "",
      email: "",
      mobile: "",
      designation: "",
      affiliation: "",
      country: "",
    }
  );

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade-in animation for modal
    setVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert(`✅ User "${formData.name}" details updated successfully!`);
    router.push("/dashboard/users");
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => router.push("/dashboard/users"), 200); // small fade delay
  };

  if (!user) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <p className="text-gray-700 mb-4">User not found.</p>
          <Button onClick={handleClose}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white w-full max-w-lg rounded-2xl shadow-xl transform transition-all duration-300 p-6 ${
          visible ? "scale-100" : "scale-95"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Edit User</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="w-full border p-2 rounded-lg"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full border p-2 rounded-lg"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile
            </label>
            <input
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
              className="w-full border p-2 rounded-lg"
            />
          </div>

          {/* Designation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Designation
            </label>
            <input
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Enter designation"
              className="w-full border p-2 rounded-lg"
            />
          </div>

          {/* Affiliation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Affiliation
            </label>
            <input
              name="affiliation"
              value={formData.affiliation}
              onChange={handleChange}
              placeholder="Enter affiliation"
              className="w-full border p-2 rounded-lg"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter country"
              className="w-full border p-2 rounded-lg"
            />
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
