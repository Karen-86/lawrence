// app/privacy-policy/page.tsx
"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/index";
import Link from "next/link";
import { motion } from "framer-motion";

const Template = () => {
  return (
    <main className="about-page">
      <header className="hero min-h-[50vh] bg-success flex flex-col">
        <Navbar />
        <ShowcaseSection />
      </header>
      <PrivacyPolicySection />
    </main>
  );
};

const ShowcaseSection = () => {
  const [inView1, setIsInView1] = useState(false);

  return (
    <div className="showcase flex-1 pb-[2rem]  flex flex-col items-center">
      <motion.div
        className={`flex-1 hero-center  bg-cover w-full relative flex items-end py-[8rem] sm:py-[4rem] 4xl:py-[8rem]  ${
          inView1 ? "lazy-animate" : ""
        }`}
        // style={{ backgroundImage: "url('/assets/images/rest/hero-cover.png')" }}
        viewport={{ amount: 0.3 }}
        onViewportEnter={() => setIsInView1(true)}
        data-lazy="fade"
      >
        <div className="container   relative flex gap-10 flex-col lg:flex-row items-center sm:items-start lg:items-center justify-center lg:justify-between">
          <div className="hero-content text-white text-center sm:text-left">
            <h1 className="mt-[3rem] text-[2.188rem] leading-[1.2] sm:text-4xl max-w-[300px] sm:max-w-none">Cookies</h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const PrivacyPolicySection = () => {
  return (
       <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Hero Section */}
        
            <p className="text-lg text-gray-600 max-w-2xl">
            This Cookie Policy explains how we use cookies and similar
            technologies to improve your browsing experience on our website.
          </p>

         {/* Policy Sections */}
        <section className="space-y-8">
          {[
            {
              title: "What Are Cookies?",
              text: "Cookies are small text files stored on your device when you visit a website. They help the site function properly, remember preferences, and provide analytical insights.",
            },
            {
              title: "Types of Cookies We Use",
              text: "We use both session cookies (which expire once you close your browser) and persistent cookies (which stay on your device until deleted). These may include essential, performance, analytics, and marketing cookies.",
            },
            {
              title: "Why We Use Cookies",
              text: "Cookies allow us to enhance your experience by remembering settings, analyzing site traffic, and tailoring content. Some cookies are essential for the website to function correctly.",
            },
            {
              title: "Third-Party Cookies",
              text: "We may use third-party services (such as analytics providers or advertising networks) that place cookies to collect data about your activity on our site.",
            },
            {
              title: "Managing Cookies",
              text: "Most browsers allow you to control cookies through their settings. You can choose to block or delete cookies, but some parts of our website may not function correctly without them.",
            },
            {
              title: "Changes to This Policy",
              text: "We may update this Cookie Policy from time to time. Any changes will be posted on this page with the updated date.",
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow-sm p-6 sm:p-8 space-y-3"
            >
              <h2 className="text-2xl font-semibold text-gray-900">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </section>
      </div>
  );
};

export default Template;
