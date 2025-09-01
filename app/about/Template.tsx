"use client";

import React, { useState } from "react";
import { ButtonDemo, Navbar, CarouselDemo, AboutCard, AccordionDemo, ActionCard } from "@/components/index";
import Link from "next/link";
import Image from "next/image";
import localData from "@/localData";
import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useGlobalContext } from "@/context";
import { motion, useInView } from "framer-motion";

const {
  aboutSample1Image,
  ourStoryCover1Image,
  ourStoryCover2Image,
  featuredSample1Image,
  featuredSample2Image,
  featuredSample3Image,
  featuredSample4Image,

  journalSample1Image,
  journalSample2Image,
} = localData.images;

const { heartIcon, shareIcon } = localData.svgs;

const Template = () => {
  return (
    <main className="about-page">
      <header className="hero   flex flex-col">
        <Navbar>
          <div className="breadcrumbs  border-y border-line py-4 sm:py-5">
            <div className="container flex items-center gap-2">
              <Link href="/" className="link text-xs font-medium px-1 underline">
                Home
              </Link>
              <div className="dot w-1 h-1 rounded-full bg-dark"></div>
              <div className="link text-xs font-medium px-1 pointer-events-none text-secondary-500">About Us</div>
            </div>
          </div>
        </Navbar>
      </header>
      <ShowcaseSection />
      <OurStorySection />
      <FeaturedWorkSection />
      <hr className="border-line" />
      <LocationSection />
      <hr className="border-line" />
      <QuestionsSection />
      <hr className="border-line" />
      <JournalSection />
    </main>
  );
};

const ShowcaseSection = () => {
  const content = [
    {
      bigImage: aboutSample1Image,
      title: "Formal Bespoke",
      description: "Crafted for your style",
      snap: (
        <div className="tracking-[2px] ">
          1<span className="text-sm  ml-1">/</span>
          <span className="text-lg">1</span>
        </div>
      ),
    },
    {
      bigImage: aboutSample1Image,
      title: "Formal Bespoke",
      description: "Crafted for your style",
      snap: (
        <div className="tracking-[2px] ">
          1<span className="text-sm  ml-1">/</span>
          <span className="text-lg">2</span>
        </div>
      ),
    },
    {
      bigImage: aboutSample1Image,
      title: "Formal Bespoke",
      description: "Crafted for your style",
      snap: (
        <div className="tracking-[2px] ">
          1<span className="text-sm  ml-1">/</span>
          <span className="text-lg">3</span>
        </div>
      ),
    },
  ];
  return (
    <section className=" !pt-0 4xl:!pb-[8rem]">
      <div className="min-h-[100vh] flex-1 flex flex-col items-center">
        <div className={`flex flex-1  hero-center  bg-cover w-full relative`}>
          <CarouselDemo
            className="custom-carousel flex-1 flex flex-col w-full !mb-0 relative overflow-hidden"
            contentClassName="!-ml-0 absolute top-0 left-0 w-full h-full "
            itemClassName=" relative "
            noAngles={true}
            noLine={true}
            loop={true}
            anglesClassName=""
            items={content}
            lineClassName="!bottom-[-40px] sm:!bottom-[-70px]"
            customAngles={
              <div
                className={`carousel-angles bottom-[65px] max-w-[0px] md:max-w-none md:top-0 md:h-full w-full absolute left-[50%] md:transform-[translateX(-50%)] pointer-events-none `}
              >
                {/* <CarouselPrevious className="pointer-events-auto w-[70px] h-[70px]  transform-[rotateZ(180deg)] xl:top-[200px]  xl:left-[0px] cursor-pointer " /> */}
                <CarouselNext className="pointer-events-auto w-[70px] h-[70px]   cursor-pointer absolute md:right-[280px] 4xl:right-[340px]  md:bottom-[-30px] md:top-auto " />
              </div>
            }
          >
            {({ item, index }) => <AboutCard {...item} index={index} />}
          </CarouselDemo>
        </div>
      </div>
    </section>
  );
};

