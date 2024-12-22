/** @format */

import React, { useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import userProfile from "../assets/images/userProfile.png";
import editBtn from "../assets/images/editBtn.png";
import ScheduleCard from "../components/ScheduleCard"
const Auditions = () => {
  const scrollContainer = useRef(null);

  // Scroll function
  const scroll = (direction) => {
    if (scrollContainer.current) {
      const { scrollLeft, clientWidth } = scrollContainer.current;
      const scrollAmount = clientWidth / 2; // Scroll half the container width
      const newPosition =
        direction === "left" ?
          scrollLeft - scrollAmount
        : scrollLeft + scrollAmount;

      scrollContainer.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white rounded-xl  p-4 w-[18rem]">
      <div className="relative   ">
        {/* Image Container */}
        <div>
          <img className="object-cover rounded-2xl  w-72 h-56" src={userProfile} alt="" />
        </div>

        {/* Black Box */}
        <div className=" w-56 absolute bottom-4 left-4 rounded-xl bg-white  h-16 p-2 flex items-center justify-between">
          <div>
            <div className="font-semibold text-lg text-font">Anjali Singh</div>
            <div className="text-xs font-semibold text-primaryBlue">
              Actor | Singer
            </div>
          </div>
          <div className=" rounded-full bg-primaryBlue w-10 h-10 flex justify-center items-center">
            <img className="w-5 h-5 rounded-full " src={editBtn} alt="Icon" />
          </div>
        </div>
      </div>

      <div className=" flex justify-between items-center mt-6">
        <h2 className="text-2xl font-semibold mb-4">Auditions</h2>
        <div>
          <button
            className="p-2 rounded-full  hover:bg-gray-300"
            onClick={() => scroll("left")}>
            <GoArrowLeft size={24} />
          </button>
          {/* Next Button */}
          <button
            className="p-2 rounded-full  hover:bg-gray-300"
            onClick={() => scroll("right")}>
            <GoArrowRight size={24} />
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <div
          ref={scrollContainer}
          className="flex-1 overflow-x-auto flex  scrollbar-hide">
          <div className="flex flex-nowrap gap-4">
            {/* Date Items */}
            {[
              "3 Sun",
              "4 Mon",
              "5 Tue",
              "6 Wed",
              "7 Thu",
              "8 Fri",
              "9 Sat",
            ].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-4 w-10 h-14 text-center rounded-xl ${
                  item.includes("6") ?
                    "bg-primaryBlue text-white"
                  : "bg-[#FAFAFA] text-font"
                }`}>
                <div className="font-semibold text-base">
                  {item.split(" ")[0]}
                </div>
                <div className="text-xs font-medium text-[#4B5563]">
                  {item.split(" ")[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className=" mt-4">
              <ScheduleCard/>
            </div>
    </div>
  );
};

export default Auditions;
