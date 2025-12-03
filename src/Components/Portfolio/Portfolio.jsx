import React from "react";
import img1 from "../../assets/freshcart.png";
import img2 from "../../assets/courses.png";
import img3 from "../../assets/yallagrow.png";
import img17 from "../../assets/printin.png";
import img13 from "../../assets/roza.png";
import img18 from "../../assets/wardrobe.png";
import { Link } from "react-router-dom";

const mainProject = [
  {
    id: 1,
    img: img3,
    title: "Yalla Grow",
    link: "/yallagrow",
  },
  {
    id: 2,
    img: img13,
    title: "Roza Store",
    link: "/roza",
  },
  {
    id: 3,
    img: img17,
    title: "Print In",
    link: "/print-in",
  },
  {
    id: 4,
    img: img18,
    title: "Wardrobe",
    link: "/wardrobe",
  },
  {
    id: 5,
    img: img1,
    title: "FreshCart",
    title: "FreshCart",
    link: "/freshcart",
  },
  {
    id: 6,
    img: img2,
    title: "Courses",
    link: "/courses",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16  scroll-mt-20 bg-[#0a0a0a]">
      <div className="mx-auto md:px-14 px-7">
        <div className="flex flex-wrap gap-5">
          {mainProject.map((projects) => (
            <div key={projects.id} className="md:w-[32%] w-full">
              <Link to={projects.link}>
                <div className="card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
                  <img
                    src={projects.img}
                    alt=""
                    className="w-full rounded-t-md"
                  />
                  <div
                    className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  >
                    <p className=" text-lg rounded-full font-semibold  text-[#CFD1BC] ">
                      {projects.title}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="btn mt-10 text-center">
          <Link
            to="/work"
            className="inline-block upper bg-[#141414] py-3.5 px-10 border border-b-0 border-r-0 border-white/35 text-[13px] text-white transition-all duration-300  hover:bg-[#C2BCB2] hover:text-black "
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
