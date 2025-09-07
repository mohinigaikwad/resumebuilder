import React, { useState } from "react";
import { useResume } from "../../Context/Resumecontext";

export default function CustomColor() {

  const {themcolor, setthemcolor,fontfamily, setfontfamily} = useResume()

  const colors = [
    "#ef4444",
    "#f97316",
    "#facc15",
    "#22c55e",
    "#10b981",
    "#06b6d4",
    "#3b82f6",
    "#6366f1",
    "#8b5cf6",
    "#111827",
  ];

  console.log(themcolor, "thememmm");

  const fonts = [
    "Arial",
    "Roboto",
    "Lato",
    "Montserrat",
    "Open Sans",
    "Raleway",
    "Times New Roman",
    "Caladea",
    "Lora",
    "Roboto Slab",
    "Playfair Display",
    "Merriweather",
  ];


  const fontsizes = ["compact", "mid", "large"];
  const [fontsize, setfontsize] = useState("compact");

  return (
    <section>
      <div className="heading">Resume Setting</div>
      <div className="colordiv">
        <div className="colohed mt-6">Theme Color 🧮</div>
        <div className="copar relative flex gap-3 mt-3">
          {colors.map((color, i) => {
            return (
              <button
                onClick={() => setthemcolor(color)}
                className={`px-3 py-3 w-10 h-10 rounded-xl flex items-center justify-center ${
                  themcolor === color ? "ring-2 ring-black" : ""
                }  `}
                style={{ backgroundColor: color }}
              >
                {themcolor === color && <span className="absolute">🦴</span>}
              </button>
            );
          })}
        </div>
      </div>
      <div className="fontdiv">
        <div className="colohed mt-6">Font Family</div>
        <div className="fontpar flex flex-wrap gap-3 mt-3">
          {fonts.map((font, i) => {
            return (
              <button
                onClick={() => setfontfamily(font)}
                className={`px-3 py-4  border border-blue-400 rounded-lg ${
                  fontfamily === font ? "bg-amber-400" : ""
                }`}
                style={{
                  fontFamily: font,
                  backgroundColor: fontfamily === font ? themcolor : "",
                  color: fontfamily === font ? "white" : "",
                }}
              >
                {font}
              </button>
            );
          })}
        </div>
      </div>

      <div className="fontsize">
        <div className="colohed   mt-6">Font Size</div>
        <div className="fontsizepr mt-3 flex gap-3">
          {fontsizes.map((fs, i) => {
            return (
              <button
                onClick={() => setfontsize(fs)}
                className="px-4 py-2 border rounded-lg border-blue-400"
                style={{
                  fontsize: fs,
                  backgroundColor: fontsize === fs ? themcolor : "",
                  color: fontsize === fs ? "white" : "black",
                }}
              >
                {fs}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
