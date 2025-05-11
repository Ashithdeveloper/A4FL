import { Route, Routes} from "react-router-dom"
import Login from "./components/Login/Login"
import SignUp from "./components/signup/SignUp"
import Home from "./components/navbar/Home"
import { useContext } from "react"
import AppContext from "./components/context/context"





function App() {
   
 const { user } = useContext(AppContext);

  return (
    <>
    <Routes>
      <Route path="/" element={ user?  <Home/> : <Login/>}  />
      <Route path="/login" element={user? <Home/> :<Login/>} />
      <Route path="/signup" element={user? <Home/> :<SignUp/>} />
    </Routes>
    </>
  )
}

export default App
