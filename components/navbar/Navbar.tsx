"use client";

import React from "react";
import localData from "@/localData";
import { ButtonDemo } from "@/components/index.js";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { SidebarNavigationMenuDemo } from "./SidebarNavigationMenuDemo";

const { logoSm } = localData.svgs;

export const navLinks = [
  { title: "Services", href: "#services" },
  { title: "Gallery", href: "#featured-work" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

export const dropdownLinksModules: { title: string; href: string; description: string }[] = [
  {
    title: "item 1",
    href: "/modules/item-1",
    description: "",
  },
  {
    title: "item 2",
    href: "/modules/item-2",
    description: "",
  },
  {
    title: "item 3",
    href: "/modules/item-3",
    description: "",
  },
];

export default function Navbar() {
  return (
    <nav className="navbar  pt-8 lg:pt-10">
      <div className="container ">
        <div className="top-panel flex items-center justify-center xl:justify-start  gap-7 absolute top-0 left-0 bg-success w-full rounded-bl-[30px] rounded-br-[30px] px-[10px] py-[10px] ">
          <p className="xl:ml-[15rem] hidden md:block text-white text-xs font-normal">
            Visit our London showroom for expert tailoring and fabric selection
          </p>
          <a
            href="#/"
            className="px-2 text-white font-medium text-xs sm:text-sm underline decoration-[rgba(255,255,255,0.6)] hover:decoration-white "
          >
            Book your Appointment
          </a>
        </div>

        <div className="flex flex-wrap items-center w-full justify-between gap-y-2 gap-x-5  py-4 ">
          <div className="left-block flex items-center gap-1 sm:gap-2">
            <a
              href="#/"
              className="link text-[0.688rem] sm:text-xs font-medium underline px-1 decoration-[rgba(45,45,45,1)] hover:decoration-dark"
            >
              +44 7701049192
            </a>
            <div className="dot w-1 h-1 rounded-full bg-dark"></div>
            <a
              href="#/"
              className="link text-[0.688rem] sm:text-xs font-medium underline px-1 decoration-[rgba(45,45,45,1)] hover:decoration-dark"
            >
              Email
            </a>
            <div className="dot w-1 h-1 rounded-full bg-dark"></div>
            <a
              href="#/"
              className="link text-[0.688rem] sm:text-xs font-medium underline px-1 decoration-[rgba(45,45,45,1)] hover:decoration-dark"
            >
              Inst
            </a>
          </div>

          <div className="left-block items-center gap-2 hidden md:flex">
            <div className="link text-xs font-medium px-1">Fabrics</div>
            <div className="dot w-1 h-1 rounded-full bg-dark"></div>
            <div className="link text-xs font-medium px-1">Pricing</div>
            <div className="dot w-1 h-1 rounded-full bg-dark"></div>
            <div className="link text-xs font-medium px-1">How it Works</div>
            <div className="dot w-1 h-1 rounded-full bg-dark"></div>
            <div className="link text-xs font-medium px-1">Weddings</div>
          </div>

          <a
            href="#/"
            className="px-2 flex md:hidden font-medium text-xs sm:text-sm underline decoration-[rgba(0,0,0,0.4)] hover:decoration-black "
          >
            Book a Fitting
          </a>
        </div>
      </div>
      <hr className="border-secondary-100" />
      <div className="container">
        <NavigationMenuDemo />

        <div className="flex items-center justify-between gap-3 lg:hidden pt-2">
          {logoSm}
          <SidebarNavigationMenuDemo />
        </div>
      </div>
    </nav>
  );
}
