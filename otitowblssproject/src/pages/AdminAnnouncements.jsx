import { useState } from "react";

export default function AdminAnnouncements() {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Welcome Back Students",
      message: "Classes resume next Monday. Ensure you complete your registration.",
      date: "2026-06-14",
    },
    {
      id: 2,
      title: "Course Registration Deadline",
      message: "All students must complete course registration before the deadline.",
      date: "2026-06-20",
    },
  ]);

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleAddAnnouncement = (e) => {
    e.preventDefault();

    if (!title || !message) {
      alert("Please fill all fields");
      return;
    }

    const newAnnouncement = {
      id: Date.now(),
      title,
      message,
      date: new Date().toISOString().split("T")[0],
    };

    setAnnouncements([newAnnouncement, ...announcements]);

    setTitle("");
    setMessage("");

    alert("Announcement Created Successfully");
  };

  const handleDelete = (id) => {
    setAnnouncements(
      announcements.filter(
        (announcement) => announcement.id !== id
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Announcements
      </h1>

      {/* Create Announcement */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8">

        <h2 className="text-2xl font-bold mb-5">
          Create Announcement
        </h2>

        <form
          onSubmit={handleAddAnnouncement}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Announcement Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          <textarea
            placeholder="Announcement Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          <button
            type="submit"
            className="bg-[#1010E9] text-white px-6 py-3 rounded-lg hover:bg-blue-800"
          >
            Publish Announcement
          </button>
        </form>

      </div>

      {/* Announcement List */}
      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-2xl font-bold mb-6">
          Published Announcements
        </h2>

        <div className="space-y-5">

          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="border rounded-xl p-5"
            >
              <div className="flex justify-between items-start">

                <div>
                  <h3 className="text-xl font-bold">
                    {announcement.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    {announcement.date}
                  </p>

                  <p className="mt-4 text-gray-700">
                    {announcement.message}
                  </p>
                </div>

                <button
                  onClick={() =>
                    handleDelete(announcement.id)
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}