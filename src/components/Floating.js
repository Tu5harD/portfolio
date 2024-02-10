import React from "react";
import Image from "next/image";
import Link from "next/link";
import { github, linkedin, whatsapp } from "../../public/assets";

const Floating = () => {
  return (
    <div className="fixed bottom-[20%] left-0 z-50 text-black sm:hidden bg-orange-100 px-2 py-4 rounded-lg shadow-lg -ml-1 shadow-blue-200">
      <div className=" flex flex-col gap-2 items-center justify-center">
        <Link href={"https://github.com/Tu5harD"}>
          <Image
            src={github}
            className="ml-1 w-8 h-8 hover:origin-center hover:rotate-45"
            alt=""
            width={40}
            height={40}
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/tushardukane/"}>
          <Image
            src={linkedin}
            className="ml-1 w-8 h-8 hover:origin-center hover:rotate-45"
            alt=""
            width={40}
            height={40}
          />
        </Link>
        <Link href={"https://wa.me/+917499833141"}>
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
