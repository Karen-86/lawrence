"use client";

import React, { useState } from "react";
import Image from "next/image";
import localData from "@/localData";
import { TooltipDemo, Navbar, ActionCard, ButtonDemo } from "@/components/index";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useGlobalContext } from "@/context";
import { useIsMobile } from "@/hooks/useIsMobile";

const {
  articleCoverImage,
  articleMobileCoverImage,
  journalSample1Image,
  articleDecorativeCoverImage,
  articleDecorativeMobileCoverImage,
  followUsDecorativeCoverImage,
} = localData.images;
const { shareIcon, heartIcon, solidHeartIcon, articleSignIcon } = localData.svgs;

const Template = () => {
  return (
    <main className="article-page" id="article-page">
      <header className="hero  min-h-[100vh] flex flex-col">
        <Navbar>
          <div className="breadcrumbs  border-y border-line py-4 sm:py-5">
            <div className="container flex items-center gap-2">
              <Link href="/" className="link text-xs font-medium px-1 underline">
                Home
              </Link>
              <div className="dot w-1 h-1 rounded-full bg-dark"></div>
              <Link href="/journal-blog" className="link text-xs font-medium px-1 underline">
                Journal
              </Link>
              <div className="dot w-1 h-1 rounded-full bg-dark"></div>
              <div className="link text-xs font-medium px-1 pointer-events-none text-secondary-500">Suit Essentials</div>
            </div>
          </div>
        </Navbar>
        <ShowcaseSection />
      </header>
      <ArticleSection />
      <DecorativeSection />
      <Article2Section />
      <hr className="border-line" />
      <JournalSection />
      <hr className="border-line" />
      <FollowUsSection />
    </main>
  );
};

