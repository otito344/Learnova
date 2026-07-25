import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdminDashboard() {


const [title, setTitle] = useState("");
const [message, setMessage] = useState("");


  const [students, setStudents] = useState([]);

  

  const [stats, setStats] = useState({
  students: 0,
  courses: 0,
  materials: 0,
  questions: 0,
});


    const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  navigate("/");
};

useEffect(() => {
  fetchStats();
  fetchStudents();
}, []);

const fetchStats = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/dashboard/stats"
    );

    const data = await response.json();

    setStats(data);

  } catch (error) {
    console.error(error);
  }
};


    

const fetchStudents = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/students"
    );

    const data = await response.json();

    setStudents(data);

  } catch (error) {
    console.error(error);
  }
};

const createAnnouncement = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/announcements",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          message,
        }),
      }
    );

    if (response.ok) {
      alert("Announcement Posted");

      setTitle("");
      setMessage("");
    }

  } catch (error) {
    console.error(error);
  }
};


  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-80 bg-[#141165] text-white p-6">

        <h1 className="text-2xl font-bold">
          AUGUSTINE UNIVERSITY
        </h1>

        <p className="text-sm text-gray-200 mb-10">
          Admin Panel
        </p>

        <nav className="space-y-3">

          <Link
            to="/admin-dashboard"
            className="block p-3 rounded-lg bg-blue-700"
          >
            Dashboard
          </Link>

          <Link
            to="/admin-students"
            className="block p-3 rounded-lg hover:bg-blue-700"
          >
            Students
          </Link>

          <Link
            to="/add-course"
            className="block p-3 rounded-lg hover:bg-blue-700"
            >
            Add Course
            </Link>

          
          <Link
            to="/admin-materials"
            className="block p-3 rounded-lg hover:bg-blue-700"
          >
            Course Materials
          </Link>

          
          <Link
            to="/admin-announcements"
            className="block p-3 rounded-lg hover:bg-blue-700"
          >
            Announcements
          </Link>

          

          <button
  onClick={handleLogout}
  className="flex gap-2 p-3 rounded-lg bg-red-500 hover:bg-red-600 mt-8 w-full text-left"
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
  </svg>

  Logout
</button>

        </nav>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">

          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              Administrator Dashboard
            </h2>

            <p className="text-gray-500 mt-2">
              Manage students, courses, and learning resources.
            </p>
          </div>

          
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white p-6 rounded-2xl shadow">

            <h3 className="text-gray-500">
              Students
            </h3>

            <p className="text-4xl font-bold text-[#1010E9] mt-2">
               {stats.students}
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow">

            <h3 className="text-gray-500">
              Courses
            </h3>

            <p className="text-4xl font-bold text-green-600 mt-2">
              {stats.courses}
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow">

            <h3 className="text-gray-500">
              Learning Materials
            </h3>

            <p className="text-4xl font-bold text-orange-500 mt-2">
               {stats.materials}
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow">

            <h3 className="text-gray-500">
              Questions Asked
            </h3>

            <p className="text-4xl font-bold text-red-500 mt-2">
              {stats.questions}
            </p>

          </div>

        </div>

        <div className="bg-white rounded-2xl shadow p-6 mb-8">

  <div className="flex items-center justify-between mb-6">

    <div>
      <h3 className="text-2xl font-bold text-gray-800">
        Announcements
      </h3>

      <p className="text-gray-500">
        Send updates and notices to students.
      </p>
    </div>

  </div>

  <input
    type="text"
    placeholder="Enter announcement title..."
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-[#1010E9]"
  />

  <textarea
    placeholder="Write your announcement here..."
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    rows="5"
    className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-5 resize-none focus:outline-none focus:ring-2 focus:ring-[#1010E9]"
  />

  <div className="flex justify-end">
    <button
      onClick={createAnnouncement}
      className="bg-[#1010E9] text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-800 transition duration-300"
    >
      📢 Post Announcement
    </button>
  </div>

</div>

        {/* Student Management */}
        <div className="bg-white rounded-2xl shadow p-6 mb-8">

          <div className="flex justify-between items-center mb-6">

            <h3 className="text-2xl font-bold">
              Recent Students
            </h3>

           
          </div>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">
                  Name
                </th>

                <th className="text-left py-3">
                  Matric No.
                </th>

                <th className="text-left py-3">
                  Level
                </th>

                <th className="text-left py-3">
                  Email
                </th>

              </tr>

            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student._id} className="border-b">
                  <td className="py-4">{student.fullName}</td>
                  <td>{student.matricNumber}</td>
                  <td>{student.level }</td>
                  <td>{student.email }</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">

            <h3 className="text-xl font-bold mb-3">
              Upload Course Materials
            </h3>

            <p className="text-gray-500">
              Upload lecture notes, assignments and videos.
            </p>

            <Link
              to="/admin/upload-material"
              className="mt-5 inline-block bg-[#1010E9] text-white px-5 py-2 rounded-lg"
            >
              Upload
            </Link>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow">

            <h3 className="text-xl font-bold mb-3">
              Manage Courses
            </h3>

            <p className="text-gray-500">
              Create, edit and delete courses.
            </p>

           <Link
            to="/manage-courses"
            className="mt-5 inline-block bg-[#1010E9] text-white px-5 py-2 rounded-lg"
            >
            Manage
            </Link>

          </div>

          

        </div>

      </div>

    </div>
  );
}