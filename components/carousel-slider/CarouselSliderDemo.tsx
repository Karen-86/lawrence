"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type CarouselDemoProps = {
  className?: string;
  items?: any[];
};

export function CarouselSliderDemo({ className = "", items = [{}, {}, {}, {}] }: CarouselDemoProps) {
  const [inView1, setIsInView1] = useState(false);

  return (
    <>
      <motion.div
        className={`logos flex overflow-hidden mb-[2.5rem] sm:mb-[5rem] ${inView1 ? "lazy-animate" : ""}`}
        viewport={{ amount: 0.3 }}
        onViewportEnter={() => setIsInView1(true)}
        data-lazy="fade"
      >
        <div className="logos-slide flex ml-4">
          {items.map((item, index) => {
            return <SliderItem key={index} item={item} />;
          })}
        </div>
        <div className="logos-slide flex">
          {items.map((item, index) => {
            return <SliderItem key={index} item={item} />;
          })}
        </div>
      </motion.div>
      <style>{`
        @keyframes slide {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
        }
        .logos-slide {
        animation: 55s slide infinite linear;
        }
        .logos:hover .logos-slide {
          animation-play-state: paused;
        }
      `}</style>
      <style>
        {`
          .brand-item {
            svg {
             width: 100%;
             height: 100%;
             object-fit:contain;
             path {
              // fill: #000;
             }
            }
          }
          `}
      </style>
    </>
  );
}

const SliderItem = ({ item }: any) => {
  return (
    <div className="relative w-[180px] h-[220px] sm:w-[290px] sm:h-[400px] 4xl:w-[410px] 4xl:h-[525px] ml-[5px]">
      <Image src={item.image} fill={true} alt="image" className="absolute top-0 left-0 w-full h-full object-cover" />
    </div>
  );
};
