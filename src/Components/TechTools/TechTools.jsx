import React from "react";
import Marquee from "react-fast-marquee";
import js from "../../assets/1.png";
import gsap from "../../assets/2.png";
import easyorders from "../../assets/3.png";
import git from "../../assets/4.png";
import wordpress from "../../assets/5.png";
import redux from "../../assets/6.png";
import next from "../../assets/7.png";
import flowbite from "../../assets/8.png";
import oop from "../../assets/9.png";
import sass from "../../assets/10.png";
import ts from "../../assets/11.png";
import tailwind from "../../assets/12.png";
import shadcn from "../../assets/13.png";
import react from "../../assets/14.png";
import mui from "../../assets/15.png";
import tanstack from "../../assets/16.png";
import jquery from "../../assets/17.png";
import css3 from "../../assets/18.png";
import shopify from "../../assets/19.png";
import php from "../../assets/20.png";
import bootstarp from "../../assets/21.png";
import github from "../../assets/22.png";
import figma from "../../assets/23.png";

const marquees = [
  {
 
    items: [
      { img: css3, name: "CSS 3" },
      { img: js, name: "JavaScript" },
      { img: ts, name: "TypeScript" },
      { img: react, name: "React" },
      { img: next, name: "Next.js" },
      { img: redux, name: "Redux" },
      { img: tanstack, name: "TanStack" },
        { img: gsap, name: "GSAP" },
      { img: git, name: "Git" },
    ],
  },
  {

    items: [
      { img: php, name: "PHP" },
      { img: bootstarp, name: "Bootstrap" },
      { img: tailwind, name: "Tailwind" },
      { img: sass, name: "SASS" },
      { img: shadcn, name: "ShadCN" },
      { img: flowbite, name: "Flowbite" },
            { img: shopify, name: "Shopify" },
      { img: easyorders, name: "EasyOrders" },
      { img: oop, name: "OOP" },
      { img: mui, name: "MUI" },
      { img: jquery, name: "jQuery" },
      { img: figma, name: "Figma" },
    ],
  },
];

export default function TechTools() {
  return (
    <section className="py-10">
              <div className="title text-center my-7">
          <span className="text-sm">كود لكل حاجة</span>
<h2 className="text-[#EB1C5F] mt-1 text-[43px] font-bold uppercase">Programming Skills</h2>
        </div>

      {marquees.map((marquee, idx) => (
        <Marquee
          key={idx}
          direction={idx % 2 === 0 ? "left" : "right"}
          autoFill
          pauseOnHover
          className="my-7"
        >
          <div className="flex items-center gap-12">
         <div key={idx} className="text ms-4  rounded-3xl">
  </div>
            {marquee.items.map((item, i) => (
              <div key={i} className="text-center">
                <img
                  src={item.img}
                  alt={item.name}
                  width={50}
                  className="mx-auto"
                />
                <h3 className="mt-2">{item.name}</h3>
              </div>
            ))}
          </div>
        </Marquee>
      ))}
    </section>
  );
}
