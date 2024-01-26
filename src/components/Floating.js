import React from "react";
import Image from "next/image";
import Link from "next/link";
Link;
const Floating = () => {
  return (
    <div className="fixed bottom-[30%] left-0 z-50 text-black sm:hidden bg-white px-2 py-4 rounded-lg shadow-lg -ml-2 ">
      <div className=" flex flex-col gap-2 items-center justify-center">
        <Link href={"https://github.com/Tu5harD"}>
          <Image
            src="/github.png"
            className="ml-1 w-9 h-9 hover:origin-center hover:rotate-45"
            alt=""
            width={40}
            height={40}
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/tushardukane/"}>
          <Image
            src="/linkedin.png"
            className="ml-1 w-9 h-9 hover:origin-center hover:rotate-45"
            alt=""
            width={40}
            height={40}
          />
        </Link>
        <Link href={"https://wa.me/+917499833141"}>
          <Image
            src="/whatsapp.png"
            alt=""
            className="ml-1 w-9 h-9 hover:origin-center hover:rotate-45"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
};

export default Floating;
