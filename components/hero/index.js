"use client";

import { Image } from "@nextui-org/react";
import styles from "../styles/styles";
import GetStarted from "./GetStarted";
import SimpleParallax from "@/hooks/CustomParallax";
// import { useRef } from "react";
// import { useScroll, useTransform, motion, filterProps } from "framer-motion";

const Hero = () => {
  const pink_gradient = 'bg-gradient-to-r from-pink-300 to-pink-600 filter blur-[900px]'
  const white_gradient = 'bg-white bg-opacity-60 filter blur-[750px]'
  const blue_gradient = 'bg-gradient-to-t from-transparent via-blue-800 to-transparent filter blur-[123px]'
  const bg_discount_gradient = 'bg-gradient-to-tr from-gray-700 to-indigo-900'
  const text_gradient = ' bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500 text-transparent bg-clip-text'

  // use scrolling effect
  // const ref = useRef(null);

  // const { scrollYProgress, scrollY } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });
  // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // const opacity = useTransform(
  //   scrollY,
  //   // Map x from these values:
  //   [0, 100],
  //   // Into these values:
  //   [0, -1]
  // )

  return (
    <SimpleParallax>
      <section
        id="home"
        // ref={ref}
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
        // style={{ y: backgroundY, opacity: opacity }}
      >
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className={`flex flex-row items-center py-[6px] px-4 ${bg_discount_gradient} rounded-[10px] mb-2`}>
            <Image src={'https://i.imgur.com/5BZrGDw.png'} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">20%</span> Discount For{" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full mt-8">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[50px] ss:leading-[60px] leading-[60px]">
              The Next <br className="sm:block hidden" />{" "}
              <span className={`${text_gradient}`}>Generation</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[60px] text-[50px] ss:leading-[60px] leading-[60px] w-full">
            Payment Method.
          </h1>
          <p className={`font-poppins font-normal text-[18px] leading-[30.8px] max-w-[470px] mt-5 light:dimBlue dark:text-white`}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <Image
            src={'https://i.imgur.com/8RJDGMU.png'} alt="billing" className="w-[100%] relative z-[5]" />

          {/* gradient start */}
          <div className={`absolute z-[0] w-[40%] h-[35%] top-0 ${pink_gradient} `} />
          <div className={`absolute z-[1] w-[80%] h-[80%] rounded-full ${white_gradient} bottom-40`} />
          <div className={`absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 ${blue_gradient}`} />
          {/* gradient end */}
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </section>
    </SimpleParallax>
  );
};

export default Hero;