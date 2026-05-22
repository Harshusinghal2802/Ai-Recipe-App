import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Profile from "./pages/Profile";
import MyProfile from "./pages/MyProfile";
import Users from "./pages/Users";

import { AuthProvider } from "./context/authContext";

function App() {

  return (
    <BrowserRouter>

      <AuthProvider>

        <Routes>

          <Route path="/" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/myprofile" element={<MyProfile />} />

          <Route path="/users" element={<Users />} />

        </Routes>

      </AuthProvider>

    </BrowserRouter>
  );
}

export default App;