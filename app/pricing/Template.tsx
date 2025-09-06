// app/privacy-policy/page.tsx
"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/index";
import Link from "next/link";
import { motion } from "framer-motion";

const Template = () => {
  return (
    <main className="about-page">
      <header className="hero  flex flex-col">
        <Navbar />
        {/* <ShowcaseSection /> */}
      </header>
      <PricingSection />
    </main>
  );
};

// const ShowcaseSection = () => {
//   const [inView1, setIsInView1] = useState(false);

//   return (
//     <div className="showcase flex-1 pb-[2rem]  flex flex-col items-center">
//       <motion.div
//         className={`flex-1 hero-center  bg-cover w-full relative flex items-end py-[8rem] sm:py-[4rem] 4xl:py-[8rem]  ${
//           inView1 ? "lazy-animate" : ""
//         }`}
//         // style={{ backgroundImage: "url('/assets/images/rest/hero-cover.png')" }}
//         viewport={{ amount: 0.3 }}
//         onViewportEnter={() => setIsInView1(true)}
//         data-lazy="fade"
//       >
//         <div className="container   relative flex gap-10 flex-col lg:flex-row items-center sm:items-start lg:items-center justify-center lg:justify-between">
//           <div className="hero-content text-white text-center sm:text-left">
//             <h1 className="mt-[3rem] text-[2.188rem] leading-[1.2] sm:text-4xl max-w-[300px] sm:max-w-none">Privacy Policy</h1>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

