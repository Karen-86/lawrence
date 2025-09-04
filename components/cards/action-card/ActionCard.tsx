"use client";

import React, { useState } from "react";
import Image from "next/image";
import localData from "@/localData";
import { TooltipDemo, ButtonDemo } from "@/components/index";
import { motion } from "framer-motion";
import Link from "next/link";

const { shareIcon, heartIcon, solidHeartIcon } = localData.svgs;

const ActionCard = ({ image = "", title = "", suptitle = "", slug='', isFavourite = false, isBarHidden = false }) => {
  const [isFavouriteCard, setIsFavouriteCard] = useState(isFavourite);
  const [inView1, setIsInView1] = useState(false);

  return (
    <motion.div
      className={`group card image-wrapper relative w-full h-0 pt-[135%] overflow-hidden ${inView1 ? "lazy-animate" : ""} `}
      viewport={{ amount: 0.3 }}
      onViewportEnter={() => setIsInView1(true)}
      data-lazy="fade"
    >
      <div className={`action-bar absolute top-0 right-0 m-[20px] z-2 flex gap-3 items-center ${isBarHidden ? 'hidden': ''}`}>
        <div className="col bg-white  flex items-center justify-center">
          <TooltipDemo
            contentClassName="bg-white text-dark shadow-[-1px_-1px_3px_rgba(17,17,17,0.1)] "
            trigger={<div className="w-[40px] h-[40px]  p-[10px] cursor-pointer">{shareIcon}</div>}
            content={<div className="">Share</div>}
          />
        </div>
        <div className="col bg-white  flex items-center justify-center">
          <TooltipDemo
            contentClassName="bg-white text-dark shadow-[-1px_-1px_3px_rgba(17,17,17,0.1)]"
            trigger={
              <div
                className={`w-[40px] h-[40px] ${isFavouriteCard ? "p-[7px]" : "p-[10px]"} cursor-pointer ${
                  isFavouriteCard ? "text-red-600" : ""
                }`}
                onClick={() => setIsFavouriteCard(!isFavouriteCard)}
              >
                {isFavouriteCard ? solidHeartIcon : heartIcon}
              </div>
            }
            content={<div className="">{!isFavouriteCard ? "Add Favourite" : "Favourite"}</div>}
          />
        </div>
        <div className="col bg-white text-xs font-medium">
          <div className="flex items-center gap-3 h-[40px]  p-2">
            20 Feb <span className="w-1 h-1 bg-dark rounded-full"></span>18:35
          </div>
        </div>
      </div>
      <Image
        src={image}
        fill={true}
        alt="image"
        className="absolute top-0 left-0 w-full h-full object-cover duration-600 group-hover:scale-105"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] opacity-0 group-hover:opacity-100 duration-300 pointer-events-none"></div>
      <div className="card-content px-3 absolute top-1/2 -translate-y-1/2 w-full">
        <div className="uppercase text-center text-[rgba(255,255,255,0.8)] text-sm tracking-[1.5px] mb-[1rem]">{suptitle}</div>
        <h3 className="display-2 mb-[2rem] 4xl:mb-[4rem] text-center text-white w-full">{title}</h3>
        <div className="flex justify-center">
          <Link href={`/journal-blog/${slug}`} className="">
            <ButtonDemo
              text="view article"
              variant="outline"
              className=" border border-[rgba(255,255,255,0.5)] !text-white backdrop-blur-md hover:!bg-[rgba(217,217,217,0.15)]"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ActionCard;
