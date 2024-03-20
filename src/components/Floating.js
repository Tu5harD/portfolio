import React from "react";
import Image from "next/image";
import Link from "next/link";
import { github, linkedin, whatsapp } from "../../public/assets";

const Floating = () => {
  return (
    <div className="fixed bottom-[20%] left-0 z-50 text-black sm:hidden bg-orange-100 rounded-lg shadow-lg -ml-1 shadow-blue-200">
      <div className=" flex flex-col  items-center justify-center">
        <Link href={"https://github.com/Tu5harD"} className=" bg-[#ffffff]">
          <Image
            src={github}
            className="ml-1 w-8 h-8 hover:origin-center hover:rotate-45 z-50 "
            alt=""
            width={40}
            height={40}
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/tushardukane/"}
          className=" bg-[#0077B5]"
        >
          <Image
            src={linkedin}
            className="ml-1 w-8 h-8 hover:origin-center hover:rotate-45"
            alt=""
            width={40}
            height={40}
          />
        </Link>
        <Link href={"https://wa.me/+917499833141"} className=" bg-[#25D366]">
          <Image
            src={whatsapp}
            alt=""
            className="ml-1 w-8 h-8 hover:origin-center hover:rotate-45"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
};

export default Floating;