const OurStorySection = () => {
  const [inView1, setIsInView1] = useState(false);
  const [inView2, setIsInView2] = useState(false);
  const [inView3, setIsInView3] = useState(false);

  return (
    <section className="!pt-0 !pb-0 text-center md:text-left">
      <div className="container">
        <h3 className="subtitle md:!mb-[8.5rem]">our story</h3>

        <div className="grid  md:grid-cols-[1fr_1.6fr] 4xl:grid-cols-[1.3fr_1.3fr_1fr] gap-[40px] sm:gap-[80px] md:gap-[120px]">
          <div className="col ">
            <div className="max-w-[390px]  mx-auto md:mx-0 mb-[40px]">
              <h3 className="display-2 mb-[2rem] sm:mb-[4rem]">A little about us</h3>

              <p className="paragraph-1 max-w-[310px]  mx-auto md:mx-0">
                Lawrence & Winslade was born out of a pure passion for all things sartorial.
              </p>
            </div>
            <div className="max-w-[400px] mx-auto md:mx-0">
              <motion.div
                className={`inner-col relative w-full h-0 pt-[130%] 4xl:hidden ${inView1 ? "lazy-animate" : ""}`}
                viewport={{ amount: 0.3 }}
                onViewportEnter={() => setIsInView1(true)}
                data-lazy="fade"
              >
                <Image
                  fill={true}
                  alt="image"
                  src={ourStoryCover1Image}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          <div className="inner-col">
            <p className="paragraph-1">
              Lawrence & Winslade was born out of a pure passion for all things sartorial. Ricky (Lawrence) was a client of Jack
              (Winslade) for over 7 years, and through many whiskeys and hours of conversations about what we would do differently
              or better — L&W arose.
              <br />
              lawrenceandwinslade.com
              <br />
              <br />
              With Jack’s experience of nearly a decade in the tailoring world and Ricky’s design passion, we bring modern
              innovation while respecting tradition
            </p>

            <br />
            <br />
            <hr className="border-line" />
            <br />
            <br />

            <h4 className="title">Our Heritage</h4>

            <p className="paragraph-1">
              Lawrence & Winslade prides itself on exceptional craftsmanship. Over the last decade, we have built strong
              relationships with the best manufacturers and cloth merchants — ensuring quality garments and efficient turnaround
              time.
            </p>

            <br />
            <br />
            <hr className="border-line" />
            <br />
            <br />

            <h4 className="title">Our Philosophy</h4>

            <p className="paragraph-1">
              At Lawrence & Winslade, a suit is more than just clothing—it’s an extension of personality. True elegance lies in
              the details. From consultation to final fitting, we tailor every element to your style and requirements.
            </p>
          </div>
          <motion.div
            className={`inner-col relative w-full h-0 pt-[130%] hidden 4xl:block ${inView2 ? "lazy-animate" : ""}`}
            viewport={{ amount: 0.3 }}
            onViewportEnter={() => setIsInView2(true)}
            data-lazy="fade"
          >
            <Image
              fill={true}
              alt="image"
              src={ourStoryCover1Image}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="relative ">
        <div className="container  grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.5fr_1fr] gap-x-[50px] gap-y-[50px] xl:gap-x-[100px] 4xl:gap-x-[130px] items-center pt-[6rem] xl:pt-[9rem]">
          <div className="h-[550px] lg:min-h-[90vh]  relative opacity-0 pointer-events-none">
            {/* <Image
              fill={true}
              alt="image"
              src={ourStoryCover2Image}
              className="absolute top-0 left-0 w-full h-full object-cover"
            /> */}
          </div>

          <div className="">
            <h4 className="title">Our Process</h4>
            <p className="paragraph-1">
              Our bespoke process begins with an in-depth consultation — we discuss your style preferences, fabrics, linings,
              buttons, and specifics. We take precise measurements to create a custom pattern using high-quality fabrics.
              <br />
              <br />
              Our skilled artisans handcraft each suit — weaving some 50,000 stitches over ~50 hours of labor. Multiple fittings
              ensure perfect fit and comfort.
            </p>

            <br />
            <br />
            <hr className="border-line" />
            <br />
            <br />

            <h4 className="title"> Our Promise</h4>

            <p className="paragraph-1">
              At Lawrence & Winslade, we create more than suits — we create memories. Each garment reflects our commitment to
              quality, personalized service, and timeless elegance. We strive to build lasting relationships with our clients,
              guiding their style journey and instilling confidence through our creations.
            </p>
          </div>
        </div>

        <div className=" absolute z-2 top-0 left-0 w-full h-full grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.5fr_1fr] gap-x-[50px] gap-y-[50px] xl:gap-x-[100px] 4xl:gap-x-[130px] lg:items-center py-[6rem] xl:py-[9rem]">
          <motion.div
            className={`h-[550px] lg:min-h-[90vh]  relative mr-[1rem] ${inView3 ? "lazy-animate" : ""}`}
            viewport={{ amount: 0.3 }}
            onViewportEnter={() => setIsInView3(true)}
            data-lazy="fade"
          >
            <Image
              fill={true}
              alt="image"
              src={ourStoryCover2Image}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </motion.div>
          <div className=" pointer-events-none"></div>
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
        <h2 className="subtitle text-center">FEATURED WORK</h2>

        <div className="grid grid-cols-2 gap-[10px] xl:gap-[80px] 4xl:gap-[140px]">
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
            <Link href="/booking" className="hidden md:flex">
              <ButtonDemo
                text="BOOK A FITTING"
                className="absolute !bg-[rgba(217,217,217,0.1)] border border-[rgba(255,255,255,0.5)] !text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md hover:!bg-[rgba(217,217,217,0.15)]"
              />
            </Link>
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
          <Link href="/gallery">
            <ButtonDemo text="Explore the Gallery" className=" border border-secondary-100 !min-w-[280px]" />
          </Link>
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
        <ButtonDemo text="Follow" color="black" className="" />
      </div>
    </section>
  );
};

