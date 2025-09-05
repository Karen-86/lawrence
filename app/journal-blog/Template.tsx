"use client";

import React, { useState } from "react";
import Image from "next/image";
import localData from "@/localData";
import { ButtonDemo, Navbar, ActionCard, FollowUsSection } from "@/components/index";
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
              <Link href="/" className="link text-xs font-medium px-1 hover:underline">
                Home
              </Link>
              <div className="dot w-1 h-1 rounded-full bg-dark"></div>
              <div className="link text-xs font-medium px-1 pointer-events-none text-secondary-500">Journal</div>
            </div>
          </div>
        </Navbar>
        <ShowcaseSection />
      </header>
      <JournalSection />
      <hr className="border-line" />
      <FollowUsSection />
    </main>
  );
};

const ShowcaseSection = () => {
  const [inView1, setIsInView1] = useState(false);

  return (
    <div className=" flex-1  pb-[2rem]  flex flex-col items-center  bg-[rgb(252,252,252)]">
      <motion.div
        className={`flex flex-1 border hero-center  bg-cover w-full relative  py-[8rem] sm:py-[4rem] 4xl:py-[8rem]  ${
          inView1 ? "lazy-animate" : ""
        } `}
        viewport={{ amount: 0.3 }}
        onViewportEnter={() => setIsInView1(true)}
        data-lazy="fade"
      >
        <Image
          src={bespokeCoverImage}
          fill={true}
          alt="background image"
          className="absolute top-0 left-0 w-full h-full object-cover "
        />
        <div className="overlay absolute bg-[rgba(0,0,0,0.3)] sm:hidden top-0 left-0 w-full h-full"></div>
        <div className="container flex-1   relative flex gap-10 flex-col lg:flex-row items-center  justify-center ">
          <div className="showcase-content text-white text-center ">
            <div className="text-[0.625rem] sm:text-sm uppercase mb-[2rem]">blog</div>
            <h1 className="text-[2.188rem] leading-[1.1] sm:text-4xl max-w-[400px] sm:max-w-[500px]">News & Inspiration</h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const JournalSection = () => {
  const { actionCards } = useGlobalContext();
  const [inView1, setIsInView1] = useState(false);

  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? actionCards : actionCards.slice(0, 8);

  return (
    <section>
      <div className="container">
        <div className="lg:flex lg:gap-10">
          <h3 className="subtitle text-center lg:text-start 4xl:!mb-[5rem] min-w-[20%] 4xl:min-w-[17%]">The Journal</h3>
          <div className="flex-1">
            <div className="grid md:grid-cols-2 gap-[20px] xl:gap-[50px]  mb-[5rem]">

              {visibleCards.map((item: any, index: any) => {
                return <ActionCard key={index} {...item} />;
              })}
            </div>
            {!showAll && actionCards.length > 8 && (
              <div className="flex justify-center">
                <ButtonDemo
                  onClick={() => setShowAll(true)}
                  text={`View More (${actionCards.length - 8})`}
                  className=" border border-secondary-100 !min-w-[280px]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template;
