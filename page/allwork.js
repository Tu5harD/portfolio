"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "../src/container/Work/ProjectCard";
import ProjectTag from "../src/container/Work/ProjectTag";
import { AppWrap, MotionWrap } from "@/wrapper";
import { FaDesktop } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";

const projectsData = [
  {
    id: 1,
    title: "Cattle Weed Info Website",
    description: "Project 4 description",
    image: "./assets/images/work4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tu5harD/tushar-traders-frontend",
    previewUrl: "https://tushartraders.vercel.app/",
  },
  {
    id: 2,
    title: "E-commerce Mobile Store Website",
    description: "Authentication and CRUD operations",
    image: "./assets/images/work5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tu5harD/mobile-store-frontend",
    previewUrl: "https://tushar-dukane.vercel.app/",
  },

  {
    id: 3,
    title: "ToDo App",
    description: "Project 3 description",
    image: "./assets/images/work7.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Tu5harD/ToDO_App",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Ecoaware Website",
    description: "Project 3 description",
    image: "./assets/images/work3.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tu5harD/EarthPollution",
    previewUrl: "https://ecoaware.netlify.app",
  },
  {
    id: 5,
    title: "PreSchool Website",
    description: "PreSchool Website",
    image: "./assets/images/work2.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tu5harD/Nalanda_Preschool_Website",
    previewUrl: "https://nalandainfo.com/about",
  },
  {
    id: 6,
    title: "Cafeteria Website",
    description: "Logsabha Cafeteria Website",
    image: "./assets/images/work1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tu5harD/LogsabhaProject",
    previewUrl: "https://loksabhacafe.netlify.app/",
  },
];

const AllWork = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <div className="head-text text-black">Latest Projects</div>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
          tagIcon={<FaDesktop />}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
          tagIcon={<FaMobileScreen />}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-2 sm:gap-8 md:gap-12">
        {filteredProjects.slice(0, 3).map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default AppWrap(
  MotionWrap(AllWork, "app__works"),
  "work",
  "app__primarybg"
);