const PricingSection = () => {
  return (
    <section className="space-y-12 p-6">
      <div className="container">
        <div className="mb-[4rem]">
          <h2 className="text-2xl font-semibold mb-4">Our Custom Suits Pricing</h2>
          <div className="overflow-auto">
            <table className="w-full border border-gray-300  min-w-[800px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">Fabric Brand</th>
                  <th className="border p-2">2 Piece Suits</th>
                  <th className="border p-2">Jackets</th>
                  <th className="border p-2">Waistcoats</th>
                  <th className="border p-2">Trousers</th>
                  <th className="border p-2">3 Piece Suits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">ES Essentials</td>
                  <td className="border p-2">From £479</td>
                  <td className="border p-2">From £369</td>
                  <td className="border p-2">From £169</td>
                  <td className="border p-2">From £179</td>
                  <td className="border p-2">From £648</td>
                </tr>
                <tr>
                  <td className="border p-2">House Fabrics</td>
                  <td className="border p-2">From £599</td>
                  <td className="border p-2">From £469</td>
                  <td className="border p-2">From £209</td>
                  <td className="border p-2">From £219</td>
                  <td className="border p-2">From £808</td>
                </tr>
                <tr>
                  <td className="border p-2">Reda</td>
                  <td className="border p-2">From £749</td>
                  <td className="border p-2">From £569</td>
                  <td className="border p-2">From £249</td>
                  <td className="border p-2">From £279</td>
                  <td className="border p-2">From £998</td>
                </tr>
                <tr>
                  <td className="border p-2">Moon & Sons (Tweed)</td>
                  <td className="border p-2">From £799</td>
                  <td className="border p-2">From £599</td>
                  <td className="border p-2">From £269</td>
                  <td className="border p-2">From £299</td>
                  <td className="border p-2">From £1068</td>
                </tr>
                <tr>
                  <td className="border p-2">Holland & Sherry</td>
                  <td className="border p-2">From £899</td>
                  <td className="border p-2">From £699</td>
                  <td className="border p-2">From £299</td>
                  <td className="border p-2">From £319</td>
                  <td className="border p-2">From £1198</td>
                </tr>
                <tr>
                  <td className="border p-2">Drago</td>
                  <td className="border p-2">From £1049</td>
                  <td className="border p-2">From £869</td>
                  <td className="border p-2">From £339</td>
                  <td className="border p-2">From £379</td>
                  <td className="border p-2">From £1388</td>
                </tr>
                <tr>
                  <td className="border p-2">Dormeuil</td>
                  <td className="border p-2">From £1199</td>
                  <td className="border p-2">From £969</td>
                  <td className="border p-2">From £369</td>
                  <td className="border p-2">From £439</td>
                  <td className="border p-2">From £1499**</td>
                </tr>
                <tr>
                  <td className="border p-2">Huddersfield</td>
                  <td className="border p-2">From £1249</td>
                  <td className="border p-2">From £969</td>
                  <td className="border p-2">From £389</td>
                  <td className="border p-2">From £439</td>
                  <td className="border p-2">From £1638</td>
                </tr>
                <tr>
                  <td className="border p-2">Loro Piana</td>
                  <td className="border p-2">From £1299</td>
                  <td className="border p-2">From £1029</td>
                  <td className="border p-2">From £399</td>
                  <td className="border p-2">From £459</td>
                  <td className="border p-2">From £1698</td>
                </tr>
                <tr>
                  <td className="border p-2">Scabal</td>
                  <td className="border p-2">From £1599</td>
                  <td className="border p-2">From £1269</td>
                  <td className="border p-2">From £489</td>
                  <td className="border p-2">From £579</td>
                  <td className="border p-2">From £1599**</td>
                </tr>
              </tbody>
            </table>
                  </div>
                  <br />
          <p className="text-sm mt-2">
            * All suits and jacket prices are for Half-Canvas construction. Upgrade to Full-Canvas for +£200 | Tuxedo option +£125
            <br />
            ** With seasonal promotion applied
          </p>
        </div>

        <div className="mb-[4rem]">
          <h2 className="text-2xl font-semibold mb-4">Our Custom Shirts</h2>
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Fabric Brand</th>
                <th className="border p-2">Shirts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">ES Essentials</td>
                <td className="border p-2">From £89</td>
              </tr>
              <tr>
                <td className="border p-2">House Fabrics</td>
                <td className="border p-2">From £99</td>
              </tr>
              <tr>
                <td className="border p-2">Brisbane Moss</td>
                <td className="border p-2">From £109</td>
              </tr>
              <tr>
                <td className="border p-2">Robert Kauffman</td>
                <td className="border p-2">From £109</td>
              </tr>
              <tr>
                <td className="border p-2">Canclini</td>
                <td className="border p-2">From £199</td>
              </tr>
              <tr>
                <td className="border p-2">Somelos</td>
                <td className="border p-2">From £129</td>
              </tr>
              <tr>
                <td className="border p-2">Testa</td>
                <td className="border p-2">From £149</td>
              </tr>
              <tr>
                <td className="border p-2">Weba</td>
                <td className="border p-2">From £199</td>
              </tr>
              <tr>
                <td className="border p-2">Monti</td>
                <td className="border p-2">From £139</td>
              </tr>
              <tr>
                <td className="border p-2">Loro Piana</td>
                <td className="border p-2">From £269</td>
              </tr>
              <tr>
                <td className="border p-2">Solbiati</td>
                <td className="border p-2">From £269</td>
              </tr>
              <tr>
                <td className="border p-2">Thomas Mason</td>
                <td className="border p-2">From £269</td>
              </tr>
              <tr>
                <td className="border p-2">Albini</td>
                <td className="border p-2">From £269</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Custom Chinos</h2>
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Fabric Brand</th>
                <th className="border p-2">Chinos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">House Fabrics</td>
                <td className="border p-2">From £129</td>
              </tr>
              <tr>
                <td className="border p-2">Tessuti di Sondrio</td>
                <td className="border p-2">From £129</td>
              </tr>
              <tr>
                <td className="border p-2">Olimpia</td>
                <td className="border p-2">From £169</td>
              </tr>
              <tr>
                <td className="border p-2">Holland and Sherry</td>
                <td className="border p-2">From £289</td>
              </tr>
              <tr>
                <td className="border p-2">Loro Piana</td>
                <td className="border p-2">From £309</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Template;
