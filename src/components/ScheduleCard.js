/** @format */

import React from "react";
import mask from "../assets/images/mask2.png";
const ScheduleCard = () => {
  // Sample JSON data
  const scheduleData = [
    {
      date: "",
      events: [
        {
          title: "Co-actor",
          location: "Mumbai",
          time: "18:00-19:00",
        },
        {
          title: "Co-actor",
          location: "Mumbai",
          time: "18:00-19:00",
        },
      ],
    },
    {
      date: "Tomorrow",
      events: [
        {
          title: "Co-actor",
          location: "Mumbai",
          time: "18:00-19:00",
        },
        {
          title: "Co-actor",
          location: "Mumbai",
          time: "18:00-19:00",
        },
        {
          title: "Co-actor",
          location: "Mumbai",
          time: "18:00-19:00",
        },
      ],
    },
  ];

  return (
    <div className="  flex items-center justify-center ">
      <div className="   bg-white rounded-lg  overflow-auto h-96 scrollbar-hide">
        {scheduleData.map((day, dayIndex) => (
          <div key={dayIndex} className="mb-6">
            <h2 className="text-lg  font-semibold text-gray-800 mb-2">
              {day.date}
            </h2>
            {day.events.map((event, eventIndex) => (
              <div
                key={eventIndex}
                className="lg:w-[23vw] md:w-[14vw]  p-4 hover:bg-[#FAFAFA] border border-[#E5E7EB] bg-[#FFFFFF] rounded-lg flex justify-between items-center mb-2 font-medium ">
                <div className="flex items-center space-x-4  ">
                  <div className=" flex items-center justify-center rounded-full">
                    <img
                      className="w-6 h-6"
                      src={mask}
                      alt=""
                    />
                  </div>
                  <div className="border-l-2 border-[#1F2937] h-12"></div>

                  <div>
                    <p className="lg:text-sm md:text-xs  text-font">
                      {event.title}
                    </p>
                    <p className="text-sm  md:text-xs text-[#4B5563] w-20">
                      Location: {event.location}
                    </p>
                  </div>
                </div>
                <div className="text-[#04C9B7] text-xs mb-6 w-20 ">
                  {event.time}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;
