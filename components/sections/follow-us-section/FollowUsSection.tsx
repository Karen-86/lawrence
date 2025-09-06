"use client";

import React, { useState } from "react";
import { ButtonDemo, Navbar, CarouselSliderDemo } from "@/components/index";
import Link from "next/link";
import Image from "next/image";
import localData from "@/localData";
import { motion } from "framer-motion";

const {
  sliderSample1Image,
  sliderSample2Image,
  sliderSample3Image,
  sliderSample4Image,
  sliderSample5Image,
  sliderSample6Image,
  sliderSample7Image,
  sliderSample8Image,
  sliderSample9Image,
  sliderSample10Image,
  sliderSample11Image,
  sliderSample12Image,
  sliderSample13Image,
  sliderSample14Image,
  sliderSample15Image,
  sliderSample16Image,
  sliderSample17Image,
  sliderSample18Image,
} = localData.images;

const FollowUsSection = () => {
  return (
    <section className="follow-us">
      <div className="container">
        <h6 className="subtitle text-center">follow us on instagram</h6>
      </div>

      <CarouselSliderDemo
        items={[
          { image: sliderSample1Image },
          { image: sliderSample2Image },
          { image: sliderSample3Image },
          { image: sliderSample4Image },
          { image: sliderSample5Image },
          { image: sliderSample6Image },
          { image: sliderSample7Image },
          { image: sliderSample8Image },
          { image: sliderSample9Image },
          { image: sliderSample10Image },
          { image: sliderSample11Image },
          { image: sliderSample12Image },
          { image: sliderSample13Image },
          { image: sliderSample14Image },
          { image: sliderSample15Image },
          { image: sliderSample16Image },
          { image: sliderSample17Image },
          { image: sliderSample18Image },
      
        ]}
      />
      <div className="container flex justify-center">
        <a href="https://www.instagram.com/lawrenceandwinslade" target="_blank">
          <ButtonDemo text="Follow" color="black" className="" />
        </a>
      </div>
    </section>
  );
};

export default FollowUsSection;
