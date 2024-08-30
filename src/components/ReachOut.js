"use client";

import { twMerge } from "tailwind-merge";

export default function ReachOut({ className, ...other }) {
  return (
    <section id="reach-out" className={twMerge("", className)} {...other}>
      <ul className="mb-14">
        <li className="border-b px-2 py-10">
          <h4 className="text-h5 mb-7">Email</h4>
          <a
            href="mailto:hi@partnership.io"
            className="text-link-lead font-heading uppercase underline"
          >
            hi@partnership.io
          </a>
        </li>
        <li className="border-b px-2 py-10">
          <h4 className="text-h5 mb-7">X</h4>
          <a
            href="@partnership"
            className="text-link-lead font-heading uppercase"
          >
            @partnership
          </a>
        </li>
        <li className="border-b px-2 py-10">
          <h4 className="text-h5 mb-7">Instagram</h4>
          <a
            href="@partnership"
            className="text-link-lead font-heading uppercase"
          >
            @partnership
          </a>
        </li>
      </ul>
      <h2 className="text-h2 mb-7 font-heading uppercase">Reach out</h2>
    </section>
  );
}
