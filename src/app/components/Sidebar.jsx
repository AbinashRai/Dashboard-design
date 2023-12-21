import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[20%] flex items-center justify-center">
      <div className="w-full font-medium">
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto">
          Dashboard
        </div>
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto">
          Doner
        </div>
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto">
          Beneficiary
        </div>
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto">
          Transactions
        </div>
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto">
          Campaigns
        </div>
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto">
          SAP
        </div>
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto">
          Users
        </div>
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto">
          Profile
        </div>
        <div className="p-2 hover:bg-slate-200 hover:font-bold w-[80%] mx-auto">
          Settings
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
