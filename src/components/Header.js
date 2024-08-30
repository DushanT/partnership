"use client";

import Image from "next/image";
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
      className={twMerge(" flex items-center justify-between ", className)}
      {...other}
    >
      <button onClick={handleClick}>
        <div className="logo" />
      </button>
      <nav className="flex gap-7 lowercase">
        <HeaderLink href="#about" className="hidden md:flex">
          About us
        </HeaderLink>
        <HeaderLink href="#about" className="hidden md:flex">
          Reach out
        </HeaderLink>
      </nav>
    </header>
  );
}
