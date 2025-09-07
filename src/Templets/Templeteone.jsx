import React, { useContext, useReducer } from "react";
import resumeReducer, { initialState } from "../Reducers/resumeReducer";
import { useResume } from "../Context/Resumecontext";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export default function Templeteone({ themcolor }) {
  console.log(themcolor, " this themcolor");

  // const  [state] = useContext()
  const { state } = useResume();
  const p = state.personal || {};
  const { name, summary, email, phone, website1, website2, location } = p;

  const ex = state.experience;
  const ed = state.education;
  const sk = state.skills;
  const pro = state.project;
  const cert = state.certificate;
  const lang = state.language;
  const aw = state.award;

  const {
    experience,
    education,
    project,
    skills,
    certificate,
    language,
    award,
  } = state.visibility;

  const visibleex = experience;
  const visibleed = education;
  const visiblecer = certificate;
  const visiblepro = project;
  const visibleskill = skills;
  const visiblelan = language;
  const visibleaward = award;
  // const [state, dispatch] = useReducer(resumeReucer,initialState)

  console.log("visibility", visibleex);
  return (
    <section className="bg-white h-screen  px-6">
      <div className="personal flex flex-col gap-2">
        <div className="name">
          <h1 className="font-bold text-3xl text-center ">{name}</h1>
        </div>

        <div className="summery">
          <h1 className="text-center">{summary}</h1>
        </div>

        <div className="contants  flex gap-2 items-center justify-center  flex-wrap">
          <h1 className="flex  justify-center items-center gap-2">
            <IoMdMail
              style={{ color: themcolor ? themcolor : "" }}
              className="text-blue-500"
            />{" "}
            {email}
          </h1>
          <h1 className="flex  justify-center items-center gap-2">
            {" "}
            <FaPhoneAlt
              style={{ color: themcolor ? themcolor : "" }}
              className="text-blue-500"
            />
            {phone}
          </h1>
          <h1 className="flex  justify-center items-center gap-2">
            {" "}
            <AiFillLinkedin
              style={{ color: themcolor ? themcolor : "" }}
              className="text-blue-500"
            />
            {website1}
          </h1>
          <h1 className="flex  justify-center items-center gap-2">
            {" "}
            <IoLogoGithub
              style={{ color: themcolor ? themcolor : "" }}
              className="text-blue-500"
            />{" "}
            {website2}
          </h1>
          <h1 className="flex  justify-center items-center gap-2">
            {" "}
            <IoLocationSharp
              style={{ color: themcolor ? themcolor : "" }}
              className="text-blue-500"
            />
            {location}
          </h1>
        </div>
      </div>
      {/* personal end  */}
      {/* ex start */}

      {visibleex ? (
        <div className="experience">
          <h1
            style={themcolor ? { color: themcolor } : undefined}
            className="font-semibold text-lg border-b-2 border-b-black text-blue-500"
          >
            WORK EXPERIENCE
          </h1>
          {ex && ex.length > 0 ? (
            ex.map((exp, index) => {
              const { company, title, startDate, endDate, description } = exp;
              return (
                <>
                  <h1 className="font-bold mt-2">{company}</h1>
                  <div className="rolrap flex justify-between">
                    <h1 className="text-gray-600 font-medium">{title}</h1>
                    <div className="sten flex gap-2">
                      <h1 className="text-gray-600 font-medium">{startDate}</h1>
                      <h1 className="text-gray-600 font-medium">{endDate}</h1>
                    </div>
                  </div>

                  <ul>
                    <li>{description}</li>
                  </ul>
                </>
              );
            })
          ) : (
            <p>No exp</p>
          )}
        </div>
      ) : null}

      {/* education start  */}

      {visibleed ? (
        <div className="education">
          <h1
            style={{ color: themcolor }}
            className="font-semibold mt-3 text-lg border-b-2  border-b-black text-blue-500"
          >
            EDUCATION
          </h1>

          {ed &&  ed.length > 0 ? (
            ed.map((ed, index) => {
              const {
                school,
                startDate,
                endDate,
                degree,
                percentage,
              } = ed;
              return (
                <>
                  <h1 className="font-semibold">{school}</h1>
                  <div className="edu flex justify-between">
                    <div className="degree flex gap-2">
                      <h1 className="text-gray-500 font-semibold">{degree}</h1>
                      <h1 className="text-gray-500 font-semibold">
                        {-percentage}
                      </h1>
                    </div>
                    <div className="date flex gap-2 font-semibold text-gray-500">
                      <h1>{startDate}</h1>
                      <h1>{endDate}</h1>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <p>No exp</p>
          )}
        </div>
      ) : null}

      {/* education end */}

      {/* project start  */}
      {visiblepro && (
        <div className="project">
          <h1
            style={{ color: themcolor }}
            className="font-semibold text-lg mt-3 border-b-2  border-b-black text-blue-500"
          >
            PROJECT{" "}
          </h1>

          {pro && pro.length > 0 ? (
            pro.map((pr, index) => {
              const { projectname, startDate, endDate, link, description } = pr;
              return (
                <>
                  <div className="pro flex justify-between">
                    <div className="name">
                      <h1 className="font-bold">{projectname}</h1>
                      <h1 className=" text-gray-500 font-semibold">{link}</h1>
                    </div>
                    <div className="date flex text-gray-500 font-semibold gap-2">
                      <h1>{startDate}</h1>
                      <h1>{endDate}</h1>
                    </div>
                  </div>

                  <h1>{description}</h1>
                </>
              );
            })
          ) : (
            <p>No pro</p>
          )}
        </div>
      )}

      {/* project end */}

      {/* skills start  */}

      {visibleskill && (
        <div className="skills">
          <h1
            style={{ color: themcolor }}
            className="font-semibold text-lg border-b-2 border-b-black text-blue-500"
          >
            SKILLS
          </h1>

          <h1 className="font-semibold">{sk}</h1>
        </div>
      )}

      {/* sills end */}

      {/* certificate start  */}
      {visiblecer && (
        <div className="certificate">
          <h1
            style={{ color: themcolor }}
            className="font-semibold text-lg border-b-2 border-b-black text-blue-500"
          >
            CERTIFICATE
          </h1>

          {cert && cert.length > 0 ? (
            cert.map((cert, index) => {
              const { certname, certlink, certdescription } = cert;
              return (
                <>
                  <div className="certify flex justify-between">
                    <h1 className="font-bold">{certname}</h1>
                    <h1 className="font-semibold text-gray-500">{certlink}</h1>
                  </div>
                  <h1 className="">{certdescription}</h1>
                </>
              );
            })
          ) : (
            <p>No exp</p>
          )}
        </div>
      )}

      {/* certificate end */}

      {/* language start  */}
      {visiblelan && (
        <div className="language">
          <h1
            style={{ color: themcolor ? themcolor : "" }}
            className={`font-semibold text-lg border-b-2 text-blue-500 border-b-black `}
          >
            LANGUAGE
          </h1>

          {lang && lang.length > 0 ? (
            lang.map((language, index) => {
              return (
                <>
                  <span className="font-semibold   ">{language.language}</span>
                </>
              );
            })
          ) : (
            <p>No exp</p>
          )}
        </div>
      )}

      {/* language end */}

      {/* award start */}
      {visibleaward && (
        <div className="aw">
          <h1
            style={{ color: themcolor }}
            className="font-semibold text-blue-500 border-b-black  text-lg border-b-2"
          >
            AWARD
          </h1>

          {aw && aw.length > 0 ? (
            aw.map((awd, index) => {
              const { award, awarddescription } = awd;
              return (
                <>
                  <h1 className="font-bold">{award}</h1>
                  <h1>{awarddescription}</h1>
                </>
              );
            })
          ) : (
            <p>No exp</p>
          )}
        </div>
      )}

      {/* award end */}
    </section>
  );
}
