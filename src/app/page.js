"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import Intro from "@/components/Intro";
import AboutUs from "@/components/AboutUs";
import ReachOut from "@/components/ReachOut";

export default function Home() {
  useEffect(() => {
    // AOS.init({
    //   duration: 1000,
    // });
  }, []);

  const main = useRef();

  useGSAP(
    () => {
      const logo = document.querySelector("#logo");
      gsap.to(logo, {
        opacity: 0,
        scale: 0.3,
        scrollTrigger: {
          trigger: logo,
          start: "top 30%",
          end: "top top",
          scrub: true,
          // markers: true,
        },
      });

      gsap.from("#about-us > *", {
        opacity: 0,
        y: 1000,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#about-us",
          pin: true,
          start: "top top",
          end: "+=1000",
          scrub: 1,
          // markers: true,
        },
      });

      gsap.from("#reach-out li", {
        y: 200,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#reach-out",
          start: "top center",
          end: "top 30%",
          scrub: 1,
          // markers: true,
        },
      });

      gsap.from("#reach-out h2", {
        scale: 0.7,
        opacity: 0.7,
        scrollTrigger: {
          trigger: "#reach-out h2",
          start: "top 90%",
          end: "center 90%",
          scrub: 1,
          // markers: true,
        },
      });
    },
    { scope: main },
  );
  return (
    <div ref={main}>
      <Intro />
      <AboutUs />
      <ReachOut />
    </div>
  );
}
