import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignRight } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import { GrClose } from "react-icons/gr";
import logo from "../../assets/logo-2.png";
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => setOpenMenu(false);
  return (
    <>
      <header>
        <nav className="bg-[#080808] md:block  hidden text-[#CFD1BC] fixed  z-20 top-3 start-80 end-80 rounded-full px-7">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 ">
            <Link to="/">
             
              <img src={logo} alt="Logo" width={70} />
            </Link>

            <div className="hidden w-full md:block  md:w-auto" id="navbar-default">
              <ul className=" flex flex-col text-sm font-bold p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                <li>
                  <Link
                    to=""
                    className=" block hover:text-[#EB1C5F] duration-300 transition-all "
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/#about"
                    className="  block hover:text-[#EB1C5F] duration-300 transition-all "
                    aria-current="page"
                  >
                    About
                  </HashLink>
                </li>
                       <li>
                  <HashLink
                    smooth
                    to="/#services"
                    className=" block hover:text-[#EB1C5F] duration-300 transition-all  "
                  >
                    Services
                  </HashLink>
                </li>
                <li>
                  <Link to="/work" className=" block hover:text-[#EB1C5F] duration-300 transition-all ">
                    Work
                  </Link>
                </li>
         

                <li>
                        <HashLink
                    smooth
                    to="/#contact"
                    className=" block hover:text-[#EB1C5F] duration-300 transition-all  "
                  >
                   Contact
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className="bg-[#080808] md:hidden  text-[#CFD1BC] fixed z-20 top-3 start-3 end-3 rounded-full md:px-7 px-4">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src={logo} alt="Logo" width={70} />
            </Link>

            <FiAlignRight
              onClick={() => setOpenMenu(true)}
              className="p-2 rounded-full text-5xl text-[#CFD1BC] bg-[#eb1c5f] cursor-pointer"
            />
          </div>
          <div
            className={`
    fixed inset-0 bg-[#080808] transition-all duration-500 
    ${
      openMenu
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-x-10 pointer-events-none"
    }
  `}
          >
            <div className="p-6">
              <GrClose
                onClick={closeMenu}
                className="text-4xl ms-auto cursor-pointer transition-all duration-300 hover:rotate-180 hover:text-[#eb1c5f]"
              />
            </div>

            <ul className="text-2xl font-bold pt-5 text-center">
              <li>
                <Link onClick={closeMenu} to="/" className="my-7 block hover:text-[#EB1C5F] duration-300 transition-all">
                  Home
                </Link>
              </li>

              <li>
                <HashLink
                  smooth
                  onClick={closeMenu}
                  to="/#about"
                  className="my-7 block hover:text-[#EB1C5F] duration-300 transition-all"
                >
                  About
                </HashLink>
              </li>

              <li>
                <HashLink
                  smooth
                  onClick={closeMenu}
                  to="/#services"
                  className="my-7 block hover:text-[#EB1C5F] duration-300 transition-all"
                >
                  Services
                </HashLink>
              </li>

              <li>
                <Link onClick={closeMenu} to="/work" className="my-7 block hover:text-[#EB1C5F] duration-300 transition-all">
                  Work
                </Link>
              </li>

              <li>
                <HashLink
                  smooth
                  onClick={closeMenu}
                  to="/#contact"
                  className="my-7 block hover:text-[#EB1C5F] duration-300 transition-all"
                >
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
