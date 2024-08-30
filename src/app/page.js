"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Intro from "@/components/Intro";

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Intro />
      {/* <AboutUs /> */}
      {/* <ReachOut /> */}
    </>
  );
}
