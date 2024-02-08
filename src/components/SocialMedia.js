import React from "react";
import Link from "next/link";
import Image from "next/image";
import { github, linkedin, whatsapp } from "../../public/assets";

const SocialMedia = () => (
  <div className="app__social gap-3">
    <Link href={"https://github.com/Tu5harD"}>
      <Image
        src={github}
        className="ml-1 w-8 h-8"
        alt="github"
        width={50}
        height={50}
      />
    </Link>
    <Link href={"https://www.linkedin.com/in/tushardukane/"}>
      <Image
        src={linkedin}
        className="ml-1 w-8 h-8"
        alt="linkedin"
        width={50}
        height={50}
      />
    </Link>
    <Link href={"https://wa.me/+917499833141"}>
      <Image
        src={whatsapp}
        alt="whatsapp"
        className="ml-1 w-8 h-8"
        width={50}
        height={50}
      />
    </Link>
  </div>
);

export default SocialMedia;
