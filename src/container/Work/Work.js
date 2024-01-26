// "use client";
// import React, { useState } from "react";
// import { AiFillEye, AiFillGithub } from "react-icons/ai";
// import { motion } from "framer-motion";

// import { AppWrap, MotionWrap } from "../../wrapper";
// import "./Work.scss";
// const filterWork = [
//   {
//     imgUrl: "./work1.png",
//     name: "Logsabha Cafeteria Website",
//     projectLink: "https://loksabhacafe.netlify.app/",
//     codeLink: "https://github.com/Tu5harD/LogsabhaProject",
//     title: "Logsabha Cafeteria",
//     description: "",
//     tag: "Cafeteria Website",
//   },
//   {
//     imgUrl: "./work2.jpeg",
//     name: "Nalanda Pre-Schoolre",
//     projectLink: "https://nalandainfo.com/about",
//     codeLink: "./",
//     title: "Nalanda Pre-School",
//     description: "",
//     tag: "Pre-School Website",
//   },
//   {
//     imgUrl: "./work3.jpeg",
//     name: "Ecoware Pollution",
//     projectLink: "https://ecoaware.netlify.app/",
//     codeLink: "https://github.com/Tu5harD/EarthPollution",
//     title: "Ecoaware Polltion",
//     description: "",
//     tag: "Ecoaware Website",
//   },
//   {
//     imgUrl: "./work4.jpeg",
//     name: "Cattle Feeds Website",
//     projectLink: "https://tushartraders.netlify.app/",
//     codeLink: "https://github.com/Tu5harD/ReactJS-Website-Tushar-Traders",
//     title: "Tushar Traders",
//     description: "",
//     tag: "Cattle Feeds Website",
//   },
//   {
//     imgUrl: "./work5.png",
//     name: "Cattle Feeds Website",
//     projectLink: "https://tushar-dukane.vercel.app/",
//     codeLink: "https://github.com/Tu5harD/tushar-traders-frontend",
//     title: "Online Mobile Store",
//     description: "",
//     tag: "E-Commerce Website",
//   },
// ];
// const Work = () => {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

//   // useEffect(() => {
//   //   const query = '*[_type == "works"]';

//   //   client.fetch(query).then((data) => {
//   //     setWorks(data);
//   //     setFilterWork(data);
//   //   });
//   // }, []);

//   const handleWorkFilter = (item) => {
//     setActiveFilter(item);
//     setAnimateCard([{ y: 100, opacity: 0 }]);

//     setTimeout(() => {
//       setAnimateCard([{ y: 0, opacity: 1 }]);

//       if (item === "All") {
//         setFilterWork(works);
//       } else {
//         setFilterWork(works.filter((work) => work.tags.includes(item)));
//       }
//     }, 500);
//   };

//   return (
//     <>
//       <h2 className="head-text">
//         My Creative <span>Portfolio</span> Section
//       </h2>

//       {/* <div className="app__work-filter">
//         {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
//           (item, index) => (
//             <div
//               key={index}
//               onClick={() => handleWorkFilter(item)}
//               className={`app__work-filter-item app__flex p-text ${
//                 activeFilter === item ? "item-active" : ""
//               }`}
//             >
//               {item}
//             </div>
//           )
//         )}
//       </div> */}

//       <motion.div
//         animate={animateCard}
//         transition={{ duration: 0.5, delayChildren: 0.5 }}
//         className="app__work-portfolio"
//       >
//         {filterWork.map((work, index) => (
//           <div
//             className="app__work-item app__flex hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
//             key={index}
//           >
//             <div className="app__work-img app__flex">
//               <img src={work.imgUrl} alt={work.name} />

//               <motion.div
//                 whileHover={{ opacity: [0, 1] }}
//                 transition={{
//                   duration: 0.25,
//                   ease: "easeInOut",
//                   staggerChildren: 0.5,
//                 }}
//                 className="app__work-hover app__flex"
//               >
//                 <a href={work.projectLink} target="_blank" rel="noreferrer">
//                   <motion.div
//                     whileInView={{ scale: [0, 1] }}
//                     whileHover={{ scale: [1, 0.9] }}
//                     transition={{ duration: 0.25 }}
//                     className="app__flex"
//                   >
//                     <AiFillEye />
//                   </motion.div>
//                 </a>
//                 <a href={work.codeLink} target="_blank" rel="noreferrer">
//                   <motion.div
//                     whileInView={{ scale: [0, 1] }}
//                     whileHover={{ scale: [1, 0.9] }}
//                     transition={{ duration: 0.25 }}
//                     className="app__flex"
//                   >
//                     <AiFillGithub />
//                   </motion.div>
//                 </a>
//               </motion.div>
//             </div>

//             <div className="app__work-content app__flex">
//               <h4 className="bold-text text-black">{work.title}</h4>
//               <p className="p-text text-black" style={{ marginTop: 10 }}>
//                 {work.description}
//               </p>

//               <div className="app__work-tag app__flex bg-gray-200">
//                 <p className="p-text text-black">{work.tag}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </>
//   );
// };

// export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__blackbg");

"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { AppWrap, MotionWrap } from "@/wrapper";
import { FaDesktop } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";

const projectsData = [
  {
    id: 1,
    title: "Cafeteria Website",
    description: "Logsabha Cafeteria Website",
    image: "./work1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tu5harD/LogsabhaProject",
    previewUrl: "https://loksabhacafe.netlify.app/",
  },

  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "./work2.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "./work3.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "./work4.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "./work5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const Work = () => {
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
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

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__blackbg");
