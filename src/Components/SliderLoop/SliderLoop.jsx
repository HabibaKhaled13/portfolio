// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import React, { useEffect, useRef } from "react";
// // import Marquee from "react-fast-marquee";
// // import { DiCssTricks } from "react-icons/di";

// gsap.registerPlugin(ScrollTrigger);

// export default function SliderLoop() {
//   const leftRef = useRef(null);
//   const rightRef = useRef(null);

//   useEffect(() => {

//     gsap.to(leftRef.current, {
//       x: 300, 
//       scrollTrigger: {
//         trigger: leftRef.current, 
//         start: "top center",
//         end: "bottom top",
//         scrub: true,
//       },
//     });

//     // div تتحرك للشمال
//     gsap.to(rightRef.current, {
//       x: -300,
//       scrollTrigger: {
//         trigger: rightRef.current,
//         start: "top center",
//         end: "bottom top",
//         scrub: true,
//       },
//     });
//   }, []);
//   return (
//     <>
//       <section>
//         <div className="div"        ref={leftRef}
//         style={{
//           width: "100px",
//           height: "100px",
//           background: "blue",
//           position: "fixed",
//           top: "40%",
//           left: "10%"}}>
//             rfrfrfrfrfrf</div>
//         <div className="div"        ref={rightRef}
//         style={{
//           width: "100px",
//           height: "100px",
//           background: "green",
//           position: "fixed",
//           top: "60%",
//           right: "10%",
//         }}>rfrfrfrfrfrf</div>

//       </section>
//     </>
//     //  <Marquee className='text-transparent md:text-7xl text-6xl [-webkit-text-stroke:0.5px_#fff] [-webkit-text-fill-color:transparent]  '>
//     // My Projects < DiCssTricks className='text-neutral-400 mx-5 '  />
//     //  My Portfolio < DiCssTricks className='text-neutral-400 mx-5' />
//     // My Projects < DiCssTricks className='text-neutral-400 mx-5 '  />
//     //  My Portfolio < DiCssTricks className='text-neutral-400 mx-5' />

//     // </Marquee>
//   );
// }


import React from 'react'

export default function SliderLoop() {
  return (
    <div>SliderLoop</div>
  )
}
