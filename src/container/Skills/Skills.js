"use client";
import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import Image from "next/image";
const skills = [
  { icon: "./html.png", name: "HTML5", bgColor: "#fecdd3" },
  { icon: "./css.png", name: "Css3", bgColor: "#bfdbfe" },
  { icon: "./sass.png", name: "Sass", bgColor: "#fecdd3" },
  { icon: "./mu5.png", name: "Material UI", bgColor: "#bfdbfe" },
  { icon: "./javascript.png", name: "Javascript", bgColor: "#fef3c7" },
  { icon: "./node.png", name: "Node", bgColor: "#dcfce7" },
  { icon: "./react.png", name: "React JS", bgColor: "#cffafe" },
  { icon: "./nextjs.png", name: "Next JS", bgColor: "#f1f5f9" },
  { icon: "./redux.png", name: "Redux", bgColor: "#ede9fe" },
  { icon: "./typescript.png", name: "Typescript", bgColor: "#bfdbfe" },
  { icon: "./figma.png", name: "Figma", bgColor: "#f3e8ff" },
  { icon: "./mongodb.png", name: "MongoDB", bgColor: "#d1fae5" },
  { icon: "./git.png", name: "Git", bgColor: "#fee2e2" },
  { icon: "./github.png", name: "Git Hub", bgColor: "#f5f5f5" },
  { icon: "./cpp.png", name: "CPP", bgColor: "#bfdbfe" },
  { icon: "./python.png", name: "Python", bgColor: "#e0f2fe" },

  // Repeat the sample data for brevity
];

const experiences = [
  {
    year: "2022",
    works: [
      {
        name: "React JS Developer",
        company: "Bubble Byte Ventures Ltd",
        experience: "Experience - 6 Months",
      },
    ],
    img: "/oad.png",
  },
  {
    year: "2023",
    works: [
      {
        name: "Web Developer",
        company: "Google Developer Student Clubs",
        experience: "Experience - Present",
      },
    ],
    img: "/oad.png",
  },
  {
    year: "2023",
    works: [{ name: "Full Stack Web Developer", company: "Freelancer" }],
    img: "/oad.png",
  },
  {
    year: "2024",
    works: [
      {
        name: "Full Stack Web Developer",
        company: "Bharat Intern",
        experience: "Experience - Present",
      },
    ],
    img: "/oad.png",
  },
  // Repeat the sample data for brevity
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center">
        <div className=" text-black">Skills & Experiences </div>
        <div className=" flex items-center justify-center">
          {/* <img className="w-12 h-12" src="/superman.png" alt="" /> */}
          <motion.img
            alt="Animating Image"
            className="w-12 h-12"
            src="/superman.png"
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
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                {/* <img src={skill.icon} alt={skill.name} /> */}
                <motion.img
                  src={skill.icon}
                  alt={skill.name}
                  // style={{ width: "200px", height: "200px" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 7, repeat: Infinity }}
                />
              </div>
              <p className="p-text text-black  font-bold">{skill.name}</p>
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
                  className="w-6 h-14 "
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
                    <p className="p-text">{work.company}</p>
                    <p className="p-text">{work.experience}</p>
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
