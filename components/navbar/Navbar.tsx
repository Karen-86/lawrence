"use client";

import React, { useState, useRef, useEffect } from "react";
import localData from "@/localData";
import { ButtonDemo } from "@/components/index.js";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { SidebarNavigationMenuDemo } from "./SidebarNavigationMenuDemo";
import { Button } from "../ui/button";
import { useGlobalContext } from "@/context";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import Link from "next/link";
import { usePathname } from "next/navigation";

const { logoSm, barsIcon } = localData.svgs;

export const navLinks = [
  { title: "Shop", href: "/shop" },
  { title: "Services", href: "/#services" },
  { title: "Gallery", href: "/gallery" },
  { title: "About", href: "/about" },
  { title: "Book your Appointment", href: "/contact" },
  // { title: "Book a Fitting", href: "/booking" },
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

export default function Navbar({ children = null }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [height, setHeight] = useState("");
  const navbar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navbar.current) return;
    setHeight(navbar.current.getBoundingClientRect().height.toString() + "px");
  }, [navbar]);

  return (
    <nav className="navbar relative z-3 pt-8  lg:pt-10  " ref={navbar}>
      <div className="top-panel flex items-center justify-center xl:justify-start  gap-7 absolute top-0 z-3 left-0 bg-success w-full rounded-bl-[30px] rounded-br-[30px] px-[10px] py-[10px] ">
        <p className="xl:ml-[15rem] hidden md:block text-white text-xs font-normal">
          Visit our London showroom for expert tailoring and fabric selection
        </p>
        <Link
          href="/booking"
          className="px-2 text-white font-medium text-xs sm:text-sm underline decoration-[rgba(255,255,255,0.6)] hover:decoration-white "
        >
          Book your Appointment
        </Link>
      </div>
      <div className=" relative z-2 bg-white">
        <div className="container">
          <div className="flex flex-wrap items-center w-full justify-between gap-y-2 gap-x-2  py-4 ">
            <div className="left-block flex items-center gap-1 sm:gap-2">
              <a
                target="_blank"
                href="tel:+44 7701049192"
                className="link text-[0.688rem] sm:text-xs font-medium px-1 hover:underline"
              >
                +44 7701049192
              </a>
              <div className="dot w-1 h-1 rounded-full bg-dark"></div>
              <a
                target="_blank"
                href="mailto:admin@lawrenceandwinslade.com"
                className="link text-[0.688rem] sm:text-xs font-medium px-1 hover:underline"
              >
                Email
              </a>
              <div className="dot w-1 h-1 rounded-full bg-dark"></div>
              <a
                href="https://www.instagram.com/lawrenceandwinslade"
                target="_blank"
                className="link text-[0.688rem] sm:text-xs font-medium px-1 hover:underline"
              >
                Inst
              </a>
            </div>

            <div className="left-block items-center gap-2 hidden md:flex">
              <Link href="/fabrics" className="link text-xs font-medium px-1 hover:underline">
                Fabrics
              </Link>
              <div className="dot w-1 h-1 rounded-full bg-dark"></div>
              <Link href="/pricing" className="link text-xs font-medium px-1 hover:underline">
                Pricing
              </Link>
              <div className="dot w-1 h-1 rounded-full bg-dark"></div>
              <Link href="/#bespoke-process" className="link text-xs font-medium px-1 hover:underline">
                How it Works
              </Link>
            
              <div className="dot w-1 h-1 rounded-full bg-dark"></div>
              <Link href="/journal-blog" className="link text-xs font-medium px-1 hover:underline">
                Inspiration
              </Link>
            </div>

            <Link
              href="/booking"
              className="px-2 flex md:hidden font-medium text-xs sm:text-sm underline decoration-[rgba(0,0,0,0.4)] hover:decoration-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Fitting
            </Link>
          </div>
        </div>
        <hr className="border-line" />

        <div className="container">
          <NavigationMenuDemo />
          <div className="flex items-center justify-between gap-3 lg:hidden pt-4 pb-4 lg:pb-0 lg:pt-2 ">
            <a href="/">{logoSm}</a>
            {/* <SidebarNavigationMenuDemo /> */}

            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden  w-15 p-2 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {/* <Menu /> */}
              {!isMenuOpen ? barsIcon : <span className="text-destructive text-xs font-medium">CLOSE</span>}
            </Button>
          </div>
        </div>
      </div>

      <Menu isMenuOpen={isMenuOpen} height={height} />

      {children}
    </nav>
  );
}

