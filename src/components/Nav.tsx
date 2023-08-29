"use client";

import { useState } from "react";

import { headerLogo } from "../assets/images/index.js";
import { hamburger } from "../assets/icons/index.js";
import { navLinks } from "../constants.ts";

export default function Nav(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="max-container flex justify-between items-center">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:block hidden relative z-20">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            role="button"
            className="cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          />
          <ul
            className={`${
              open ? "translate-x-0" : "translate-x-[200px]"
            } transition-transform absolute z-20 top-8 right-0 flex flex-col justify-center gap-6 w-[100px] bg-white`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
