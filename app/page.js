"use client";

import Banner from '@/components/banner';
import FAQ from '@/components/faq';
import Footer from '@/components/footer';
import Gallery from '@/components/gallery';
import Hero from '@/components/hero';
import NavbarRes from '@/components/navbar';
import PortfolioTabs from '@/components/tabs';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

export default function Home() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [loaderVisible, setLoaderVisible] = useState(true);

  // For Preloader
  useEffect(() => {
    // Simulate a delay of 1000ms (1 second)
    const delay = 3000;

    // After the delay, hide the loader and show the header
    const timeoutId = setTimeout(() => {
      setLoaderVisible(false);
    }, delay);

    // Cleanup the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {loaderVisible && (
        <div className="loader">
          <div style={{ "--i": 1 }}></div>
          <div style={{ "--i": 2 }}></div>
          <div style={{ "--i": 3 }}></div>
          <div style={{ "--i": 4 }}></div>
        </div>
      )}

      {!loaderVisible && (
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <NavbarRes />
          <Hero />
          <Gallery />
          <PortfolioTabs />
          <FAQ />
          <Banner />
          <Footer />
        </motion.div>
      )}
    </>
  );
}