/** @format */

import React from "react";
import DashboardLayout from "./DashboardLayout";
import ProfileScore from "../components/ProfileScore";
import ApplicationOverview from "../components/ApplicationOverview";
import Auditions from "../components/Auditions";
import ApplicationsTable from "../components/ApplicationsTable";

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Parent Container */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="flex flex-col gap-6 flex-1">
          {/* ProfileScore and ApplicationOverview */}
          <div className="flex flex-col md:flex-row gap-6">
            <ProfileScore className="flex-1" />
            <ApplicationOverview className="flex-1" />
          </div>
          {/* ApplicationsTable */}
          <div>
            <ApplicationsTable className="w-full" />
          </div>
        </div>

        {/* Right Section (Auditions) */}
        <div className="w-full lg:w-1/3">
          <Auditions className="w-full" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
