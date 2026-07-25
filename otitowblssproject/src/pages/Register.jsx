import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Register() {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [matricNumber, setMatricNumber] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [level, setLevel] = useState("");

    const handleSubmit = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:5000/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          matricNumber,
          level,
          password,
        }),
      }
    );

    const data = await response.json();

    alert(data.message);

    if (response.ok) {
      navigate("/login");
    }
  } catch (error) {
    console.error(error);
    alert("Registration failed");
  }
};

  return (
    
    
    <div className="min-h-screen font-sans">

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
        
        <div className="hidden md:flex gap-8 text-gray-700 font-medium hover:text-[#1010E9]">
        
           <Link
    to="/"
    className="hover:text-[#1010E9]"
  > Back to Home </Link>
        </div>

      </nav>


      {/* RIGHT SIDE */}
      <div className="w-full bg-slate-50 flex items-center justify-center px-6 py-10">

        {/* FORM CARD */}
        <div className="bg-white w-screen h-screen p-10 rounded-3xl shadow-xl">

          {/* TITLE */}
          <div className="text-center">

            <h1 className="text-4xl font-bold text-gray-800">
              Create Account
            </h1>

            <p className="text-gray-500 mt-3">
              Register to continue learning
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">

           

{/*NAME AND EMAIL */}
<div className="flex gap-5">
  <div className="w-1/2">
    <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
   <input
  type="text"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  placeholder="Enter your full name"
  className="w-[550px] px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
  </div>

  <div className="w-1/2">
    <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
    <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter your email"
  className="w-[550px] px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
  </div>
</div>


        {/*MATRIC NUMBER AND LEVEL*/}
<div className="flex gap-5">
            {/* MATRIC NUMBER */}
            <div>
              <label className="w-[550px] block text-gray-700 mb-2 font-medium">
                Matric Number
              </label>

              <input
                type="text"
                value={matricNumber}
                onChange={(e) => setMatricNumber(e.target.value)}
                placeholder="AU200011111"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* LEVEL */}
            <div>
              <label className="text-gray-700 mb-2 font-medium flex">
                Level
              </label>

              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full border p-3 rounded-lg"
              >
                <option value="">Select Level</option>
                <option value="100 Level">100 Level</option>
                <option value="200 Level">200 Level</option>
                <option value="300 Level">300 Level</option>
                <option value="400 Level">400 Level</option>
              </select>
            </div>
            </div>


         {/*PASSWORD AND CONFIRM PASSWORD*/}

            <div className="flex gap-5">

            {/* PASSWORD */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-[550px] px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Confirm Password
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                className="w-[550px] px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#1010E9] hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold transition duration-300 shadow-lg"
            >
              Create Account
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="text-center text-gray-600 mt-8">
            Already have an account?{" "}

            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}



