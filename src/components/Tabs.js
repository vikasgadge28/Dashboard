/** @format */

import React, { useState, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import menu from "../assets/images/menu.png";

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState("allApplications");
  const [filter, setFilter] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null); // State to track dropdown visibility

  const itemsPerPage = 8;

  const filteredData = () => {
    if (filter === "all") {
      return data[activeTab];
    }
    return data[activeTab].filter((item) => item.status === filter);
  };

  const paginatedData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredData().slice(start, end);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(filteredData().length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleViewDetails = (item) => {
    console.log("Viewing details for:", item);
    // Add your logic for viewing details here
  };

  const handleArchive = (item) => {
    console.log("Archiving:", item);
    // Add your logic for archiving here
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = () => setDropdownOpenIndex(null);
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="p-4 font-semibold">
      {/* Tab Buttons */}
      <div className="flex mb-4 justify-between">
        <div className="flex space-x-4">
          {Object.keys(data).map((tab) => (
            <button
              key={tab}
              className={`flex items-center px-4 py-2 text-sm rounded-[10px] border-[1.5px] ${
                activeTab === tab ? "bg-font text-white" : "bg-[#F9FAFB]"
              }`}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
              }}
            >
              {tab
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </button>
          ))}
        </div>
        {/* Recent Button with Dropdown */}
        <div className="relative text-sm font-semibold">
          <button
            onClick={toggleDropdown}
            className="flex items-center px-4 py-2 gap-2 rounded-md transition duration-200 bg-[#F9FAFB] hover:bg-[#E5E7EB]"
          >
            Recent
            <BsChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute z-10 right-0 mt-2 w-40 bg-white shadow-lg rounded-xl p-2">
              <button
                onClick={() => {
                  setFilter("all");
                  setIsDropdownOpen(false);
                }}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left rounded-xl"
              >
                All
              </button>
              <button
                onClick={() => {
                  setFilter("Selected");
                  setIsDropdownOpen(false);
                }}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left rounded-xl"
              >
                Selected
              </button>
              <button
                onClick={() => {
                  setFilter("Shortlisted");
                  setIsDropdownOpen(false);
                }}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left rounded-xl"
              >
                Shortlisted
              </button>
              <button
                onClick={() => {
                  setFilter("Pending Review");
                  setIsDropdownOpen(false);
                }}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left rounded-xl"
              >
                Pending Review
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Tab Content */}
      <div className="overflow-y-auto max-h-64 text-sm font-semibold scrollbar-hide">
        {paginatedData()?.length > 0 ? (
          <table className="table-auto w-full text-left">
            <thead className="border-t border-b text-[#4B5563]">
              <tr>
                <th className="px-4 py-2">Job Title & Role</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Date Applied</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData().map((item, index) => (
                <tr key={index} className="border-b h-16">
                  <td className="px-4 py-2 text-[#111827]">
                    {item.jobTitle}
                    <br />
                    <span className="text-[#6B7280] font-normal">
                      Role: {item.role}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-sm">{item.location}</td>
                  <td className="px-4 py-2">{item.date}</td>
                  <td>
                    <span
                      className={`flex items-center py-2 rounded-2xl font-normal text-xs ${
                        item.status === "Selected"
                          ? "bg-[#F5F7FF] text-[#575DF0]"
                          : item.status === "Pending Review"
                          ? "bg-[#FFFBF5] text-[#F7A534]"
                          : item.status === "Shortlisted"
                          ? "bg-[#F6FDF9] text-[#178740]"
                          : "bg-[#F9FAFB] text-[#374151]"
                      }`}
                    >
                      <div
                        className={`rounded-full w-2 h-2 mr-3 ml-3 ${
                          item.status === "Selected"
                            ? "bg-[#575DF0]"
                            : item.status === "Pending Review"
                            ? "bg-[#F7A534]"
                            : item.status === "Shortlisted"
                            ? "bg-[#178740]"
                            : "bg-gray-500"
                        }`}
                      ></div>
                      {item.status}
                    </span>
                  </td>
                  <td className="relative flex justify-center items-center rounded-full ml-5 mt-3 bg-[#F3F4F6] w-10 h-10">
                    <button
                      className="w-5 h-5 flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpenIndex(index);
                      }}
                    >
                      <img className="w-5 h-5" src={menu} alt="Menu" />
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpenIndex === index && (
                      <div className="absolute right-0 top-full mt-2 border text-font bg-white shadow-lg rounded-xl p-2 w-36 text-sm z-10">
                        <button
                          className="block px-4 py-2 text-gray-700 rounded-xl hover:bg-gray-200 w-full text-left"
                          onClick={() => handleViewDetails(item)}
                        >
                          View Details
                        </button>
                        <button
                          className="block px-4 py-2 text-gray-700 rounded-xl hover:bg-gray-200 w-full text-left"
                          onClick={() => handleArchive(item)}
                        >
                          Archive
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No data available for this tab.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4 font-semibold text-base">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1
              ? "bg-[#F9FAFB] cursor-not-allowed"
              : "bg-primaryBlue text-white"
          }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex ">
          {Array.from(
            { length: Math.ceil(filteredData().length / itemsPerPage) },
            (_, index) => index + 1
          ).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-1 rounded-md ${
                currentPage === page
                  ? "bg-primaryBlue text-white"
                  : " text-gray-700 hover:bg-[#F5F7FF] "
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={
            currentPage >= Math.ceil(filteredData().length / itemsPerPage)
          }
          className={`px-4 py-2 rounded-md ${
            currentPage >= Math.ceil(filteredData().length / itemsPerPage)
              ? "bg-gray-300 cursor-not-allowed"
              : " bg-[#F9FAFB]"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Tabs;
