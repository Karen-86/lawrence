"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutCard = ({ title = "", bigImage = null, snap = "" }: any) => {
  const [inView1, setIsInView1] = useState(false);
  return (
    <div className="about-card md:min-h-[400px] flex flex-col md:flex-row  absolute top-0 left-0 w-full h-full ">
      <motion.div
        className={`image-wrapper relative  flex-1 ${inView1 ? "lazy-animate" : ""} `}
        viewport={{ amount: 0.3 }}
        onViewportEnter={() => setIsInView1(true)}
        data-lazy="fade"
      >
        <Image src={bigImage} fill={true} alt="image" className="absolute top-0 left-0 w-full h-full object-cover " />
        <div className="absolute z-20 bottom-0 right-0 px-10 py-5 text-white italic text-4xl font-baskervville">{snap}</div>
      </motion.div>
      <div className="content px-[50px] pt-[30px]  pb-[100px] pd:mb-0 text-center md:text-left md:py-[90px] flex justify-end flex-col sm:min-w-[400px] 4xl:min-w-[460px]">
        <h3 className="text-[2.188rem] mb-4">{title}</h3>
        <h6 className="text-sm  xl:text-md uppercase font-montserrat font-light text-secondary-700 mb-5  ">
          Crafted for your style
        </h6>
      </div>
    </div>
  );
};

export default AboutCard;
