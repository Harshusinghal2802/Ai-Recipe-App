import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

import API from "../api";
import { useAuth } from "../context/AuthContext";

export default function login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await API.post(
        "/auth/login",
        form
      );

      login(res.data);

      navigate("/MyProfile");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login Failed"
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] flex items-center justify-center px-4 relative overflow-hidden">

      {/* BACKGROUND BLOBS */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-orange-300 rounded-full blur-[120px] opacity-40" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-red-300 rounded-full blur-[120px] opacity-40" />

      {/* CARD */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-white border border-orange-100 rounded-[32px] p-8 shadow-2xl"
      >

        {/* TOP ICON */}
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-4xl shadow-xl">
            🍔
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl font-extrabold text-gray-800 text-center">
          Recipe Login
        </h1>

        <p className="text-gray-500 text-center mt-2 mb-8">
          Welcome back chef 👨‍🍳
        </p>

        {/* ERROR */}
        {error && (
          <div className="mb-5 bg-red-100 border border-red-200 text-red-500 text-sm p-3 rounded-2xl">
            {error}
          </div>
        )}

        {/* EMAIL */}
        <div className="mb-5">
          <label className="text-gray-700 text-sm font-medium block mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full px-5 py-4 rounded-2xl bg-orange-50 border border-orange-100 text-gray-800 placeholder-gray-400 outline-none focus:border-orange-400 focus:bg-white transition"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-6">
          <label className="text-gray-700 text-sm font-medium block mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            className="w-full px-5 py-4 rounded-2xl bg-orange-50 border border-orange-100 text-gray-800 placeholder-gray-400 outline-none focus:border-orange-400 focus:bg-white transition"
          />
        </div>

        {/* BUTTON */}
        <button
          disabled={loading}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:scale-[1.02] active:scale-[0.98] transition-all py-4 rounded-2xl text-white font-bold shadow-lg"
        >
          {loading ? "Cooking..." : "login"}
        </button>

        {/* FOOTER */}
        <p className="text-gray-500 text-center mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-500 font-semibold hover:text-red-500 transition"
          >
            Register
          </Link>
        </p>

      </motion.form>
    </div>
  );
}