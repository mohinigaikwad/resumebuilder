import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FaqandFooter from "./FaqandFooter";
import UserReview from "./UserReview";
import Templets from "./Templets";
import amezon from "./../assets/media/amezon.svg";
import facebook from "./../assets/media/face.svg";
import google from "./../assets/media/google.svg";
import netfilx from "./../assets/media/netflix.svg";
import redcross from "./../assets/media/redcross.svg";
import { LiaStarSolid } from "react-icons/lia";
import tdimg from "./../assets/howitworkimg/imgi_18_image.png";
import firstimg from "./../assets/howitworkimg/imgi_28_image.webp";
import four from "./../assets/howitworkimg/imgi_31_image.webp";
import five from "./../assets/howitworkimg/imgi_5_image.png";

import blackman from "./../assets/blakman.webp";
export default function ResumeWrighting() {
  return (
    <div>
      <Navbar />
      <div className="landingrap  h-[100vh]  px-6 mx-4 ">
        <div className="twoboxrap flex ">
          <div className="content   w-[50%] pt-12 flex flex-col  md:gap-4 lg:gap-6 xl:gap-9">
            <h1 className="font-medium text-6xl ">
              <span>
                Elevate Your
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Career
                  <br />
                </span>
                With a Professionally <br />
                Written Resume
              </span>
            </h1>
            <h2 className="text-3xl font-light">
              <span>Professional writers,.</span>
              <br />
              <span> proven strategies, and tailored designs</span>
              <br />
              <span>No credit card required.</span>
              <br />
            </h2>

            <div className="twomainbtn flex gap-7">
              <a href="">
                <button className="bg-gradient-to-r from-blue-400 to-blue-600 px-9 py-3 rounded-3xl shadow-xl text-white">
                  Consult Now for free
                </button>
              </a>
              <button className=" bg-white shadow-xl  rounded-3xl px-7 py-3">
                View Plans 📝
              </button>
            </div>

            <div className="meadiaicons">
              <div className="medniarap  flex flex-col gap-4 ">
                <h1 className="font-semibold">Client from</h1>
                <div className="btn">
                  <button className="">
                    <img className="h-20 w-20" src={facebook} alt="no" />
                  </button>
                  <button className="">
                    <img className="h-20 w-20" src={amezon} alt="no" />
                  </button>
                  <button className="">
                    <img className="h-20 w-20" src={redcross} alt="no" />
                  </button>
                  <button className="">
                    <img className="h-20 w-20" src={google} alt="no" />
                  </button>
                  <button className="">
                    <img className="h-20 w-20" src={netfilx} alt="no" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="image relative pt-12 w-[50%]  flex items-center  ">
            <div className="bordercircle h-[600px] flex items-center justify-center  w-[600px] border-dotted border-5 border-blue-200 rounded-full animate-spin ">
              <div className="bordercircle h-[500px]  w-[500px] bg-gray-200 border-blue-200 rounded-full animate-spin "></div>
            </div>
            <img className="absolute left-8  " src={blackman} alt="no image" />
          </div>
        </div>
      </div>

      <section className="howitworks ">
        <div className="heading  text-center mt-15 text-[18px] font-medium md:text-[12px] lg:text-[27px] xl-[34px] 2xl:text-[40px]">
          <span className="">How it Works ? </span>
          <br />
          <span className=" mt-0 text-blue-500 text-3xl font-light text-center">
            Simple Steps
          </span>
        </div>

        <div className="setpsbox p-12 ">
          <div className="firstdiv relative pt-4 ">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 border border-dashed border-gray-500 h-full w-[1px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[1px]  rounded-lg border-8 border-blue-600"></div>
            <div className="maindiv mx-auto mt-8 w-[100%] flex items-center justify-evenly">
              <div className="image">
                <img src={firstimg} alt="" />
              </div>
              <div className="content ">
                <div className="bb flex items-center justify-between gap-5">
                  <div className="num">
                    <span>1️⃣</span>
                  </div>
                  <div className="cont  bg-white rounded-md w-44 p-10">
                    <h3 className="font-bold text-xl ">Upload Your Resume</h3>
                    <p className="text-lg">
                      Let our AI scan and auto-fill your resume information to
                      save you time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="firstdiv relative pt-4 ">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 border border-dashed border-gray-500 h-full w-[1px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[1px]  rounded-lg border-8 border-blue-600"></div>
            <div className="maindiv mx-auto mt-8 w-[100%] flex items-center justify-evenly">
              
              <div className="content  ">
                <div className="bb flex items-center justify-between gap-5">
                  <div className="num">
                    <span>1️⃣</span>
                  </div>
                  <div className="cont  bg-white rounded-md w-44 p-10">
                    <h3 className="font-bold text-xl ">Upload Your Resume</h3>
                    <p className="text-lg">
                      Let our AI scan and auto-fill your resume information to
                      save you time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="image">
                <img src={firstimg} alt="" />
              </div>
            </div>
          </div>
            <div className="firstdiv relative pt-4 ">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 border border-dashed border-gray-500 h-full w-[1px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[1px]  rounded-lg border-8 border-blue-600"></div>
            <div className="maindiv mx-auto mt-8 w-[100%] flex items-center justify-evenly">
              <div className="image">
                <img src={firstimg} alt="" />
              </div>
              <div className="content ">
                <div className="bb flex items-center justify-between gap-5">
                  <div className="num">
                    <span>1️⃣</span>
                  </div>
                  <div className="cont  bg-white rounded-md w-44 p-10">
                    <h3 className="font-bold text-xl ">Upload Your Resume</h3>
                    <p className="text-lg">
                      Let our AI scan and auto-fill your resume information to
                      save you time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



{/* new section */}
      {/* <section className="pricing">
        <div className="heading">
          <h1 className="text-5xl text-center">Simple, easy pricing</h1>
        </div>
        <div className="priceingbox">
          <div className="card">
            <div className="ex">
              <h4>Freshers 0-2 years</h4>
            </div>
            <div className="price">
              <h1>$699</h1>
            </div>
            <div className="line">.........</div>
            <div className="list">
              <ul>
                <li>
                  <span>➡️</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
      {/* <Carer /> */}
      <FaqandFooter />
    </div>
  );
}
