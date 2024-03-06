"use client";
import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import Image from "next/image";
import { oad } from "../../../public/assets";

const skills = [
  {
    icon: "./assets/skills/react.png",
    name: "React JS",
    bgColor: "#CDF5FD",
  },
  {
    icon: "./assets/skills/next.png",
    name: "Next JS",
    bgColor: "#E3E7F1",
  },
  {
    icon: "./assets/skills/flutter.png",
    name: "Flutter",
    bgColor: "#CDF5FD",
  },
  {
    icon: "./assets/skills/redux.png",
    name: "Redux",
    bgColor: "#C6CFFF",
  },
  {
    icon: "./assets/skills/html.png",
    name: "Html 5",
    bgColor: "#FEA5AD",
  },
  {
    icon: "./assets/skills/css.png",
    name: "Css",
    bgColor: "#CDF5FD",
  },
  {
    icon: "./assets/skills/javascript.png",
    name: "Javascript",
    bgColor: "#f5f5f5",
  },
  {
    icon: "./assets/skills/tailwind.png",
    name: "Tailwind",
    bgColor: "#C6FCE5",
  },
  {
    icon: "./assets/skills/materialui.png",
    name: "Material UI",
    bgColor: "#CDF5FD",
  },
  {
    icon: "./assets/skills/express.png",
    name: "Express JS",
    bgColor: "#C6CFFF",
  },
  {
    icon: "./assets/skills/mongodb.png",
    name: "MongoDB",
    bgColor: "#f5f5f5",
  },
  {
    icon: "./assets/skills/mysql.png",
    name: "Mysql",
    bgColor: "#C6CFFF",
  },
  {
    icon: "./assets/skills/firebase.png",
    name: "FireBase",
    bgColor: "#C6FCE5",
  },
  {
    icon: "./assets/skills/docker.png",
    name: "Docker",
    bgColor: "#f5f5f5",
  },
  {
    icon: "./assets/skills/git.png",
    name: "Git",
    bgColor: "#FEA5AD",
  },
  {
    icon: "./assets/skills/postman.png",
    name: "Postman",
    bgColor: "#C6FCE5",
  },
];

const experiences = [
  {
    year: "2021",
    works: [
      {
        name: "WordPress developer",
        company: "Start my journey as a",
        experience: "WordPress developer",
      },
    ],
    img: oad,
  },
  {
    year: "2022",
    works: [
      {
        name: "React JS Developer",
        company: "Bubble Byte Ventures Ltd",
        experience: "Experience - 6 Months",
      },
    ],
    img: oad,
  },
  {
    year: "2023",
    works: [{ name: "Full Stack Web Developer", company: "Freelancer" }],
    img: oad,
  },
  {
    year: "2024",
    works: [
      {
        name: "Flutter developer",
        company: "Start my journey as a",
        experience: "Flutter developer",
      },
    ],
    img: oad,
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center">
        <div className=" text-black">Skills & Experiences </div>
        <div className=" flex items-center justify-center">
          <motion.img
            alt="Animating Image"
            className="w-12 h-12"
            src="/assets/images/superman.png"
            animate={{ y: [-20, 20, -20], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 5 }}
          />
        </div>
      </h2>

      <div className="app__skills-container ">
        <motion.div className="app__skills-list ">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="app__skills-item app__flex "
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <div
                className=" w-[30px] h-[30px] flex items-center justify-center"
                style={{ backgroundColor: skill.bgColor }}
              >
                <motion.img
                  src={skill.icon}
                  alt={skill.name}
                  // style={{ width: "30px", height: "30px" }}
                  className=" aspect-auto w-8 h-auto"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 7, repeat: Infinity }}
                />
              </div>
              {/* <div className="w-[24px] h-[24px] flex justify-center items-center">
                <img className=" aspect-auto w-6 h-auto" src={skill.icon} />
              </div> */}
              <p className="text-sm leading-4 text-center text-black  font-bold">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div key={experience.year} className="app__skills-exp-item">
              <div className="app__skills-exp-year flex items-center justify-center flex-col gap-4">
                <p className="bold-text ">{experience.year}</p>
                <Image
                  src={experience.img}
                  alt=""
                  className="w-5 h-14 "
                  width={10}
                  height={10}
                />
              </div>

              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <motion.div
                    key={work.name}
                    className="app__skills-exp-work"
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    data-tip
                    data-for={work.name}
                  >
                    <h4 className="bold-text text-black">{work.name}</h4>
                    <p className="text-sm leading-4 text-left">
                      {work.company}
                    </p>
                    <p className="text-sm leading-4 text-left">
                      {work.experience}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
