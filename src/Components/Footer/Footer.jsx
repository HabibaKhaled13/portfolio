import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import style from "./Footer.module.css";
import logo from "../../assets/logo-2.png";
export default function Footer() {
  return (
    <footer className="bg-white md:px-10 px-6 py-7 ">
      <div className="mx-auto md:px-14 px-7 bg-[#060606]  text-[#CFD1BC] rounded-3xl">
        <div className=" flex flex-wrap py-12 justify-between items-center">
          <div className="logo md:w-[20%] w-full md:mb-0 mb-10 font-semibold">
            <img src={logo} alt="logo for kreative" width={120} />
            <p className=" mt-4 mb-2 "> (+20) 1276869700</p>
            <p>
             
              <Link to="habibakhaled324@gmail.com" className="">
                habibakhaled324@gmail.com
              </Link>
            </p>

            <div className="social-media mt-5">
              <ul className="flex gap-x-2">
                <li>
                  <Link to="https://www.instagram.com/habiba_khaled38/">
                    <FaInstagram className="bg-[#d51b57] text-neutral-100 text-[40px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#353535]" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaFacebook className="bg-[#d51b57] text-neutral-100 text-[40px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#353535]" />
                  </Link>
                </li>

                <li>
                  <Link to="https://www.linkedin.com/in/habiba-khaled13/">
                    <FaLinkedin className="bg-[#d51b57] text-neutral-100 text-[40px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#353535]" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="services md:w-[20%] w-full md:mb-0 mb-10">
            <h2 className=" text-[#d51b57] text-2xl mb-4 ">About</h2>
            <p className="text-sm">
              From clean UI design to fast, seamless web experiences — I’ve got
              you covered.
            </p>
          </div>
          <div className="nav md:w-[20%] w-full md:mb-0 mb-10">
            <h2 className="text-[#BEA6FB] text-2xl mb-4 ">Services</h2>
            <p className="text-sm ">
              Frontend - Backend - Shopify - Wordpress - Zid - Easy Orders
            </p>
          </div>
          <div className="letsTalk uppercase md:w-[28%] w-full text-center md:text-left  self-center bg-black/30">
            {" "}
            <h2
              className={`${style["animated-text"]} md:text-[35px] text-center  text-[32px] font-bold`}
            >
              Accepting New Projects
            </h2>
          </div>
        </div>
        <div className="copy-right py-5 border-t  border-gray-800 text-neutral-200 text-center text-sm ">
          <p>© All right received, all wrongs received.</p>
        </div>
      </div>
    </footer>
  );
}
