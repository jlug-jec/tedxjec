/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Strips from "../components/Strips";
// import { Link } from "react-router-dom";
import Cursor from "../components/Cursor";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import Speakers from "../components/Speakers";
// import Crousel from "../components/Crousel";
// import HomePageCarousal from "../components/HomePageCarousal";
import Header from "../components/Header";
import Infrormation from "../components/Infrormation";
// import Test from "../components/test";

const Homepage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Cursor />
      <Header />
      <div className="h-full w-full flex-col items-center flex justify-center">
        <h1 className="md:text-6xl text-xl md:px-24 px-4 md:pt-24 pt-14 md:pb-6 pb-4 text-center">
          "Empowering Minds, Igniting Ideas: TEDxJEC Where{" "}
          <span className="text-red-600 font-semibold">Innovation</span> Meets
          <span className="text-red-600 font-semibold"> Inspiration!"</span>
        </h1>

        {/* <p className="text-center w-1/2 px-12 py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          maxime non, corrupti doloremque quos laboriosam veritatis quibusdam
          libero unde veniam, esse neque similique alias officia nihil maiores
          culpa ipsum minima.
        </p> */}
        {/* <Link to="/ticket"> */}
        <button className="md:py-3 py-1 my-4 md:text-xl text-sm ticket rounded-3xl hover:bg-black  border-red-600 hover: border-2 shadow-red-600 shadow-2xl md:px-12 px-6 bg-red-600">
          Tickets Coming Soon!!!
        </button>
        {/* </Link> */}
        <div
          data-aos-anchor-placement="top-center"
          data-aos="fade-up"
          className="h-full md:px-44 md:py-12 px-6 py-4 mt-8"
        >
          <img className="rounded-2xl w-[1800px]" src="./tedpage.png" alt="" />
        </div>

        <div className="md:my-12 md:py-12 h-[450px] overflow-hidden w-screen">
          <Strips />
        </div>

        {/* <HomePageCarousal /> */}
      </div>
    </>
  );
};

export default Homepage;
