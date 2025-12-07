import { Link } from "react-router-dom";
import logo from "../../assets/ewan-logo.png";
import img from "../../assets/ewan.png";
import style from "./EwanProject.module.css";
import { HiArrowRightCircle } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";

export default function EwanProject() {
  return (
    <section className="md:my-30 mb-20 mt-30">
      <div className="md:px-14 px-6 mx-auto">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-y-5">
          <div className="md:w-[35%] w-full md:sticky top-0  p-7 rounded-2xl bg-[#F5F4EF]">
            <div className="logo-of-project my-6">
              <img src={logo} alt="yalla grow company" width={130} />
            </div>

            <div className="techtools">
              <ul className="text-[11px] text-neutral-500 flex flex-wrap gap-2">
                <li>
                  <span className="inline-block py-1 px-4 bg-[#ECEAE6] rounded-full">
                    WordPress
                  </span>
                </li>
                <li>
                  <span className="inline-block py-1 px-4 bg-[#ECEAE6] rounded-full">
                    HTML 5
                  </span>
                </li>
                <li>
                  <span className="inline-block py-1 px-4 bg-[#ECEAE6] rounded-full">
                    CSS 3
                  </span>
                </li>
                <li>
                  <span className="inline-block py-1 px-4 bg-[#ECEAE6] rounded-full">
                    Elementor
                  </span>
                </li>
                <li>
                  <span className="inline-block py-1 px-4 bg-[#ECEAE6] rounded-full">
                    Contact form 7
                  </span>
                </li>
                <li>
                  <span className="inline-block py-1 px-4 bg-[#ECEAE6] rounded-full">
                    Custom apps
                  </span>
                </li>
              </ul>
            </div>

            <div className="details-of-project pt-10">
              <h2 className="text-2xl text-neutral-800">Details</h2>
              <p className="text-neutral-600 mt-3 mb-6">
                A modern and responsive construction
                services landing page showcasing building solutions, project
                quality, and professional contracting work. The page highlights
                services, past projects, and key expertise with a clean layout
                designed to present the company’s strength, reliability, and
                commitment to high-quality construction.
              </p>
            </div>

            <div className="btn mt-5">
              <Link
                to="#"
                className="py-3  rounded-3xl  inline-block text-center text-white w-full  bg-[#EB1C5F] transation-all duration-300 hover:bg-black"
              >
                Live Demo
              </Link>
            </div>
          </div>

          <div className="md:w-[60%] w-full ">
            <div className="project-img">
              <img src={img} alt="" className="rounded-2xl" />
            </div>

            <div
              className={`${style.discuss} rounded-2xl my-5 flex justify-center items-start p-12 flex-col h-auto`}
            >
              <p className="text-3xl">
                How about I create an <br /> equally awesome project?
              </p>

              <div className="btn mt-10">
                <Link
                  to="https://wa.me/201276869700"
                  className="py-3 rounded-3xl px-8 text-white bg-black transation-all duration-300 hover:bg-[#EB1C5F]"
                >
                  Discuss a project
                  <HiArrowRightCircle className="inline-block ms-1 text-lg" />
                </Link>
              </div>
            </div>

            <div className="btn-next-and-Prv flex justify-between md:mt-6 mt-10 flex-wrap gap-y-3 md:gap-y-0">
              <div className="previous md:w-[48%] w-full">
                <Link
                  to="/allam-el-basher"
                  className="py-5 rounded-4xl px-6 inline-block md:text-start text-center text-white w-full bg-black transation-all duration-300 hover:bg-[#EB1C5F]"
                >
                  <HiArrowLongLeft className="inline-block me-1 text-lg " />
                  Previous Project
                </Link>
              </div>

              <div className="next md:w-[48%] w-full">
                <Link
                  to="/alradoon"
                  className="py-5 rounded-4xl px-6 inline-block md:text-end text-center text-white w-full bg-black transation-all duration-300 hover:bg-[#EB1C5F]"
                >
                  Next Project
                  <HiArrowLongRight className="inline-block ms-1 text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
