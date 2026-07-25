import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-[#141165] text-white py-16 px-8 text-center">
        <h1 className="text-5xl font-bold">
          Augustine Learning Support System
        </h1>

        <p className="mt-4 text-xl">
          Empowering students with accessible and collaborative learning.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* About */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#141165] mb-4">
            About the Platform
          </h2>

          <p className="text-gray-700 leading-8">
            The Augustine Learning Support System is a web-based educational
            platform developed to support students of Augustine University.
            The platform provides easy access to course materials from
            100 Level to 400 Level and allows students to seek clarification
            through an integrated chat support system.
          </p>
        </section>

        {/* Objectives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#141165] mb-4">
            Objectives
          </h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Provide centralized access to academic materials.</li>
            <li>Improve understanding of difficult course topics.</li>
            <li>Encourage collaborative learning.</li>
            <li>Support self-paced learning.</li>
            <li>Reduce dependence on physical materials.</li>
          </ul>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#141165] mb-6">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl mb-3">
                📚 Course Repository
              </h3>

              <p>
                Access lecture notes and learning resources for all academic levels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl mb-3">
                💬 Student Chat Support
              </h3>

              <p>
                Ask questions and receive assistance whenever clarification is needed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl mb-3">
                🎓 Level-Based Learning
              </h3>

              <p>
                Course materials are organized according to academic levels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl mb-3">
                📱 Responsive Access
              </h3>

              <p>
                Use the platform on laptops, tablets, and mobile devices.
              </p>
            </div>

          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#141165] mb-4">
            How It Works
          </h2>

          <div className="space-y-4 text-gray-700">

            <p><strong>Step 1:</strong> Create an account.</p>

            <p><strong>Step 2:</strong> Login to your dashboard.</p>

            <p><strong>Step 3:</strong> Select your academic level.</p>

            <p><strong>Step 4:</strong> Browse available courses.</p>

            <p><strong>Step 5:</strong> Access learning materials.</p>

            <p><strong>Step 6:</strong> Use the chat system for support.</p>

          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#141165] mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-bold">
                Is this platform only for Augustine University students?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes. The platform is specifically designed for Augustine University.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-bold">
                Can I access materials from other levels?
              </h3>

              <p className="mt-2 text-gray-600">
                Access permissions can be configured by the administrator.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-bold">
                Is the chat support available anytime?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, students can submit questions whenever needed.
              </p>
            </div>

          </div>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <Link
            to="/"
            className="bg-[#141165] text-white px-8 py-3 rounded-xl hover:bg-blue-700"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}