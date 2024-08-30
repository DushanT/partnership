"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function AboutUs({ className, ...other }) {
  return (
    <section
      id="about-us"
      className={twMerge("mb-[182px]", className)}
      {...other}
    >
      <h2
        className="text-h1 mb-7 font-heading uppercase"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        About us
      </h2>
      <div
        className="mb-12 border-y border-white px-3 py-5"
        data-aos="fade-right"
      >
        <p className="text-p-wide max-w-[538px]">
          Partnership is a pioneering Media Studio founded in New Zealand in
          2018. Our core expertise lies in content creation, creator relations,
          and daring creative endeavours.
        </p>
      </div>
      <Image
        alt=""
        src="/abstract.jpg"
        width="1440"
        height="212"
        className="mb-16 w-full"
        data-aos="fade  "
      />
      <hr className="pb-3" />
      <ul className="grid grid-cols-[20%_1fr_1fr]">
        <li className="px-9 py-2 pl-2" data-aos="fade-right">
          <h3 className="text-h3 mb-3 font-heading">Mission</h3>
          <p className="text-p max-w-[30ch]">
            Empowering creatives to nurture insight in a supportive environment
            while connecting positive ideas through community-building.
          </p>
        </li>
        <li
          className="border-l px-9 py-2"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h3 className="text-h3 mb-3 font-heading">Our vision</h3>
          <p className="text-p max-w-[30ch]">
            At Partnership, we envision a world where individuals inspire change
            through expressing themselves authentically and creatively.
          </p>
        </li>
        <li
          className="flex flex-col border-l px-9 py-2 pr-2"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <h3 className="text-h3 mb-auto font-heading">
            “He aha te mea nui o te ao? he tangata, he tangata, he tangata.”
          </h3>
          <p className="text-p">
            “What is the most important thing in the world? It is people, it is
            people, it is people.”
          </p>
        </li>
      </ul>
    </section>
  );
}
