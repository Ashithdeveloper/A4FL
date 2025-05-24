import React from 'react'
import Navbar from '../navbar/Navbar';
import Service from './service';


const CheckNow = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 mt-9 md:mt-8 ">
        <h1 className="text-3xl font-bold text-blue-500"> A4FL service </h1>
      </div>
      <Service />
    </>
  );
}

export default CheckNow