import React from "react";
import ProjectDetails from "./ProjectDetails";
import UserDetails from "./UserDetails";
import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {
  return (
    <>
      <div className="h-screen w-full p-5 bg-slate-200">
        <div className="flex flex-row-reverse lg:flex-row justify-between m-3">
          <div className="block lg:hidden cursor-pointer">
            <GiHamburgerMenu />
          </div>
          <div className="flex flex-col">
            <h3 className="font-medium">Hi, George</h3>
            <h2 className="font-medium">Good Morning</h2>
          </div>
        </div>
        <ProjectDetails />
        <UserDetails />
      </div>
    </>
  );
};

export default Dashboard;
