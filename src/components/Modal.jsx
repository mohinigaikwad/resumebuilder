import React from "react";

export default function Modal({
  childern,
  isopen,
  onclose,
  title,
  hideheader,
  showactionbtn,
  actionbtnicon,
  actionbtntext,
  onactionclik,
}) {
  return <div className="fixed indent-0 z-50 flex justify-center items-center w-full h-full bg-black">
    <div className={`relative flex flex-col bg-white shadow-2xl overflow-hidden`}>
        
    </div>

  </div>;
}
