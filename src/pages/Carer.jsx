import React from "react";
import wave from "./../assets/logo/wave.svg";
import d from "./../assets/logo/download.svg";
import d1 from "./../assets/logo/download (1).svg";
import d2 from "./../assets/logo/download (2).svg";
import d3 from "./../assets/logo/download (3).svg";
// import d1 from "./../assets/logo/download (1)";

export default function Carer() {
  return (
    <div>
      <div className="heading  text-center mt-15 text-[18px] font-medium md:text-[12px] lg:text-[27px] xl-[34px] 2xl:text-[40px]">
        <span className="text-blue-400">Elevate Your </span>
        Career <br />
      <span className=" text-2xl font-light text-center">
        With Our User friendly Resume Builder
      </span>
      </div>

      <div className="careerpath relative mt-2 flex flex-col gap-20">
        <img className="w-[214px] h-[1020px] absolute left-1/2  -translate-x-[20%]  " src={wave} alt="" />
        <div className="firstdiv mx-auto w-[90%] flex items-center justify-between text-[#3C3C3C] md:w-[57%]">
           <div className="content  bg-white rounded-lg p-6 ">
            <div className="div">
                <h3>Select Your Ideal Template</h3>
                <p className="mt-e text-[9px] font-normal md:mt-4 lg:text-base xl-text-xl">
                    Browse our professionally crafted 
                    <br />
                    templates designed to pass ATS 
                    <br />
                    filters and stand out.
                </p>
            </div>
           </div>
           <div className="image">
            <img className="h-80 w-80" src={d3} alt="" />
           </div>
        </div>

           <div className="seconddiv mx-auto w-[90%] flex items-center justify-between text-[#3C3C3C] md:w-[57%]">
           
           <div className="image">
            <img className="h-80 w-80" src={d2} alt="" />
           </div>
           <div className="content  bg-white rounded-lg p-6 ">
            <div className="div">
                <h3>Select Your Ideal Template</h3>
                <p className="mt-e text-[9px] font-normal md:mt-4 lg:text-base xl-text-xl">
                    Browse our professionally crafted 
                    <br />
                    templates designed to pass ATS 
                    <br />
                    filters and stand out.
                </p>
            </div>
           </div>
        </div>

        <div className="threediv mx-auto w-[90%] flex items-center justify-between text-[#3C3C3C] md:w-[57%]">
           <div className="content  bg-white rounded-lg p-6 ">
            <div className="div">
                <h3>Select Your Ideal Template</h3>
                <p className="mt-e text-[9px] font-normal md:mt-4 lg:text-base xl-text-xl">
                    Browse our professionally crafted 
                    <br />
                    templates designed to pass ATS 
                    <br />
                    filters and stand out.
                </p>
            </div>
           </div>
           <div className="image">
            <img className="h-80 w-80" src={d1} alt="" />
           </div>
        </div>


        <div className="firstdiv mx-auto w-[90%] flex items-center gap-6 mt-40 justify-center text-[#3C3C3C] md:w-[57%]">
           <div className="content  bg-white rounded-lg p-4 ">
            <div className="div">
                <h3>Select Your Ideal Template</h3>
                <p className="mt-e text-[9px] font-normal md:mt-4 lg:text-base xl-text-xl">
                    Browse our professionally crafted 
                    <br />
                    templates designed to pass ATS 
                    <br />
                    filters and stand out.
                </p>
            </div>
           </div>
           <div className="image">
            <img className="h-60 w-60" src={d} alt="" />
           </div>
        </div>

      </div>
    </div>
  );
}
