import Container from "@/components/Helper/Container/Container";
import Link from "next/link";
import React from "react";
import { PiClockCountdownThin, PiAirplaneTakeoffLight } from "react-icons/pi";

const quick = [
  {
    id: 1,
    icon: <PiClockCountdownThin />,

    title: "Hourly Rate",
    desc: "Start From $60",
  },
  {
    id: 2,
    icon: <PiAirplaneTakeoffLight />,
    title: "Lga Airport",
    desc: "Start From $80.00",
  },
  {
    id: 3,
    icon: <PiAirplaneTakeoffLight />,
    title: "Jfk Airport",
    desc: "Start From $90.00",
  },
  {
    id: 4,
    icon: <PiAirplaneTakeoffLight />,
    title: "EWR Airport",
    desc: "Start From $100.00",
  },
];

const Quick = () => {
  return (
    <div className={` pt-28 pb-16 `}>
      <Container>
        <div>
          <h2 className="text-[28px] lg:text-[35px] font-tav text-center ">
            Quick Price Check
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-5 mt-8">
            {quick.map((item) => (
              <div key={item.id} className="group cursor-pointer ">
                <div
                  className="text-center flex flex-col md:flex-wrap  gap-5 items-center p-[15px] py-10  transition-colors bg-accent 
                group-hover:bg-black text-white border  rounded-md shadow-md group-hover:shadow-2xl"
                >
                  <div className="text-[50px]  flex justify-center items-center">
                    {item.icon}
                  </div>
                  <div>
                    <h2 className="text-[22px] font-semibold  uppercase">
                      {item.title}
                    </h2>
                    <p className=" text-[22px] py-5 ">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[56px] ">
            <h1 className="text-[30px] mb-[19px] font-ep lg:text-[60px] text-center font-semibold">
              RPC LIMO NATIONWIDE
            </h1>
            <p className="text-[20px] font-mul text-center mb-[16px]">
              Headquarters in New York serving multiple cities.
            </p>

            <div className="py-10 flex flex-wrap justify-center gap-10">
              <button
                className="capitalize py-[15px] px-[30px]  font-mul text-[19px]
                 text-white bg-accent hover:bg-black transition-colors "
              >
                View Price & Book A Ride
              </button>
              <a
                href="https://wa.me/18337114606"
                target="_blank"
                rel="noopener noreferrer"
                className="capitalize py-[15px] px-[30px]  font-mul text-[19px]
                 text-white bg-accent hover:bg-black transition-colors "
              >
                Toll free: 1-833 711 4606
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Quick;
