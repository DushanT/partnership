"use client";

import { twMerge } from "tailwind-merge";
import HeaderLink from "./HeaderLink";

export default function Header({ className, ...other }) {
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <header
      className={twMerge("flex items-center justify-between", className)}
      {...other}
    >
      <button onClick={handleClick} className="text-h4 text-bold font-heading">
        PARTNERSHIP®
      </button>
      <nav className="flex gap-10">
        <HeaderLink href="#about-us">About us</HeaderLink>
        <HeaderLink href="#reach-out">Reach out</HeaderLink>
      </nav>
    </header>
  );
}