const Menu = ({ isMenuOpen = false, height = "" }) => {
  useLockBodyScroll(isMenuOpen);
  const pathname = usePathname();

  return (
    <div className="relative z-1">
      <div
        className={`menu flex flex-col  bg-white absolute top-[100%] z-2 w-full left-0 h-[calc(100vh-149px)] translate-y-[-100%] duration-300 ${
          isMenuOpen ? "!translate-y-0" : ""
        }`}
      >
        <div className="flex-1">
          <div className="menu-header">
            {/* <Linkink
              href='/'
              className="px-2 flex justify-center hover:bg-neutral-50 py-3 border-y border-line font-semibold text-sm underline decoration-[rgba(0,0,0,0.4)] hover:decoration-black "
            >
              Shop
            </Linkink> */}
            {navLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="font-medium px-2 flex justify-center hover:bg-neutral-50 py-3 border-b border-line"
                >
                  <div className={pathname == item.href ? "text-secondary-400 focus:text-success" : ""}>{item.title}</div>
                </Link>
              );
            })}
            {/* <Link
              href={"/services"}
              className="font-medium px-2 flex justify-center hover:bg-neutral-50 py-3 border-b border-line"
            >
              <div className={pathname == "services" ? "text-success focus:text-success" : ""}>Services</div>
            </Link>
            <Link
              href={"/gallery"}
              className="font-medium px-2 flex justify-center hover:bg-neutral-50 py-3 border-b border-line"
            >
              <div className={pathname == "gallery" ? "text-success focus:text-success" : ""}>Gallery</div>
            </Link>
            <Link href={"/about"} className="font-medium px-2 flex justify-center hover:bg-neutral-50 py-3 border-b border-line">
              <div className={pathname == "about" ? "!text-red-500 focus:text-success" : ""}>About</div>
            </Link>
            <Link
              href={"/contact"}
              className="font-medium px-2 flex justify-center hover:bg-neutral-50 py-3 border-b border-line"
            >
              <div className={pathname == "contact" ? "text-success focus:text-success" : ""}>Contact</div>
            </Link> */}
          </div>

          <div className="menu-body py-4 flex justify-center gap-x-10 flex-wrap  mx-auto">
            <Link
              href="/fabrics"
              className="link text-[0.688rem] sm:text-xs flex justify-center py-3 font-medium px-1 hover:underline"
            >
              Fabrics
            </Link>
            <Link
              href="/pricing"
              className="link text-[0.688rem] sm:text-xs flex justify-center py-3 font-medium px-1 hover:underline"
            >
              Pricing
            </Link>
            <Link
              href="/#bespoke-process"
              className="link text-[0.688rem] sm:text-xs flex justify-center py-3 font-medium px-1 hover:underline"
            >
              How it Works
            </Link>
        
            <Link
              href="/journal-blog"
              className="link text-[0.688rem] sm:text-xs flex justify-center py-3 font-medium px-1 hover:underline"
            >
              Inspiration
            </Link>
           
          </div>
        </div>

        <div className="container">
          <div className="menu-footer border-t border-line flex py-5">
            <div className="flex gap-10 flex-1">
              <Link href="/privacy-policy" className="text-xs  hover:text-black duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="text-xs  hover:text-black duration-300">
                Terms of Use
              </Link>
            </div>

            <Link href="/cookies" className="text-xs  hover:text-black duration-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
