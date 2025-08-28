"use client";

import React from "react";
import { InlineWidget, PopupButton } from "react-calendly";

const template = () => {
  return (
    <main className="booking-page">
      <section className="!pt-[15rem] !pb-[15rem] sm:!pb-[15rem] border-3 border-red-700">
        <div className=" h-[900px]  md:h-[900px] xl:h-[700px]">
          <InlineWidget url="https://calendly.com/karendev99test/30min" className="" styles={{ width: "100%", height: "100%", minHeight: '500px' }} />
        </div>
      </section>
    </main>
  );
};

export default template;
