import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import API from "../api";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await API.post(
        "/auth/signup",
        form
      );

      login(res.data);

      navigate("/MyProfile");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Register Failed"
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex items-center justify-center px-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl"
      >
        <h1 className="text-4xl text-white font-bold text-center mb-8">
          🚀 Register
        </h1>

        {error && (
          <p className="text-red-400 mb-4">
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          className="w-full mb-4 px-4 py-3 rounded-xl bg-white/10 text-white outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          className="w-full mb-4 px-4 py-3 rounded-xl bg-white/10 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
          className="w-full mb-6 px-4 py-3 rounded-xl bg-white/10 text-white outline-none"
        />

        <button
          className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-xl text-white font-semibold transition"
        >
          {loading ? "Loading..." : "Register"}
        </button>

        <p className="text-gray-300 mt-6 text-center">
          Already have account?{" "}
          <Link
            to="/login"
            className="text-purple-400"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}