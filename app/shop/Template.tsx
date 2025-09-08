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


export default Template;
