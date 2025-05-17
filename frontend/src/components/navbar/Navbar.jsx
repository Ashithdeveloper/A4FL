import React, { useContext, useState } from 'react'
import { CiBank } from "react-icons/ci";
import { apiUrl } from '../../url/url';
import AppContext from '../context/context';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Navbar = () => {
    const { getMe ,user,setUser } = useContext(AppContext);
    const [ meau , setMeau ] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const toggleModal = () => setIsOpen(!isOpen);
    const Logout = async () => {
      try {
        // Send logout request
        const res = await axios.post(`${apiUrl}/api/auth/logout`, null, {
          withCredentials: true,
        });

        // Check for HTTP status code manually if needed
        if (res.status === 200) {
          // Logout successful
          toast.success("Success Logout");
          navigate("/");
          setUser(null);
          console.log("Logout successful:", res.data);
          getMe(); // Reset user context
        } else {
          console.error("Logout failed:", res.data);
          toast.error("Error logout");
        }
      } catch (err) {
        toast.error(`Error logout: ${err.message}`);
        console.error("Error during logout:", err);
      }
    };
        const handleClick = () => {
      if(user){
        navigate("/checknow");
      }
      else{
        setIsOpen(!isOpen)
      }
    }
  return (
    <>
      {isOpen && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-transparent bg-opacity-90 "
        >
          <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] dark:bg-gray-700">
            {/* Close button */}
            <button
              onClick={toggleModal}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            {/* Modal content */}
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Please Login or Register First to Go next steps
              </h3>

              {/* Yes Button */}
              <button
                onClick={() => {
                  setIsOpen(false); // Handle the "Yes, I'm sure" action here
                }}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                <p onClick={() => navigate("/login")} >Login</p> 
              </button>

              {/* No Button */}
              <button
                onClick={toggleModal}
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <nav class="flex justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 py-6 mx-auto">
        <h1
          className="text-2xl font-bold text-blue-600 flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <CiBank className="text-5xl" />
          A4FL
        </h1>
        <button
          class="md:hidden text-gray-600 text-2xl focus:outline-none"
          onClick={() => setMeau((pre) => !pre)}
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div
          className={`${
            meau ? "" : "hidden"
          } md:flex flex-col md:flex-row md:items-center space-x-3 md:space-x-8 text-gray-600 text-base font-normal absolute md:static top-[72px] left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0 shadow md:shadow-none z-50`}
        >
          <a onClick={handleClick} class="hover:text-gray-900 transition">
            CheckNow
          </a>
          <a class="hover:text-gray-900 transition" href="#">
            Features
          </a>
          <a class="hover:text-gray-900 transition" href="#">
            Support
          </a>
          {user ? (
            <a
              class="text-blue-600 border border-blue-600 rounded-full px-5 py-2 text-sm font-normal hover:bg-blue-50 transition md:ml-4"
              onClick={Logout}
            >
              Logout
            </a>
          ) : (
            <a
              class="text-blue-600 border border-blue-600 rounded-full px-5 py-2 text-sm font-normal hover:bg-blue-50 transition md:ml-4"
              onClick={() => navigate("/login")}
            >
              Login
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar