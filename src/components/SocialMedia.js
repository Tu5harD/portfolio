import React from "react";
import Link from "next/link";
const SocialMedia = () => (
  <div className="app__social gap-3">
    <Link href={"https://github.com/Tu5harD"}>
      <img src="/github.png" className="ml-1 w-9 h-9" alt="" />
    </Link>
    <Link href={"https://www.linkedin.com/in/tushardukane/"}>
      <img src="/linkedin.png" className="ml-1 w-9 h-9" alt="" />
    </Link>
    <Link href={"https://wa.me/+917499833141"}>
      <img src="/whatsapp.png" alt="" className="ml-1 w-8 h-8" />
    </Link>
  </div>
);

export default SocialMedia;
