/** @format */

import React from "react";
import Chart from "../assets/images/Chart.png";
import { FiArrowRight } from "react-icons/fi";

const ProfileScore = () => {
  return (
    <div className= "bg-white rounded-xl p-5  w-[30vw]  ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl font-semibold font-syne">
          Your Profile Score
        </h2>
        <div className="flex justify-center items-center rounded-full bg-font text-white w-8 h-8 hover:bg-[#3e3e41]">
          <FiArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>

      <div className="flex justify-center items-center flex-col text-center">
        <img
          className="w-28 sm:w-36 md:w-44 lg:w-56 xl:w-64 mx-auto"
          src={Chart}
          alt="Profile Chart"
        />
        <div className="text-4xl sm:text-5xl font-semibold text-font -mt-8">
          412
        </div>
        <p className="text-font text-sm sm:text-base font-semibold mt-2">
          Each skill contributes to the score.
        </p>
        <p className="text-[#6B7280] text-xs sm:text-sm font-semibold">
          Add more skills to boost your profile score.
        </p>
        <button className="w-48 sm:w-60 h-10 mt-4 px-6 py-2 bg-primaryBlue text-white rounded-3xl hover:bg-[#4d54d2]">
          Add Skills
        </button>
      </div>
    </div>
  );
};

export default ProfileScore;
