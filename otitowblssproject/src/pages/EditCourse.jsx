import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [lecturer, setLecturer] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/courses`
        );

        const data = await response.json();

        const course = data.find(
          (c) => c._id === id
        );

        if (course) {
          setCode(course.code);
          setTitle(course.title);
          setDescription(course.description);
          setLevel(course.level);
          setLecturer(course.lecturer);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourse();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/courses/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code,
            title,
            description,
            level,
            lecturer,
          }),
        }
      );

      if (!response.ok) {
        alert("Failed to update course");
        return;
      }

      alert("Course updated successfully");

      navigate("/manage-courses");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-8 rounded-2xl shadow w-[700px]">

        <h1 className="text-3xl font-bold mb-6">
          Edit Course
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full border p-3 rounded-lg"
            placeholder="Course Code"
          />

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-3 rounded-lg"
            placeholder="Course Title"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-3 rounded-lg"
            placeholder="Description"
          />

          <input
            type="text"
            value={lecturer}
            onChange={(e) => setLecturer(e.target.value)}
            className="w-full border p-3 rounded-lg"
            placeholder="Lecturer"
          />

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full border p-3 rounded-lg"
          >
            <option>100 Level</option>
            <option>200 Level</option>
            <option>300 Level</option>
            <option>400 Level</option>
          </select>

          <button
            type="submit"
            className="w-full bg-[#1010E9] text-white py-3 rounded-lg"
          >
            Update Course
          </button>

        </form>

      </div>

    </div>
  );
}