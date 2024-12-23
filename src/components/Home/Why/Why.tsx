import Container from '@/components/Helper/Container/Container'
import React from 'react'
import { SiAdguard } from "react-icons/si";
import { BiSolidLike } from "react-icons/bi";
import { TbPhoneCall } from "react-icons/tb";
const quick=[
    {
        id:1, 
        title:"Schedule Booking",
        icon:<SiAdguard/>,
        desc:"Pick your travel date in advance, as per your schedule."
    },
    {
        id:2, 
        title:"24/7 Customer Support",
        icon:<TbPhoneCall/>,
        desc:"For any queries, comments and support. 24/7 available customer support"
    },
    {
        id:3, 
        title:"Online Payment With EMI",
        icon:<BiSolidLike/>,
        desc:"Choose your preferred payment method. EMI if needed."
    },
]
const Why = () => {
  return (
    <div>  <div className={` lg:pt-16 pb-16 `}>
    <Container>
      <div>
        <h6 className='font-ep text-[18px]'> - Why Travel with Us?</h6>
        <h2 className="text-[30px] lg:text-[35px] font-tav text-start pt-2">
        Best Price. Quality Service.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {quick.map((item) => (
            <div key={item.id} className="group font-mul cursor-pointer ">
              <div
                className="text-center flex flex-col md:flex-row gap-5 items-center p-[15px] py-5
                 transition-colors bg-[#fefefe] 
           
               text-black border  rounded-md shadow-md group-hover:shadow-2xl"
              >
                <div className="text-[50px] group-hover:text-accent  flex justify-center items-center">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-[20px] font-semibold  uppercase">
                    {item.title}
                  </h2>
                  <p className=" text-[18px] py-5 ">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

     
      </div>
    </Container>
  </div></div>
  )
}

export default Why