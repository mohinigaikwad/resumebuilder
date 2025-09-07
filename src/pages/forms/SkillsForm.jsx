import React from 'react'
import { RiResetRightLine } from "react-icons/ri";

import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useResume } from '../../Context/Resumecontext';
export default function SkillsForm() {
  const {state,dispatch} = useResume()
  const skills = state.skills
  const visible = state.visibility.skills
  const handlechange = (e)=>{
    dispatch({type:"SET_SKILLS", value:e.target.value})
  }
  const handlereset = ()=>{
     dispatch({type:"RESET_SKILLS"})
  }

  const handlevisibilty = ()=>{
    dispatch({type:"VISIBILITY",section:"skills"})
  }
  return (
    <section>
         <div className="formheading flex justify-between items-center">
               <div className="heading font-semibold text-2xl">
                 SKILLS 🤹
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
                   {visible ? (
                     <IoEyeOffOutline className="text-blue-950" />
                   ) : (
                     <IoEyeOutline className="text-blue-950" />
                   )}
                 </div>
               </div>
             </div>

            {/* description box */}
              {visible && ( <div className="inputrap col-span-full mt-3">
              <label
                htmlFor="name"
                className="block text-xs font-medium md:text-sm text-[#545D6A]"
              >
                Description
              </label>

              <textarea
                name="skills"
                value={skills}
                onChange={handlechange}
                placeholder="Describe your work"
                type="text"
                className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
              />
            </div>)}
            
    </section>
        

    // <h1>skills</h1>
  )
}
