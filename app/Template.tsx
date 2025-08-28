"use client";

import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "@/components/index.js";
import { ButtonDemo, CustomLink, CarouselDemo, ServiceCard, DifferenceCard } from "@/components/index.js";
import localData from "@/localData";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

const {
  heroCoverImage,
  bespokeCoverImage,

  serviceSample1Image,
  serviceSmallSample1Image,
  serviceSample2Image,
  serviceSmallSample2Image,
  serviceSample3Image,
  serviceSmallSample3Image,

  featuredSample1Image,
  featuredSample2Image,
  featuredSample3Image,
  featuredSample4Image,

  testimonialSample1Image,
  testimonialSample2Image,

  partnersSample1Image,
  partnersSample2Image,
  partnersSample3Image,
  partnersSample4Image,
  partnersSample5Image,
  partnersSample6Image,
} = localData.images;

const { precisionIcon, consultationIcon, fabricsIcon, bookingIcon } = localData.svgs;

const Template = () => {
  return (
      <main className="home-page">
        <HeroSection />
        <PartnersSection />
        <FeaturedWorkSection />
        {/* <hr className="border-line" /> */}
        <ServicesSection />
        <DifferenceSection />
        <BespokeSection />
        <TestimonialsSection />
      </main>
  );
};

const HeroSection = () => {
  const [inView1, setIsInView1] = useState(false);
  return (
    <header className="hero sm:min-h-[100vh] pt-[140px] lg:pt-[190px] bg-[rgb(252,252,252)] py-[2rem]  flex flex-col items-center">
      <motion.div
        className={`flex-1 hero-center  bg-cover w-full relative flex items-end py-[8rem] sm:py-[4rem] 4xl:py-[8rem]  ${
          inView1 ? "lazy-animate" : ""
        }`}
        // style={{ backgroundImage: "url('/assets/images/rest/hero-cover.png')" }}
        viewport={{ amount: 0.3 }}
        onViewportEnter={() => setIsInView1(true)}
        data-lazy="fade"
      >
        <Image
          src={heroCoverImage}
          // width={1920}
          // height={720}
          fill={true}
          alt="background image"
          className="absolute top-0 left-0 w-full h-full object-cover [object-position:85%]"
        />
        <div className="overlay absolute bg-[rgba(0,0,0,0.3)] sm:hidden top-0 left-0 w-full h-full"></div>
        <div className="container   relative flex gap-10 flex-col lg:flex-row items-center sm:items-start lg:items-center justify-center lg:justify-between">
          <div className="hero-content text-white text-center sm:text-left">
            <div className="text-[0.625rem] sm:text-sm uppercase mb-[2rem]">Since 2011</div>
            <h1 className="text-[2.188rem] leading-[1.3] sm:text-4xl max-w-[300px] sm:max-w-none">
              Bespoke tailoring,
              <br /> crafted exclusively for you
            </h1>
          </div>
          <ButtonDemo text="Book a Fitting" className="" />
        </div>
      </motion.div>
    </header>
  );
};

const PartnersSection = () => {
  return (
    <section className="partners bg-[rgb(252,252,252)] !pb-[4.5rem] !pt-[3rem]" id="partners">
      <div className="container">
        <h2 className="subtitle text-center">Our fabric partners</h2>
        <ul className="font-baskervville flex gap-y-5 gap-x-5 sm:gap-x-17 flex-wrap justify-center mx-auto mb-[2.8rem] sm:mb-[4.5rem]">
          <li className=""><img src={partnersSample1Image} alt="" /></li>
          <li className=""><img src={partnersSample2Image} alt="" /></li>
          <li className=""><img src={partnersSample3Image} alt="" /></li>
          <li className=""><img src={partnersSample4Image} alt="" /></li>
          <li className=""><img src={partnersSample5Image} alt="" /></li>
          <li className=""><img src={partnersSample6Image} alt="" /></li>
         
        </ul>
        <div className="flex justify-center">
          <CustomLink text="VIEW ALL" className="" />
        </div>
      </div>
    </section>
  );
};

