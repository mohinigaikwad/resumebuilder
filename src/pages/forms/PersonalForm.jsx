import React, { useState, useReducer, useEffect, useContext } from "react";
import { RiResetRightLine } from "react-icons/ri";
import resumeReducer, { initialState } from "../../Reducers/resumeReducer";
import { useResume } from "../../Context/Resumecontext";

export default function PersonalForm() {
  // const [state,dispatch] = useContext();
  const { state, dispatch } = useResume();

  // const [state, dispatch] = useReducer(resumeReducer,initialState)
  const p = state.personal || {};
  const { name, summary, email, phone, website1, website2, location } = p;

  useEffect(() => {
    console.log("Personal state updated:", p);
  }, [p]); // 🔥 sirf jab personal state change ho

  const handleinputchange = (e) => {
    dispatch({
      type: "SET_PERSONAL_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
    console.log("dispatch succesully");
  };

  const handleclik = () => {
    dispatch({ type: "RESET_PERSONAL" });
    console.log("CLIKED");
  };
  return (
    <section className="flex flex-col gap-3  p-3   transition-opacity duration-200 ">
      <div className="formheading flex justify-between items-center">
        <div className="heading font-semibold text-2xl">PERSONAL DETAILS</div>
        <div className="btnrap">
          <button
            onClick={handleclik}
            className="btn item-center gap-2 rounded-full px-4 py-3 bg-blue-400 flex  items-center gap-3 text-white text-2xl "
          >
            {" "}
            <RiResetRightLine /> Reset
          </button>
        </div>
      </div>

      <div className="mainform grid grid-cols-6 gap-3 ">
        <div className="inputrap col-span-full mt-3">
          <label
            htmlFor="name"
            className="block text-xs font-medium md:text-sm text-[#545D6A]"
          >
            Name
          </label>
          <input
            name="name"
            value={name}
            onChange={handleinputchange}
            type="text"
            placeholder="Alex Thakre"
            className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
          />
        </div>
        <div className="inputrap col-span-full mt-3">
          <label
            htmlFor="name"
            className="block text-xs font-medium md:text-sm text-[#545D6A]"
          >
            Summary
          </label>
          <input
            name="summary"
            value={summary}
            onChange={handleinputchange}
            type="text"
            placeholder="Crafting digital experince with a sprinkle fi creativity"
            className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
          />
        </div>

        <div className="inputrap col-span-4 mt-3">
          <label
            htmlFor="name"
            className="block text-xs font-medium md:text-sm text-[#545D6A]"
          >
            Email
          </label>
          <input
            name="email"
            value={email}
            onChange={handleinputchange}
            type="text"
            placeholder="alex@gmail.com"
            className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
          />
        </div>

        <div className="inputrap col-span-2 mt-3">
          <label
            htmlFor="name"
            className="block text-xs font-medium md:text-sm text-[#545D6A]"
          >
            Phone
          </label>
          <input
            name="phone"
            value={phone}
            onChange={handleinputchange}
            type="text"
            placeholder="+91525895412"
            className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
          />
        </div>

        <div className="inputrap col-span-4 mt-3">
          <label
            htmlFor="name"
            className="block text-xs font-medium md:text-sm text-[#545D6A]"
          >
            Website 1
          </label>
          <input
            name="website1"
            value={website1}
            onChange={handleinputchange}
            type="text"
            placeholder="https://linkedin.com"
            className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
          />
        </div>

        <div className="inputrap col-span-4 mt-3">
          <label
            htmlFor="name"
            className="block text-xs font-medium md:text-sm text-[#545D6A]"
          >
            Website 2
          </label>
          <input
            name="website2"
            value={website2}
            onChange={handleinputchange}
            type="text"
            placeholder="https://github.com"
            className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
          />
        </div>

        <div className="inputrap col-span-2 mt-3">
          <label
            htmlFor="name"
            className="block text-xs font-medium md:text-sm text-[#545D6A]"
          >
            Location
          </label>
          <input
            name="location"
            value={location}
            onChange={handleinputchange}
            type="text"
            placeholder="Pune,India"
            className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
          />
        </div>
      </div>
    </section>
  );
}
