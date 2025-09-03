"use client";

import React, { useState } from "react";
import { ButtonDemo, Navbar} from "@/components/index";
import Link from "next/link";
import Image from "next/image";
import localData from "@/localData";
import { motion,  } from "framer-motion";
import { InlineWidget } from "react-calendly";

const {
 
  followUsDecorativeCoverImage,
  contactCoverImage,
} = localData.images;

const {} = localData.svgs;

const Template = () => {
  return (
    <main className="about-page">
      <header className="hero flex flex-col">
        <Navbar>
          <div className="breadcrumbs  border-y border-line py-4 sm:py-5">
            <div className="container flex items-center gap-2">
              <Link href="/" className="link text-xs font-medium px-1 underline">
                Home
              </Link>
              <div className="dot w-1 h-1 rounded-full bg-dark"></div>
              <div className="link text-xs font-medium px-1 pointer-events-none text-secondary-500">Contact</div>
            </div>
          </div>
        </Navbar>
        <ShowcaseSection />
      </header>

      <LocationSection />
      <FollowUsSection />
    </main>
  );
};

const ShowcaseSection = () => {
  const [inView1, setIsInView1] = useState(false);

  return (
    <div className=" flex-1  overflow-hidden  lg:flex  ">
      <motion.div
        className={`hidden lg:flex flex-1 border hero-center  bg-cover w-full relative  py-[8rem] sm:py-[4rem] 4xl:py-[8rem]  ${
          inView1 ? "lazy-animate" : ""
        } `}
        viewport={{ amount: 0.3 }}
        onViewportEnter={() => setIsInView1(true)}
        data-lazy="fade"
      >
        <Image
          src={contactCoverImage}
          fill={true}
          alt="background image"
          className="absolute top-0 left-0 w-full h-full object-cover object-[50%_35%]"
        />
        <div className="overlay absolute bg-[rgba(0,0,0,0.3)] sm:hidden top-0 left-0 w-full h-full"></div>
      </motion.div>
      <div className="flex-1 ">
        <div className=" pt-[30px] px-[90px] ">
          <h6 className="subtitle text-center lg:text-left">Contact us</h6>
          <h1 className="display-2 text-center lg:text-left leading-[1.1] mx-auto lg:mx-0 max-w-[600px] 4xl:max-w-[700px]">
            Schedule your consultation for a custom tailored suit
          </h1>
        </div>

        <div className=" h-[900px]  md:h-[900px] xl:h-[660px] relative mb-0">
          <InlineWidget
            url="https://calendly.com/admin-lawrenceandwinslade"
            className="relative z-2"
            styles={{ width: "100%", height: "100%", minHeight: "500px" }}
            // pageSettings={{ hideLandingPageDetails: true }}
            // prefill={{}}
          />
        </div>

        <div className="pt-[30px] px-[90px]  pb-[20px] text-center lg:text-left">
          <h6 className="subtitle !mb-[1rem]">email us</h6>
          <a
            target="_blank"
            href="mailto:admin@lawrenceandwinslade.com"
            className="text-xs sm:text-md  mb-[1rem] sm:mb-[1.2rem] hover:text-gray-500 duration-300 font-medium"
          >
            admin@lawrenceandwinslade.com
          </a>
        </div>
      </div>
    </div>
  );
};

const LocationSection = () => {
  return (
    <section className="location !pb-0" id="location">
      <div className="container">
        <h3 className="subtitle text-center 4xl:!mb-[5rem]">Location</h3>

        <h2 className="display-2 text-center max-w-[900px] 4xl:max-w-[1200px] mx-auto mb-[3rem] 4xl:mb-[4rem]">
          Our showroom in Knightsbridge offers a luxurious, welcoming environment to explore our process and meet our team
        </h2>
        <p className="paragraph-1 text-center max-w-[470px] mx-auto mb-[2.5rem] sm:mb-[5.5rem]">
          Located near Knightsbridge station and Hyde Park Corner, it’s just a 10-minute walk from Victoria.
        </p>
      </div>

      <div className="map-wrapper h-[400px] sm:h-[80vh]">
        <iframe
          src="https://www.google.com/maps?q=21+Knightsbridge,+London,+SW1X+7LY&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
