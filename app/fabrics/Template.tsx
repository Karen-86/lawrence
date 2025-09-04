"use client";

import React, { useState } from "react";
import Image from "next/image";
import localData from "@/localData";
import { ButtonDemo, Navbar } from "@/components/index";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const {
  fabricsCoverImage,
  fabricDecorativeCoverImage,
  fabricsSample1Image,
  fabricsSample2Image,
  fabricsSample3Image,
  fabricsSample4Image,
  fabricsSample5Image,
  fabricsSample6Image,

  partnersSample1Image,
  partnersSample2Image,
  partnersSample3Image,
  partnersSample4Image,
  partnersSample5Image,
  partnersSample6Image,
} = localData.images;

const Template = () => {
  return (
    <main className="fabrics-page">
      <header className="hero  min-h-[100vh] flex flex-col">
        <Navbar>
          <div className="breadcrumbs  border-y border-line py-4 sm:py-5">
            <div className="container flex items-center gap-2">
              <Link href="/" className="link text-xs font-medium px-1 underline">
                Home
              </Link>
              <div className="dot w-1 h-1 rounded-full bg-dark"></div>
              <div className="link text-xs font-medium px-1 pointer-events-none text-secondary-500">Our Fabrics</div>
            </div>
          </div>
        </Navbar>
        <ShowcaseSection />
      </header>
      <PartnersSection />
      <hr className="border-line" />
      <LuxurySection />
      <DecorativeSection />
      <FabricsCatalogSection />
    </main>
  );
};

