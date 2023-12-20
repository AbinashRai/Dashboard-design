import React from "react";
import ProjectDetails from "./ProjectDetails";
import UserDetails from "./UserDetails";

const Dashboard = () => {
  return (
    <>
      <div className="h-screen">
        <h3>Hi, George</h3>
        <h2>Good Morning</h2>
        <ProjectDetails />
        <UserDetails />
      </div>
    </>
  );
};

export default Dashboard;
