import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);

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

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {
      await fetch(
        `http://localhost:5000/api/courses/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Manage Courses
      </h1>

      <div className="bg-white rounded-2xl shadow p-6">

        <table className="w-full">

          <thead>
            <tr className="border-b">

              <th className="text-left py-3">
                Code
              </th>

              <th className="text-left py-3">
                Title
              </th>

              <th className="text-left py-3">
                Level
              </th>

              <th className="text-left py-3">
                Lecturer
              </th>

              <th className="text-left py-3">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {courses.map((course) => (
              <tr
                key={course._id}
                className="border-b"
              >

                <td className="py-4">
                  {course.code}
                </td>

                <td>
                  {course.title}
                </td>

                <td>
                  {course.level}
                </td>

                <td>
                  {course.lecturer}
                </td>

                <td className="flex">
                  <button
                    onClick={() =>
                      handleDelete(course._id)
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                  
                  <Link
                    to={`/edit-course/${course._id}`}
                    className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg"
                  >
                    Edit
                  </Link>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}