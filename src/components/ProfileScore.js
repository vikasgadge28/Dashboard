/** @format */

import React from "react";
import Chart from "../assets/images/Chart.png";
import { FiArrowRight } from "react-icons/fi";

const ProfileScore = () => {
  return (
    <div className="bg-white rounded-xl  p-5 w-72 h-[22rem] ">
      <div className=" flex justify-between  ">
        <h2 className="text-xl font-semibold mb-4 font-syne">
          Your Profile Score
        </h2>
        <div className=" flex justify-center items-center rounded-full bg-font text-white w-8 h-8 hover:bg-[#3e3e41]">
         
          <FiArrowRight className=" w-6 h-6" />
        </div>
      </div>

      <div className=" flex justify-center items-center flex-col text-center">
        <img className=" ml-10" src={Chart} alt="" />
        <div className="text-5xl font-semibold text-font -mt-8">412</div>
        <p className=" text-font text-base font-semibold mt-2">
          Each skill contributes to the score.
        </p>
        <p className=" text-[#6B7280]  text-sm font-semibold">
          Add more skills to boost your profile score.
        </p>
        <button className="w-60 h-10 mt-4 px-6 py-2 bg-primaryBlue text-white rounded-3xl hover:bg-[#4d54d2]">
          Add Skills
        </button>
      </div>
    </div>
  );
};

export default ProfileScore;
