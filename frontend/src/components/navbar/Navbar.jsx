import React, { useContext, useState } from 'react'
import { CiBank } from "react-icons/ci";
import { apiUrl } from '../../url/url';
import AppContext from '../context/context';
import { toast } from 'react-toastify';


const Navbar = () => {
    const { getMe } = useContext(AppContext);
    const [ meau , setMeau ] = useState(false);
    const Logout = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/auth/logout`, {
          method: "POST",
          credentials: "include", // Ensures cookies are sent and received
        });

        if (res.ok) {
          // Perform necessary actions after successful logout
          getMe(); // To reset the user context after logging out
          toast.success("Sucess Logout");
          console.log("Logout successful:", await res.json());
        } else {
          console.error("Logout failed:", await res.json());
          toast.error("Error logout");
        }
      } catch (err) {
        toast.error(`Error logout ${err.message}`);
        console.error("Error during logout:", err.message);
      }
    };
  return (
    <>
      <nav class="flex justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 py-6 mx-auto">
        <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <CiBank className='text-5xl' />
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
          <a class="hover:text-gray-900 transition" href="#">
            CheckNow
          </a>
          <a class="hover:text-gray-900 transition" href="#">
            Features
          </a>
          <a class="hover:text-gray-900 transition" href="#">
            Support
          </a>
          <a
            class="text-blue-600 border border-blue-600 rounded-full px-5 py-2 text-sm font-normal hover:bg-blue-50 transition md:ml-4"
           onClick={Logout}
          >
            Logout
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar