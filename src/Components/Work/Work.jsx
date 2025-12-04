import React from "react";
import { TabItem, Tabs } from "flowbite-react";
import img1 from "../../assets/freshcart.png";
import img2 from "../../assets/courses.png";
import img3 from "../../assets/yallagrow.png";
import img4 from "../../assets/ahwatak.png";
import img5 from "../../assets/oil.png";
// import img6 from "../../assets/daniels.png";
import img7 from "../../assets/bakery.png";
import img8 from "../../assets/allam.png";
import img9 from "../../assets/ewan.png";
import img10 from "../../assets/alradoon.png";
// import img11 from "../../assets/concord.png";
import img12 from "../../assets/elsafer.png";
import img13 from "../../assets/roza.png";
import img14 from "../../assets/etmanna.png";
import img15 from "../../assets/art.png";
import img16 from "../../assets/jewerly.png";
import img17 from "../../assets/printin.png";
import img18 from "../../assets/wardrobe.png";
import { Link } from "react-router-dom";

const allProjects = [
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
    id: 3,
    img: img3,
    title: "Yalla Grow",

    link: "/yallagrow",
  },
  {
    id: 4,
    img: img4,
    title: "Ahwatak",
    // link: "/ahwatak",
  },

  {
    id: 5,
    img: img5,
    title: "Oil",
    // link: "/oil",
  },
  // {
  //   id: 6,
  //   img: img6,
  //   title: "Daniels",
  //   // link: "/daniels",
  // },
  {
    id: 7,
    img: img7,
    title: "Bakery",
    // link: "/bakery",
  },
  {
    id: 8,
    img: img8,
    title: "Allam",
    // link: "/allam",
  },
  {
    id: 9,
    img: img9,
    title: "Ewan El Hegaz",
    // link: "/ewan-el-hegaz",
  },
  {
    id: 10,
    img: img10,
    // link: "/alradoon",
  },
  // {
  //   id: 11,
  //   img: img11,
  //   // link:,
  // },
  {
    id: 12,
    img: img12,
  },
  {
    id: 13,
    img: img13,
    link: "/roza",
  },
  {
    id: 14,
    img: img14,
    link: "/etmanna-running",
  },
  {
    id: 15,
    img: img15,
  },
  {
    id: 16,
    img: img16,
  },
  {
    id: 17,
    img: img17,
    link: "/print-in",
  },
  {
    id: 18,
    img: img18,
    link: "/wardrobe",
  },
];

// const shopify=[{
  
// }]

export default function Work() {
  return (
    <>
      <section className="h-[60vh]">
        <div className="title text-center mb-7 flex flex-col h-[90vh] justify-center">
          <span className="text-black ">بنحوّل فكرتك لكود</span>
          <h2 className="text-[#EB1C5F] mt-2 text-6xl font-bold uppercase">
            Your vision,
            <br /> my development
          </h2>
          <div className="btn my-5">
            <a
              href="../"
              className="button border border-black bg-black text-white py-2.5 px-7 uppercase text-sm"
            >
              View all
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className=" px-14 mx-auto">
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
                    <div key={index} className="w-[32%]">
                      <Link to={info.link}>
                        <div className=" card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
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
                {/* <div className="flex flex-wrap   gap-5">
                  <div className="w-[32%]">
                    <div className="card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
                      <img src={img1} alt="" className="w-full rounded-t-md" />
                      <div
                        className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                      >
                        <p className="px-4 py-2 text-sm rounded-full font-semibold uppercase text-black bg-[#EB1C5F]">
                          See More
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[32%]">
                    <div className="card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
                      <img src={img2} alt="" className="w-full rounded-t-md" />
                      <div
                        className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                      >
                        <p className="px-4 py-2 text-sm rounded-full font-semibold uppercase text-black bg-[#EB1C5F]">
                          See More
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </TabItem>
              <TabItem title="Next.JS">
                {/* <div className="flex flex-wrap   gap-5">
                  <div className="w-[32%]">
                    <div className="card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
                      <img src={img3} alt="" className="w-full rounded-t-md" />
                      <div className="card-title px-4">
                        <h3 className="  my-2  ">Yalla Grow Company</h3>
                        <div
                          className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                        >
                          <p className="px-4 py-2 text-sm rounded-full font-semibold uppercase text-black bg-[#EB1C5F]">
                            See More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </TabItem>
              <TabItem title="Js Native">
                {/* <div className="flex flex-wrap   gap-5">
                  <div className="w-[32%]">
                    <div className="card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
                      <img src={img4} alt="" className="w-full rounded-t-md" />
                      <div className="card-title px-4">
                        <h3 className="  my-2  ">Ahwatak</h3>
                        <div
                          className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                        >
                          <p className="px-4 py-2 text-sm rounded-full font-semibold uppercase text-black bg-[#EB1C5F]">
                            See More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[32%]">
                    <div className="card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
                      <img src={img5} alt="" className="w-full rounded-t-md" />
                      <div className="card-title px-4">
                        <h3 className="  my-2  ">Princess Oil </h3>
                        <div
                          className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                        >
                          <p className="px-4 py-2 text-sm rounded-full font-semibold uppercase text-black bg-[#EB1C5F]">
                            See More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[32%]">
                    <div className="card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
                      <img src={img6} alt="" className="w-full rounded-t-md" />
                      <div className="card-title px-4">
                        <h3 className="  my-2  ">Daneial</h3>
                        <div
                          className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                        >
                          <p className="px-4 py-2 text-sm rounded-full font-semibold uppercase text-black bg-[#EB1C5F]">
                            See More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[32%]">
                    <div className="card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
                      <img src={img7} alt="" className="w-full rounded-t-md" />
                      <div className="card-title px-4">
                        <h3 className="  my-2  ">Bakery</h3>
                        <div
                          className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                        >
                          <p className="px-4 py-2 text-sm rounded-full font-semibold uppercase text-black bg-[#EB1C5F]">
                            See More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </TabItem>
              <TabItem title="WordPress">
                {/* <div className="flex flex-wrap   gap-5">
                  <div className="w-[32%]">
                    <div className="card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
                      <img src={img8} alt="" className="w-full rounded-t-md" />
                      <div className="card-title px-4">
                        <h3 className="  my-2  ">Ahwatak</h3>
                        <div
                          className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                        >
                          <p className="px-4 py-2 text-sm rounded-full font-semibold uppercase text-black bg-[#EB1C5F]">
                            See More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[32%]">
                    <div className="card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
                      <img src={img9} alt="" className="w-full rounded-t-md" />
                      <div className="card-title px-4">
                        <h3 className="  my-2  ">Princess Oil </h3>
                        <div
                          className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                        >
                          <p className="px-4 py-2 text-sm rounded-full font-semibold uppercase text-black bg-[#EB1C5F]">
                            See More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[32%]">
                    <div className="card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
                      <img src={img10} alt="" className="w-full rounded-t-md" />
                      <div className="card-title px-4">
                        <h3 className="  my-2  ">Daneial</h3>
                        <div
                          className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                        >
                          <p className="px-4 py-2 text-sm rounded-full font-semibold uppercase text-black bg-[#EB1C5F]">
                            See More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[32%]">
                    <div className="card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
                      <img src={img11} alt="" className="w-full rounded-t-md" />
                      <div className="card-title px-4">
                        <h3 className="  my-2  ">Bakery</h3>
                        <div
                          className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                        >
                          <p className="px-4 py-2 text-sm rounded-full font-semibold uppercase text-black bg-[#EB1C5F]">
                            See More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[32%]">
                    <div className="card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
                      <img src={img12} alt="" className="w-full rounded-t-md" />
                      <div className="card-title px-4">
                        <h3 className="  my-2  ">Bakery</h3>
                        <div
                          className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                        >
                          <p className="px-4 py-2 text-sm rounded-full font-semibold uppercase text-black bg-[#EB1C5F]">
                            See More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </TabItem>
              <TabItem title="Shopify">
                {/* <div className="flex flex-wrap   gap-5">
                  <div className="w-[32%]">
                    <div className="card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
                      <img src={img13} alt="" className="w-full rounded-t-md" />
                      <div className="card-title px-4">
                        <h3 className="  my-2  ">Ahwatak</h3>
                        <div
                          className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                        >
                          <p className="px-4 py-2 text-sm rounded-full font-semibold uppercase text-black bg-[#EB1C5F]">
                            See More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[32%]">
                    <div className="card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
                      <img src={img14} alt="" className="w-full rounded-t-md" />
                      <div className="card-title px-4">
                        <h3 className="  my-2  ">Princess Oil </h3>
                        <div
                          className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                        >
                          <p className="px-4 py-2 text-sm rounded-full font-semibold uppercase text-black bg-[#EB1C5F]">
                            See More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[32%]">
                    <div className="card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
                      <img src={img15} alt="" className="w-full rounded-t-md" />
                      <div className="card-title px-4">
                        <h3 className="  my-2  ">Daneial</h3>
                        <div
                          className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                        >
                          <p className="px-4 py-2 text-sm rounded-full font-semibold uppercase text-black bg-[#EB1C5F]">
                            See More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[32%]">
                    <div className="card relative rounded-md shadow-md border bg-[#0D0D0D] border-neutral-800 overflow-hidden group transition-all duration-300">
                      <img src={img16} alt="" className="w-full rounded-t-md" />
                      <div className="card-title px-4">
                        <h3 className="  my-2  ">Bakery</h3>
                        <div
                          className="absolute inset-0 bg-black/70 flex justify-center items-center 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                        >
                          <p className="px-4 py-2 text-sm rounded-full font-semibold uppercase text-black bg-[#EB1C5F]">
                            See More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </TabItem>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
