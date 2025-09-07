import React, { useState, useEffect } from "react";
import { RiResetRightLine } from "react-icons/ri";
import { useResume } from "../../Context/Resumecontext";
import { RiDeleteBin6Line } from "react-icons/ri";

import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

export default function EducationForm({ index }) {
  const { state, dispatch } = useResume();

  const visible = state.visibility.education;

  const handlechange = (e, index) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_EDUCATION",
      index: index,
      field: name,
      value,
    });
  };

  const handledelte = (index) => {
    dispatch({ type: "DELETE_EDUCATION", index });
  };

  const addexp = () => {
    console.log("cliked in add button");

    dispatch({ type: "ADD_EDUCATION" });
  };

  const handlereset = () => {
    dispatch({ type: "RESET_EDUCATION" });
  };

  const handlevisibilty = () => {
    console.log("cllik visiviityyy");

    dispatch({ type: "VISIBILITY", section: "education" });
  };

  useEffect(() => {
    console.log("education state updated:", state.education);
  }, [state.education]);

  return (
    <section className="flex flex-col gap-3  p-3   transition-opacity duration-200 ">
      <div className="formheading flex justify-between items-center">
        <div className="heading font-semibold text-2xl">
          EDUCATION 📘 
        </div>
        <div className="btnrap flex items-center gap-5">
          <button
            onClick={handlereset}
            className="btn item-center gap-2 rounded-full px-4 py-3 bg-blue-400 flex  items-center gap-3 text-white text-2xl "
          >
            {" "}
            <RiResetRightLine /> Reset
          </button>
          <div
            onClick={handlevisibilty}
            className="hide bg-[#F0F0F0] rounded-full border-2 border-blue-300 px-3 py-3"
          >
            {state.visibility.education ? (
              <IoEyeOffOutline className="text-blue-950" />
            ) : (
              <IoEyeOutline className="text-blue-950" />
            )}
          </div>
        </div>
      </div>

      {visible && (
        <>
          {state.education.map((edu, index) => {
            const { school, degree, startDate, endDate, description,percentage } = edu;
            return (
              <div className="mainform  grid grid-cols-6 gap-3 ">
                <div className="inputrap col-span-full mt-3">
                  <label
                    htmlFor="name"
                    className=" block text-xs font-medium md:text-sm text-[#545D6A] flex justify-between"
                  >
                    School
                    {state.education.length > 1 && (
                      <div
                        onClick={() => handledelte(index)}
                        className="delte h-8 w-5"
                      >
                        <RiDeleteBin6Line />
                      </div>
                    )}
                  </label>
                  <input
                    name="school"
                    value={school}
                    onChange={(e) => handlechange(e, index)}
                    type="text"
                    placeholder="IIT Delhi"
                    className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
                  />
                </div>
               

                <div className="inputrap col-span-3 mt-3">
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium md:text-sm text-[#545D6A]"
                  >
                    Start Date
                  </label>
                  <input
                    name="startDate"
                    value={startDate}
                    onChange={(e) => handlechange(e, index)}
                    type="text"
                    placeholder="Jun 2025-Present"
                    className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
                  />
                </div>

                <div className="inputrap col-span-3 mt-3">
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium md:text-sm text-[#545D6A]"
                  >
                    End Date
                  </label>
                  <input
                    name="endDate"
                    value={endDate}
                    onChange={(e) => handlechange(e, index)}
                    type="text"
                    placeholder="Jun 2025-Present"
                    className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
                  />
                </div>

                 <div className="inputrap col-span-4 mt-3">
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium md:text-sm text-[#545D6A]"
                  >
                    Degree & Major 
                  </label>
                  <input
                    name="degree"
                    value={degree}
                    onChange={(e) => handlechange(e, index)}
                    type="text"
                    placeholder="MCA"
                    className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
                  />
                </div>

                 <div className="inputrap col-span-2 mt-3">
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium md:text-sm text-[#545D6A]"
                  >
                    GPA / Percentage 
                  </label>
                  <input
                    name="percentage"
                    value={percentage}
                    onChange={(e) => handlechange(e, index)}
                    type="text"
                    placeholder="8.9"
                    className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
                  />
                </div>

                

               
                {index === state.education.length - 1 && (
                  <button
                    onClick={addexp}
                    className="border-2 border-blue-400 text-blue-500 mt-4 px-4 py-2 rounded-3xl"
                  >
                    +Add
                  </button>
                )}
              </div>
            );
          })}
        </>
      )}
    </section>
  );
}

