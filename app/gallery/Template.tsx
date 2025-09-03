"use client";

import React, { useState } from "react";
import Image from "next/image";
import localData from "@/localData";
import { ButtonDemo, Navbar, ActionCard } from "@/components/index";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useGlobalContext } from "@/context";

const { bespokeCoverImage, journalSample1Image, followUsDecorativeCoverImage } = localData.images;
const { articleSignIcon } = localData.svgs;

const Template = () => {
  return (
    <main className="fabrics-page">
      <header className="hero  min-h-[100vh] flex flex-col">
        <Navbar>
          <div className="breadcrumbs  border-y border-line py-4 sm:py-5">
            <div className="container flex items-center gap-2">
              <Link href="/" className="link text-xs font-medium px-1 underline">
                Home
              </Link>
              <div className="dot w-1 h-1 rounded-full bg-dark"></div>
              <div className="link text-xs font-medium px-1 pointer-events-none text-secondary-500">Gallery</div>
            </div>
          </div>
        </Navbar>
        <ShowcaseSection />
      </header>
    </main>
  );
};

const ShowcaseSection = () => {

  return (
    <div className=" ">
 
    </div>
  );
};
export default Template;