import React, { useState } from "react";
import { MdOutlinePersonOutline } from "react-icons/md";

import { MdOutlineWorkOutline } from "react-icons/md";
import { GoLightBulb } from "react-icons/go";
import { LuGraduationCap } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";
import { PiCertificateLight } from "react-icons/pi";
import { IoLanguageOutline } from "react-icons/io5";
import { LiaAwardSolid } from "react-icons/lia";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { TfiRulerPencil } from "react-icons/tfi";
import { PiSquaresFourBold } from "react-icons/pi";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import ResumeNavbar from "../components/ResumeNavbar";
import tresumepriv from "./../assets/templests/imgi_5_image.webp";

import PersonalForm from "./forms/PersonalForm.jsx";
import SkillsForm from "./forms/SkillsForm";
import ExperienceForm from "./forms/ExperienceForm";
import EducationForm from "./forms/EducationForm";
import ProjectsForm from "./forms/ProjectsForm";
import Templeteone from "../Templets/Templeteone.jsx";
import CertificateForm from "./forms/CertificateForm.jsx";
import LanguageForm from "./forms/LanguageForm.jsx";
import AwardForm from "./forms/AwardForm.jsx";
import CustomColor from "./forms/CustomColor.jsx";
import AllTempletes from "./forms/AllTempletes.jsx";
import { useResume } from "../Context/Resumecontext.jsx";
import Templetetwo from "../Templets/Templetetwo.jsx";
import Templetethre from "../Templets/Templetethre.jsx";

