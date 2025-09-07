import React, { useState } from "react";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { HiOutlinePencil } from "react-icons/hi2";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import  logo  from "./../assets/logo/logo.webp";
import  templetimg  from "./../assets/logo/imgi_73_image.webp";
import { Link } from "react-router-dom";


export default function FaqandFooter() {
  const [openindex, setopenindex] = useState(0);
  const faqs = [
    {
      q: "Is Resumemate free to use?",
      a: "Yes, Resumemate is free for creating and customizing resumes. The AI Recommendation System is paid.",
    },
    {
      q: "What makes Resumemate different?",
      a: "It provides ATS-friendly templates and easy editing.",
    },
    {
      q: "Can I upload an existing resume for editing?",
      a: "Yes, you can upload and then edit sections easily.",
    },
    {
      q: "What does ‘ATS-friendly’ mean?",
      a: "ATS means Applicant Tracking System, it ensures resumes pass automatic filters.",
    },
    {
      q: "What are the sharing options?",
      a: "You can download your resume as a PDF or share it via a unique link.",
    },
    {
      q: "can I make my resume private?",
      a: "Yes,you cab set your resume's sharing option to private, ensuring the sharing link becomes inactive and your resume remains accessiable only to you.",
    },
  ];
  return (
    <>
      <section className="faqbox  px-8 ">
        <div className="heading  text-center mt-15 text-[18px] font-medium md:text-[12px] lg:text-[27px] xl-[34px] 2xl:text-[40px]">
          Frequently Asked <span className="text-blue-400">Questions</span>
        </div>
        <div className="twoboxrap mt-15 flex flex-col lg:flex-row gap-12 items-start justify-center ">
          <div className="left flex gap-6 flex-col   w-[60%] h-full">
            {faqs?.map((faq, i) => {
              const isopen = openindex === i;

              return (
                <div key={i} className="p-7 bg-white shadow-xl  rounded-2xl">
                  <button
                    onClick={() => setopenindex(i)}
                    className="flex items-center justify-between w-full "
                  >
                    <span
                      className={`text-3xl font-medium  hover:text-black  ${
                        isopen ? "text-black" : "text-[#969696]"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span className="bg-blue-700 flex items-center justify-center h-6 w-6  leading-none rounded-full text-white text-xl  md:h-6 md:w-6 ">
                      {isopen ? "-" : "+"}
                    </span>
                  </button>
                  {/* answer box */}

                  {isopen && (
                    <div className="mt-5   w-[70%] text-5xl  md:text-lg lg:text-xl text-[#666666]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="right bg-white shadow-2xl w-[40%] h-full rounded-3xl p-12">
            <h3 className="mb-5 text-lg font-semibold md:text-xl lg:text-2xl">
              <span className="border-b border-black">How </span>Can we help or
              improve?
            </h3>
            <form className="flex flex-col">
              <div className="inputrap ">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium md:text-sm text-[#969696]"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
                />
              </div>
              <div className="inputrap mt-3">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium md:text-sm text-[#969696]"
                >
                  Your Email
                </label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
                />
              </div>
              <div className="inputrap mt-3">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium md:text-sm text-[#969696]"
                >
                  Your Question or Suggestion
                </label>
                <textarea
                  name="message"
                  rows={4}
                  type="text"
                  className="mt-1 p-3 block w-full rounded-3xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
                />
              </div>
              <button className="px-5 py-3 mt-5 border border-blue-400 text-blue-400 rounded-3xl  self-end hover:bg-blue-600 hover:text-white md:text-sm">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className=" h-10 "></div>
      </section>

      <section className="topfooter relative py-16 mt-20     md:h-[200px] lg:h-[235px] xl:h-[280px] 2xl:h-[305px]">
        <div className="step absolute flex items-center justify-center gap-4 left-1/2 top-0 z-10 -translate-x-1/2 overflow-hidden bg-white rounded-4xl px-3  ">
          <div className="left flex flex-col gap-6 w-[65%] px-4 gap-6 ">
            <div className="   md:pt-8 xl-pt-10">
              <h2 className="font-light text-5xl text-[#52A1FF]">
                Ready to build your <br />{" "}
                <span className="text-blue-500">professional reusme ?</span>{" "}
              </h2>
            </div>
            <div className="twomainbtn flex gap-7">
              <Link to={"/resumebuilder"}>
                <button className="bg-gradient-to-r from-blue-400 to-blue-600 px-9 py-3 rounded-3xl shadow-xl text-white">
                  Generate Now➡️
                </button>
              </Link>
              <Link to={"/resumebuilder"}>
              <button className=" bg-white shadow-xl  rounded-3xl px-7 py-3">
                Import Existing One 📝
              </button>
              </Link>
              
            </div>
          </div>
          <div className="right w-[35%]">
            <img
              className="rounded-full"
              src={templetimg}
              alt="no img"
            />
          </div>
        </div>

        <div className="blueline absolute bottom-6 w-full h-40 bg-blue-300"></div>
      </section>

      <section className="footer">
        <div className="centerrap mx-auto max-w-7xl px-4 sm;px-6 lg:px-8">
          <div className="fourfooterrap   grid grid-cols-1 gap-10 max-md:text-center md:grid-cols-2 lg:grid-cols-4 mt-13 gap-8">
           
            <div className="first flex gap-6 flex-col">
             <div className="logo flex items-center flex-row gap-4">
              <img src={logo} alt="" />
               <h1 className="text-blue-500 font-semibold">Resume <br /> Mate.io</h1>
             </div>
              <p className="text-3xl  text-gray-600 max-md:auto max-md:w-[80%] lg:w-full lg:text-base">
                Craft your perfect resume with our professional tools and
                services.
              </p>
            </div>

            <div className="sec ">
              <h3 className="text-black  text-xl font-semibold mb-4">
                Services
              </h3>
              <ul className="space-y-3 flex gap-2 flex-col">
                <li>
                  <a
                    href="/"
                    className="flex text-xl items-center gap-3 text-gray-600 hover:text-blue-500 max-md:justify-center"
                  >
                    <HiOutlineNewspaper />
                    Templates
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="flex text-xl items-center gap-3 text-gray-600 hover:text-blue-500 max-md:justify-center"
                  >
                    <HiOutlinePencil />
                    Resume Builder
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="flex text-xl  items-center gap-3 text-gray-600 hover:text-blue-500 max-md:justify-center"
                  >
                    <HiOutlinePencilSquare />
                    Resume Writing
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="flex text-xl items-center gap-3 text-gray-600 hover:text-blue-500 max-md:justify-center"
                  >
                    <HiOutlineChatBubbleLeft />
                    Consult Now for Free
                  </a>
                </li>
              </ul>
            </div>

            <div className="three ">
              <h3 className="text-black  text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-3 flex gap-2 flex-col">
                <li>
                  <a
                    href="/"
                    className=" text-xl   text-gray-600 hover:text-blue-500 max-md:justify-center"
                  >
                    Privcy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-xl   text-gray-600 hover:text-blue-500 max-md:justify-center"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-xl   text-gray-600 hover:text-blue-500 max-md:justify-center"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-xl flex  gap-1 items-center   text-gray-600 hover:text-blue-500 max-md:justify-center"
                  >
                    <MdOutlineMailOutline />
                    help@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="four">
              <h3 className="text-black  text-xl font-semibold mb-4">
                Connect with Us
              </h3>
              <div className="flex flex-wrap gap-6 space-x-4">
                <a href="https://x.com">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png"
                    alt="X"
                    className="w-8 h-8"
                  />
                </a>
                <a href="https://linkedin.com">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="LinkedIn"
                    className="w-8 h-8"
                  />
                </a>
                <a href="https://instagram.com">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                    alt="Instagram"
                    className="w-8 h-8"
                  />
                </a>
                <a href="https://youtube.com">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                    alt="YouTube"
                    className="w-8 h-8"
                  />
                </a>
                <a href="https://facebook.com">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                    alt="Facebook"
                    className="w-8 h-8"
                  />
                </a>
                <a href="https://pinterest.com">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                    alt="Pinterest"
                    className="w-8 h-8"
                  />
                </a>
                <a href="https://reddit.com">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3670/3670226.png"
                    alt="Reddit"
                    className="w-8 h-8"
                  />
                </a>
                <a href="https://quora.com">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3670/3670032.png"
                    alt="Quora"
                    className="w-8 h-8"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="copyrigt mt-12 border-t w-[50%] flex items-start justify-center mx-auto  border-gray-300 pt-8">
            <p className=" text-xl text-gray-500">
              © 2025 Resumemate. All rights reserved.
            </p>
            <div className="h-15"></div>
          </div>


        </div>
      </section>
    </>
  );
}
