"use client";

import React, { useState } from "react";
import Image from "next/image";
import localData from "@/localData";
import { ButtonDemo, Navbar } from "@/components/index";
import Link from "next/link";
import { motion } from "framer-motion";
import { useGlobalContext } from "@/context";

const { followUsDecorativeCoverImage } = localData.images;

const Template = () => {
  return (
    <main className="gallery-page">
      <header className="hero">
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
      </header>
      <CategorySection />
      <FollowUsSection />
    </main>
  );
};

const CategorySample = ({ title = "", image = null, className = "", slug = "" }: any) => {
  const [inView1, setIsInView1] = useState(false);

  return (
    <motion.div
      className={`${className} category mb-[60px] sm:mb-[150px] 4xl:mb-[200px] ${inView1 ? "lazy-animate" : ""} `}
      viewport={{ amount: 0.3 }}
      onViewportEnter={() => setIsInView1(true)}
      data-lazy="fade"
    >
      <div className="category-content flex items-center justify-center  relative h-[400px] sm:h-[500px] 4xl:h-[610px] mb-[1.5rem] sm:mb-[2.5rem] 4xl:mb-[4.625rem]">
        <Image src={image} fill={true} alt="image" className="object-cover   absolute top-0 left-0 w-full h-full" />
        <div className="relative">
          <h3 className="display-2 mb-[2rem] 4xl:mb-[4rem] text-center text-white w-full">{title}</h3>
          <div className="flex justify-center">
            <Link href={`/gallery/${slug}`} className="">
              <ButtonDemo
                text="view All Photo"
                variant="outline"
                className=" border border-[rgba(255,255,255,0.5)] !text-white backdrop-blur-md hover:!bg-[rgba(217,217,217,0.15)]"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CategorySection = () => {
  const { categories } = useGlobalContext();
  return (
    <section className="xl:!pt-[7rem] 4xl:!pt-[9rem] !pb-0">
      <div className="container max-w-[1280px] 4xl:max-w-[calc(1380px+160px)]">
        <h6 className="subtitle text-center 4xl:!mb-20">gallery</h6>
        <h2 className="display-2 text-center mx-auto  mb-[3.75rem] sm:mb-[5rem]">Our Creations</h2>

        {categories.map((item: any, index: any) => {
          return <CategorySample key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

const FollowUsSection = () => {
  const [inView1, setIsInView1] = useState(false);

  return (
    <section className="follow-us">
      <div className="container">
        <h6 className="subtitle text-center">follow us on instagram</h6>
      </div>
      <motion.div
        className={`follow-us-cover relative min-h-[220px] sm:min-h-[400px] 4xl:min-h-[525px] mb-[2.5rem] sm:mb-[5rem] ${
          inView1 ? "lazy-animate" : ""
        }`}
        viewport={{ amount: 0.3 }}
        onViewportEnter={() => setIsInView1(true)}
        data-lazy="fade"
      >
        <Image
          src={followUsDecorativeCoverImage}
          fill={true}
          alt="image"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </motion.div>
      <div className="container flex justify-center">
        <a href="https://www.instagram.com/lawrenceandwinslade" target="_blank">
          <ButtonDemo text="Follow" color="black" className="" />
        </a>
      </div>
    </section>
  );
};

export default Template;
