import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Photos() {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}