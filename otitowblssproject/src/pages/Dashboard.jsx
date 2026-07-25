import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";







export default function Dashboard() {

  
const [courses, setCourses] = useState([]);

const [stats, setStats] = useState({
  students: 0,
  courses: 0,
  materials: 0,
});

const fetchCourses = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/courses"
    );

    const data = await response.json();

    setCourses(data);

  } catch (error) {
    console.error(error);
  }
};
  const navigate = useNavigate();

  const [announcements, setAnnouncements] =
  useState([]);

  useEffect(() => {
  fetchAnnouncements();
  fetchStats();
  fetchCourses();
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

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  navigate("/");
};



  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-80 bg-[#141165] text-white p-3">

         <h1 className="text-2xl font-bold">
          AUGUSTINE UNIVERSITY
        </h1>

        <p className="text-sm text-gray-200 mb-10">
          Learning Support System
        </p>
        

        <nav className="space-y-3">

          <Link
            to="/dashboard"
            className=" p-3 rounded-lg bg-[#1010E9] flex gap-2 hover:bg-blue-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
            
            Dashboard
          </Link>

          <Link
            to="/courses"
            className=" p-3 rounded-lg flex gap-2 hover:bg-blue-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>

            Courses
          </Link>

          
          

          <Link
            to="/chat"
            className="flex p-3 gap-2 rounded-lg hover:bg-blue-700"
          > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>

            Chat Support
          </Link>

          <Link
            to="/profile"
            className="flex gap-2 p-3 rounded-lg hover:bg-blue-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            Profile
          </Link>

          <Link
            to="/settings"
            className="flex gap-2 p-3 rounded-lg hover:bg-blue-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            Settings
          </Link>

          <Link
            to="/announcement"
            className="flex gap-2 p-3 rounded-lg hover:bg-blue-700"
          >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                </svg>

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

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-3xl font-bold">
            Welcome Back 👋
          </h2>

          <p className="text-gray-500 mt-2">
            Continue your academic journey.
          </p>

           {/* Search Bar */}
  <div className="mt-6 flex gap-3">



  </div>

        </div>

        {/* Statistics */}

         

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-gray-500">
              Courses
            </h3>

            <p className="text-3xl font-bold text-blue-600">
              {stats.courses}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-gray-500">
              Current Level
            </h3>

            <p className="text-3xl font-bold text-green-600">
              300            </p>
          </div>

         

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-gray-500">
              Questions Asked
            </h3>

            <p className="text-3xl font-bold text-orange-500">
              {stats.materials}
            </p>
          </div>

        </div>

        {/* Recent Courses */}
        
        {courses.slice(0, 3).map((course) => (
          <div
            key={course._id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition mt-10"
          >
            <h3 className="text-lg font-bold text-[#141165]">
              {course.title}
            </h3>

            <p className="text-gray-500 mt-2">
              {course.code}
            </p>

            <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {course.level}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}