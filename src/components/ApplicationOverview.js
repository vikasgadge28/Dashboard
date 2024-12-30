/** @format */

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import starsBg from "../assets/images/starsBg.png";
import avtar from "../assets/images/avtar.png";

const ApplicationOverview = () => {
  return (
    <div className="bg-white rounded-xl p-6  w-[32vw] ">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg md:text-xl font-semibold mb-4 font-syne">
          Applications Overview
        </h2>
        <div className="flex justify-center items-center rounded-full bg-font text-white w-8 h-8 hover:bg-[#3e3e41]">
          <FiArrowRight className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
        <div className="flex p-4 border-[1.5px] rounded-xl justify-between items-center border-[#575DF0] bg-[#F5F7FF]">
          <p className="text-font text-sm  font-semibold">
            Application Invites
          </p>
          <span className="text-2xl font-semibold text-activeBtn">
            12
          </span>
        </div>
        <div className="flex p-4 border-[1.5px] rounded-xl justify-between items-center border-[#575DF0] bg-[#F5F7FF]">
          <p className="text-font text-sm  font-semibold">
            Audition Requests
          </p>
          <span className="text-2xl font-semibold text-activeBtn">
            23
          </span>
        </div>
      </div>

      {/* New Roles Matched Section */}
      <div className="p-4 mt-6 relative flex border-[1.5px] rounded-xl justify-center items-end border-[#575DF0] bg-[#F5F7FF]">
        <div>
          <img src={starsBg} alt="Background" className="w-full object-cover" />
        </div>
        <div className="absolute flex flex-col items-center">
          <div className="flex gap-2 items-center">
            <h3 className="lg:text-3xl md:text-2xl font-bold text-activeBtn">406</h3>
            <span className="mt-2 px-2 py-1 font-semibold md:text-xs text-xs h-6 text-[#468E66] bg-white rounded-lg">
              70%
            </span>
          </div>
          <p className="text-font md:text-xs lg:text-sm font-semibold mb-2">
            New Roles Matched
          </p>
          <img className="w-[10vw]  " src={avtar} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default ApplicationOverview;
