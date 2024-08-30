"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Intro from "@/components/Intro";
import AboutUs from "@/components/AboutUs";
import ReachOut from "@/components/ReachOut";

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Intro />
      <AboutUs />
      <ReachOut />
    </>
  );
}
