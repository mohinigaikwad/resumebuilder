import React, { useRef } from "react";
import tem15 from "./../assets/templests/imgi_5_image.webp";
import tem16 from "./../assets/templests/imgi_6_image.webp";
import tem17 from "./../assets/templests/imgi_7_image.webp";
import tem18 from "./../assets/templests/imgi_8_image.webp";
import tem19 from "./../assets/templests/imgi_9_image.webp";

import tem1 from "./../assets/templests/imgi_10_image.webp";
import tem2 from "./../assets/templests/imgi_11_image.webp";
import tem3 from "./../assets/templests/imgi_12_image.webp";
import tem4 from "./../assets/templests/imgi_13_image.webp";
import tem5 from "./../assets/templests/imgi_14_image.jpg";
import tem6 from "./../assets/templests/imgi_15_image.jpg";
import tem7 from "./../assets/templests/imgi_16_image.webp";
import tem8 from "./../assets/templests/imgi_17_image.webp";
import tem9 from "./../assets/templests/imgi_18_image.webp";
import tem10 from "./../assets/templests/imgi_19_image.webp";
import tem11 from "./../assets/templests/imgi_20_image.jpg";
import tem12 from "./../assets/templests/imgi_21_image.webp";
import tem13 from "./../assets/templests/imgi_22_image.webp";
import tem14 from "./../assets/templests/imgi_23_image.webp";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const images = [
  tem15,
  tem16,
  tem17,
  tem18,
  tem19,
  tem1,
  tem2,
  tem3,
  tem4,
  tem5,
  tem6,
  tem7,
  tem8,
  tem9,
  tem10,
  tem11,
  tem12,
  tem13,
  tem14,
];
export default function Templets() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const itemWidth = 400; 
    // const itemWidth = container.clientWidth; // container ka width
    if (direction === "left") {
      container.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="h-[100vh]">
      <div className="heading  text-center mt-15 text-[18px] font-medium md:text-[12px] lg:text-[27px] xl-[34px] 2xl:text-[40px]">
        <span className="text-blue-400">ATS-Ready </span>
        Templates <br />
        <span className=" text-2xl">For Smarter Job Serches!</span>
      </div>

      <div
        
        className="alltempletsrap relative flex items-center w-full px-4  h-[60vh]  mt-20 scroll-smooth  "
      >
        <button
          onClick={() => scroll("left")}
          className="leftbtn absolute left-2 top-1/2 -translate-y-1/2 p-3 z-10 mx-10 shadow-lg text-white rounded-full bg-blue-500"
        >
          <FaChevronLeft />
        </button>
        <div ref={scrollRef} className="imagecontainer  flex gap-8  ">
          {images.map((image, i) => {
            return (
              <div key={image} className="onetemplerap relative w-[350px] h-[480px] border-[22px] border-gray-300 rounded-2xl shadow-md overflow-hidden group hover:border-blue-500">
                <img src={image} alt="" />
                <div className="overlybtn absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <Link to={"/resumebuilder"}>
                  <button className="bg-gradient-to-r from-blue-400 to-blue-600 px-9 py-3 rounded-3xl shadow-xl text-white font-semibold text-2xl">
                    Use this template
                  </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => scroll("right")}
          className="rightbtn absolute right-2 top-1/2 -translate-y-1/2 p-3 z-10 mx-10 shadow-lg text-white rounded-full bg-blue-500"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
