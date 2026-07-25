import { useState } from "react";

export default function AdminMaterials() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
  alert("Please select a file");
  return;
}

console.log(file);

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("course", course);
    formData.append("file", file);

    

    try {
      const response = await fetch(
        "http://localhost:5000/api/materials",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Material uploaded successfully");

      setTitle("");
      setDescription("");
      setCourse("");
      setFile(null);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">
        Course Materials
      </h1>

      <p className="mt-4 text-gray-600 mb-8">
        Upload and manage learning materials.
      </p>

      <form
        onSubmit={handleUpload}
        className="bg-white p-6 rounded-xl shadow max-w-2xl space-y-4"
      >
        <input
          type="text"
          placeholder="Material Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Course ID"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="bg-[#1010E9] text-white px-6 py-3 rounded-lg hover:bg-blue-800"
        >
          Upload Material
        </button>
      </form>
    </div>
  );
}