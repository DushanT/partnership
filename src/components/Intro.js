"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Header({ className, ...other }) {
  return (
    <div
      className={twMerge("", className)}
      {...other}
    >
      <Image
        alt=""
        src="/intro-bg.svg"
        width="20"
        height="20"
      />
      <Image
        alt="Partnership logo"
        src="/logo.svg"
        width="20"
        height="20"
      />
    </div>
  );
}