const QuestionsSection = () => {
  const items = [
    {
      trigger: <h4 className="display-4 !mb-0">What is the difference between made-to-measure and bespoke tailoring?</h4>,
      content: (
        <p className="paragraph-1">
          Made-to-measure suits are crafted from a pre-existing pattern adjusted to your measurements, while bespoke suits are
          entirely custom-made from scratch, tailored to your exact specifications and preferences.
        </p>
      ),
    },
    {
      trigger: <h4 className="display-4 !mb-0">How long does it take to make a suit?</h4>,
      content: (
        <p className="paragraph-1">
          Made-to-measure suits are crafted from a pre-existing pattern adjusted to your measurements, while bespoke suits are
          entirely custom-made from scratch, tailored to your exact specifications and preferences.
        </p>
      ),
    },
    {
      trigger: <h4 className="display-4 !mb-0">What fabric do you offer?</h4>,
      content: (
        <p className="paragraph-1">
          Made-to-measure suits are crafted from a pre-existing pattern adjusted to your measurements, while bespoke suits are
          entirely custom-made from scratch, tailored to your exact specifications and preferences.
        </p>
      ),
    },
    {
      trigger: <h4 className="display-4 !mb-0">Can I provide my own fabric?</h4>,
      content: (
        <p className="paragraph-1">
          Made-to-measure suits are crafted from a pre-existing pattern adjusted to your measurements, while bespoke suits are
          entirely custom-made from scratch, tailored to your exact specifications and preferences.
        </p>
      ),
    },
    {
      trigger: <h4 className="display-4 !mb-0">What is the cost of a bespoke suit?</h4>,
      content: (
        <p className="paragraph-1">
          Made-to-measure suits are crafted from a pre-existing pattern adjusted to your measurements, while bespoke suits are
          entirely custom-made from scratch, tailored to your exact specifications and preferences.
        </p>
      ),
    },
    {
      trigger: <h4 className="display-4 !mb-0">How should I prepare for my first fitting?</h4>,
      content: (
        <p className="paragraph-1">
          Made-to-measure suits are crafted from a pre-existing pattern adjusted to your measurements, while bespoke suits are
          entirely custom-made from scratch, tailored to your exact specifications and preferences.
        </p>
      ),
    },
    {
      trigger: <h4 className="display-4 !mb-0">Do you offer alterations and repairs?</h4>,
      content: (
        <p className="paragraph-1">
          Made-to-measure suits are crafted from a pre-existing pattern adjusted to your measurements, while bespoke suits are
          entirely custom-made from scratch, tailored to your exact specifications and preferences.
        </p>
      ),
    },
    {
      trigger: <h4 className="display-4 !mb-0">How often should I get my suit dry cleaned?</h4>,
      content: (
        <p className="paragraph-1">
          Made-to-measure suits are crafted from a pre-existing pattern adjusted to your measurements, while bespoke suits are
          entirely custom-made from scratch, tailored to your exact specifications and preferences.
        </p>
      ),
    },
    {
      trigger: <h4 className="display-4 !mb-0">Do you offer services for women?</h4>,
      content: (
        <p className="paragraph-1">
          Made-to-measure suits are crafted from a pre-existing pattern adjusted to your measurements, while bespoke suits are
          entirely custom-made from scratch, tailored to your exact specifications and preferences.
        </p>
      ),
    },
  ];
  return (
    <section>
      <div className="container lg:flex justify-between  lg:gap-60">
        <h3 className="subtitle text-center 4xl:!mb-[5rem]">FAQ</h3>
        <AccordionDemo className="accordion-demo-custom sm:max-w-[750px]  " items={items} />
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
          <div className="grid md:grid-cols-2 gap-[20px] xl:gap-[50px] flex-1">
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
              <div className="card-content  absolute top-1/2 -translate-y-1/2 w-full">
                <div className="uppercase text-center text-[rgba(255,255,255,0.8)] text-sm tracking-[1.5px] mb-[1rem]">
                  Article
                </div>
                <h3 className="display-2 mb-[2rem] 4xl:mb-[4rem] text-center text-white w-full">Suit Essentials</h3>
                <div className="flex justify-center">
                  <Link href="#/article-1" className="">
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
        </div>
      </div>
    </section>
  );
};

export default Template;
