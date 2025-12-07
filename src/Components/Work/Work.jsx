import React from "react";
import { TabItem, Tabs } from "flowbite-react";
import img1 from "../../assets/freshcart.png";
import img2 from "../../assets/courses.png";
import img3 from "../../assets/yallagrow.png";
import img4 from "../../assets/ahwatak.png";
import img5 from "../../assets/oil.png";
import img6 from "../../assets/daniels.png";
import img7 from "../../assets/bakery.png";
import img8 from "../../assets/allam.png";
import img9 from "../../assets/ewan.png";
import img10 from "../../assets/alradoon.png";
import img11 from "../../assets/concord.png";
import img12 from "../../assets/elsafer.png";
import img13 from "../../assets/roza.png";
import img14 from "../../assets/etmanna.png";
import img15 from "../../assets/art.png";
import img16 from "../../assets/jewerly.png";
import img17 from "../../assets/printin.png";
import img18 from "../../assets/wardrobe.png";
import img19 from "../../assets/Startup-Portfolio.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const allProjects = [
  {
    id: 3,
    img: img3,
    title: "Yalla Grow",
    link: "/yallagrow",
  },
  {
    id: 17,
    img: img17,
    title: "Print In",
    link: "/print-in",
  },
  {
    id: 18,
    img: img18,
    title: "Wardrobe",
    link: "/wardrobe",
  },
  {
    id: 13,
    img: img13,
    title: "Roza Store",
    link: "/roza",
  },
  {
    id: 14,
    img: img14,
    title: "Etmanna Running",
    link: "/etmanna-running",
  },
  {
    id: 1,
    img: img1,
    title: "FreshCart",
    link: "/freshcart",
  },
  {
    id: 2,
    img: img2,
    title: "Courses",
    link: "/courses",
  },
  {
    id: 19,
    img: img19,
    title: "Startup",
    link: "/start-up",
  },
  {
    id: 4,
    img: img4,
    title: "Mejaz",
    link: "/mejaz",
  },
  {
    id: 8,
    img: img8,
    title: "Allam EL Bahser",
    link: "/allam-el-basher",
  },
  {
    id: 9,
    img: img9,
    title: "Ewan El Hegaz",
    link: "/ewan-el-hegaz",
  },
  {
    id: 10,
    img: img10,
    title: "Al Radoon",
    link: "/alradoon",
  },
  {
    id: 11,
    img: img11,
    title: "Concord",
    link: "/concord",
  },
  {
    id: 5,
    img: img5,
    title: "Princess Natural",
    link: "/princess-natural",
  },

  {
    id: 7,
    img: img7,
    title: "Bakery",
    link: "/bakery",
  },

  {
    id: 12,
    img: img12,
    title: "El Safer",
    link: "/elsafer",
  },

  {
    id: 15,
    img: img15,
    title: "Art Elegancy",
    link: "/art-elegancy",
  },
  {
    id: 16,
    img: img16,
    title: "Jewerly",
    link: "/jewerly-art",
  },
  {
    id: 6,
    img: img6,
    title: "Daniels",
    link: "/daniels",
  },
];
const next = [
  {
    id: 3,
    img: img3,
    title: "Yalla Grow",
    link: "/yallagrow",
  },
];
const js = [
  {
    id: 4,
    img: img4,
    title: "Mejaz",
    link: "/mejaz",
  },
  {
    id: 5,
    img: img5,
    title: "Princess Natural",
    link: "/princess-natural",
  },
  {
    id: 6,
    img: img6,
    title: "Daniels",
    link: "/daniels",
  },
  {
    id: 7,
    img: img7,
    title: "Bakery",
    link: "/bakery",
  },
];

const react = [
  {
    id: 1,
    img: img1,
    title: "FreshCart",
    link: "/freshcart",
  },
  {
    id: 2,
    img: img2,
    title: "Courses",
    link: "/courses",
  },
  {
    id: 19,
    img: img19,
    title: "Startup",
    link: "/start-up",
  },
];

