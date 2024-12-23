"use client";
import { FaUserAlt } from "react-icons/fa";
import { FaLuggageCart } from "react-icons/fa";
import Container from "@/components/Helper/Container/Container";
import React, { useState } from "react";
import c1 from "../../../../public/3-1.jpg";
import c2 from "../../../../public/6-1.jpg";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const tabsData = [
  {
    label: "LINCOLN MKT STRETCH LIMOUSINE",
    title: "LINCOLN MKT STRETCH LIMOUSINE",
    img: [c1, c2],
    Capacity: " 7-8",
    Luggage_Capacity: "5 bags",
    features: {
      spaciousInterior:
        "Comfortably seats up to 7 passengers with a blend of elegance and practicality.",
      ampleLuggageSpace:
        "Capacity for up to 5 pieces of luggage, ideal for airport transfers or special events.",
      luxuryTechnology:
        "Advanced infotainment systems, personalized climate control, and ambient lighting.",
      performanceSafety:
        "Smooth engine performance with comprehensive safety features.",
    },
    content:
      "Step into the world of luxury with the Lincoln MKT Stretch Limousine, a perfect choice for those who seek elegance and spacious comfort in their travels. Whether it’s a special celebration or a sophisticated corporate event, this limousine enhances every occasion with its style and luxury.",
  },
  {
    label: "MERCEDES-BENZ SPRINTER CREW VAN 2500",
    title: "MERCEDES-BENZ SPRINTER CREW VAN 2500",
    img: [c1, c2],
    Capacity: " 7-8",
    Luggage_Capacity: "5 bags",
    features: {
      spaciousInterior:
        "Comfortably seats up to 7 passengers with a blend of elegance and practicality.",
      ampleLuggageSpace:
        "Capacity for up to 5 pieces of luggage, ideal for airport transfers or special events.",
      luxuryTechnology:
        "Advanced infotainment systems, personalized climate control, and ambient lighting.",
      performanceSafety:
        "Smooth engine performance with comprehensive safety features.",
    },
    content:
      "Step into the world of luxury with the Lincoln MKT Stretch Limousine, a perfect choice for those who seek elegance and spacious comfort in their travels. Whether it’s a special celebration or a sophisticated corporate event, this limousine enhances every occasion with its style and luxury.",
  },
  {
    label: "LINCOLN NAVIGATOR",
    title: "LINCOLN NAVIGATOR",
    img: [c1, c2],
    Capacity: " 7-8",
    Luggage_Capacity: "5 bags",
    features: {
      spaciousInterior:
        "Comfortably seats up to 7 passengers with a blend of elegance and practicality.",
      ampleLuggageSpace:
        "Capacity for up to 5 pieces of luggage, ideal for airport transfers or special events.",
      luxuryTechnology:
        "Advanced infotainment systems, personalized climate control, and ambient lighting.",
      performanceSafety:
        "Smooth engine performance with comprehensive safety features.",
    },
    content:
      "Step into the world of luxury with the Lincoln MKT Stretch Limousine, a perfect choice for those who seek elegance and spacious comfort in their travels. Whether it’s a special celebration or a sophisticated corporate event, this limousine enhances every occasion with its style and luxury.",
  },
  {
    label: "SUV CADILLAC ESCALADE",
    title: "SUV CADILLAC ESCALADE",
    img: [c1, c2],
    Capacity: " 7-8",
    Luggage_Capacity: "5 bags",
    features: {
      spaciousInterior:
        "Comfortably seats up to 7 passengers with a blend of elegance and practicality.",
      ampleLuggageSpace:
        "Capacity for up to 5 pieces of luggage, ideal for airport transfers or special events.",
      luxuryTechnology:
        "Advanced infotainment systems, personalized climate control, and ambient lighting.",
      performanceSafety:
        "Smooth engine performance with comprehensive safety features.",
    },
    content:
      "Step into the world of luxury with the Lincoln MKT Stretch Limousine, a perfect choice for those who seek elegance and spacious comfort in their travels. Whether it’s a special celebration or a sophisticated corporate event, this limousine enhances every occasion with its style and luxury.",
  },
  {
    label: "MERCEDES BENZ S580",
    title: "MERCEDES BENZ S580",
    img: [c1, c2],
    Capacity: " 7-8",
    Luggage_Capacity: "5 bags",
    features: {
      spaciousInterior:
        "Comfortably seats up to 7 passengers with a blend of elegance and practicality.",
      ampleLuggageSpace:
        "Capacity for up to 5 pieces of luggage, ideal for airport transfers or special events.",
      luxuryTechnology:
        "Advanced infotainment systems, personalized climate control, and ambient lighting.",
      performanceSafety:
        "Smooth engine performance with comprehensive safety features.",
    },
    content:
      "Step into the world of luxury with the Lincoln MKT Stretch Limousine, a perfect choice for those who seek elegance and spacious comfort in their travels. Whether it’s a special celebration or a sophisticated corporate event, this limousine enhances every occasion with its style and luxury.",
  },
];
const Fleet = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="pt-16 pb-16">
      <Container>
        <div>
          <h1 className="text-[28px] font-tav lg:text-[35px] text-start ">
            Discover Our Fleet
          </h1>
          <p className="text-justify py-5 text-[17px] ">
            Embark on a journey of luxury and sophistication as you discover our
            exquisite fleet of vehicles designed to redefine your travel
            experience. Each vehicle in our fleet is a testament to our
            commitment to elegance, comfort, and reliability. Here is a glimpse
            into the diverse offerings that await you.
          </p>
          <div className="  mt-8">
            <div className="flex flex-wrap gap-2  border-b">
              {tabsData.map((tab, idx) => {
                return (
                  <button
                    key={idx}
                    className={`py-2 font-mul text-[14px]  transition-colors duration-300 ${
                      idx === activeTabIndex
                        ? "border-accent bg-accent text-white px-2 border-b-4 font-semibold"
                        : "border bg-[#f2d394] text-black p-2 -transparent hover:border-gray-200"
                    }`}
                    // Change the active tab on click.
                    onClick={() => setActiveTabIndex(idx)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="py-5 font-mul p-5 bg-accent">
              <div className="space-y-2">
                <div className="py-5">
                  <Slider {...settings}>
                    {tabsData[activeTabIndex]?.img?.map((it, i) => (
                      <div key={i} className="px-5">
                        <Image
                          alt={`${tabsData[activeTabIndex].title}`}
                          src={it}
                          width={500}
                        ></Image>
                      </div>
                    ))}
                  </Slider>
                </div>
                <h1 className="text-[18px] font-ep lg:text-[24px] pb-5 font-semibold">
                  {tabsData[activeTabIndex].title}
                </h1>
                <p className=" py-3">{tabsData[activeTabIndex].content}</p>

                <p className="flex  items-center gap-2 font-bold">
                  <FaUserAlt /> Passenger Capacity:{" "}
                  {tabsData[activeTabIndex].Capacity}
                </p>
                <p className="flex  items-center gap-2 font-bold">
                  <FaLuggageCart />
                  Luggage Capacity: {tabsData[activeTabIndex].Luggage_Capacity}
                </p>

                <div>
                  <h3 className="text-[30px] py-5 font-bold">Features:</h3>

                  <ul className="list-disc space-y-3 text-[18px] pl-5">
                    {Object.entries(tabsData[activeTabIndex].features).map(
                      ([key, value], i) => (
                        <li key={i}>
                          <span className="font-bold">{key}: </span> {value}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <button
                className="bg-black mt-8 text-white hover:text-black
               hover:bg-white px-3 py-2"
              >
                Book Now Pay Later
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Fleet;
