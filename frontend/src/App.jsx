import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/signup/SignUp";
import Home from "./components/navbar/Home";
import { useContext } from "react";
import AppContext from "./components/context/context";
import CheckNow from "./components/pages/CheckNow";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Learn from "./components/pages/CustomerSupports/Learn";
import axios from "axios";

function App() {
  const { getMe, user } = useContext(AppContext);


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      getMe(); // fetch user and keep session alive
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
