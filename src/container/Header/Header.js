"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { AppWrap, MotionWrap } from "@/wrapper";
import { FaDownload } from "react-icons/fa6";
import { BiSolidSelectMultiple } from "react-icons/bi";

const Header = () => (
  <div className="app__header app__flex">
    <div className="hero_section mt-14 ">
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span>Hello, I&apos;m</span>
              <br></br>
              <TypeAnimation
                className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                sequence={["Tushar Dukane", 1000, "Web Developer", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#dbdbdb] font-semibold text-base sm:text-lg mb-6 lg:text-xl uppercase italic">
              &ldquo;One of the best programming skills you can have is knowing
              when to walk away for a while.&ldquo;
            </p>

            <div className=" flex gap-2 flex-wrap">
              <Link
                href="/#contact"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500  text-white mt-3"
              >
                <span className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold hover:from-pink-500 hover:to-yellow-500 rounded-full px-5 py-2 flex items-center justify-center gap-2">
                  Hire Me <BiSolidSelectMultiple />
                </span>
              </Link>

              <Link
                href="/Resume.pdf"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold  hover:bg-slate-800 text-white mt-3"
              >
                <span className=" bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 flex flex-row gap-2 items-center justify-center">
                  Download CV <FaDownload />
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#000000] border-2 border-purple-500   w-[270px] h-[270px] lg:w-[400px] lg:h-[400px] relative">
              <img
                src="/hero-image.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px]"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  </div>
);

export default AppWrap(MotionWrap(Header), "home", "app__blackbg");
