import { useNavigate } from "react-router-dom";

export default function Profile() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout=()=>{

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center p-4">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        <div className="flex flex-col items-center">

          <img
            src="https://i.pravatar.cc/150"
            alt=""
            className="w-28 h-28 rounded-full mb-4 border-4 border-orange-500"
          />

          <h1 className="text-3xl font-bold text-gray-800">
            {user?.name}
          </h1>

          <p className="text-gray-500 mt-2">
            {user?.email}
          </p>

          <button
            onClick={handleLogout}
            className="mt-8 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-bold transition"
          >
            Logout
          </button>

        </div>
      </div>
    </div>
  );
}