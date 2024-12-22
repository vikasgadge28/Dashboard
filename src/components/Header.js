/** @format */

import React from "react";
import Bell from "../assets/images/Bell.png";
import SearchIcon from "../assets/images/SearchIcon.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white  p-6 ">
      <div className=" text-sm font-medium">
        Artist /<span className=" text-activeBtn "> Dashboard</span>
      </div>

      <div className="flex items-center gap-5 font-inter text-[16px]">
        <div class="flex items-center  w-64 h-10 rounded-full border border-gray-300 font-semibold  ">
          <div class="w-5 h-5  ml-3 mr-3 mt-1 ">
            <img src={SearchIcon} alt="" srcset="" />
          </div>
          <input
            type="search"
            class=" w-full font-normal text-sm text-gray-900  outline-0 mr-3"
            placeholder="Search "
          />
        </div>

        <button className="px-4 py-2 rounded-3xl hover:bg-gray-100 w-24 h-10">
          Upload
        </button>
        <button className="px-4 py-2 bg-primaryBlue text-white rounded-3xl hover:bg-[#4d54d2] w-24 h-10">
          Get Pro
        </button>
        <div className="hover:bg-blue-50 flex items-center justify-center text-lg font-bold text-center w-10 h-10 border rounded-full hover:border-transparent">
          <img className="w-5 h-5" src={Bell} alt="" />
        </div>

        <div className=" p-2 flex items-center justify-center w-20 h-10 border rounded-full ">
          <div className=" font-bold text-center w-10 h-10 rounded-full "></div>

          <HiOutlineMenuAlt4 className="w-8 h-8" />
        </div>
      </div>
    </header>
  );
};

export default Header;
