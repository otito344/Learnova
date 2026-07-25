import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    localStorage.setItem("token", data.token);

    localStorage.setItem(
      "user",
      JSON.stringify(data.user)
    );

    localStorage.setItem("user", JSON.stringify(data.user));

    if (data.user.role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/dashboard");
    }

  } catch (error) {
    console.error(error);
    alert("Login failed");
  }
};

  return (
    <div className="min-h-screen flex flex-col">
       

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
        </nav>
        

      
      {/* Right Section */}
      <div className="w-full  flex items-center justify-center bg-gray-50 ">

        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl mt-[1cm]">

          <Link
            to="/"
            className="text-[#1010E9] font-medium hover:underline"
          >
            ← Back to Home
          </Link>

          <h2 className="text-4xl font-bold text-gray-800 mt-6">
            Login
          </h2>

          <p className="text-gray-500 mt-2">
            Sign in to access your account
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">

            <div>
              <label className="block text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1010E9]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1010E9]"
              />
            </div>

            <div className="flex justify-between items-center text-sm">

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
              </label>

              <Link
                to="/forgot-password"
                className="text-[#1010E9] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1010E9] text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#1010E9] font-semibold hover:underline"
            >
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}