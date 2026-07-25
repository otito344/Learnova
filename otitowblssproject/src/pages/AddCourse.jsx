import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCourse() {
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [lecturer, setLecturer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/courses",
        {
          method: "POST",
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

      const data = await response.json();

      alert("Course Created Successfully");

      navigate("/courses");
    } catch (error) {
      console.error(error);
      alert("Failed to create course");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-[700px]">

        <h1 className="text-3xl font-bold mb-6">
          Add New Course
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Course Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Course Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Select Level</option>
            <option>100 Level</option>
            <option>200 Level</option>
            <option>300 Level</option>
            <option>400 Level</option>
          </select>

          <input
            type="text"
            placeholder="Lecturer Name"
            value={lecturer}
            onChange={(e) => setLecturer(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-[#1010E9] text-white py-3 rounded-lg"
          >
            Create Course
          </button>

        </form>
      </div>
    </div>
  );
}