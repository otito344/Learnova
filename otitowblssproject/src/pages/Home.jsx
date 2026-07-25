import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#141165] font-sans">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 py-1 bg-white shadow-sm">
        
        <div className="flex items-center gap-3">
  {/* Logo */}
  <img 
    src="auilogo.png" 
    alt="Augustine University Logo" 
    className="h-20 w-30 object-contain"
  />

        <div>
          <h1 className="text-2xl font-bold text- [#000000]">
            Augustine university <p  className="text-[#320979]"> Learning System</p>
          </h1>
        </div>
        </div>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          
          
          <Link to="/about">
           About
          </Link>
          <a href="https://www.augustineuniversity.edu.ng/">Contact</a>
        </div>

        <div className="flex gap-4">
            <Link to="/login">
          <button className="px-5 py-2 border border-[#1010E9] text-[#1010E9] rounded-lg hover:bg-blue-50 transition">
            Login
          </button>
          </Link>

          <Link to="/register">
          <button className="px-5 py-2 bg-[#1010E9] text-white rounded-lg hover:bg-blue-700 transition">
            Register
          </button>
          </Link>  

        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="px-10 py-20 md:flex items-center justify-between">
        {/* LEFT SIDE */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight text-[#FFFFFF]">
            Learn. Connect.
            <p><span className="text-[#FFFFFF]"> Succeed Together.</span></p>
            
          </h1>

          <p className="mt-6 text-lg text-[#FFFFFF] leading-8">
            A web-based learning support system designed for Augustine
            University students to access course materials and ask
            academic questions easily.
          </p>

          <div className="mt-8 flex gap-4">
            <Link to="/register">
            <button className="bg-[#1010E9] hover:bg-blue-700 text-white px-7 py-3 rounded-xl text-lg font-medium shadow-lg transition">
              Get Started
            </button>
            </Link>

           
           
            

          </div>
        </div>

        {/* RIGHT SIDE */}
<div className="mt-16 md:mt-0">
  <div className="w-[420px] h-[320px] rounded-3xl overflow-hidden">
    <img 
      src="auilandingpagepic2.png" 
      alt="Student Portal Illustration" 
      className="w-full h-full object-cover"
    />
  </div>
</div>

      </section>

      {/* FEATURES */}
      <section className="px-10 pb-20">
        

        <div className="grid grid-cols-1 bg-white rounded-xl md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* CARD 1 */}
          <div className="bg-[#F5F3F3] p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center text-3xl">
              📚
            </div>

            <h3 className="text-2xl font-semibold mt-6 text-gray-800">
              Course Materials
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Access lecture notes, PDFs, and academic resources from 100 to 400
              level.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#F5F3F3] p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center text-3xl">
              💬
            </div>

            <h3 className="text-2xl font-semibold mt-6 text-gray-800">
              Chat Support
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Ask questions and get clarification whenever you encounter academic
              confusion.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#F5F3F3] p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center text-3xl">
              🎓
            </div>

            <h3 className="text-2xl font-semibold mt-6 text-gray-800">
              Organized Learning
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Courses are arranged according to departments and academic levels.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-[#F5F3F3] p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center text-3xl">
              🌍
            </div>

            <h3 className="text-2xl font-semibold mt-6 text-gray-800">
              Learn Anywhere
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Use the platform anytime and anywhere using your laptop or mobile
              browser.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white text-center py-1">
        <p>
          © 2026 Augustine University Learning Support System. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
