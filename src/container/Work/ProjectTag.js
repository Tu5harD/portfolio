import React from "react";

const ProjectTag = ({ name, onClick, isSelected, tagIcon }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} inline-block  w-full sm:w-fit rounded-full  hover:bg-slate-800 text-white mt-3cursor-pointer`}
      onClick={() => onClick(name)}
    >
      <span className=" flex flex-row items-center justify-center text-sm gap-2 bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
        {name} {tagIcon}
      </span>
    </button>
  );
};

export default ProjectTag;
