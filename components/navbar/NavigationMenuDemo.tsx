"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import localData from "@/localData";

const { logo } = localData.svgs;

import { navLinks, dropdownLinksModules } from "./Navbar";

export function NavigationMenuDemo() {
  const pathname = usePathname();

  return (
    <NavigationMenu className={`hidden lg:flex navigation-menu pt-10 min-w-full justify-between`} delayDuration={0}>
      <div className="flex items-center">
        <a href="#/" className="px-2 flex  font-semibold text-sm underline decoration-[rgba(0,0,0,0.4)] hover:decoration-black ">
          Shop
        </a>
        <Link href={"#services"} className="font-medium px-2 block hover:text-secondary">
          <div className={pathname == "services" ? "text-success focus:text-success" : ""}>Services</div>
        </Link>
        <Link href={"#gallery"} className="font-medium px-2 block hover:text-secondary">
          <div className={pathname == "gallery" ? "text-success focus:text-success" : ""}>Gallery</div>
        </Link>
      </div>
      {/* <NavigationMenuList className="">
        {navLinks.map(({ href, title }, index) => {
          const activeLink = (href === "/" && pathname === "/") || (href !== "/" && pathname.startsWith(href));
          return (
            <NavigationMenuItem key={index}>
              <Link href={href} className="font-medium px-2 block hover:text-secondary">
                <div className={activeLink ? "text-success focus:text-success" : ""}>{title}</div>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList> */}
      {logo}

      <div className="flex items-center">
        <Link href={"#about"} className="font-medium px-2 block hover:text-secondary">
          <div className={pathname == "about" ? "text-success focus:text-success" : ""}>About</div>
        </Link>
        <Link href={"#contact"} className="font-medium px-2 block hover:text-secondary">
          <div className={pathname == "contact" ? "text-success focus:text-success" : ""}>Contact</div>
        </Link>
        <Link href="/booking" className="px-2 flex  font-semibold text-sm underline decoration-[rgba(0,0,0,0.4)] hover:decoration-black ">
          Book a fitting
        </Link>
      </div>
      {/* <div className="brand">LAWRENCE & WINSLADE</div> */}
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, href = "", ...props }, ref) => {
    const pathname = usePathname();

    const activeLink = (href === "/" && pathname === "/") || (href !== "/" && pathname.startsWith(href));

    return (
      <li>
        <Link ref={ref} href={href} {...props}>
          <div
            className={cn(
              "group select-none space-y-1 cursor-pointer rounded-md p-3 leading-none transition-colors",
              className,
              activeLink ? "text-primary focus:text-primary" : ""
            )}
          >
            <div
              className={` text-sm leading-none ${
                children
                  ? "font-medium text-gray-800 group-hover:text-primary"
                  : "font-normal text-gray-600 group-hover:text-primary"
              }`}
            >
              {title}
            </div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-primary">{children}</p>
            )}
          </div>
        </Link>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
