import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { apiUrl } from '../../url/url';
import AppContext from '../context/context';
import { toast } from "react-toastify";
const SignUp = () => {
  const navigate = useNavigate();
  const { getMe } = useContext(AppContext);
  const [subbmit, setSubbmit] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    Account: "",
    IFSC: "",
    bankName: "",
    phoneNumber: "",
    profileImg: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setSubbmit(false);
    e.preventDefault();
    if (!/^\d{11}$/.test(formData.Account)) {
      alert("Account number must be exactly 11 digits.");
      return;
    }
    try {
      const response = await axios.post(`${apiUrl}/api/auth/signup`, formData);
      const data = response.data;
      console.log("Signup success:", data);
      getMe();
      toast.success("Sucess Signup");
      navigate("/"); 
    } catch (error) {
      setSubbmit(true);
      toast.error(`Error signup ${error.message}`);
      console.error("Signup failed:", error.response?.data || error.message);
     
  }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <h3 className="text-[20px] font-semibold text-center pb-7">
              welcome
            </h3>
            <div class="flex items-center justify-center p-12">
              <div class="mx-auto w-full max-w-[550px] bg-white">
                <form>
                  <div class="mb-5">
                    <label class="mb-3 block text-base font-medium text-[#07074D]">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Username"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5">
                    <label class="mb-3 block text-base font-medium text-[#07074D]">
                      FullName
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="fullName"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5">
                    <label
                      for="phone"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5">
                    <label
                      for="phone"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5">
                    <label
                      for="email"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          age
                        </label>
                        <input
                          type="text"
                          name="age"
                          placeholder="Enter your age"
                          value={formData.age}
                          onChange={handleChange}
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          Gender
                        </label>
                        <select
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          id="service"
                          value={formData.gender}
                          onChange={handleChange}
                          name="gender"
                        >
                          <option value="">select the gender</option>
                          <option value="haircut">Male</option>
                          <option value="coloring">Female</option>
                          <option value="styling">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="mb-5 pt-3">
                    <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                      Bank Details
                    </label>
                    <div class="mb-5">
                      <input
                        type="text"
                        placeholder="Enter Account Number"
                        name="Account"
                        value={formData.Account}
                        pattern="\d{11}"
                        maxLength="11"
                        onChange={handleChange}
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div class="mb-5">
                      <input
                        type="text"
                        placeholder="Enter IFSC Code"
                        name="IFSC"
                        value={formData.IFSC}
                        onChange={handleChange}
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div class="mb-5">
                      <input
                        type="text"
                        placeholder="Enter bank name"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleChange}
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={handleSubmit}
                      class="hover:shadow-form w-full rounded-md bg-cyan-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                      {subbmit ? "Sign Up" : "Loading....."}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                onClick={() => navigate("/login")}
              >
                <span>Or Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;