"use client";

import React, { useState } from "react";
import Image from "next/image";
import localData from "@/localData";
import { ButtonDemo } from "@/components/index";
import { motion, useInView } from "framer-motion";

const { serviceSample1Image } = localData.images;

const ServiceCard = ({ bigImage = serviceSample1Image, smallImage = serviceSample1Image }: any) => {
  const [inView1, setIsInView1] = useState(false);
  return (
    <motion.div
      className="card service-card grid md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr] gap-10 xl:gap-20 select-none"
      viewport={{ amount: 0.3 }}
      onViewportEnter={() => setIsInView1(true)}
    >
      <div className="col  flex-col hidden md:flex">
        <h2 className="subtitle flex-1">OUR SERVICES</h2>
        <br />
        <br />
        <br />

        <div>
          <h5 className="text-lg mb-[2rem]">Attention to Every Detail</h5>
          <p className="text-sm xl:text-md text-secondary leading-[1.7] font-light">
            From lapels to lining, buttons to stitching, each element is carefully chosen and meticulously crafted to reflect your
            personal style and the highest standards of bespoke tailoring.
          </p>
        </div>
      </div>

      <div className="col hidden md:block">
        <h3 className="text-[2.813rem]  xl:text-5xl mb-3 xl:mb-11">Formal Bespoke</h3>
        <h6 className="text-sm  xl:text-[1.125rem] uppercase font-montserrat font-light text-secondary-700 border-b border-line pb-3 mb-5 xl:pb-7 xl:mb-10">
          Crafted for your style
        </h6>

        <div className="card-image pt-[110%] h-0 w-full relative">
          <Image
            fill={true}
            className={`object-cover absolute top-0 left-0 w-full h-full  ${inView1 ? "lazy-animate" : ""}`}
            src={bigImage}
            alt="image"
            data-lazy="fade"
          />
          <ButtonDemo
            text="BOOK A FITTING"
            className="absolute !bg-[rgba(217,217,217,0.1)] border border-[rgba(255,255,255,0.5)] !text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md hover:!bg-[rgba(217,217,217,0.15)]"
          />
        </div>
      </div>

      <div className="col">
        <div className=" md:hidden text-center">
          <h2 className="subtitle flex-1 text-center !mb-[4rem]">OUR SERVICES</h2>
          <h3 className="text-[2.813rem]  xl:text-5xl mb-3 xl:mb-11">Formal Bespoke</h3>
          <h6 className="text-sm  xl:text-[1.125rem] uppercase font-montserrat font-light text-secondary-700 border-b border-line pb-5 mb-7 xl:pb-7 xl:mb-10">
            Crafted for your style
          </h6>
        </div>
        <div className="card-image pt-[110%] h-0 w-full relative mb-17">
          <Image
            fill={true}
            className={`object-cover absolute top-0 left-0 w-full h-full  ${inView1 ? "lazy-animate" : ""}`}
            src={smallImage}
            alt="image"
            data-lazy="fade"
          />
        </div>

        <p className="text-sm xl:text-md text-secondary leading-[1.7] font-light max-w-[300px] sm:max-w-auto">
          Classic tailored suits for business, events, and special occasions. Every garment is precision-cut and hand-finished to
          ensure the perfect fit and timeless elegance.
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
