import { useEffect, useState } from "react";

export default function AdminMaterials() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/materials"
      );

      const data = await response.json();

      setMaterials(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">
        Course Materials
      </h1>

      <p className="text-gray-600 mt-2 mb-8">
        View all uploaded learning materials.
      </p>

      <div className="bg-white rounded-xl shadow p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Title</th>
              <th className="text-left py-3">Description</th>
              <th className="text-left py-3">Course</th>
              <th className="text-left py-3">File</th>
            </tr>
          </thead>

          <tbody>
            {materials.map((material) => (
              <tr
                key={material._id}
                className="border-b"
              >
                <td className="py-4">
                  {material.title}
                </td>

                <td>
                  {material.description}
                </td>

                <td>
                  {material.course?.code}
                </td>

                <td>
                  <a
                    href={`http://localhost:5000/uploads/${material.fileUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View PDF
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}