import React, { useState } from "react";
import Templeteone from "../../Templets/Templeteone";
import Templetetwo from "../../Templets/Templetetwo";
import Templetethre from "../../Templets/Templetethre";
import { useResume } from "../../Context/Resumecontext";
import tem5 from "./../../assets/templests/imgi_5_image.webp";

import tem16 from "./../../assets/templests/imgi_23_image.webp";

import tem20 from "./../../assets/templests/imgi_20_image.jpg";


export default function AllTempletes() {
  const { setselectedtemplete } = useResume();
  return (
    <section>
      <div className="temhead ">Templetes(❁´◡`❁)</div>
      <div className="temrap flex gap-6 items-center  justify-center mt-6">
        <img src={tem5} className="w-70 h-96 shadow-2xl hover:border-4 hover:scale-109 border-blue-400 hover:transition-transform duration-1000 ease-in-out" onClick={() => setselectedtemplete("templete1")}>
        
        </img>

        <img src={tem16} className="w-70 h-96 shadow-2xl hover:border-4 hover:scale-109 border-blue-400 hover:transition-transform duration-1000 ease-in-out" onClick={() => setselectedtemplete("templete2")}>
       
        </img>

        <img src={tem20} className="w-70 h-96 shadow-2xl hover:border-4 hover:scale-109 border-blue-400 hover:transition-transform duration-1000 ease-in-out" onClick={() => setselectedtemplete("templete3")}>
     
        </img>
      </div>
    </section>
  );
}
