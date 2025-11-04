"use client";

import { useParams, useRouter } from "next/navigation";

export default function EventDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Manage Event — ID: {id}</h1>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => router.push("/dashboard/events/speakers")}
          className="p-4 bg-orange-100 rounded-lg hover:bg-orange-200 transition"
        >
          🎤 Manage Speakers
        </button>

        <button
          onClick={() => router.push("/dashboard/events/sessions")}
          className="p-4 bg-orange-100 rounded-lg hover:bg-orange-200 transition"
        >
          🗓 Manage Sessions
        </button>

        <button
          onClick={() => router.push("/dashboard/events/topics")}
          className="p-4 bg-orange-100 rounded-lg hover:bg-orange-200 transition"
        >
          📘 Manage Topics
        </button>

        <button
          onClick={() => router.push("/dashboard/events/users")}
          className="p-4 bg-orange-100 rounded-lg hover:bg-orange-200 transition"
        >
          👥 Registered Users
        </button>
      </div>
    </div>
  );
}
