import React, { useState } from "react";
import { LiaFileImportSolid } from "react-icons/lia";
import { TfiSave } from "react-icons/tfi";
import { TbLocationShare } from "react-icons/tb";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useResume } from "../Context/Resumecontext";
// import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";
0
export default function ResumeNavbar() {
  const [scale, setscale] = useState(0);
  const [outoscale, setoutoscale] = useState(true);

  const { resumeref } = useResume();

  // const hanldeprint = useReactToPrint({
  //   contentRef: resumeref, 
  //   documentTitle: "My Resume",
  // });
  // 
   const handleDownload = async () => {
    if (!resumeref.current) return;

    try {
      // element ko image banayega
      const dataUrl = await domtoimage.toPng(resumeref.current);

      // pdf bana ke usme image dalenge
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf"); // ✅ direct download
    } catch (error) {
      console.error("Download failed:", error);
    }
  };
  
  

  return (
    <nav
      className="fade-in-navbar  sticky  mx-4 mb-4 mt-5  px-6 text-lg md:mx-8 relative
     bg-white shadow-lg rounded-2xl"
    >
      <div className="  mx-auto px-4 flex h-20 justify-between items-center py-3">
        {/* Logo Section */}
        <div className="logo flex items-center justify-between w-[30%] space-x-2">
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // replace with your logo
            alt="Logo"
            className="h-8 w-8"
          /> */}
          <Link to="/">
            <span className="text-blue-600 font-semibold text-2xl">
              ResumeMate.io
            </span>
          </Link>

          <div className="btn">
            <input
              className="hidden"
              type="file"
              accept=".json"
              id="resumeupload"
              onChange={""}
            />
            <button className="bg-gradient-to-r from-blue-400 to-blue-600 px-9 py-3 rounded-full shadow-xl text-white">
              ➡️ Import Existing Resume
            </button>
          </div>
        </div>

        {/* Button */}
        <div className="btnrap flex items-center gap-6">
          {/* autoscale */}
          <div className="outoscale flex gap-4 items-center">
            <label htmlFor="input">
              <input
                className="h-5 w-5 mt-3 "
                onChange={() => setoutoscale(!outoscale)}
                type="checkbox"
                checked={outoscale}
              />
            </label>
            <span>AutoScale</span>
          </div>
          <div className="search">
            <RiSearchLine className="h-6 w-6" />
          </div>
          <div className="slider  ">
            <div className="div flex gap-3 ">
              <input
                onChange={(e) => setscale(Number(e.target.value))}
                type="range"
                min="0"
                max="100"
                value={scale}
              />
              <span className="text-xl w-10">{scale}%</span>
            </div>
          </div>
          <div className="send bg-white shadow-2xl shadow-black rounded-full">
            <TbLocationShare className="h-5 w-5" />
          </div>
          <div className="save">
            <span className="flex items-center gap-2">
              {" "}
              <TfiSave />
              Save
            </span>
          </div>
          <div className="download">
            <button
              // onClick={hanldeprint}
              onClick={handleDownload}
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-full font-medium"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
