/* eslint-disable no-unused-vars */
import React from "react";

const Header = () => {
  return (
    <div className="pt-8 md:p-8 p-0 flex justify-between md:px-24 sm:px-0 px-8">
      {/* <h1 className="text-4xl font-bold text-red-600">
        TED<span className="pb-4 text-white font-light p-1">x</span>JEC
      </h1> */}

      <img src="/logo-white-org.png" alt="tedXjec" className="md:h-28 h-14" />

      <img src="/JLUG.jpeg" alt="jlug" className="md:h-28 h-14 rounded-full" />
    </div>
  );
};

export default Header;
