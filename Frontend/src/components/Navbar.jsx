import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {

  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">

      <Link
        to="/profile"
        className="text-3xl font-black text-orange-500"
      >
        Recipe App
      </Link>

      <div className="flex items-center gap-4">

        <Link
          to="/myprofile"
          className="bg-orange-500 text-white px-5 py-2 rounded-xl"
        >
          My Profile
        </Link>

        <Link
          to="/users"
          className="bg-blue-500 text-white px-5 py-2 rounded-xl"
        >
          Users
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-xl"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </nav>
  );
}