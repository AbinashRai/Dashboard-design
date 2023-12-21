import React from "react";
import { BsDownload } from "react-icons/bs";
import { CgSortAz } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";

const UserDetails = () => {
  return (
    <div className="bg-white p-5 mt-5 rounded-lg">
      <div className="flex justify-between mb-4 font-medium">
        <h1>Projects</h1>
        <input
          className="border m-0 text-md p-2 rounded-md w-[40%] relative"
          type="text"
          placeholder="Search by Beneficiary id, name and contact or email"
        />
        <div className="absolute top-[261px] xl:top-[279px] right-[55px]">
          <FiSearch />
        </div>
      </div>
      <div className="flex">
        <div className="mr-5 mb-5 text-2xl">
          <BsDownload />
        </div>
        <div className="text-3xl">
          <CgSortAz />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="border">
              <th className="text-start p-2">
                <input className="ml-5" type="checkbox" name="" id="" />
                Project
              </th>
              <th className="text-start">Requested by</th>
              <th className="text-start">Email</th>
              <th className="text-start">Number</th>
              <th className="text-start">Status</th>
              <th className="text-start">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="p-2">
                <input className="ml-5" type="checkbox" name="" id="" />
                EmpowerHER
              </td>
              <td>
                <input className="rounded-full" type="checkbox" name="" id="" />
                William D. Barnett
              </td>
              <td>williambarnet@gmail.com</td>
              <td>+977 985 727 1445</td>
              <td className="flex items-center pt-2">
                <div className="h-[10px] w-[10px] rounded-full bg-violet-300 mr-2"></div>
                Inprocess
              </td>
              <td>India</td>
            </tr>
            <tr className="border">
              <td className="p-2">
                <input className="ml-5" type="checkbox" name="" id="" />
                EmpowerHER
              </td>
              <td>
                <input type="checkbox" name="" id="" />
                William D. Barnett
              </td>
              <td>williambarnet@gmail.com</td>
              <td>+977 985 727 1445</td>
              <td className="flex items-center pt-2">
                <div className="h-[10px] w-[10px] rounded-full bg-violet-300 mr-2"></div>
                Inprocess
              </td>
              <td>India</td>
            </tr>
            <tr className="border">
              <td className="p-2">
                <input className="ml-5" type="checkbox" name="" id="" />
                EmpowerHER
              </td>
              <td>
                <input type="checkbox" name="" id="" />
                William D. Barnett
              </td>
              <td>williambarnet@gmail.com</td>
              <td>+977 985 727 1445</td>
              <td className="flex items-center pt-2">
                <div className="h-[10px] w-[10px] rounded-full bg-violet-300 mr-2"></div>
                Inprocess
              </td>
              <td>India</td>
            </tr>
            <tr className="border">
              <td className="p-2">
                <input className="ml-5" type="checkbox" name="" id="" />
                EmpowerHER
              </td>
              <td>
                <input type="checkbox" name="" id="" />
                William D. Barnett
              </td>
              <td>williambarnet@gmail.com</td>
              <td>+977 985 727 1445</td>
              <td className="flex items-center pt-2">
                <div className="h-[10px] w-[10px] rounded-full bg-violet-300 mr-2"></div>
                Inprocess
              </td>
              <td>India</td>
            </tr>
            <tr className="border">
              <td className="p-2">
                <input className="ml-5" type="checkbox" name="" id="" />
                EmpowerHER
              </td>
              <td>
                <input type="checkbox" name="" id="" />
                William D. Barnett
              </td>
              <td>williambarnet@gmail.com</td>
              <td>+977 985 727 1445</td>
              <td className="flex items-center pt-2">
                <div className="h-[10px] w-[10px] rounded-full bg-violet-300 mr-2"></div>
                Inprocess
              </td>
              <td>India</td>
            </tr>
            <tr className="border">
              <td className="p-2">
                <input className="ml-5" type="checkbox" name="" id="" />
                EmpowerHER
              </td>
              <td>
                <input type="checkbox" name="" id="" />
                William D. Barnett
              </td>
              <td>williambarnet@gmail.com</td>
              <td>+977 985 727 1445</td>
              <td className="flex items-center pt-2">
                <div className="h-[10px] w-[10px] rounded-full bg-violet-300 mr-2"></div>
                Inprocess
              </td>
              <td>India</td>
            </tr>
            <tr className="border">
              <td className="p-2">
                <input className="ml-5" type="checkbox" name="" id="" />
                EmpowerHER
              </td>
              <td>
                <input type="checkbox" name="" id="" />
                William D. Barnett
              </td>
              <td>williambarnet@gmail.com</td>
              <td>+977 985 727 1445</td>
              <td className="flex items-center pt-2">
                <div className="h-[10px] w-[10px] rounded-full bg-violet-300 mr-2"></div>
                Inprocess
              </td>
              <td>India</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetails;
