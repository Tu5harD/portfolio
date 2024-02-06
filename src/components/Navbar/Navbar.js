"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { close, logo, menu } from "../../../public/assets";

const navLinks = [
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 app__blackbg top-0 z-20 ${
        scrolled
          ? "bg-opacity-50 backdrop-filter backdrop-blur-lg "
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="#"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            alt="logo"
            className="w-7 h-7 object-contain"
            height={100}
            width={100}
          />
          <p className="text-black  text-[18px] font-extrabold cursor-pointer flex ">
            <span className=" text-black"> Tushar &nbsp;</span>
            <span className="sm:block hidden">
              {" "}
              <span className=" text-black ">|</span> Web Designer
            </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 text-black">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-purple-500" : "text-secondary"
              }  text-[17px] font-semibold cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <Link href={`#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[20px] h-[20px] object-contain"
            onClick={() => setToggle(!toggle)}
            width={30}
            height={30}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white shadow-lg shadow-blue-200 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-semibold cursor-pointer text-[16px] ${
                    active === nav.title ? "text-purple-500" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
