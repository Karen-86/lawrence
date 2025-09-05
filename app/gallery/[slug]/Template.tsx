"use client";

import React, { useState } from "react";
import Image from "next/image";
import localData from "@/localData";
import { ButtonDemo, Navbar, ActionCard, CarouselDemo,FollowUsSection } from "@/components/index";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useGlobalContext } from "@/context";
import { useParams } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const { followUsDecorativeCoverImage } = localData.images;

const Template = () => {
  return (
    <main className="gallery-page">
      <header className="hero">
        <Navbar>
          <div className="breadcrumbs  border-y border-line py-4 sm:py-5">
            <div className="container flex items-center gap-2">
              <Link href="/" className="link text-xs font-medium px-1 hover:underline">
                Home
              </Link>
              <div className="dot w-1 h-1 rounded-full bg-dark"></div>
              <Link href="/gallery" className="link text-xs font-medium px-1 hover:underline">
                Gallery
              </Link>
              <div className="dot w-1 h-1 rounded-full bg-dark"></div>
              <div className="link text-xs font-medium px-1 pointer-events-none text-secondary-500">Gallery</div>
            </div>
          </div>
        </Navbar>
      </header>
      <GallerySection />
      <hr className="border-line" />
      <OtherCategorySection />
      <hr className="border-line" />
      <FollowUsSection />
    </main>
  );
};

const GalleryItem = ({ image = null, className = "" }: any) => {
  const [inView1, setIsInView1] = useState(false);

  return (
    <motion.div
      className={`${className} gallery-item relative h-0 w-fll pt-[135%] ${inView1 ? "lazy-animate" : ""} `}
      viewport={{ amount: 0.3 }}
      onViewportEnter={() => setIsInView1(true)}
      data-lazy="fade"
    >
      <Image src={image} fill={true} alt="image" className="object-cover absolute top-0 left-0 w-full h-full" />
    </motion.div>
  );
};

const GallerySection = () => {
  const { categories } = useGlobalContext();
  const { slug } = useParams();

  const currentCategory = categories.find((item: any) => item.slug == slug);

  const [showAll, setShowAll] = useState(false);

  const visibleGalleryItems = showAll ? currentCategory.galleryItems : currentCategory.galleryItems.slice(0, 12);
  return (
    <section className="xl:!pt-[7rem] 4xl:!pt-[9rem]">
      <div className="container">
        <h6 className="subtitle text-center 4xl:!mb-20">gallery</h6>
        <h2 className="display-2 text-center mx-auto  mb-[3.75rem] sm:mb-[5rem]">{currentCategory.title}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-[6px]">
          {visibleGalleryItems.map((item: any, index: any) => {
            return <GalleryItem key={index} {...item} />;
          })}
        </div>
        {!showAll && currentCategory.galleryItems.length > 12 && (
          <div className="flex justify-center mt-[5rem]">
            <ButtonDemo
              onClick={() => setShowAll(true)}
              text={`View More (${currentCategory.galleryItems.length - 12})`}
              className=" border border-secondary-100 !min-w-[280px]"
            />
          </div>
        )}
      </div>
    </section>
  );
};

const OtherCategorySection = () => {
  const { categories } = useGlobalContext();

  return (
    <section>
      <div className="container">
        <div className="max-w-[1160px] 4xl:max-w-full mx-auto">
          <div className="lg:flex lg:gap-10 relative overflow-hidden">
            <h3 className="subtitle text-center lg:text-start 4xl:!mb-[5rem] min-w-[20%] 4xl:min-w-[17%]">other category</h3>
            <div className="flex-1 ">
              <CarouselDemo
                className="custom-carousel static !mb-[160px] lg:!mb-[70px]"
                // contentClassName=" transition-transform duration-[3000ms] ease-linear !-ml-20 transform-gpu will-change-transform"
                contentClassName="!-ml-10 "
                itemClassName="!pl-10 md:basis-1/2"
                noAngles={true}
                // autoplay={isMobile}
                loop={true}
                anglesClassName=""
                items={categories}
                lineClassName="!bottom-[100px] lg:!bottom-0 !left-0"
                customAngles={
                  <div
                    className={`carousel-angles absolute bottom-0 lg:bottom-[80px] left-[50%] lg:left-0 transform-[translateX(-50%)] lg:transform-none  pointer-events-none w-[170px] xl:w-[230px] h-[70px] xl:h-[100px] `}
                  >
                    <CarouselPrevious className="pointer-events-auto w-[70px] h-[70px] xl:w-[100px] xl:h-[100px] transform-[rotateZ(180deg)] bottom-0 left-0 cursor-pointer " />
                    <CarouselNext className="pointer-events-auto w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]  cursor-pointer  bottom-0  right-0" />
                  </div>
                }
              >
                {({ item, index }) => <ActionCard {...item} isBarHidden={true} />}
              </CarouselDemo>
              {/* <ActionCard {...categories[0]} isBarHidden={true} />
            <ActionCard {...categories[1]} isBarHidden={true} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template;
