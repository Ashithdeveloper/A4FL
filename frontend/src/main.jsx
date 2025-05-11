import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from "./components/context/AppContext.jsx";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
axios.defaults.withCredentials = true;
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
        <ToastContainer position="top-center" autoClose={3000} />
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>
);
