import React, { createContext, useReducer, useContext, useState, useRef } from "react";
import resumeReducer, { initialState } from "../Reducers/resumeReducer";

// context create
const Resumecontext = createContext();

// provider banaya
export const ResumeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(resumeReducer, initialState);
  const [selectedtemplete, setselectedtemplete] = useState("templete1");
  const [themcolor, setthemcolor] = useState("");
  const [fontfamily, setfontfamily] = useState("Roboto");

  const resumeref = useRef()

  return (
    <Resumecontext.Provider
      value={{ state, dispatch, selectedtemplete, setselectedtemplete,themcolor,setthemcolor,fontfamily,setfontfamily,resumeref }}
    >
      {children}
    </Resumecontext.Provider>
  );
};

// custom hook for easy use
export const useResume = () => useContext(Resumecontext);
