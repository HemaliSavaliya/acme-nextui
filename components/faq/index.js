"use client";

import React from "react";
import { Accordion, AccordionItem, Divider } from "@nextui-org/react";

export default function FAQ() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <section className='container mx-auto sm:py-16 py-6 px-8'>
        <div className="text-center ss:text-[30px] text-[25px] light:text-black font-bold dark:text-white ss:leading-[60px] leading-[37px]">
          FAQ
        </div>
        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" subtitle="Press to expand" title="Accordion 1">
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            subtitle={
              <span>
                Press to expand <strong>key 2</strong>
              </span>
            }
            title="Accordion 2"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" subtitle="Press to expand" title="Accordion 3">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </section>
      <Divider />
    </>
  );
}
