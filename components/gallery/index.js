"use client";

import React from "react";
import { Card, CardHeader, CardFooter, Image, Button, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

export default function Gallery() {
  const cardVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="dark:bg-black bg-white gallery">
      <div className="gap-2 grid grid-cols-12 grid-rows-2 container mx-auto py-16 sm:py-16 px-8">
        <MotionCard
          className="col-span-12 sm:col-span-4 h-[300px]"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
            <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/images/card-example-4.jpeg"
          />
        </MotionCard>
        <MotionCard
          className="col-span-12 sm:col-span-4 h-[300px]"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
            <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/images/card-example-3.jpeg"
          />
        </MotionCard>
        <MotionCard
          className="col-span-12 sm:col-span-4 h-[300px]"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
            <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/images/card-example-2.jpeg"
          />
        </MotionCard>
        <MotionCard
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-white font-medium text-2xl">Acme camera</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="/images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              Notify Me
            </Button>
          </CardFooter>
        </MotionCard>
        <MotionCard
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
            <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="/images/card-example-5.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              {/* <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="/images/breathing-app-icon.jpeg"
              /> */}
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">Get a good night&apos;s sleep.</p>
              </div>
            </div>
            <Button radius="full" size="sm">Get App</Button>
          </CardFooter>
        </MotionCard>
      </div>
      <Divider />
    </section>
  );
}