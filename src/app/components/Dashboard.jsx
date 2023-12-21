import React from "react";
import ProjectDetails from "./ProjectDetails";
import UserDetails from "./UserDetails";

const Dashboard = () => {
  return (
    <>
      <div className="h-screen w-full p-5 bg-slate-200">
        <h3 className="font-medium">Hi, George</h3>
        <h2 className="font-medium">Good Morning</h2>
        <ProjectDetails />
        <UserDetails />
      </div>
    </>
  );
};

export default Dashboard;
