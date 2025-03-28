import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://reqres.in/api/login", { email, password });

      // Ensuring login succeeds only for correct credentials
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful!");
        setTimeout(() => navigate("/users?page=1"), 1500);
      } else {
        toast.error("Invalid credentials");
      }
    } catch (err) {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80 sm:w-md h-80 text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Login</h2>

        {/* Email Input */}
        <div className="relative mb-3 my-10">
          <FiMail className="absolute left-3 top-3 text-green-600" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 p-2  border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Email"
          />
        </div>

        {/* Password Input with Eye Toggle */}
        <div className="relative my-6">
          <FiLock className="absolute left-3 top-3 text-green-600" />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-10 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Password"
          />
          {/* Toggle Password Visibility */}
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-green-600 cursor-pointer"
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full cursor-pointer bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;