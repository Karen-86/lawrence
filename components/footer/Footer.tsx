"use client";

import React, { useState } from "react";
import localData from "@/localData";
import { ButtonDemo, InputDemo } from "@/components/index";
import { motion } from "framer-motion";
import Link from "next/link";

const { signIcon } = localData.images;
const { logoWhite, facebookIcon, instagramIcon } = localData.svgs;

const Footer = () => {
  const [inView1, setIsInView1] = useState(false);

  return (
    <footer className="bg-[rgba(16,16,16)] text-white  py-[2rem] mt-[15rem] 4xl:mt-[18rem]">
      <motion.div
        className={`absolute  w-full banner bg-[rgba(16,16,16)] rounded-[7rem] sm:rounded-full transform-[translateY(-50%)] p-3 sm:p-7
        ${inView1 ? "lazy-animate" : ""}`}
        data-lazy="fade-up"
        data-transformed={true}
        viewport={{ amount: 0.1 }}
        onViewportEnter={() => setIsInView1(true)}
      >
        <div className="solid-line border border-[rgba(255,255,255,0.2)] p-3 sm:p-4 rounded-[7rem] sm:rounded-full">
          <div className="dotted-line border border-[rgba(255,255,255,0.2)] border-dashed  rounded-[7rem] sm:rounded-full">
            <div className="banner-content flex flex-col items-center py-23 sm:py-15 4xl:py-26">
              <div className="banner-icon mb-[2rem] sm:mb-[3rem]">
                <img src={signIcon} alt="" />
              </div>
              <h2 className="banner-title text-[1.563rem] sm:text-[2rem] 4xl:text-[2.813rem] max-w-[255px] sm:max-w-[400px] 4xl:max-w-[550px] text-center leading-[1.4] mb-[2.7rem] 4xl:mb-[4rem]">
                Start your journey to a suit made just for you
              </h2>
              <Link href="/contact">
                <ButtonDemo text="Book Your Appointment " className="!min-w-[290px]" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mt-[360px] 4xl:mt-[430px]">
        <div className="flex gap-x-20 lg:gap-x-20  4xl:gap-x-25 gap-y-10 sm:gap-y-20 flex-wrap justify-between mb-[7rem] 4xl:mb-[4rem]">
          <div className="col flex-1 basis-full sm:basis-auto">
            <div className="mb-[2rem]">{logoWhite}</div>
            <div className="socials gap-3 hidden sm:flex">
              {/* <a
                href="#/"
                // target="_blank"
                className="fill-dark inline-block bg-white rounded-full w-[40px] sm:w-[45px] h-[40px] sm:h-[45px] p-2 hover:bg-[rgba(255,255,255,0.8)] duration-300 hover"
              >
                {facebookIcon}
              </a> */}
              <a
                href="https://www.instagram.com/lawrenceandwinslade"
                target="_blank"
                className="fill-dark inline-block bg-white rounded-full w-[40px] sm:w-[45px] h-[40px] sm:h-[45px] p-2 hover:bg-[rgba(255,255,255,0.8)] duration-300 hover"
              >
                {instagramIcon}
              </a>
            </div>

            <form className="col hidden sm:block 4xl:hidden mt-[4rem] max-w-[300px]">
              <h4 className="text-sm sm:text-md font-medium font-montserrat mb-[1.6rem] min-w-[300px]">Newsletter</h4>

              <InputDemo
                required={true}
                placeholder="Email Address"
                className="max-w-[350px]"
                inputClassName=" border-none focus:!outline-none focus:!ring-0"
                name="email"
                type="text"
                defaultValue=""
                callback={(e) => console.log(e.target.value)}
              />
              <hr className=" border-[rgba(255,255,255,0.7)] mb-[1.5rem]" />
              <div className="flex justify-end">
                <ButtonDemo
                  text="subscribe"
                  className=" border border-[rgba(255,255,255,.3)] !py-5 !min-w-[160px] !bg-transparent !text-white !font-normal !text-xs hover:!bg-white hover:!text-dark"
                />
              </div>
            </form>
          </div>

          <div className="col order-3 sm:order-0">
            <h4 className="text-sm sm:text-md font-medium font-montserrat mb-[1.6rem]">Timings</h4>
            <div className="text-xs sm:text-md text-[rgba(255,255,255,0.7)] mb-[1rem] sm:mb-[1.2rem]">Monday — Friday</div>
            <div className="text-xs sm:text-md text-[rgba(255,255,255,0.7)]">9am — 6pm</div>
          </div>

          <div className="col flex flex-col items-start">
            <h4 className="text-sm sm:text-md font-medium font-montserrat mb-[1.6rem]">Quick links</h4>
            <a
              href="/"
              className="text-xs sm:text-md text-[rgba(255,255,255,0.7)] mb-[1rem] sm:mb-[1.2rem] hover:text-white duration-300"
            >
              Home
            </a>
            <Link
              href="/about"
              className="text-xs sm:text-md text-[rgba(255,255,255,0.7)] mb-[1rem] sm:mb-[1.2rem] hover:text-white duration-300"
            >
              About us
            </Link>
            {/* <Link
              href="#/"
              className="text-xs sm:text-md text-[rgba(255,255,255,0.7)] mb-[1rem] sm:mb-[1.2rem] hover:text-white duration-300"
            >
              L&W World
            </Link> */}
            <Link
              href="/gallery"
              className="text-xs sm:text-md text-[rgba(255,255,255,0.7)] mb-[1rem] sm:mb-[1.2rem] hover:text-white duration-300"
            >
              Creations
            </Link>
            {/* <Link
              href="/gallery"
              className="text-xs sm:text-md text-[rgba(255,255,255,0.7)] mb-[1rem] sm:mb-[1.2rem] hover:text-white duration-300"
            >
              Gallery
            </Link> */}
            <Link
              href="/contact"
              className="text-xs sm:text-md text-[rgba(255,255,255,0.7)] mb-[1rem] sm:mb-[1.2rem] hover:text-white duration-300"
            >
              Contact
            </Link>
          </div>

          <div className="col  flex flex-col items-start order-3 sm:order-0">
            <h4 className="text-sm sm:text-md font-medium font-montserrat mb-[1.6rem]">Contact Info</h4>
            <a
              target="_blank"
              href="https://www.google.com/maps?q=21+Knightsbridge,+London,+SW1X+7L"
              rel="noopener noreferrer"
              className="text-xs sm:text-md text-[rgba(255,255,255,0.7)] mb-[1rem] sm:mb-[1.2rem] hover:text-white duration-300"
            >
              21 Knightsbridge, London, SW1X 7LY
            </a>
            <a
              target="_blank"
              href="tel:+44 7701049192"
              className="text-xs sm:text-md text-[rgba(255,255,255,0.7)] mb-[1rem] sm:mb-[1.2rem] hover:text-white duration-300"
            >
              +44 7701049192
            </a>
            <a
              target="_blank"
              href="mailto:admin@lawrenceandwinslade.com"
              className="text-xs sm:text-md text-[rgba(255,255,255,0.7)] mb-[1rem] sm:mb-[1.2rem] hover:text-white duration-300"
            >
              admin@lawrenceandwinslade.com
            </a>
          </div>

          <form className="col hidden 4xl:block">
            <h4 className="text-sm sm:text-md font-medium font-montserrat mb-[1.6rem] min-w-[300px]">Newsletter</h4>
            <InputDemo
              required={true}
              placeholder="Email Address"
              className="max-w-[350px]"
              inputClassName=" border-none focus:!outline-none focus:!ring-0"
              name="email"
              type="text"
              defaultValue=""
              callback={(e) => console.log(e.target.value)}
            />
            <hr className=" border-[rgba(255,255,255,0.7)] mb-[1.5rem]" />
            <div className="flex justify-end">
              <ButtonDemo
                text="subscribe"
                className=" border border-[rgba(255,255,255,.3)] !py-5 !min-w-[160px] !bg-transparent !text-white !font-normal !text-xs hover:!bg-white hover:!text-dark"
              />
            </div>
          </form>

          <div className="col basis-full order-4 sm:hidden">
            <div className="socials flex gap-3">
              {/* <a
                href="#/"
                target="_blank"
                className="fill-dark inline-block bg-white rounded-full w-[40px] sm:w-[45px] h-[40px] sm:h-[45px] p-2 hover:bg-[rgba(255,255,255,0.8)] duration-300 hover"
              >
                {facebookIcon}
              </a> */}
              <a
                href="https://www.instagram.com/lawrenceandwinslade"
                target="_blank"
                className="fill-dark inline-block bg-white rounded-full w-[40px] sm:w-[45px] h-[40px] sm:h-[45px] p-2 hover:bg-[rgba(255,255,255,0.8)] duration-300 hover"
              >
                {instagramIcon}
              </a>
            </div>
          </div>
        </div>

        <hr className=" border-[rgba(255,255,255,0.2)] mb-[1.5rem]" />

        <div className="flex gap-x-20 gap-y-15 justify-between flex-wrap">
          <div className="flex gap-10">
            <Link href="/privacy-policy" className="text-xs text-[rgba(255,255,255,0.7)]  hover:text-white duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-xs text-[rgba(255,255,255,0.7)]  hover:text-white duration-300">
              Terms of Use
            </Link>
          </div>

          <Link href="/cookies" className="text-xs text-[rgba(255,255,255,0.7)]  hover:text-white duration-300">
            Cookies
          </Link>

          <p className="text-xs  text-[rgba(255,255,255,0.7)] text-center basis-full lg:basis-auto">
            © 2025 Lawrence & Winslade. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