const ShowcaseSection = () => {
  const isMobile = useIsMobile();

  const [inView1, setIsInView1] = useState(false);

  console.log(isMobile ? "mobile" : "desktop");

  return (
    <div className=" flex-1  pb-[2rem]  flex flex-col items-center  ">
      <motion.div
        className={`flex flex-1 border hero-center  bg-cover w-full relative  py-[8rem] sm:py-[4rem] 4xl:py-[8rem]  ${
          inView1 ? "lazy-animate" : ""
        } `}
        viewport={{ amount: 0.3 }}
        onViewportEnter={() => setIsInView1(true)}
        data-lazy="fade"
      >
        <Image
          src={isMobile ? articleMobileCoverImage : articleCoverImage}
          fill={true}
          alt="background image"
          className="absolute top-0 left-0 w-full h-full object-cover object-[50%_35%]"
        />
        <div className="overlay absolute bg-[rgba(0,0,0,0.3)] sm:hidden top-0 left-0 w-full h-full"></div>
        <div className="container flex-1   relative flex gap-10 flex-col lg:flex-row items-center  justify-center ">
          <div className="showcase-content text-white text-center ">
            <div className="text-[0.625rem] sm:text-sm uppercase mb-[2rem]">article</div>
            <h1 className="text-[2.188rem] leading-[1.1] sm:text-4xl max-w-[400px] sm:max-w-[500px]">Suit Essentials</h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ArticleSection = () => {
  const [isFavouriteCard, setIsFavouriteCard] = useState(false);

  return (
    <section>
      <div className="container max-w-[1300px] 4xl:max-w-[1500px] 4xl:pl-[150px] md:ml-0 text-center md:text-left">
        <h3 className="subtitle md:!mb-[90px]">article</h3>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-20">
          <div className="col max-w-[484px]">
            <h3 className="display-2 mb-[2rem] sm:mb-[4rem] max-w-[300px] lg:max-w-full">The Foundation of Timeless Style</h3>
            <div className="action-bar flex gap-3 items-center justify-center md:justify-start">
              <div className="col border bg-white  flex items-center justify-center">
                <TooltipDemo
                  contentClassName="bg-white text-dark shadow-[-1px_-1px_3px_rgba(17,17,17,0.1)] "
                  trigger={<div className="w-[40px] h-[40px]  p-[10px] cursor-pointer">{shareIcon}</div>}
                  content={<div className="">Share</div>}
                />
              </div>
              <div className="col border bg-white  flex items-center justify-center">
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
              <div className="col border bg-white text-xs font-medium">
                <div className="flex items-center gap-3 h-[40px]  p-2">
                  20 Feb <span className="w-1 h-1 bg-dark rounded-full"></span>18:35
                </div>
              </div>
            </div>
          </div>

          <div className="col max-w-[400px] lg:max-w-[512px]">
            <h4 className="title">The Essence of a Suit</h4>

            <p className="paragraph-1">
              A suit has always been more than just clothing — it is a statement of elegance, confidence, and individuality. The
              right suit highlights your personality and enhances the way you carry yourself, making it an essential piece in any
              wardrobe.
            </p>

            <br />
            <br />
            <hr className="border-line" />
            <br />
            <br />

            <h4 className="title">Fabric and Color</h4>

            <p className="paragraph-1">
              Fabric sets the foundation of a suit. Wool remains the timeless classic, valued for its durability and versatility,
              while lighter materials such as cotton or linen are ideal for warmer seasons.
              <br />
              <br />
              Color also matters — navy and charcoal are considered universal, while black is traditionally reserved for formal or
              evening occasions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const JournalSection = () => {
  const { actionCards } = useGlobalContext();
  const [inView1, setIsInView1] = useState(false);

  return (
    <section>
      <div className="container">
        <div className=" lg:flex justify-between  lg:gap-50">
          <h3 className="subtitle text-center 4xl:!mb-[5rem]">Journal</h3>
          <div className="flex-1">
            <div className="grid md:grid-cols-2 gap-[20px] xl:gap-[50px]  mb-[5rem]">
              <motion.div
                className={`card image-wrapper relative w-full h-0 pt-[135%] ${inView1 ? "lazy-animate" : ""}`}
                viewport={{ amount: 0.3 }}
                onViewportEnter={() => setIsInView1(true)}
                data-lazy="fade"
              >
                <Image
                  src={journalSample1Image}
                  fill={true}
                  alt="image"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-[15%] right-[13%] hidden xl:block">{articleSignIcon}</div>
                <div className="card-content  absolute top-1/2 -translate-y-1/2 w-full">
                  <div className="uppercase text-center text-[rgba(255,255,255,0.8)] text-sm tracking-[1.5px] mb-[1rem]">
                    Article
                  </div>
                  <h3 className="display-2 mb-[2rem] 4xl:mb-[4rem] text-center text-white w-full">Suit Essentials</h3>
                  <div className="flex justify-center">
                    <Link href="/journal-blog/article" className="">
                      <ButtonDemo
                        text="view article"
                        variant="outline"
                        className=" border border-[rgba(255,255,255,0.5)] !text-white hover:!bg-[rgba(217,217,217,0.15)]"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <ActionCard {...actionCards[0]} />
            </div>
            <div className="flex justify-center">
              <Link href="/journal-blog">
                <ButtonDemo text="View All" className=" border border-secondary-100 !min-w-[280px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Article2Section = () => {
  return (
    <section>
      <div className="container max-w-[1300px] 4xl:max-w-[1500px] 4xl:pl-[150px] md:ml-0 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="col max-w-[484px]"></div>

          <div className="col max-w-[400px] lg:max-w-[512px]">
            <h4 className="title">Fit and Cut</h4>

            <p className="paragraph-1">
              The cut determines how a suit frames your body and the impression it creates. Slim fits offer a modern, sharp
              silhouette; regular fits balance comfort and elegance; while relaxed cuts bring a more traditional look. The right
              choice depends not only on trends but on what makes you feel most confident.
            </p>

            <br />
            <br />
            <hr className="border-line" />
            <br />
            <br />

            <h4 className="title">Details That Matter</h4>

            <p className="paragraph-1">
              Lapels, buttons, and pockets may appear minor at first glance, but they define the overall character of a jacket.
              Trousers, whether slim or with a classic drape, complete the harmony of the outfit. Attention to these elements is
              what distinguishes a well-considered suit from an ordinary one.
            </p>

            <br />
            <br />
            <hr className="border-line" />
            <br />
            <br />

            <h4 className="title">The Power of Tailoring</h4>

            <p className="paragraph-1">
              Above all, tailoring transforms a suit into something uniquely yours. Adjustments in shoulders, waist, and length
              ensure it fits seamlessly to your body. A perfectly tailored suit becomes an investment in presence — leaving a
              strong, lasting impression in both professional and personal moments.
            </p>
            <br />
            <br />
            <br />

            <a href="#article-page">
              <ButtonDemo text="back to top" className=" border border-secondary-100 !min-w-[280px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const DecorativeSection = () => {
  const isMobile = useIsMobile();
  const [inView1, setIsInView1] = useState(false);

  return (
    <motion.section
      className={`relative min-h-[550px] sm:h-[100vh] ${inView1 ? "lazy-animate" : ""} `}
      viewport={{ amount: 0.3 }}
      onViewportEnter={() => setIsInView1(true)}
      data-lazy="fade"
    >
      <Image
        src={isMobile ? articleDecorativeMobileCoverImage : articleDecorativeCoverImage}
        fill={true}
        alt="background image"
        className="absolute top-0 left-0 w-full h-full object-cover object-["
      />
    </motion.section>
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
