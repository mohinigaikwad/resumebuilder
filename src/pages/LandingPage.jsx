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
import Carer from "./Carer";
import Login from "./../pages/auth/Login";
import Modal from "../components/Modal";
import Signup from "./auth/Signup";
import { Link } from "react-router-dom";

import hero1 from "./../assets/heroimages/imgi_56_image.png";
import hero2 from "./../assets/heroimages/imgi_57_image.png";
import hero3 from "./../assets/heroimages/imgi_58_image.png";
import hero4 from "./../assets/templests/imgi_6_image.webp";

export default function LandingPage() {
  const [openauthmodal, setopenauthmodal] = useState(false);
  const [islogin, setislogin] = useState(true);

  const handlecta = () => {};

  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* <Navbar /> */}
      {/* navbar start */}
      <nav
        className="fade-in-navbar  sticky  mx-4 mb-4 mt-5  px-6 text-lg md:mx-8 relative
     bg-white shadow-lg rounded-2xl"
      >
        <div className="  mx-auto px-4 flex h-20 justify-between items-center py-3">
          {/* Logo Section */}
          <div className="logo flex items-center space-x-2">
            {/* <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // replace with your logo
            alt="Logo"
            className="h-8 w-8"
          /> */}
            <Link to={"/"}>
              <span className="text-blue-600 font-semibold text-2xl">
                ResumeMate.io
              </span>
            </Link>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-blue-500 font-medium">
              Home
            </a>
            <a href="/resumebuilder" className="text-black hover:text-blue-500">
              Templates
            </a>
            <a href="/write" className="text-black hover:text-blue-500">
              Resume Writing
            </a>
          </div>

          {/* Button */}
          <div>
            <button
              onClick={() => setopenauthmodal(true)}
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-full font-medium"
            >
              Sign up/Login
            </button>
          </div>
        </div>
      </nav>
      {/* navbar end */}

      {/* modal */}
      {openauthmodal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-[400px] relative">
            <button
              onClick={() => setopenauthmodal(false)}
              className="closebtn absolute top-2 right-2 text-gray-600 hover:text-red-500"
            >
              ❌
            </button>
            {islogin ? (
              <Login setislogin={setislogin} />
            ) : (
              <Signup setislogin={setislogin} />
            )}
          </div>
        </div>
      )}
      {/* modal */}

      {/* heropage start */}

      <div className="landingrap  h-[100vh]  px-6 mx-4 ">
        <div className="twoboxrap flex ">
          <div className="content   w-[50%] pt-12 flex flex-col  md:gap-4 lg:gap-6 xl:gap-9">
            <h1 className="font-medium text-6xl ">
              <span>
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Enhance
                </span>
                Your Existing Resume
              </span>
              <br />
              <span>
                Or{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Generate
                </span>
                New Resume
              </span>
              <br />
              <span>For Free...</span>
            </h1>
            <h2 className="text-3xl font-light">
              <span>Professional resume with no hassle.</span>
              <br />
              <span>A straight-forward, no-fluff resume builder.</span>
              <br />
              <span>No credit card required.</span>
              <br />
            </h2>

            <div className="twomainbtn flex gap-7">
              <Link to="/resumebuilder">
                <button
                  onClick={handlecta}
                  className="bg-gradient-to-r from-blue-400 to-blue-600 px-9 py-3 rounded-3xl shadow-xl text-white hover:scale-109 hover:transition : transform duration-1000 ease-in-out "
                >
                  Generate Now➡️{" "}
                </button>
              </Link>
              <Link to={"/resumebuilder"}>
                <button className=" bg-white shadow-xl  rounded-3xl px-7 py-3  hover:scale-109 hover:transition : transform duration-1000 ease-in-out">
                  Import Existing One 📝
                </button>
              </Link>
            </div>

            <div className="meadiaicons">
              <div className="medniarap  flex ">
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

            <div className="rating">
              <div className="starrap flex flex-row gap-2">
                <LiaStarSolid className="text-amber-400 text-3xl " />
                <LiaStarSolid className="text-amber-400 text-3xl " />
                <LiaStarSolid className="text-amber-400 text-3xl " />
                <LiaStarSolid className="text-amber-400 text-3xl " />
                <div className=" text-2xl">4.5</div>
              </div>
              <div className=" text-xl ">Rated by FAANG employees</div>
            </div>
          </div>

          <div className="image relative pt-12 w-[50%]  flex items-center ">
            {/* <img src="" alt="no image" /> */}
            <div className="bordercircle h-[550px] flex items-center justify-center  w-[550px] border-dotted border-5 border-blue-200 rounded-full animate-spin ">
              <div className="bordercircle h-[400px]  w-[400px] border-dotted border-3 border-blue-200 rounded-full animate-spin "></div>
            </div>
            <img className="absolute top-30 z-40 w-1/2" src={hero1} alt="" />
            <img className="absolute  right-30 top-60 z-30" src={hero2} alt="" />
            <img className="absolute  bottom-0 w-2/3  right-2/5 z-20" src={hero3} alt="" />
            <img className="absolute  left-1/5  z-10 h-170 w-130" src={hero4} alt="" />
          </div>
        </div> 
      </div>
      {/* heropage end */}
      <Carer />
      <Templets />
      <UserReview />
      <FaqandFooter />

      {/* modalfor login and signup */}

      {/* modalfor login and login */}
    </div>
  );
}
