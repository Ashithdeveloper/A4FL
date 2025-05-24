import { Route, Routes, useNavigate} from "react-router-dom"
import Login from "./components/Login/Login"
import SignUp from "./components/signup/SignUp"
import Home from "./components/navbar/Home"
import { useContext } from "react"
import AppContext from "./components/context/context"
import CheckNow from "./components/pages/CheckNow"
import { useEffect } from "react"





function App() {
   
 const { getMe,user } = useContext(AppContext);
 const navigate = useNavigate();
 useEffect(() => {
   const token = localStorage.getItem("token");
   if (token) {
     getMe(); // Validate and set user if token is valid
   }
 }, []);

  return (
    <>
    <Routes>
      <Route path="/" element={ <Home/>}  />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/checknow" element={user? <CheckNow/> : navigate("/") } />
    </Routes>
    </>
  )
}

export default App
