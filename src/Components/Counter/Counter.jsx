import React from "react";
import CountUp from "react-countup";

export default function Counter() {
  return (
    <>
      <section className="py-10  bg-[#161616]">
        <div className="mx-auto md:px-14 px-7 ">
          <div className=" flex justify-between flex-wrap md:gap-y-0 gap-y-6">
            <div className="md:w-[23%] w-full text-center bg-[#272727] shadow-[#1f1f1f] shadow-sm py-6">
              <h2 className="md:text-[70px]  text-7xl text-transparent [-webkit-text-stroke:2px_#c1c4b2] [-webkit-text-fill-color:transparent] leading-none">
                <CountUp
                  start={0}
                  end={15}
                  duration={3}
                  suffix="+"
                  enableScrollSpy
                    scrollSpyOnce
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h2>
              <p className="text-[#EB1C5F] mt-4 text-xl font-semibold ">Completed Projects</p>
            </div>
              <div className="md:w-[23%] w-full text-center bg-[#272727] shadow-[#1f1f1f] shadow-sm py-6">
              <h2 className="md:text-[70px]  text-7xl text-transparent [-webkit-text-stroke:2px_#c1c4b2] [-webkit-text-fill-color:transparent] leading-none">
                <CountUp
                  start={0}
                  end={20}
                  duration={3}
                  suffix="+"
                  enableScrollSpy
                  scrollSpyOnce
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h2>
              <p className="text-[#EB1C5F] mt-4 text-xl font-semibold ">Happy Clients</p>
            </div>
         <div className="md:w-[23%] w-full text-center bg-[#272727] shadow-[#1f1f1f] shadow-sm py-6">
              <h2 className="md:text-[70px]  text-7xl text-transparent [-webkit-text-stroke:2px_#c1c4b2] [-webkit-text-fill-color:transparent] leading-none">
                <CountUp
                  start={0}
                  end={1}
                  duration={3}
                  suffix=".5+"
                  enableScrollSpy
                  scrollSpyOnce
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h2>
              <p className="text-[#EB1C5F] mt-4 text-xl font-semibold ">Year of Experience</p>
            </div>
              <div className="md:w-[23%] w-full text-center bg-[#272727] shadow-[#1f1f1f] shadow-sm py-6">
              <h2 className="md:text-[70px]  text-7xl text-transparent [-webkit-text-stroke:2px_#c1c4b2] [-webkit-text-fill-color:transparent] leading-none">
                <CountUp
                  start={0}
                  end={100}
                  duration={3}
                  suffix="%"
                 enableScrollSpy
                 scrollSpyOnce
  
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h2>
              <p className="text-[#EB1C5F] mt-4 text-xl font-semibold ">
               Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}