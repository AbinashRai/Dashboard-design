import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdOutlineCampaign } from "react-icons/md";
import { IoIosApps } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="w-[20%] flex items-center justify-center">
      <div className="w-full font-medium">
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto flex items-center">
          <MdDashboard /> <span className="ml-5">Dashboard</span>
        </div>
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto flex items-center">
          <FaHandHoldingHeart />
          <span className="ml-5">Doner</span>
        </div>
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto flex items-center">
          <BsFillPersonLinesFill />
          <span className="ml-5">Beneficiary</span>
        </div>
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto flex items-center">
          <FaMoneyCheckDollar />
          <span className="ml-5">Transactions</span>
        </div>
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto flex items-center">
          <MdOutlineCampaign />
          <span className="ml-5">Campaigns</span>
        </div>
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto flex items-center">
          <IoIosApps />
          <span className="ml-5">SAP</span>
        </div>
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto flex items-center">
          <FaUsers />
          <span className="ml-5">Users</span>
        </div>
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto flex items-center">
          <CgProfile />
          <span className="ml-5">Profile</span>
        </div>
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto flex items-center">
          <IoMdSettings />
          <span className="ml-5">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
