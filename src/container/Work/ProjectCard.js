import React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "./motion";
import Image from "next/image";
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 5 * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className=" shadow-2xl shadow-blue-400">
          <div
            className="h-52 md:h-72 rounded-t-xl relative group "
            style={{
              background: `url(${imgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay items-center justify-center absolute -bottom-20 text-xs  sm:-bottom-28 left-0 w-full h-full  flex transition-all duration-500 gap-2">
              <Link
                href={previewUrl}
                className="cursor-pointer rounded-full border border-gray-900/5 bg-blue-500 uppercase font-medium  text-white opacity-100  p-2 hover:border-gray-900/10 hover:bg-yellow-500 hover:!opacity-100 group-hover:opacity-70 flex flex-row items-center gap-2 "
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#ffff"
                >
                  <path d="M12.02 0c6.614.011 11.98 5.383 11.98 12 0 6.623-5.376 12-12 12-6.623 0-12-5.377-12-12 0-6.617 5.367-11.989 11.981-12h.039zm3.694 16h-7.427c.639 4.266 2.242 7 3.713 7 1.472 0 3.075-2.734 3.714-7m6.535 0h-5.523c-.426 2.985-1.321 5.402-2.485 6.771 3.669-.76 6.671-3.35 8.008-6.771m-14.974 0h-5.524c1.338 3.421 4.34 6.011 8.009 6.771-1.164-1.369-2.059-3.786-2.485-6.771m-.123-7h-5.736c-.331 1.166-.741 3.389 0 6h5.736c-.188-1.814-.215-3.925 0-6m8.691 0h-7.685c-.195 1.8-.225 3.927 0 6h7.685c.196-1.811.224-3.93 0-6m6.742 0h-5.736c.062.592.308 3.019 0 6h5.736c.741-2.612.331-4.835 0-6m-12.825-7.771c-3.669.76-6.671 3.35-8.009 6.771h5.524c.426-2.985 1.321-5.403 2.485-6.771m5.954 6.771c-.639-4.266-2.242-7-3.714-7-1.471 0-3.074 2.734-3.713 7h7.427zm-1.473-6.771c1.164 1.368 2.059 3.786 2.485 6.771h5.523c-1.337-3.421-4.339-6.011-8.008-6.771" />
                </svg>
                Live
              </Link>
              <Link
                href={gitUrl}
                className="cursor-pointer rounded-full border border-gray-900/5 bg-black uppercase font-medium  text-white opacity-100  p-2 hover:border-gray-900/10 hover:bg-yellow-500 hover:!opacity-100 group-hover:opacity-70 flex flex-row items-center gap-2"
              >
                <Image
                  src="/assets/images/githubs.png"
                  className="w-6 h-6"
                  alt="githubs"
                  width={100}
                  height={100}
                />
                GitHub
              </Link>
            </div>
          </div>
          <div className="text-black rounded-b-xl  bg-white py-3 px-4">
            <h5 className="text-sm text-center mt-1 font-semibold">{title}</h5>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
