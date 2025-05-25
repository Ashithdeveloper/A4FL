import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login/Login";
import { jwtDecode } from "jwt-decode";

import SignUp from "./components/signup/SignUp";
import Home from "./components/navbar/Home";
import { useContext } from "react";
import AppContext from "./components/context/context";
import CheckNow from "./components/pages/CheckNow";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Learn from "./components/pages/CustomerSupports/Learn";

function App() {
  const { getMe, user } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const isExpired = decoded.exp * 1000 < Date.now();

        if (isExpired) {
          localStorage.removeItem("token");
          navigate("/login"); // redirect if expired
        } else {
          getMe(); // token valid, proceed to get user info
        }
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token");
        navigate("/login");
      }
    } else {
      // Optional: redirect if no token at all
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/checknow"
          element={user ? <CheckNow /> : <Navigate to="/" />}
        />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </>
  );
}

export default App;
