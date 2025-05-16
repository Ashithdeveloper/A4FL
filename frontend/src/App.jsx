import { Route, Routes} from "react-router-dom"
import Login from "./components/Login/Login"
import SignUp from "./components/signup/SignUp"
import Home from "./components/navbar/Home"
import { useContext } from "react"
import AppContext from "./components/context/context"
import CheckNow from "./components/pages/CheckNow"





function App() {
   
 const { user } = useContext(AppContext);

  return (
    <>
    <Routes>
      <Route path="/" element={ <Home/>}  />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/checknow" element={user? <CheckNow/>:<Home/>} />
    </Routes>
    </>
  )
}

export default App
