import React, { useState, useEffect } from "react";
import { RiResetRightLine } from "react-icons/ri";
import { useResume } from "../../Context/Resumecontext";
import { RiDeleteBin6Line } from "react-icons/ri";

import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

export default function CertificateForm() {
  const { state, dispatch } = useResume();

  const visible = state.visibility.certificate;

  const handlechange = (e, index) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_CERTIFICATE",
      index: index,
      field: name,
      value,
    });
  };

  const handledelte = (index) => {
    dispatch({ type: "DELETE_CERTIFICATE", index });
  };

  const addexp = () => {
    console.log("cliked in add button");

    dispatch({ type: "ADD_CERTIFICATE" });
  };

  const handlereset = () => {
    dispatch({ type: "RESET_CERTIFICATE" });
  };

  const handlevisibilty = () => {
    console.log("cllik visiviityyy");

    dispatch({ type: "VISIBILITY", section: "certificate" });
  };

  useEffect(() => {
    console.log("certifacte state updated:", state.certificate);
  }, [state.certificate]);

  return (
    <section className="flex flex-col gap-3  p-3   transition-opacity duration-200 ">
      <div className="formheading flex justify-between items-center">
        <div className="heading font-semibold text-2xl">CERTIFICATE 📜</div>
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
            {visible ? (
              <IoEyeOffOutline className="text-blue-950" />
            ) : (
              <IoEyeOutline className="text-blue-950" />
            )}
          </div>
        </div>
      </div>

      {visible && (
        <>
          {state.certificate.map((cert, index) => {
            
            const { certname, certlink, certdescription  } = cert;
            return (
              <div className="mainform  grid grid-cols-6 gap-3 ">
                <div className="inputrap col-span-full mt-3">
                  <label
                    htmlFor="name"
                    className=" block text-xs font-medium md:text-sm text-[#545D6A] flex justify-between"
                  >
                    certificate title
                    {state.certificate.length > 1 && (
                      <div
                        onClick={() => handledelte(index)}
                        className="delte h-8 w-5"
                      >
                        <RiDeleteBin6Line />
                      </div>
                    )}
                  </label>
                  <input
                    name="certname"
                    value={certname}
                    onChange={(e) => handlechange(e, index)}
                    type="text"
                    placeholder="Namaste React."
                    className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
                  />
                </div>
                <div className="inputrap col-span-full mt-3">
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium md:text-sm text-[#545D6A]"
                  >
                    certificate link
                  </label>
                  <input
                    name="certlink"
                    value={certlink}
                    onChange={(e) => handlechange(e, index)}
                    type="text"
                    placeholder="link"
                    className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
                  />
                </div>

                <div className="inputrap col-span-full mt-3">
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium md:text-sm text-[#545D6A]"
                  >
                    Description
                  </label>

                  <textarea
                    name="certdescription"
                    value={certdescription}
                    onChange={(e) => handlechange(e, index)}
                    placeholder="Describe "
                    type="text"
                    className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
                  />
                </div>

                {index === state.certificate.length - 1 && (
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
