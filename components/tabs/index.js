"use client";

import React from "react";
import { Tabs, Tab, Divider } from "@nextui-org/react";
import Music from "./music";
import Photos from "./photos";
import Videos from "./videos";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const PortfolioTabs = () => {
  const tabs = [
    {
      id: "photos",
      label: "Photos",
      content: <Photos />
    },
    {
      id: "music",
      label: "Music",
      content: <Music />
    },
    {
      id: "videos",
      label: "Videos",
      content: <Videos />
    }
  ];

  return (
    <section className="dark:bg-black bg-white">
      <div className="container mx-auto sm:py-16 py-6 px-8 text-center">
        <div className="ss:text-[30px] text-[25px] light:text-black font-bold dark:text-white ss:leading-[60px] leading-[37px] mb-6">
          Portfolio
        </div>
        <Tabs aria-label="Dynamic tabs" items={tabs} className="mb-3">
          {(item) => (
            <Tab title={item.label} className="flex justify-center items-center">
              <motion.main
                variants={variants}
                initial="hidden"
                whileInView="enter"
                transition={{ type: "linear" }}
              >
                {item.content}
              </motion.main>
            </Tab>
          )}
        </Tabs>
      </div>
      <Divider />
    </section>
  );
}

export default PortfolioTabs;