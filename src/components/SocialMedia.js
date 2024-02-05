import React from "react";
import Link from "next/link";
import Image from "next/image";
const SocialMedia = () => (
  <div className="app__social gap-3">
    <Link href={"https://github.com/Tu5harD"}>
      <Image
        src="/github.png"
        className="ml-1 w-9 h-9"
        alt=""
        width={50}
        height={50}
      />
    </Link>
    <Link href={"https://www.linkedin.com/in/tushardukane/"}>
      <Image
        src="/Linkedin.png"
        className="ml-1 w-9 h-9"
        alt=""
        width={50}
        height={50}
      />
    </Link>
    <Link href={"https://wa.me/+917499833141"}>
      <Image
        src="/whatsapp.png"
        alt=""
        className="ml-1 w-9 h-9"
        width={50}
        height={50}
      />
    </Link>
  </div>
);

export default SocialMedia;
