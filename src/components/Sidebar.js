/** @format */

import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";
import SidebarBell from "../assets/images/SidebarBell.png";
import DiscoverIcon from "../assets/images/DiscoverIcon.png";
import Profile from "../assets/images/Profile.png";
import Message from "../assets/images/Message.png";
import Artists from "../assets/images/Artists.png";
import FindJob from "../assets/images/FindJob.png";
import Settings from "../assets/images/Settings.png";
import Dashboard from "../assets/images/dashboard.png";

const Sidebar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuItems = [
    { icon: Dashboard, text: "Dashboard" },
    { icon: FindJob, text: "Find Job" },
    { icon: Artists, text: "Artists" },
    { icon: Message, text: "Messages" },
    { icon: Profile, text: "Profile" },
    { icon: DiscoverIcon, text: "Discover" },
    { icon: SidebarBell, text: "Notifications" },
    { icon: Settings, text: "Settings" },
  ];

  return (
    <div className="w-20 bg-white flex flex-col h-full p-4 relative">
      {/* Logo */}
      <div className="text-lg font-bold text-center w-11 h-11">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Menu */}
      <ul className="flex-1 space-y-3 mt-8">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`relative flex justify-center items-center w-11 h-11 rounded-full transition-colors duration-300 ${
              index === 0 || hoveredIndex === index ? "bg-activeBtn" : "hover:bg-activeBtn"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              className={`w-6 h-6 transition-colors duration-300 ${
                index === 0 || hoveredIndex === index ? "filter-white" : "filter-default"
              }`}
              src={item.icon}
              alt={item.text}
              style={{
                filter: index === 0 || hoveredIndex === index ? "brightness(0) invert(1)" : "none",
              }}
            />

            {/* Tooltip */}
            {hoveredIndex === index && (
              <span className="absolute top-1/2 left-full transform -translate-y-1/2 ml-2 text-sm font-normal text-white bg-activeBtn px-2 py-1 rounded-lg shadow-lg  animate-tooltip opacity-100">
                {item.text}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
