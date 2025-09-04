'use client'

import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonDemo } from "@/components/index";
import { motion } from "framer-motion";

const ShopCard = ({ image = null, title = "", description = "", price = "" }: any) => {
    const [inView1, setIsInView1] = useState(false);
  return (
    <motion.div className={`group card shop-card ${inView1 ? "lazy-animate" : ""}`}
        viewport={{ amount: 0.3 }}
      onViewportEnter={() => setIsInView1(true)}
      data-lazy="fade">
      <div className="card-body relative pt-[100%] sm:pt-[135%] h-0 w-full mb-[1.8rem]">
        <Image src={image} fill={true} alt="image" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="flex justify-center absolute z-2 top-[50%] left-[50%] transform-[translate(-50%,-50%)]">
          <Link href={`#/details`} className="opacity-0 duration-300 group-hover:opacity-100 ">
            <ButtonDemo text="view details" className="hover:!bg-white hover:!text-dark" size="sm" />
          </Link>
        </div>
      </div>
      <div className="card-footer">
        <h4 className="text-[1.125rem] font-montserrat font-medium mb-[0.4rem]">{title}</h4>
        <p className="text-sm text-secondary-800">{description}</p>
        <br />
        <hr className="border-line" />
        <br />
        <div className="text-[1rem] italic font-medium">{price}</div>
      </div>
    </motion.div>
  );
};

export default ShopCard;
