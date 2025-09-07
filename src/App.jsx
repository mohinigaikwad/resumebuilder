import React, { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import FaqandFooter from "./pages/FaqandFooter";
import ResumeWrighting from "./pages/ResumeWrighting";
import ResumeBuilder from "./pages/ResumeBuilder.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

import EditResume from "./pages/resumeupdate/Forms/EditResume";
import Dashboard from "./pages/Home/Dashboard";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { ResumeProvider } from "./Context/Resumecontext.jsx";
import AllTempletes from "./pages/forms/AllTempletes.jsx";
import ResumeNavbar from "./components/ResumeNavbar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ResumeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/resumebuilder" element={<ResumeBuilder />} />
            <Route path="/write" element={<ResumeWrighting />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/templets" element={<AllTempletes />} />
            <Route path="" element={<ResumeNavbar/> } />
           
            <Route path="/dah" element={<Dashboard />} />
            <Route path="/Edit/:reumeid" element={<EditResume />} />
          </Routes>
        </BrowserRouter>
      </ResumeProvider>

      {/* 
    <Toaster
    toastOptions={{
      className:"",
      style:{
        fontSize:"13px"
      }
    }}
    /> */}

      {/* <LandingPage/> */}
      {/* <ResumeWrighting/> */}
      {/* <ResumeBuilder/> */}
      {/* <h1 class="text-3xl font-bold underline">Accordian</h1> */}
      {/* <FaqandFooter /> */}
    </>
  );
}

export default App;