const ShowcaseSection = () => {
  const [inView1, setIsInView1] = useState(false);

  return (
    <div className=" flex-1  pb-[2rem]  flex flex-col items-center ">
      <motion.div
        className={`flex flex-1 border hero-center  bg-cover w-full relative  py-[8rem] sm:py-[4rem] 4xl:py-[8rem]  ${
          inView1 ? "lazy-animate" : ""
        } `}
        viewport={{ amount: 0.3 }}
        onViewportEnter={() => setIsInView1(true)}
        data-lazy="fade"
      >
        <Image
          src={fabricsCoverImage}
          fill={true}
          alt="background image"
          className="absolute top-0 left-0 w-full h-full object-cover "
        />
        <div className="overlay absolute bg-[rgba(0,0,0,0.3)] sm:hidden top-0 left-0 w-full h-full"></div>
        <div className="container flex-1 relative flex gap-10 flex-col lg:flex-row items-center justify-center ">
          <div className="showcase-content text-white text-center ">
            <div className="text-[0.625rem] sm:text-sm uppercase mb-[2rem]">our partners</div>
            <h1 className="text-[2.188rem] leading-[1.1] sm:text-4xl max-w-[400px] sm:max-w-[500px]">
              Discover the world’s finest fabrics
            </h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const PartnersSection = () => {
  return (
    <section className="partners !pb-[4.5rem] !pt-[3rem]" id="partners">
      <div className="container">
        <h2 className="subtitle text-center !mb-[4.5rem]">Our fabric partners</h2>
        <div className="font-baskervville flex gap-15 xl:gap-10 flex-wrap  justify-center  xl:justify-between mx-auto mb-[2.8rem] sm:mb-[4.5rem]">
          <img className="max-w-[190px] max-h-[60px] object-contain" src={partnersSample1Image} alt="" />
          <img className="max-w-[190px] max-h-[60px] object-contain" src={partnersSample2Image} alt="" />
          <img className="max-w-[190px] max-h-[60px] object-contain" src={partnersSample3Image} alt="" />
          <img className="max-w-[190px] max-h-[60px] object-contain" src={partnersSample4Image} alt="" />
          <img className="max-w-[190px] max-h-[60px] object-contain" src={partnersSample5Image} alt="" />
          <img className="max-w-[190px] max-h-[60px] object-contain" src={partnersSample6Image} alt="" />
        </div>
        <div className="flex justify-center">
          <Link href="/fabrics" className="custom-link">
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
};

const LuxurySection = () => {
  return (
    <section className="luxury !pb-[2rem] xl:!pb-[9rem] 4xl:!pb-[13rem]" id="luxury">
      <div className="container">
        <div className="luxury-content lg:flex  justify-between gap-20">
          <h6 className="subtitle whitespace-nowrap">Heritage & Luxury</h6>
          <div className="col max-w-[900px] 4xl:max-w-[1100px]">
            <h2 className="display-2 mb-11 sm:mb-16">
              At Lawrence & Winslade, we work exclusively with the world’s most prestigious mills to craft garments of enduring
              elegance
            </h2>
            <p className="paragraph-1 max-w-[500px] mb-23">
              We partner with the most esteemed mills in Italy and England, each renowned for heritage, innovation, and
              craftsmanship. From the lightest summer wools to luxurious cashmeres, our collection offers a fabric for every
              occasion and season.
            </p>

            <div className="dot w-2 h-2 bg-dark rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DecorativeSection = () => {
  const [inView1, setIsInView1] = useState(false);

  return (
    <motion.section
      className={`relative min-h-[550px] sm:h-[100vh] ${inView1 ? "lazy-animate" : ""} `}
      viewport={{ amount: 0.3 }}
      onViewportEnter={() => setIsInView1(true)}
      data-lazy="fade"
    >
      <Image
        src={fabricDecorativeCoverImage}
        fill={true}
        alt="background image"
        className="absolute top-0 left-0 w-full h-full object-cover "
      />
    </motion.section>
  );
};

const FabricsSample = ({ image, icon, description, isLast }: any) => {
  const [inView1, setIsInView1] = useState(false);

  return (
    <motion.div
      className={`fabrics-catalog ${!isLast ? "mb-[60px] sm:mb-[150px] 4xl:mb-[200px]": ""}  ${inView1 ? "lazy-animate" : ""} `}
      viewport={{ amount: 0.3 }}
      onViewportEnter={() => setIsInView1(true)}
      data-lazy="fade"
    >
      <div className=" flex items-center justify-center  relative h-[400px] sm:h-[500px] 4xl:h-[610px] mb-[1.5rem] sm:mb-[2.5rem] 4xl:mb-[4.625rem]">
        <Image src={image} fill={true} alt="image" className="object-cover   absolute top-0 left-0 w-full h-full" />
        <ButtonDemo text="shop now" className="relative " />
      </div>
      <div className="fabrics-catalog-footer sm:flex justify-between gap-20">
        <img className="max-w-[150px] ms:max-w-[190px] max-h-[55px] sm:max-h-[60px] object-contain mb-[1rem]" src={icon} alt="" />
        <p className="fabrics-catalog-description paragraph-1 max-w-[800px]">{description}</p>
      </div>
    </motion.div>
  );
};

const FabricsCatalogSection = () => {
  const fabricsCatalog = [
    {
      image: fabricsSample1Image,
      icon: partnersSample1Image,
      description: `We partner with the most esteemed mills in Italy and England, each renowned for heritage, innovation, and
              craftsmanship. From the lightest summer wools to luxurious cashmeres, our collection offers a fabric for every
              occasion and season.`,
    },
    {
      image: fabricsSample2Image,
      icon: partnersSample2Image,
      description: ` An icon of Italian excellence, Loro Piana is celebrated for sourcing the rarest natural fibres, including baby
              cashmere and vicuña. Their fabrics are prized for their softness, sophistication, and understated elegance, making
              them a global benchmark for luxury tailoring.`,
    },
    {
      image: fabricsSample3Image,
      icon: partnersSample3Image,
      description: ` Since 1865, Reda has been at the forefront of Italian textile innovation. Blending traditional craftsmanship with
              advanced technology, Reda creates fine merino wool fabrics that balance contemporary performance with timeless
              style.`,
    },
    {
      image: fabricsSample4Image,
      icon: partnersSample4Image,
      description: `Established in 1836 on Savile Row, Holland & Sherry represents the pinnacle of English fabric making. From superfine
              worsteds to luxurious silks and cashmeres, their cloths are synonymous with sophistication and bespoke tradition.`,
    },
    {
      image: fabricsSample5Image,
      icon: partnersSample5Image,
      description: `  Scabal is renowned for its creativity and innovation, producing fabrics woven with luxury fibres and bold designs.
              With a heritage rooted in tailoring excellence, Scabal cloths are chosen by those who appreciate individuality and
              refinement.`,
    },
    {
      image: fabricsSample6Image,
      icon: partnersSample6Image,
      description: `   Based in the heart of Yorkshire’s textile district, Huddersfield Fine Worsteds embodies British heritage and
              craftsmanship. Their fabrics, blending durability with elegance, are a trusted choice for discerning gentlemen
              worldwide.`,
      isLast: true
    },
  ];

  return (
    <section className="">
      <div className="container max-w-[1280px] 4xl:max-w-[calc(1380px+160px)]">
        <h6 className="subtitle text-center 4xl:!mb-20">World’s Finest Fabrics</h6>
        <h2 className="display-2 text-center mx-auto max-w-[400px] sm:max-w-[600px] 4xl:max-w-[700px] mb-[3.75rem] sm:mb-[5rem]">
          Every bespoke suit begins with fabric
        </h2>

        {fabricsCatalog.map((item, index) => {
          return <FabricsSample key={index} {...item} />;
        })}

        {/* <div className="fabrics-catalog mb-[60px] sm:mb-[150px] 4xl:mb-[200px]">
          <div className=" flex items-center justify-center  relative h-[400px] sm:h-[500px] 4xl:h-[610px] mb-[1.5rem] sm:mb-[2.5rem] 4xl:mb-[4.625rem]">
            <Image
              src={fabricsSample1Image}
              fill={true}
              alt="image"
              className="object-cover   absolute top-0 left-0 w-full h-full"
            />
            <ButtonDemo text="shop now" className="relative " />
          </div>
          <div className="fabrics-catalog-footer sm:flex justify-between gap-20">
            <img
              className="max-w-[150px] ms:max-w-[190px] max-h-[55px] sm:max-h-[60px] object-contain mb-[1rem]"
              src={partnersSample1Image}
              alt=""
            />
            <p className="fabrics-catalog-description paragraph-1 max-w-[800px]">
              We partner with the most esteemed mills in Italy and England, each renowned for heritage, innovation, and
              craftsmanship. From the lightest summer wools to luxurious cashmeres, our collection offers a fabric for every
              occasion and season.
            </p>
          </div>
        </div> */}

        {/* <div className="fabrics-catalog mb-[60px] sm:mb-[150px] 4xl:mb-[200px]">
          <div className=" flex items-center justify-center  relative h-[400px] sm:h-[500px] 4xl:h-[610px] mb-[1.5rem] sm:mb-[2.5rem] 4xl:mb-[4.625rem]">
            <Image
              src={fabricsSample2Image}
              fill={true}
              alt="image"
              className="object-cover   absolute top-0 left-0 w-full h-full"
            />
            <ButtonDemo text="shop now" className="relative " />
          </div>
          <div className="fabrics-catalog-footer sm:flex justify-between gap-20">
            <img
              className="max-w-[150px] ms:max-w-[190px] max-h-[55px] sm:max-h-[60px] object-contain mb-[1rem]"
              src={partnersSample2Image}
              alt=""
            />
            <p className="fabrics-catalog-description paragraph-1 max-w-[800px]">
              An icon of Italian excellence, Loro Piana is celebrated for sourcing the rarest natural fibres, including baby
              cashmere and vicuña. Their fabrics are prized for their softness, sophistication, and understated elegance, making
              them a global benchmark for luxury tailoring.
            </p>
          </div>
        </div> */}

        {/* <div className="fabrics-catalog mb-[60px] sm:mb-[150px] 4xl:mb-[200px]">
          <div className=" flex items-center justify-center  relative h-[400px] sm:h-[500px] 4xl:h-[610px] mb-[1.5rem] sm:mb-[2.5rem] 4xl:mb-[4.625rem]">
            <Image
              src={fabricsSample3Image}
              fill={true}
              alt="image"
              className="object-cover   absolute top-0 left-0 w-full h-full"
            />
            <ButtonDemo text="shop now" className="relative " />
          </div>
          <div className="fabrics-catalog-footer sm:flex justify-between gap-20">
            <img
              className="max-w-[150px] ms:max-w-[190px] max-h-[55px] sm:max-h-[60px] object-contain mb-[1rem]"
              src={partnersSample3Image}
              alt=""
            />
            <p className="fabrics-catalog-description paragraph-1 max-w-[800px]">
              Since 1865, Reda has been at the forefront of Italian textile innovation. Blending traditional craftsmanship with
              advanced technology, Reda creates fine merino wool fabrics that balance contemporary performance with timeless
              style.
            </p>
          </div>
        </div> */}

        {/* <div className="fabrics-catalog mb-[60px] sm:mb-[150px] 4xl:mb-[200px]">
          <div className=" flex items-center justify-center  relative h-[400px] sm:h-[500px] 4xl:h-[610px] mb-[1.5rem] sm:mb-[2.5rem] 4xl:mb-[4.625rem]">
            <Image
              src={fabricsSample4Image}
              fill={true}
              alt="image"
              className="object-cover   absolute top-0 left-0 w-full h-full"
            />
            <ButtonDemo text="shop now" className="relative " />
          </div>
          <div className="fabrics-catalog-footer sm:flex justify-between gap-20">
            <img
              className="max-w-[150px] ms:max-w-[190px] max-h-[55px] sm:max-h-[60px] object-contain mb-[1rem]"
              src={partnersSample5Image}
              alt=""
            />
            <p className="fabrics-catalog-description paragraph-1 max-w-[800px]">
              Established in 1836 on Savile Row, Holland & Sherry represents the pinnacle of English fabric making. From superfine
              worsteds to luxurious silks and cashmeres, their cloths are synonymous with sophistication and bespoke tradition.
            </p>
          </div>
        </div> */}

        {/* <div className="fabrics-catalog mb-[60px] sm:mb-[150px] 4xl:mb-[200px]">
          <div className=" flex items-center justify-center  relative h-[400px] sm:h-[500px] 4xl:h-[610px] mb-[1.5rem] sm:mb-[2.5rem] 4xl:mb-[4.625rem]">
            <Image
              src={fabricsSample5Image}
              fill={true}
              alt="image"
              className="object-cover   absolute top-0 left-0 w-full h-full"
            />
            <ButtonDemo text="shop now" className="relative " />
          </div>
          <div className="fabrics-catalog-footer sm:flex justify-between gap-20">
            <img
              className="max-w-[150px] ms:max-w-[190px] max-h-[55px] sm:max-h-[60px] object-contain mb-[1rem]"
              src={partnersSample6Image}
              alt=""
            />
            <p className="fabrics-catalog-description paragraph-1 max-w-[800px]">
              Scabal is renowned for its creativity and innovation, producing fabrics woven with luxury fibres and bold designs.
              With a heritage rooted in tailoring excellence, Scabal cloths are chosen by those who appreciate individuality and
              refinement.
            </p>
          </div>
        </div> */}

        {/* <div className="fabrics-catalog">
          <div className=" flex items-center justify-center  relative h-[400px] sm:h-[500px] 4xl:h-[610px] mb-[1.5rem] sm:mb-[2.5rem] 4xl:mb-[4.625rem]">
            <Image
              src={fabricsSample6Image}
              fill={true}
              alt="image"
              className="object-cover   absolute top-0 left-0 w-full h-full"
            />
            <ButtonDemo text="shop now" className="relative " />
          </div>
          <div className="fabrics-catalog-footer sm:flex justify-between gap-20">
            <img
              className="max-w-[150px] ms:max-w-[190px] max-h-[55px] sm:max-h-[60px] object-contain mb-[1rem]"
              src={partnersSample4Image}
              alt=""
            />
            <p className="fabrics-catalog-description paragraph-1 max-w-[800px]">
              Based in the heart of Yorkshire’s textile district, Huddersfield Fine Worsteds embodies British heritage and
              craftsmanship. Their fabrics, blending durability with elegance, are a trusted choice for discerning gentlemen
              worldwide.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Template;
