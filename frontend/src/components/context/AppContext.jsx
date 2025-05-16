import axios from "axios";
import { apiUrl } from "../../url/url";
import { useState } from "react";
import AppContext from "./context";

const ContextProvider = (props) => {
  const [user, setUser] = useState(null);
  console.log("user", user);
 
  const getMe = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${apiUrl}/api/auth/getme`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data);
    } catch (error) {
      console.log(error);
      setUser(null);
    }
  };
  
  // for send props to child componentgit add .

  return (
    <AppContext.Provider value={{ user, getMe, setUser }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default ContextProvider;
