import React from "react";

export default function Navbar() {
  return (
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
          <span className="text-blue-600 font-semibold text-2xl">
            ResumeMate.io
          </span>
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
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-full font-medium">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
}
