import React from "react";
import { AccordionDemo } from "@/components/index";

const FAQSection = ({id = ''}) => {
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
          The turn around time on a made to measure is around 4 weeks. Our bespoke suits typically take about to six weeks to
          complete, the fitting can then be scheduled.
        </p>
      ),
    },
    {
      trigger: <h4 className="display-4 !mb-0">What fabric do you offer?</h4>,
      content: (
        <p className="paragraph-1">
          We offer a wide range of high-quality fabrics, including fine wools, cashmeres, linens, and silk blends, sourced from
          the world’s most renowned mills. Working with cloth merchants representing mills from all over the world such as Loro
          Piana, Dormeuil, Holland and sherry and Kerry Knoll to name but a few.
        </p>
      ),
    },
    {
      trigger: <h4 className="display-4 !mb-0">Can I provide my own fabric?</h4>,
      content: (
        <p className="paragraph-1">
          Yes, we can work with fabric you provide, as long as it meets our quality standards. Please bring the fabric to your
          consultation for evaluation.
        </p>
      ),
    },
    {
      trigger: <h4 className="display-4 !mb-0">What is the cost of a bespoke suit?</h4>,
      content: (
        <p className="paragraph-1">
          The cost of a suit varies depending on the process used (bespoke or made to measure), fabric and design details. Please
          contact us for a detailed consultation and pricing information.
        </p>
      ),
    },
    {
      trigger: <h4 className="display-4 !mb-0">How should I prepare for my first fitting?</h4>,
      content: (
        <p className="paragraph-1">
          For your first fitting, we recommend wearing a well-fitting shirt and dress shoes to ensure accurate measurements. Bring
          any specific ideas or preferences you have for your suit.
        </p>
      ),
    },
    {
      trigger: <h4 className="display-4 !mb-0">Do you offer alterations and repairs?</h4>,
      content: (
        <p className="paragraph-1">
          Yes, we provide professional alteration and repair services to ensure your garments always fit perfectly and maintain
          their quality.
        </p>
      ),
    },
    {
      trigger: <h4 className="display-4 !mb-0">How often should I get my suit dry cleaned?</h4>,
      content: (
        <p className="paragraph-1">
          We recommend dry-cleaning your suit no more than twice a year to preserve the fabric and construction. Brush and air
          your suit regularly between cleanings.
        </p>
      ),
    },
    {
      trigger: <h4 className="display-4 !mb-0">Do you offer services for women?</h4>,
      content: (
        <p className="paragraph-1">
          Yes, we offer bespoke tailoring services for both men and women, including suits, jackets, trousers, and skirts
        </p>
      ),
    },
  ];
  return (
    <section id={id}>
      <div className="container lg:flex justify-between  lg:gap-60">
        <h3 className="subtitle text-center 4xl:!mb-[5rem]">FAQ</h3>
        <AccordionDemo className="accordion-demo-custom sm:max-w-[750px]  " items={items} />
      </div>
    </section>
  );
};

export default FAQSection;
