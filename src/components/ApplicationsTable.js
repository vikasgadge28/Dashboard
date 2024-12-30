import React from "react";
import Tabs from "../components/Tabs"
import applicationsData from "../utils/applicationsData"
const ApplicationsTable = () => {

  // Sample JSON data for each tab
 
  return (
    <div className="bg-white mt-6 rounded-lg w-[64vw]  ">
      <Tabs data={applicationsData} />
    </div>
  );
};

export default ApplicationsTable;
