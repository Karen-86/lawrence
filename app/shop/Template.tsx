"use client";

import React, { useEffect, useState } from "react";
import {
  ButtonDemo,
  Navbar,
  CarouselDemo,
  CheckboxDemo,
  SelectScrollable,
  ShopCard,
  ActionCard,
  DialogDemo,
  FAQSection,
  FollowUsSection
} from "@/components/index";
import Link from "next/link";
import Image from "next/image";
import localData from "@/localData";
import { motion } from "framer-motion";
import { useGlobalContext } from "@/context";
import { useIsMobile } from "@/hooks/useIsMobile";

const {
  shopSample1Image,
  shopSample2Image,
  shopSample3Image,
  testimonialSample1Image,
  testimonialSample2Image,
  followUsDecorativeCoverImage,
} = localData.images;
const { gridTwoIcon, gridThreeIcon, gridFourIcon, filterIcon } = localData.svgs;

const Template = () => {
  return (
    <main className="about-page">
      <header className="hero flex flex-col">
        <Navbar>
          <div className="breadcrumbs  border-y border-line py-4 sm:py-5">
            <div className="container flex items-center gap-2">
              <Link href="/" className="link text-xs font-medium px-1 hover:underline">
                Home
              </Link>
              <div className="dot w-1 h-1 rounded-full bg-dark"></div>
              <div className="link text-xs font-medium px-1 pointer-events-none text-secondary-500">Shop</div>
            </div>
          </div>
        </Navbar>
        <ShowcaseSection />
      </header>
      <ShopSection />
      <hr className="border-line" />
      {/* <TestimonialsSection />
      <hr className="border-line" />
      <LocationSection />
      <hr className="border-line" />
      <FAQSection />
      <hr className="border-line" />
      <JournalSection />
      <hr className="border-line" /> */}
      <FollowUsSection/>
    </main>
  );
};