const FeaturedWorkSection = () => {
  const [inView1, setIsInView1] = useState(false);
  const [inView2, setIsInView2] = useState(false);
  const [inView3, setIsInView3] = useState(false);
  const [inView4, setIsInView4] = useState(false);
  return (
    <section className="featured-work " id="featured-work">
      <div className="container">
        <h2 className="subtitle text-center sm:text-left">FEATURED WORK</h2>

        <div className="grid md:grid-cols-2 gap-10 xl:gap-20  4xl:gap-35">
          <motion.div
            className={`image-wrapper relative w-full h-0 pt-[116%] ${inView1 ? "lazy-animate" : ""} `}
            viewport={{ amount: 0.3 }}
            onViewportEnter={() => setIsInView1(true)}
            data-lazy="fade"
          >
            <Image
              src={featuredSample1Image}
              fill={true}
              alt="image"
              className="absolute top-0 left-0 w-full h-full object-cover [object-position:85%]"
            />
          </motion.div>
          <motion.div
            className={`image-wrapper relative w-full h-0 pt-[116%] ${inView2 ? "lazy-animate" : ""} `}
            viewport={{ amount: 0.3 }}
            onViewportEnter={() => setIsInView2(true)}
            data-lazy="fade"
          >
            <Image
              src={featuredSample2Image}
              fill={true}
              alt="image"
              className="absolute top-0 left-0 w-full h-full object-cover [object-position:85%]"
            />
            <ButtonDemo
              text="BOOK A FITTING"
              className="absolute !bg-[rgba(217,217,217,0.1)] border border-[rgba(255,255,255,0.5)] !text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md hover:!bg-[rgba(217,217,217,0.15)]"
            />
          </motion.div>
          <motion.div
            className={`image-wrapper relative w-full h-0 pt-[116%] ${inView3 ? "lazy-animate" : ""} `}
            viewport={{ amount: 0.3 }}
            onViewportEnter={() => setIsInView3(true)}
            data-lazy="fade"
          >
            <Image
              src={featuredSample3Image}
              fill={true}
              alt="image"
              className="absolute top-0 left-0 w-full h-full object-cover [object-position:85%]"
            />
          </motion.div>
          <motion.div
            className={`image-wrapper relative w-full h-0 pt-[116%] ${inView4 ? "lazy-animate" : ""} `}
            viewport={{ amount: 0.3 }}
            onViewportEnter={() => setIsInView4(true)}
            data-lazy="fade"
          >
            <Image
              src={featuredSample4Image}
              fill={true}
              alt="image"
              className="absolute top-0 left-0 w-full h-full object-cover [object-position:85%]"
            />
          </motion.div>
        </div>
        <div className="flex justify-center mt-15 sm:mt-20">
          <ButtonDemo text="Explore the Gallery" className=" border border-secondary-100 !min-w-[280px]" />
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const content = [
    {
      bigImage: serviceSample1Image,
      smallImage: serviceSmallSample1Image,
      title: "Formal Bespoke",
      firstColTitle: "Attention to Every Detail",
      firstColDescritpion:
        "From lapels to lining, buttons to stitching, each element is carefully chosen and meticulously crafted to reflect your personal style and the highest standards of bespoke tailoring.",
      thirdColDescription:
        "Classic tailored suits for business, events, and special occasions. Every garment is precision-cut and hand-finished to ensure the perfect fit and timeless elegance.",
    },
    {
      bigImage: serviceSample2Image,
      smallImage: serviceSmallSample2Image,
      title: "Casual Bespoke",
      firstColTitle: "Effortless Elegance, Tailored to You",
      firstColDescritpion:
        "From relaxed blazers to smart-casual essentials, our bespoke casualwear blends comfort with refined style. Each piece is designed to complement your lifestyle while reflecting your individuality.",
      thirdColDescription:
        "Explore our casual ranges, all bespoke and exclusive to you. Add your personality and style to your garments!",
    },
    {
      bigImage: serviceSample3Image,
      smallImage: serviceSmallSample3Image,
      title: "Wedding Bespoke",
      firstColTitle: "Every Detail, Perfected",
      firstColDescritpion:
        "From the cut of your jacket to the finest stitching, our bespoke process ensures that every element of your wedding suit is crafted with precision. A look as unique as your story.",
      thirdColDescription:
        "Celebrate your big day in a suit made just for you. Timeless elegance, tailored to your taste, ensuring you look and feel exceptional.",
    },
  ];

  const isMobile = useIsMobile();

  return (
    <section className="services !pb-[0] sm:!pb-[3rem] !pt-[2rem] sm:!pt-[6rem] 4xl:!pt-[9rem]" id="services">
      <div className="container">
        <div className="max-w-[1160px] 4xl:max-w-full mx-auto">
          <CarouselDemo
            className="custom-carousel "
            // contentClassName=" transition-transform duration-[3000ms] ease-linear !-ml-20 transform-gpu will-change-transform"
            contentClassName="!-ml-20"
            itemClassName="!pl-20"
            // noAngles={true}
            autoplay={isMobile}
            loop={true}
            anglesClassName=""
            items={content}
            lineClassName="!bottom-[-40px] sm:!bottom-[-70px]"
          >
            {({ item, index }) => <ServiceCard {...item} index={index} />}
          </CarouselDemo>
        </div>
      </div>
    </section>
  );
};

const DifferenceSection = () => {
  const content = [
    {
      title: "Handcrafted Precision",
      description: "Every garment is individually cut and hand-finished to ensure the highest standards",
      icon: () => precisionIcon,
    },
    {
      title: "Personal Consultation",
      description: "Our bespoke process begins with an in-depth discussion to capture your style and needs",
      icon: () => consultationIcon,
    },
    {
      title: "Premium Fabrics",
      description: "We source from the world’s finest mills, ensuring comfort, durability, and style",
      icon: () => fabricsIcon,
    },
    {
      title: "Effortless Booking",
      description: "Schedule your fitting instantly with our integrated Calendly system",
      icon: () => bookingIcon,
    },
  ];

  return (
    <section className="difference " id="difference">
      <div className="container">
        <h2 className="subtitle text-center !mb-[4rem]">The Lawrence & Winslade Difference</h2>

        <CarouselDemo
          className="custom-carousel sm:hidden"
          // contentClassName="transition-transform duration-[800ms] ease-in-out"
          itemClassName=""
          lineClassName="!bottom-[-70px]"
          noAngles={true}
          items={content}
          autoplay={true}
          loop={true}
        >
          {({ item, index }) => <DifferenceCard {...item} index={index} />}
        </CarouselDemo>

        <div className="hidden sm:grid grid-cols-2 xl:grid-cols-4 gap-5  mx-auto ">
          {content.map((item, index) => {
            return <DifferenceCard key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

const BespokeSection = () => {
  const [inView1, setIsInView1] = useState(false);
  const [inView2, setIsInView2] = useState(false);
  const [inView3, setIsInView3] = useState(false);
  const [inView4, setIsInView4] = useState(false);
  return (
    <section className="bespoke !py-0" id="bespoke">
      <div className="flex min-h-[180vh] xl:min-h-[220vh] py-[9rem] xl:py-[0]  bg-cover w-full relative  ">
        <Image
          src={bespokeCoverImage}
          width={740}
          height={868}
          alt="background image"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="overlay absolute bg-[rgba(0,0,0,0.3)]  top-0 left-0 w-full h-full"></div>

        <div className="container flex-1 flex relative ">
          <div className="relative flex-1 ">
            <div className="col col-1 xl:absolute top-[13%] right-[0%] max-w-[470px]  4xl:max-w-[590px] text-center xl:text-left mx-auto mb-[6rem]">
              <h2 className="subtitle  !text-white !mb-[2.5rem] 4xl:!mb-[3.5rem]">Our Bespoke Process</h2>
              <h3 className="text-[2.188rem] 4xl:text-[3.2rem] text-white leading-[1.1] mb-[4rem] 4xl:mb-[6rem]">
                From consultation to craftsmanship, experience the journey of creating your perfect suit
              </h3>
              <ButtonDemo text="Book a Fitting" className="" />
            </div>

            <div className={`grid gap-10 justify-center w-full `}>
              <motion.div
                className={`card bespoke-card pt-[2rem] 4xl:pt-[3.5rem] pb-[3rem] 4xl:pb-[5rem]  px-[3rem] 4xl:px-[5rem] border border-secondary-100 min-h-[408px] sm:min-h-[500px] 4xl:min-h-[606px] max-w-[335px] sm:max-w-[420px] 4xl:max-w-[524px]  flex flex-col bg-success  xl:absolute top-[18%] left-[3%]
              ${inView1 ? "lazy-animate" : ""}`}
                viewport={{ amount: 0.3 }}
                onViewportEnter={() => setIsInView1(true)}
                data-lazy="fade"
              >
                <h2 className="card-icon flex-1 text-white text-[3.438rem] sm:text-[4.688rem] italic">01</h2>

                <h4 className="card-title text-[1.313rem] sm:text-[1.813rem] text-white mb-[2.5rem] 4xlmb-[3.5rem] ">
                  Consultation
                </h4>
                <p className="text-description text-sm sm:text-[1.125rem] text-[rgba(255,255,255,.7)] leading-[1.5] font-light">
                  Begin with a personal consultation to understand your style, preferences, and the occasions you dress for.
                </p>
              </motion.div>

              <motion.div
                className={`card bespoke-card pt-[2rem] 4xl:pt-[3.5rem] pb-[3rem] 4xl:pb-[5rem]  px-[3rem] 4xl:px-[5rem] border border-secondary-100 min-h-[408px] sm:min-h-[500px] 4xl:min-h-[606px] max-w-[335px] sm:max-w-[420px] 4xl:max-w-[524px]  flex flex-col bg-success  xl:absolute top-[48%] right-[4%]
                ${inView2 ? "lazy-animate" : ""}`}
                viewport={{ amount: 0.3 }}
                onViewportEnter={() => setIsInView2(true)}
                data-lazy="fade"
              >
                <h2 className="card-icon flex-1 text-white text-[3.438rem] sm:text-[4.688rem] italic">02</h2>

                <h4 className="card-title text-[1.313rem] sm:text-[1.813rem] text-white mb-[2.5rem] 4xlmb-[3.5rem] ">
                  Measurement & Fabric Selection
                </h4>
                <p className="text-description text-sm sm:text-[1.125rem] text-[rgba(255,255,255,.7)] leading-[1.5] font-light">
                  Choose from a curated selection of premium fabrics and take precise measurements to ensure a flawless fit.
                </p>
              </motion.div>

              <motion.div
                className={`card bespoke-card pt-[2rem] 4xl:pt-[3.5rem] pb-[3rem] 4xl:pb-[5rem]  px-[3rem] 4xl:px-[5rem] border border-secondary-100 min-h-[408px] sm:min-h-[500px] 4xl:min-h-[606px] max-w-[335px] sm:max-w-[420px] 4xl:max-w-[524px]  flex flex-col bg-success  xl:absolute top-[62%] left-[10%]
                ${inView3 ? "lazy-animate" : ""}`}
                viewport={{ amount: 0.3 }}
                onViewportEnter={() => setIsInView3(true)}
                data-lazy="fade"
              >
                <h2 className="card-icon flex-1 text-white text-[3.438rem] sm:text-[4.688rem] italic">03</h2>

                <h4 className="card-title text-[1.313rem] sm:text-[1.813rem] text-white mb-[2.5rem] 4xlmb-[3.5rem] ">
                  Fitting & Final Adjustments
                </h4>
                <p className="text-description text-sm sm:text-[1.125rem] text-[rgba(255,255,255,.7)] leading-[1.5] font-light">
                  Experience a tailored fitting session to perfect every detail, from seam placement to final touches.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div />
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="testimonials !pb-[19rem] xl:!pb-[25rem] 4xl:!pb-[30rem]" id="testimonials">
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
          <div className="testimonial-cover relative h-0 w-full pt-[130%] md:pt-[40%] lg:pt-[100%] xl:pt-[73%]">
            <Image
              src={testimonialSample1Image}
              fill={true}
              alt="background image"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
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
          <div className="testimonial-cover relative h-0 w-full pt-[130%] md:pt-[40%] lg:pt-[100%] xl:pt-[73%]">
            <Image
              src={testimonialSample2Image}
              fill={true}
              alt="background image"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center mt-15 sm:mt-20">
          <ButtonDemo text="view more" className=" border border-secondary-100 !min-w-[280px]" />
        </div>
      </div>
    </section>
  );
};

export default Template;