const wordpress = [
  {
    id: 8,
    img: img8,
    title: "Allam EL Bahser",
    link: "/allam-el-basher",
  },
  {
    id: 9,
    img: img9,
    title: "Ewan El Hegaz",
    link: "/ewan-el-hegaz",
  },
  {
    id: 10,
    img: img10,
    title: "Al Radoon",
    link: "/alradoon",
  },
  {
    id: 11,
    img: img11,
    title: "Concord",
    link: "/concord",
  },
  {
    id: 12,
    img: img12,
    title: "El Safer",
    link: "/elsafer",
  },
];
const shopify = [
  {
    id: 17,
    img: img17,
    title: "Print In",
    link: "/print-in",
  },
  {
    id: 13,
    img: img13,
    title: "Roza Store",
    link: "/roza",
  },
  {
    id: 14,
    img: img14,
    title: "Etmanna Running",
    link: "/etmanna-running",
  },
  {
    id: 15,
    img: img15,
    title: "Art Elegancy",
    link: "/art-elegancy",
  },
  {
    id: 16,
    img: img16,
    title: "Jewerly Art",
    link: "/jewerly-art",
  },
];
const easyOrders = [
  {
    id: 18,
    img: img18,
    title: "Wardrobe",
    link: "/wardrobe",
  },
];
export default function Work() {
  return (
    <>
      <section className="h-[55vh] md:h-[70vh]">
        <div className="title text-center mb-7 flex flex-col md:h-[95vh] h-[74vh] justify-center">
          <span className="text-black ">بحول فكرتك لكود</span>
          <h1 className="text-[#EB1C5F] mt-2 md:text-6xl text-4xl font-bold uppercase">
            Your vision,
            <br /> my development
          </h1>
          <div className="btn my-8">
            <HashLink
              smooth
              to="#all"
              className="button border  border-black bg-black text-white py-2.5 px-7 uppercase text-sm"
            >
              View all
            </HashLink>
          </div>
        </div>
      </section>

      <section id="all" className="md:py-20 py-10 scroll-mt-20 ">
        <div className="mx-auto md:px-14 px-7">
          <div className="projects ">
            <Tabs
              aria-label="Default tabs"
              variant="default"
              className="justify-center text-black "
            >
              <TabItem
                active
                title="All Projects"
                style="font-size:20px !important"
              >
                <div className="flex flex-wrap   gap-5">
                  {allProjects.map((info, index) => (
                    <div key={index} className="md:w-[32%]  w-full">
                      <Link to={info.link}>
                        <div className=" card relative rounded-md shadow-md border  border-neutral-300 overflow-hidden group transition-all duration-300">
                          <img
                            src={info.img}
                            alt=""
                            className="w-full rounded-t-md"
                          />
                          <div
                            className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                          >
                            <p className=" text-lg rounded-full font-semibold  text-white ">
                              {info.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </TabItem>
              <TabItem active title="React">
                <div className="flex flex-wrap   gap-5">
                  {react.map((info, index) => (
                    <div key={index} className="md:w-[32%]  w-full">
                      <Link to={info.link}>
                        <div className=" card relative rounded-md shadow-md border  border-neutral-300 overflow-hidden group transition-all duration-300">
                          <img
                            src={info.img}
                            alt=""
                            className="w-full rounded-t-md"
                          />
                          <div
                            className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                          >
                            <p className=" text-lg rounded-full font-semibold  text-white ">
                              {info.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </TabItem>
              <TabItem title="Next.js">
                {next.map((info, index) => (
                  <div key={index} className="md:w-[32%] w-full">
                    <Link to={info.link}>
                      <div className=" card relative rounded-md shadow-md border  border-neutral-300 overflow-hidden group transition-all duration-300">
                        <img
                          src={info.img}
                          alt=""
                          className="w-full rounded-t-md"
                        />
                        <div
                          className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                        >
                          <p className=" text-lg rounded-full font-semibold  text-white ">
                            {info.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </TabItem>
              <TabItem title="Js Native">
                <div className="flex flex-wrap   gap-5">
                  {js.map((info, index) => (
                    <div key={index} className="md:w-[32%] w-full">
                      <Link to={info.link}>
                        <div className=" card relative rounded-md shadow-md border  border-neutral-300 overflow-hidden group transition-all duration-300">
                          <img
                            src={info.img}
                            alt=""
                            className="w-full rounded-t-md"
                          />
                          <div
                            className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                          >
                            <p className=" text-lg rounded-full font-semibold  text-white ">
                              {info.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </TabItem>
              <TabItem title="WordPress">
                <div className="flex flex-wrap   gap-5">
                  {wordpress.map((info, index) => (
                    <div key={index} className="md:w-[32%] w-full">
                      <Link to={info.link}>
                        <div className=" card relative rounded-md shadow-md border  border-neutral-300 overflow-hidden group transition-all duration-300">
                          <img
                            src={info.img}
                            alt=""
                            className="w-full rounded-t-md"
                          />
                          <div
                            className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                          >
                            <p className=" text-lg rounded-full font-semibold  text-white ">
                              {info.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </TabItem>
              <TabItem title="Shopify">
                <div className="flex flex-wrap   gap-5">
                  {shopify.map((info, index) => (
                    <div key={index} className="md:w-[32%] w-full">
                      <Link to={info.link}>
                        <div className=" card relative rounded-md shadow-md border  border-neutral-300 overflow-hidden group transition-all duration-300">
                          <img
                            src={info.img}
                            alt=""
                            className="w-full rounded-t-md"
                          />
                          <div
                            className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                          >
                            <p className=" text-lg rounded-full font-semibold  text-white ">
                              {info.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </TabItem>
              <TabItem title="Easy Orders">
                <div className="flex flex-wrap   gap-5">
                  {easyOrders.map((info, index) => (
                    <div key={index} className="md:w-[32%] w-full">
                      <Link to={info.link}>
                        <div className=" card relative rounded-md shadow-md border  border-neutral-300 overflow-hidden group transition-all duration-300">
                          <img
                            src={info.img}
                            alt=""
                            className="w-full rounded-t-md"
                          />
                          <div
                            className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                          >
                            <p className=" text-lg rounded-full font-semibold  text-white ">
                              {info.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </TabItem>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