export default function ResumeBuilder() {
  const [collaps, setcollaps] = useState(false);
  const [showmore, setshowmore] = useState(false);
  const [activesection, setactivesection] = useState("personal");

   const {selectedtemplete,themcolor,resumeref} = useResume()

  return (
    <div className="">
      <ResumeNavbar  />
      <div className="mainbo  mx-4 flex">
        <div className="twoboxrap   flex   ">
          <div className="menubox   w-1/5  px-6">
            <div
              className={`mainmenu relative flex gap-8 flex-col mt-4    ${
                collaps
                  ? "w-20  flex items-center justify-center"
                  : "w-50 h-full"
              }  `}
            >
              <div
                onClick={() => setcollaps(!collaps)}
                className="arrowbox absolute -right-1.5 top-0 bg-gray-400  rounded-2xl"
              >
                {collaps ? <MdChevronRight /> : <MdChevronLeft />}
              </div>

              <div className="firstmenubox bg-white  rounded-2xl px-2 py-4">
                {/* <div
                    onClick={() => setcollaps(!collaps)}
                    className="arrowbox absolute -right-1.5 top-0 bg-gray-400  rounded-2xl"
                  >
                    {collaps ? <MdChevronRight /> : <MdChevronLeft />}
                  </div> */}
                {console.log("collapss", collaps)}
                <ul>
                  <li
                    onClick={() => setactivesection("personal")}
                    className={`flex items-center   cursor-pointer  h-8 w-full  gap-3 ${
                      activesection === "personal"
                        ? "bg-blue-500 text-white rounded-2xl"
                        : " text-black"
                    }`}
                  >
                    {console.log("activesection", activesection)}

                    <div className="icon mt-3 h-6 w-6">
                      <MdOutlinePersonOutline />
                    </div>
                    {!collaps && (
                      <div className="div text-lg mx-w-full">
                        Personal Details
                      </div>
                    )}
                  </li>

                  <li
                    onClick={() => setactivesection("experince")}
                    className={`flex items-center   cursor-pointer  h-8 w-full  gap-3 ${
                      activesection === "experince"
                        ? "bg-blue-500 text-white rounded-2xl  "
                        : " text-black"
                    }`}
                  >
                    <div className="icon mt-3 h-6 w-6">
                      <MdOutlineWorkOutline />
                    </div>
                    {!collaps && (
                      <div className="div mx-w-full">Work Experience</div>
                    )}
                  </li>

                  <li
                    onClick={() => setactivesection("education")}
                    className={`flex items-center   cursor-pointer  h-8 w-full  gap-3 ${
                      activesection === "education"
                        ? "bg-blue-500 text-white rounded-2xl  "
                        : " text-black"
                    }`}
                  >
                    <div className="icon mt-3 h-6 w-6">
                      <LuGraduationCap />
                    </div>
                    {!collaps && <div className="div mx-w-full">Education</div>}
                  </li>

                  <li
                    onClick={() => setactivesection("project")}
                    className={`flex items-center   cursor-pointer  h-8 w-full  gap-3 ${
                      activesection === "project"
                        ? "bg-blue-500 text-white rounded-2xl  "
                        : " text-black"
                    }`}
                  >
                    <div className="icon mt-3 h-6 w-6">
                      <GoProjectSymlink />
                    </div>
                    {!collaps && <div className="div mx-w-full">Projects</div>}
                  </li>

                  <li
                    onClick={() => setactivesection("skills")}
                    className={`flex items-center   cursor-pointer  h-8 w-full  gap-3 ${
                      activesection === "skills"
                        ? "bg-blue-500 text-white rounded-2xl  "
                        : " text-black"
                    }`}
                  >
                    <div className="icon mt-3 h-6 w-6">
                      <GoLightBulb />
                    </div>
                    {!collaps && <div className="div mx-w-full">Skills</div>}
                  </li>

                  <li
                    onClick={() => setshowmore(!showmore)}
                    className={`flex items-center   cursor-pointer  h-8 w-full  gap-3 
                        ${
                          showmore
                            ? "bg-black text-white rounded-3xl "
                            : "text-black"
                        }
                        `}
                  >
                    <div className="icon mt-3 h-6 w-6">
                      {console.log(showmore)}
                      {showmore ? (
                        <MdKeyboardArrowUp />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </div>
                    {!collaps && (
                      <div className="div mx-w-full">More option</div>
                    )}
                  </li>

                  {showmore && (
                    <ul>
                      <li
                        onClick={() => setactivesection("certifate")}
                        className={`flex items-center   cursor-pointer  h-8 w-full  gap-3 ${
                          activesection === "certifate"
                            ? "bg-blue-500 text-white rounded-2xl"
                            : " text-black"
                        }`}
                      >
                        <div className="icon mt-3 h-6 w-6">
                          <PiCertificateLight />
                        </div>
                        {!collaps && (
                          <div className="div mx-w-full">Certificate</div>
                        )}
                      </li>

                      <li
                        onClick={() => setactivesection("language")}
                        className={`flex items-center   cursor-pointer  h-8 w-full  gap-3 ${
                          activesection === "language"
                            ? "bg-blue-500 text-white rounded-2xl"
                            : " text-black"
                        }`}
                      >
                        <div className="icon mt-3 h-6 w-6">
                          <IoLanguageOutline />
                        </div>
                        {!collaps && (
                          <div className="div mx-w-full">Language</div>
                        )}
                      </li>

                      <li
                        onClick={() => setactivesection("award")}
                        className={`flex items-center   cursor-pointer  h-8 w-full  gap-3 ${
                          activesection === "award"
                            ? "bg-blue-500 text-white rounded-2xl"
                            : " text-black"
                        }`}
                      >
                        <div className="icon mt-3 h-6 w-6">
                          <LiaAwardSolid />
                        </div>
                        {!collaps && <div className="div mx-w-full">Award</div>}
                      </li>
                      {/* <li
                        onClick={() => setactivesection("custom")}
                        className={`flex items-center   cursor-pointer  h-8 w-full  gap-3 ${
                          activesection === "custom"
                            ? "bg-blue-500 text-white rounded-2xl"
                            : " text-black"
                        } `}
                      >
                        <div className="icon mt-3 h-6 w-6">
                          <HiOutlinePencilSquare />
                        </div>
                        {!collaps && (
                          <div className="div mx-w-full">Custom Section</div>
                        )}
                      </li> */}
                    </ul>
                  )}
                </ul>
                <ul></ul>
              </div>
              <div className="secondbox bg-white rounded-2xl px-2 py-4">
                <ul>
                  <li
                    onClick={() => setactivesection("custom")}
                    className={`flex items-center   cursor-pointer  h-8 w-full  gap-3 ${
                      activesection === "custom"
                        ? "bg-blue-500 text-white rounded-2xl"
                        : " text-black"
                    }  `}
                  >
                    <div className="icon mt-3 h-6 w-6">
                      <TfiRulerPencil />
                    </div>
                    {!collaps && <div className="div mx-w-full">Custom</div>}
                  </li>
                  <li
                    onClick={() => setactivesection("temp")}
                    className={`flex items-center   cursor-pointer  h-8 w-full  gap-3 ${
                      activesection === "temp"
                        ? "bg-blue-500 text-white rounded-2xl"
                        : " text-black"
                    }`}
                  >
                    <div className="icon mt-3 h-6 w-6">
                      <PiSquaresFourBold />
                    </div>
                    {!collaps && <div className="div mx-w-full">Templets</div>}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="formbox   w-[750px] h-auto px-4 overflow-auto overflow-y-scroll  mt-4">
            <div className="formbox bg-white rounded-2xl  p-6">
              <div className="inputrap ">
                {activesection === "personal" && <PersonalForm />}
                {activesection === "experince" && <ExperienceForm />}
                {activesection === "education" && <EducationForm />}
                {activesection === "project" && <ProjectsForm />}
                {activesection === "skills" && <SkillsForm />}
                {activesection === "certifate" && <CertificateForm />}
                {activesection === "language" && <LanguageForm />}
                {activesection === "award" && <AwardForm />}
                {activesection === "custom" && <CustomColor />}
                {activesection === "temp" && <AllTempletes />}
              </div>
            </div>
          </div>
        </div>

        {/* live preive start */}

        <section className="livepreview w-2/5  h-screen  mt-4   flex justify-center  overflow-auto overflow-y-scroll mr-4 mx-1  ">
        <div ref={resumeref} className="whitebox  bg-white h-screen w-full  mx-6">
             
              {selectedtemplete === "templete1" && <Templeteone themcolor ={themcolor}/>}
              {selectedtemplete === "templete2" && <Templetetwo/>}
              {selectedtemplete === "templete3" && <Templetethre/>}
        </div>



        </section>

        {/* live preview end */}
      </div>
    </div>
  );
}
