"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { WelcomeAnimation } from "./IntroAnimation";
import { useScrollTo } from "./hooks/useScrollTo";
import { useMediaQuery } from "./hooks/media_query";
import { FaDownload } from "react-icons/fa6";
import { BiSolidSelectMultiple } from "react-icons/bi";
export function WelcomeSection() {
  const ref = useRef(null);
  const introRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollToEl } = useScrollTo();
  const isTabletUp = useMediaQuery("min-width: 768px");

  let [count, setCount] = useState(0);
  const [text] = useState([
    "build Flutter apps for Android/iOS",
    "convert design into modern UI",
    "build interactive UI using React",
    "develop websites using Next.js",
  ]);

  const onClick = (e) => scrollToEl(e);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1);

      if (count === 3) {
        setCount(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <LazyMotion features={domAnimation}>
      <section id="intro" className="section" ref={introRef}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr] gap-4 items-center">
          <div className="py-5 md:py-10">
            <h1
              tabIndex="0"
              ref={ref}
              className="text-3xl md:text-5xl xl:text-6xl font-bold"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <p>
                Hi, I&apos;m <mark>Tushar</mark> a <mark>passionate</mark>{" "}
                software developer.
              </p>
            </h1>

            <div className="mt-3 relative flex flex-col overflow-hidden">
              <p
                ref={ref}
                className="text-[17px] md:text-2xl transform-none opacity-100"
                style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                I
                <span
                  className="absolute flex flex-col transition-all duration-500  ease-in-expo"
                  style={{
                    top:
                      count === 0
                        ? "0"
                        : count === 1
                        ? "-100%"
                        : count === 2
                        ? "-200%"
                        : count === 3
                        ? "-300%"
                        : "0",
                    left: "13px",
                  }}
                >
                  {text.map((element) => (
                    <TextElement key={element} element={element} />
                  ))}
                </span>
              </p>
            </div>

            <p
              tabIndex="0"
              ref={ref}
              className="mt-3 mb-5 sm:mb-10 text-gray-700 text-lg sm:text-xl font-medium"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              Stick around to see some of my work.
            </p>
            <div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              {/* <Link
                href="#projects"
                onClick={onClick}
                tabIndex="0"
                className="btn"
                aria-label="Latest projects"
              >
                See my latest projects
              </Link> */}
              <div className=" flex gap-2 flex-wrap">
                <Link
                  href="/#contact"
                  className="px-1 inline-block py-1 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500  text-white mt-3"
                >
                  <span className=" bg-orange-500 rounded-full px-5 py-2 flex items-center justify-center gap-2">
                    Hire Me <BiSolidSelectMultiple />
                  </span>
                </Link>

                <Link
                  href="/Resume.pdf"
                  className=" inline-block  rounded-full text-white mt-4"
                >
                  <span className=" bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 flex flex-row gap-2 items-center justify-center">
                    Download CV <FaDownload />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <WelcomeAnimation />
          {/* {isTabletUp && <WelcomeAnimation />} */}
        </div>
      </section>
    </LazyMotion>
  );
}

function TextElement({ element }) {
  const firstWord = <b>{element.split(" ").at(0)}</b>;
  const restWords = element.split(" ").slice(1).join(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span
      tabIndex="0"
      ref={ref}
      className="text-[17px] md:text-2xl"
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {firstWord} {restWords}
    </span>
  );
}
