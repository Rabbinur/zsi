"use client";

import React from "react";
import Container from "@/components/Helper/Container/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineStarBorder } from "react-icons/md";
import c1 from "../../../../public/team1-150x150.jpg";
import c2 from "../../../../public/team3-150x150.jpg";
import Image from "next/image";

const data = [
  {
    name: "Peter Rose",
    desc: "A huge thank you to the RPC team for making our wedding day even more special. The attention to detail and the professionalism of the chauffeurs were outstanding.",
    star: 5,
    img: c1,
  },
  {
    name: "Yesa Rose",
    desc: "A huge thank you to the RPC team for making our wedding day even more special. The attention to detail and the professionalism of the chauffeurs were outstanding.",
    star: 5,
    img: c2,
  },
];

type ArrowProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute left-[-30px] hidden lg:block top-1/2 transform -translate-y-1/2  hover:bg-accent hover:text-white transition-colors border 
      shadow w-16 h-14 flex justify-center items-center z-10"
    onClick={onClick}
  >
    <FaArrowLeftLong className="absolute inset-0 font-bold text-[20px] top-1/2 left-1/2 -translate-y-1/2  -translate-x-1/2 flex items-center"/>
  </button>
);

const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute right-[-100px]  hidden lg:block
     top-1/2 transform -translate-y-1/2
      hover:bg-accent hover:text-white transition-colors border 
      shadow w-16 h-14  flex items-center justify-center  z-10"
    onClick={onClick}
  >
    <FaArrowRightLong
     className="absolute inset-0 font-bold text-[20px] top-1/2 left-1/2 -translate-y-1/2  -translate-x-1/2 flex items-center"/>
  </button>
);

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,

    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: (dots) => (
      <div className="">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => <div className="w-3 h-3 bg-accent rounded-full"></div>,
  };

  return (
    <div className="pt-16 pb-16 overflow-hidden">
      <Container>
        <div>
          <h1 className="text-[30px] font-tav lg:text-[35px] text-start">
            Our Satisfied Clients
          </h1>
          <p className="text-justify py-5 text-[17px]">
            At RPC Limo, our success is measured by the satisfaction of our
            clients. We take immense pride in building lasting relationships and
            delivering exceptional service that exceeds expectations. Here is
            what some of our satisfied clients have to say about their
            experiences:
          </p>
        </div>
        <div className="relative pt-[45px] max-w-2xl mx-auto ">
          <Slider {...settings}>
            {data.map((it, i) => (
              <div key={i} className="">
                <div className="bg-accent p-5 max-w-[500px] mx-auto  rounded-md">
                  <p className="text-black text-lg  text-justify">{it.desc}</p>
                </div>
                <div className="flex flex-col justify-center items-center pt-10 pb-5">
                  <Image
                    src={it.img}
                    alt={it.name}
                    width={200}
                    className="rounded-full "
                  />

                  <p className="flex gap-2 pt-8 pb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <MdOutlineStarBorder className="text-accent" key={i} />
                    ))}
                  </p>
                  <h3 className="text-black text-right mt-2 text-[22px] font-bold">
                    {it.name}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Clients;
