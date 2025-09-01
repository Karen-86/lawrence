"use client";

import React, { useState } from "react";
import Image from "next/image";
import localData from "@/localData";
import { ButtonDemo, Navbar } from "@/components/index";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";
import { motion } from "framer-motion";

const {
  testimonialSample1Image,
  testimonialSample2Image,
  testimonialSample3Image,
  testimonialSample4Image,

  mobileBannerSignImage,
  bannerSignImage,

  followUsDecorativeCoverImage,
} = localData.images;

const Template = () => {
  return (
    <main className="testimonials-page">
      <header className="hero">
        <Navbar>
          <div className="breadcrumbs  border-y border-line py-4 sm:py-5">
            <div className="container flex items-center gap-2">
              <Link href="/" className="link text-xs font-medium px-1 underline">
                Home
              </Link>
              <div className="dot w-1 h-1 rounded-full bg-dark"></div>
              <div className="link text-xs font-medium px-1 pointer-events-none text-secondary-500">Testimonials</div>
            </div>
          </div>
        </Navbar>
      </header>
      <TestimonialsCatalogSection />
      <BannerSection />
      <FollowUsSection />
    </main>
  );
};

const TestimonialsCatalogSection = () => {
  const [inView1, setIsInView1] = useState(false);
  const [inView2, setIsInView2] = useState(false);
  const [inView3, setIsInView3] = useState(false);
  const [inView4, setIsInView4] = useState(false);

  return (
    <section className="xl:!pt-[7rem] 4xl:!pt-[9rem] !pb-0">
      <div className="sm:px-[45px]">
        <h6 className="subtitle text-center 4xl:!mb-20">TESTIMONIALS</h6>
        <h2 className="display-2 text-center mx-auto  mb-[3.75rem] sm:mb-[5rem]">Stories of Elegance</h2>

        <div className="testimonial grid lg:grid-cols-2 sm:gap-[2rem] sm:mb-[2rem]">
          <div className="testimonial-content bg-[rgb(252,252,252)] px-[20px] sm:px-[40px] xl:px-[60px] py-[40px] flex ">
            <div className="max-w-[690px] mx-auto  flex-1 flex flex-col justify-evenly">
              <span className="font-baskervville text-[1.875rem] font-bold mb-[1rem] block leading-[1]">“”</span>
              <div className="center mb-[3rem]">
                <h4 className=" text-[1.125rem] 4xl:text-[1.875rem] leading-[1.2] mb-[1.5rem] 4xl:mb-[2rem]">
                  From the moment I walked into <br /> Lawrence & Winslade, I knew I was in expert hands
                </h4>
                <p className="text-sm xl:text-md 4xl:text-[1.125rem] text-secondary-800 leading-[1.7]">
                  The consultation was thorough, the fabric selection was incredible, and the attention to detail during fittings
                  was exceptional. Every stitch and seam reflects true craftsmanship, and the final suit exceeded all my
                  expectations. I now feel confident that I have a wardrobe of pieces that are truly my own.
                </p>
              </div>

              <div className="text-xs 4xl:text-sm text-secondary-500 italic text-right ">- James R., London</div>
            </div>
          </div>
          <motion.div
            className={`testimonial-cover relative h-0 w-full pt-[130%] md:pt-[40%] lg:pt-[100%] xl:pt-[73%] ${
              inView1 ? "lazy-animate" : ""
            }`}
            viewport={{ amount: 0.3 }}
            onViewportEnter={() => setIsInView1(true)}
            data-lazy="fade"
          >
            <Image
              src={testimonialSample1Image}
              fill={true}
              alt="background image"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="testimonial grid lg:grid-cols-2 sm:gap-[2rem] sm:mb-[2rem]">
          <div className="lg:order-2 testimonial-content bg-[rgb(252,252,252)] px-[20px] sm:px-[40px] xl:px-[60px] py-[40px] flex ">
            <div className="max-w-[690px] mx-auto  flex-1 flex flex-col justify-evenly">
              <span className="font-baskervville text-[1.875rem] font-bold mb-[1rem] block leading-[1]">“”</span>
              <div className="center mb-[3rem]">
                <h4 className=" text-[1.125rem] 4xl:text-[1.875rem] leading-[1.2] mb-[1.5rem] 4xl:mb-[2rem]">
                  I’ve had bespoke suits before, but the experience with Lawrence & Winslade was on a completely different level
                </h4>
                <p className="text-sm xl:text-md 4xl:text-[1.125rem] text-secondary-800 leading-[1.7]">
                  They take the time to understand not just your measurements, but your lifestyle, your style preferences, and
                  even your personality. The fittings were relaxed yet precise, and the end result is a suit that fits perfectly,
                  feels luxurious, and turns heads everywhere I go. Exceptional service from start to finish.
                </p>
              </div>

              <div className="text-xs 4xl:text-sm text-secondary-500 italic text-right ">- Alexander M., Manchester</div>
            </div>
          </div>
          <motion.div
            className={`testimonial-cover relative h-0 w-full pt-[130%] md:pt-[40%] lg:pt-[100%] xl:pt-[73%] ${
              inView2 ? "lazy-animate" : ""
            }`}
            viewport={{ amount: 0.3 }}
            onViewportEnter={() => setIsInView2(true)}
            data-lazy="fade"
          >
            <Image
              src={testimonialSample2Image}
              fill={true}
              alt="background image"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="testimonial grid lg:grid-cols-2 sm:gap-[2rem] sm:mb-[2rem]">
          <div className="testimonial-content bg-[rgb(252,252,252)] px-[20px] sm:px-[40px] xl:px-[60px] py-[40px] flex ">
            <div className="max-w-[690px] mx-auto  flex-1 flex flex-col justify-evenly">
              <span className="font-baskervville text-[1.875rem] font-bold mb-[1rem] block leading-[1]">“”</span>
              <div className="center mb-[3rem]">
                <h4 className=" text-[1.125rem] 4xl:text-[1.875rem] leading-[1.2] mb-[1.5rem] 4xl:mb-[2rem]">
                  From the moment I walked into <br /> Lawrence & Winslade, I knew I was in expert hands
                </h4>
                <p className="text-sm xl:text-md 4xl:text-[1.125rem] text-secondary-800 leading-[1.7]">
                  The consultation was thorough, the fabric selection was incredible, and the attention to detail during fittings
                  was exceptional. Every stitch and seam reflects true craftsmanship, and the final suit exceeded all my
                  expectations. I now feel confident that I have a wardrobe of pieces that are truly my own.
                </p>
              </div>

              <div className="text-xs 4xl:text-sm text-secondary-500 italic text-right ">- James R., London</div>
            </div>
          </div>
          <motion.div
            className={`testimonial-cover relative h-0 w-full pt-[130%] md:pt-[40%] lg:pt-[100%] xl:pt-[73%] ${
              inView3 ? "lazy-animate" : ""
            }`}
            viewport={{ amount: 0.3 }}
            onViewportEnter={() => setIsInView3(true)}
            data-lazy="fade"
          >
            <Image
              src={testimonialSample3Image}
              fill={true}
              alt="background image"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="testimonial grid lg:grid-cols-2 sm:gap-[2rem]">
          <div className="lg:order-2 testimonial-content bg-[rgb(252,252,252)] px-[20px] sm:px-[40px] xl:px-[60px] py-[40px] flex ">
            <div className="max-w-[690px] mx-auto  flex-1 flex flex-col justify-evenly">
              <span className="font-baskervville text-[1.875rem] font-bold mb-[1rem] block leading-[1]">“”</span>
              <div className="center mb-[3rem]">
                <h4 className=" text-[1.125rem] 4xl:text-[1.875rem] leading-[1.2] mb-[1.5rem] 4xl:mb-[2rem]">
                  I’ve had bespoke suits before, but the experience with Lawrence & Winslade was on a completely different level
                </h4>
                <p className="text-sm xl:text-md 4xl:text-[1.125rem] text-secondary-800 leading-[1.7]">
                  They take the time to understand not just your measurements, but your lifestyle, your style preferences, and
                  even your personality. The fittings were relaxed yet precise, and the end result is a suit that fits perfectly,
                  feels luxurious, and turns heads everywhere I go. Exceptional service from start to finish.
                </p>
              </div>

              <div className="text-xs 4xl:text-sm text-secondary-500 italic text-right ">- Alexander M., Manchester</div>
            </div>
          </div>
          <motion.div
            className={`testimonial-cover relative h-0 w-full pt-[130%] md:pt-[40%] lg:pt-[100%] xl:pt-[73%] ${
              inView4 ? "lazy-animate" : ""
            }`}
            viewport={{ amount: 0.3 }}
            onViewportEnter={() => setIsInView4(true)}
            data-lazy="fade"
          >
            <Image
              src={testimonialSample4Image}
              fill={true}
              alt="background image"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BannerSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="border-b border-line !pt-[2rem]">
      <div className="px-[20px] sm:px-[45px]">
        <div className="banner bg-success rounded-[1.8rem] relative">
          <Image
            alt="image"
            fill={true}
            src={isMobile ? mobileBannerSignImage : bannerSignImage}
            className="absolute top-0 left-0 w-full h-full object-cover object-center pointer-events-none"
          />
          <div className="banner-content flex flex-col items-center py-40 sm:py-24 4xl:py-32">
            <h6 className="subtitle text-center !text-[rgba(255,255,255,0.4)]">Already visited us?</h6>
            <h2 className="display-3 max-w-[255px] sm:max-w-[370px] 4xl:max-w-[550px] text-white">
              We value your voice. Share your story with us.
            </h2>
            <ButtonDemo text="Leave a review" className="sm:!min-w-[290px]" />
          </div>
        </div>
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
        <ButtonDemo text="Follow" color="black" className="" />
      </div>
    </section>
  );
};

export default Template;
