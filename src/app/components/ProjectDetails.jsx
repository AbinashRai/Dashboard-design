import React from "react";

const ProjectDetails = () => {
  return (
    <>
      <div className="bg-[#7A7AFF] h-[20%] text-white w-full rounded-lg mt-3">
        <div className="flex justify-between w-[90%]">
          <div className="flex flex-col pt-14 pl-5">
            Project request <span className="text-2xl font-bold">421</span>
          </div>
          <div className="flex flex-col pt-14">
            Project Going on <span className="text-2xl font-bold">32</span>
          </div>
          <div className="flex flex-col pt-14">
            Project Completed <span className="text-2xl font-bold">121</span>
          </div>
          <div className="flex flex-col pt-14">
            Team <span className="text-2xl font-bold">12</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
