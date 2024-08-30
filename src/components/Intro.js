"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Header({ className, ...other }) {
  return (
    <section
      className={twMerge("relative mb-[183px]", className)}
      {...other}
      data-aos="zoom-in"
    >
      <Image
        alt=""
        src="/intro-bg.jpg"
        width="1440"
        height="719"
        className="w-full"
      />
      <h1>
        <Image
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