const CarouselItem = ({ image = null, title = "", link = "", snap = "" }: any) => {
  const [inView1, setIsInView1] = useState(false);

  return (
    <div className="flex-1 pb-[2rem] flex flex-col items-center">
      <motion.div
        className={`flex flex-1 border hero-center bg-cover w-full relative py-[7rem] sm:py-[6rem] ${
          inView1 ? "lazy-animate" : ""
        } `}
        viewport={{ amount: 0.3 }}
        onViewportEnter={() => setIsInView1(true)}
        data-lazy="fade"
      >
        <Image src={image} fill={true} alt="background image" className="absolute top-0 left-0 w-full h-full object-cover " />
        <div className="absolute z-20 bottom-0 right-0 px-10 py-5 text-white italic text-4xl font-baskervville">{snap}</div>
        {/* <div className="overlay absolute bg-[rgba(0,0,0,0.3)] sm:hidden top-0 left-0 w-full h-full"></div> */}
        <div className="container flex-1 relative">
          <div className="showcase-content text-white flex flex-col items-center md:items-start">
            <div className="text-[0.625rem] sm:text-sm uppercase mb-[2rem]">Luxury</div>
            <h1 className="text-[2.188rem] leading-[1.1] sm:text-4xl max-w-[400px] sm:max-w-[500px] mb-[2rem]">{title}</h1>

            <div className="flex">
              <Link href={link}>
                <ButtonDemo
                  text="view suits"
                  className=" !bg-[rgba(217,217,217,0.1)] border border-[rgba(255,255,255,0.5)] !text-white  backdrop-blur-md hover:!bg-[rgba(217,217,217,0.15)]"
                />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ShowcaseSection = () => {
  const content = [
    {
      image: shopSample1Image,
      title: "Wedding Bespoke",
      link: "/gallery/wedding-bespoke",

      snap: (
        <div className="tracking-[2px] ">
          1<span className="text-sm  ml-1">/</span>
          <span className="text-lg">3</span>
        </div>
      ),
    },
    {
      image: shopSample2Image,
      title: "Formal Bespoke",
      link: "/gallery/formal-bespoke",

      snap: (
        <div className="tracking-[2px] ">
          2<span className="text-sm  ml-1">/</span>
          <span className="text-lg">3</span>
        </div>
      ),
    },
    {
      image: shopSample3Image,
      title: "Casual Bespoke",
      link: "/gallery/casual-bespoke",

      snap: (
        <div className="tracking-[2px] ">
          3<span className="text-sm  ml-1">/</span>
          <span className="text-lg">3</span>
        </div>
      ),
    },
  ];

  return (
    <CarouselDemo
      className="custom-carousel !mb-0"
      contentClassName="!-ml-0 "
      itemClassName="!pl-0"
      noAngles={true}
      autoplay={true}
      noLine={true}
      loop={true}
      anglesClassName=""
      items={content}
      lineClassName="!bottom-[-40px] sm:!bottom-[-70px]"
    >
      {({ item, index }) => <CarouselItem {...item} index={index} />}
    </CarouselDemo>
  );
};

const Filter = ({ className = "" }) => {
  return (
    <div className={` filter  xl:max-w-[280px] 4xl:max-w-[300px] flex-1 ${className}`}>
      <h2 className="subtitle">Filters</h2>
      <div className="filter-content">
        <div className="col">
          <div className="text-[1.125rem] font-semibold mb-[2rem]">Type</div>
          <div className="flex gap-5 justify-between items-center mb-[1rem]">
            <div className="text-secondary-800 text-sm sm:text-[1rem]"> All Suits</div>
            <CheckboxDemo className="" color="success" />
          </div>
          <div className="flex gap-5 justify-between items-center mb-[1rem]">
            <div className="text-secondary-800 text-sm sm:text-[1rem]">Formal Bespoke</div>
            <CheckboxDemo className="" color="success" />
          </div>
          <div className="flex gap-5 justify-between items-center mb-[1rem]">
            <div className="text-secondary-800 text-sm sm:text-[1rem]">Casual Bespoke</div>
            <CheckboxDemo className="" color="success" />
          </div>
          <div className="flex gap-5 justify-between items-center mb-[1rem]">
            <div className="text-secondary-800 text-sm sm:text-[1rem]">Wedding Bespoke</div>
            <CheckboxDemo className="" color="success" />
          </div>
          <div className="flex gap-5 justify-between items-center mb-[1rem]">
            <div className="text-secondary-800 text-sm sm:text-[1rem]">Women</div>
            <CheckboxDemo className="" color="success" />
          </div>
        </div>

        <br />
        <hr className="border-line" />
        <br />

        <div className="col">
          <div className="text-[1.125rem] font-semibold mb-[2rem]">Detail</div>

          <div className="flex gap-5 justify-between items-center mb-[1rem]">
            <div className="text-secondary-800 text-sm sm:text-[1rem]">All</div>
            <CheckboxDemo className="" color="success" />
          </div>
          <div className="flex gap-5 justify-between items-center mb-[1rem]">
            <div className="text-secondary-800 text-sm sm:text-[1rem]">Suits</div>
            <CheckboxDemo className="" color="success" />
          </div>
          <div className="flex gap-5 justify-between items-center mb-[1rem]">
            <div className="text-secondary-800 text-sm sm:text-[1rem]">Jackets</div>
            <CheckboxDemo className="" color="success" />
          </div>
          <div className="flex gap-5 justify-between items-center mb-[1rem]">
            <div className="text-secondary-800 text-sm sm:text-[1rem]">Trousers</div>
            <CheckboxDemo className="" color="success" />
          </div>
          <div className="flex gap-5 justify-between items-center mb-[1rem]">
            <div className="text-secondary-800 text-sm sm:text-[1rem]">Shirts</div>
            <CheckboxDemo className="" color="success" />
          </div>
        </div>
        <br />
        <hr className="border-line" />
        <br />

        <div className="col">
          <div className="text-[1.125rem] font-semibold mb-[2rem]">Fabric</div>

          <div className="flex gap-5 justify-between items-center mb-[1rem]">
            <div className="text-secondary-800 text-sm sm:text-[1rem]">All</div>
            <CheckboxDemo className="" color="success" />
          </div>
          <div className="flex gap-5 justify-between items-center mb-[1rem]">
            <div className="text-secondary-800 text-sm sm:text-[1rem]">Dormeuil</div>
            <CheckboxDemo className="" color="success" />
          </div>
          <div className="flex gap-5 justify-between items-center mb-[1rem]">
            <div className="text-secondary-800 text-sm sm:text-[1rem]">Loro Piana</div>
            <CheckboxDemo className="" color="success" />
          </div>
          <div className="flex gap-5 justify-between items-center mb-[1rem]">
            <div className="text-secondary-800 text-sm sm:text-[1rem]">Reda</div>
            <CheckboxDemo className="" color="success" />
          </div>
          <div className="flex gap-5 justify-between items-center mb-[1rem]">
            <div className="text-secondary-800 text-sm sm:text-[1rem]">Holland & Sherry</div>
            <CheckboxDemo className="" color="success" />
          </div>
          <div className="flex gap-5 justify-between items-center mb-[1rem]">
            <div className="text-secondary-800 text-sm sm:text-[1rem]">Scabal</div>
            <CheckboxDemo className="" color="success" />
          </div>
          <div className="flex gap-5 justify-between items-center mb-[1rem]">
            <div className="text-secondary-800 text-sm sm:text-[1rem]">Huddersfield Fine Worsteds</div>
            <CheckboxDemo className="" color="success" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ShopSection = () => {
  const { shopCards } = useGlobalContext();
  const [grid, setGrid] = useState("3");
  const [gridStyle, setGridStyle] = useState("1fr 1fr 1fr");
  const isIpad = useIsMobile(768);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isIpad) setGrid("2");
    if (isMobile) setGrid("1");
    if (isIpad) setGridStyle("1fr 1fr");
    if (isMobile) setGridStyle("1fr");
  }, [isIpad, isMobile]);

  const callback = (item: any) => {
    console.log(item.value);
  };

  const [showAll, setShowAll] = useState(false);

  const itemsCount = grid === "2" ? 6 : grid === "3" ? 9 : grid === "4" ? 12 : 9;

  const visibleCards = showAll ? shopCards : shopCards.slice(0, itemsCount);

  return (
    <section className="shop-section">
      <div className="container">
        <div className="flex gap-[6%]">
          <Filter className="hidden xl:block" />
          <div className="shop-content  flex-1">
            <div className="bar flex justify-between items-center mb-[1.6rem]">
              <h2 className="subtitle !mb-0">All suits</h2>
              <div className="options flex gap-[10px]">
                <DialogDemo
                  trigger={
                    <div className={`lg:hidden border border-line p-[8px] cursor-pointer hover:border-[rgba(0,0,0,0.2)]`}>
                      {filterIcon}
                    </div>
                  }
                >
                  {(closeDialog) => (
                    <div className="pb-[4rem] pt-[1rem]">
                      {/* <h2 className="text-2xl">Title</h2> */}
                      {/* <p>Dialog discription</p> */}
                      <Filter />
                      {/* <br /> */}
                      {/* <ButtonDemo className="ml-auto flex" onClick={closeDialog} text="Close" variant="outline" /> */}
                    </div>
                  )}
                </DialogDemo>

                <SelectScrollable
                  defaultItems={[
                    {
                      label: "View All",
                      value: "View All",
                      isSelected: true,
                    },
                    {
                      label: "Low - High",
                      value: "Low - High",
                    },
                    {
                      label: "High - Low",
                      value: "High - Low",
                    },
                    {
                      label: "Most Recent",
                      value: "Most Recent",
                    },
                  ]}
                  callback={callback}
                  triggerClassName={`selectScrollable-trigger-custom  max-w-[192px]`}
                  contentClassName={`selectScrollable-content-custom`}
                />

                <div
                  className={`hidden md:block border border-line p-[8px] cursor-pointer hover:border-[rgba(0,0,0,0.2)] ${
                    grid == "2" ? "text-white bg-dark" : ""
                  }`}
                  onClick={() => {
                    setGrid("2");
                    setGridStyle("1fr 1fr");
                  }}
                >
                  {gridTwoIcon}
                </div>
                <div
                  className={`hidden md:block border border-line p-[8px] cursor-pointer hover:border-[rgba(0,0,0,0.2)] ${
                    grid == "3" ? "text-white bg-dark" : ""
                  }`}
                  onClick={() => {
                    setGrid("3");
                    setGridStyle("1fr 1fr 1fr");
                  }}
                >
                  {gridThreeIcon}
                </div>
                <div
                  className={`hidden lg:block border border-line p-[8px] cursor-pointer hover:border-[rgba(0,0,0,0.2)] ${
                    grid == "4" ? "text-white bg-dark" : ""
                  }`}
                  onClick={() => {
                    setGrid("4");
                    setGridStyle("1fr 1fr 1fr 1fr");
                  }}
                >
                  {gridFourIcon}
                </div>
              </div>
            </div>

            {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-12"> */}
            <div
              style={{ gridTemplateColumns: gridStyle }}
              className={`grid  mb-[80px] ${
                grid == "2" ? "gap-[50px]" : grid == "3" ? "gap-[40px]" : grid == "4" ? "gap-[30px]" : "gap-[60px]"
              }`}
            >
              {visibleCards.map((item: any, index: any) => {
                return <ShopCard key={index} {...item} />;
              })}
            </div>
            {!showAll && shopCards.length > itemsCount && (
              <div className="flex justify-center">
                <ButtonDemo
                  onClick={() => setShowAll(true)}
                  text={`View More (${shopCards.length - itemsCount})`}
                  className=" border border-secondary-100 !min-w-[280px]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => {
  return (
    <section className="location " id="location">
      <div className="container">
        <h3 className="subtitle text-center 4xl:!mb-[5rem]">Location</h3>

        <h2 className="display-2 text-center max-w-[900px] 4xl:max-w-[1200px] mx-auto mb-[3rem] 4xl:mb-[4rem]">
          Our showroom in Knightsbridge offers a luxurious, welcoming environment to explore our process and meet our team
        </h2>
        <p className="paragraph-1 text-center max-w-[470px] mx-auto mb-[2.5rem] sm:mb-[5.5rem]">
          Located near Knightsbridge station and Hyde Park Corner, it’s just a 10-minute walk from Victoria.
        </p>
      </div>

      <div className="map-wrapper h-[400px] sm:h-[80vh] mb-[2.5rem] sm:mb-[5rem] ">
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

      <div className="container flex justify-center">
        <Link href="/booking">
          <ButtonDemo text="Book a Fitting" color="black" className="" />
        </Link>
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
        <div className="lg:flex lg:gap-10">
          <h3 className="subtitle text-center lg:text-start 4xl:!mb-[5rem] min-w-[20%] 4xl:min-w-[17%]">The Journal</h3>
          <div className="grid md:grid-cols-2 gap-[20px] xl:gap-[50px] flex-1">
            <ActionCard {...actionCards[0]} />
            <ActionCard {...actionCards[1]} />
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const [inView1, setIsInView1] = useState(false);
  const [inView2, setIsInView2] = useState(false);

  return (
    <section className="testimonials " id="testimonials">
      <div className=" sm:px-[45px]">
        <h2 className="subtitle text-center">TESTIMONIALS</h2>

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
            } `}
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
              inView2 ? "lazy-animate" : ""
            } `}
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

        <div className="flex justify-center mt-15 sm:mt-20">
          <Link href="/testimonials">
            <ButtonDemo text="view more" className=" border border-secondary-100 !min-w-[280px]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Template;
