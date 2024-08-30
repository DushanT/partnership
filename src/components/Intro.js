"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Header({ className, ...other }) {
  return (
    <section
      id="intro"
      className={twMerge("relative h-[calc(100vh-2.5rem)]", className)}
      {...other}
    >
      <Image alt="" src="/intro-bg.jpg" fill style={{ objectFit: "cover" }} />
      <h1>
        <Image
          id="logo"
          alt="Partnership logo"
          src="/logo.svg"
          width="143"
          height="151"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <span className="sr-only">Partnership</span>
      </h1>
    </section>
  );
}
