"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/scissors_logo.png"
          alt="scissors-logo"
          width={74}
          height={29}
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:hidden flex flex-1 justify-end items-center">
        <Image
          src="/retro_bars.png"
          alt="menu"
          className="object-contain cursor-pointer opacity-90"
          width={40}
          height={40}
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-4 min-w-[140px] rounded-xl sidebar `}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {NAV_LINKS.map((link, index) => (
            <li
              key={link.key}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white
            ${index === NAV_LINKS.length - 1 ? "mr-0" : "mb-4"}`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
