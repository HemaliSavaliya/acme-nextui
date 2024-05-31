"use client";

import { Button, Divider } from '@nextui-org/react'
import React from 'react'
import { motion } from "framer-motion";

const Banner = () => {
  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.section
        className='container mx-auto sm:py-16 py-6 px-8'
        variants={variants}
        initial="hidden"
        whileInView="visible"
      >
        <div className='flex items-center justify-center flex-col'>
          <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font">
            Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage.
          </h1>
          <Button variant="shadow" className='mt-6 px-20'>
            Start Trails
          </Button>
        </div>
      </motion.section>
      <Divider />
    </>
  )
}

export default Banner