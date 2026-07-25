import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";




export default function Dashboard() {
  const navigate = useNavigate();

  const [announcements, setAnnouncements] =
  useState([]);

  useEffect(() => {
  fetchAnnouncements();
}, []);

const fetchAnnouncements = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/announcements"
    );

    const data = await response.json();

    setAnnouncements(data);

  } catch (error) {
    console.error(error);
  }
};
return (
  <div className="p-8">

    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800">
        Announcements
      </h1>

      <p className="text-gray-500 mt-2">
        Stay updated with the latest notices from the administrator.
      </p>
    </div>

    {announcements.length === 0 ? (
      <div className="bg-white rounded-2xl shadow p-8 text-center">
        <p className="text-gray-500">
          No announcements available.
        </p>
      </div>
    ) : (
      <div className="space-y-5">

        {announcements.map((announcement) => (
          <div
            key={announcement._id}
            className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
          >

            <div className="flex justify-between items-start mb-3">

              <h2 className="font-bold text-xl text-[#141165]">
                📢 {announcement.title}
              </h2>

              <span className="text-sm text-gray-400">
                {new Date(
                  announcement.createdAt
                ).toLocaleDateString()}
              </span>

            </div>

            <p className="text-gray-600 leading-relaxed">
              {announcement.message}
            </p>

          </div>
        ))}

      </div>
    )}

  </div>
);
}