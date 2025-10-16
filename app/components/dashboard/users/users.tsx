"use client";

import { useState } from "react";
import Link from "next/link";
import { users as usersData } from "@/app/data/users";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UsersTable() {
  const [search, setSearch] = useState("");
  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm p-4">
      <h2 className="text-lg font-semibold mb-2">All Users</h2>

      {/* Search & Filter */}
      <div className="flex items-center gap-2 mb-4">
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <div className="relative w-100">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-50 text-xs uppercase text-gray-600">
            <tr>
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Mobile</th>
              <th className="p-3 text-left">Designation</th>
              <th className="p-3 text-left">Affiliation</th>
              <th className="p-3 text-left">Country</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 font-medium">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.mobile}</td>
                <td className="p-3">{user.designation}</td>
                <td className="p-3">{user.affiliation}</td>
                <td className="p-3">{user.country}</td>
                <td className="p-3 text-right space-x-2">
                  {/* Edit Button */}
                  <Link
                    href={`/dashboard/users/${user.id}`}
                    className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                  >
                    Edit
                  </Link>

                  {/* Delete Button */}
                  <button
                    className="px-3 py-1 text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-600 hover:text-white transition-all"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-500 px-2">
          <span>
            {filteredUsers.length
              ? `1–${filteredUsers.length} of ${filteredUsers.length}`
              : "No users found"}
          </span>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              {"<"}
            </Button>
            <span>1/1</span>
            <Button variant="outline" size="icon">
              {">"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
