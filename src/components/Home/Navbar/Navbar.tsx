"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [auth, setAuthOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname  = usePathname();

  const toggleMenu = (): void => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleAuth = (): void => {
    setAuthOpen(!auth);
  };

  const handleClickOutsideDropdown = (event: MouseEvent): void => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setAuthOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideDropdown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`shado bg-[#Ffff] tracking-wide animate-fadein border-b border-1 fixed w-full top-0 z-[99]`}
      >
        <div className="relative container mx-auto px-5">
          <div className="flex border-b border-1 bg-white  min-h-[70px] tracking-wide relative">
            <div className="w-full flex flex-wrap items-center lg:gap-y-4 gap-y-6
             justify-between gap-6 py-3 relative">
              <div>
                <Link href="/" className="font-bold">RPCLIMO</Link>
              </div>

              <div
                className={`${
                  isMenuOpen ? "max-lg:flex" : "max-lg:hidden"
                } lg:!flex lg:items-center max-lg:before:fixed max-lg:overflow-auto max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`}
              >
                <button
                  className="lg:hidden fixed top-2 right-4 z-[100]
                   rounded-full bg-gray-300 p-3"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 fill-black"
                    viewBox="0 0 320.591 320.591"
                  >
                    <path
                      d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>

                <ul className="lg:flex lg:ml-10 lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                  <li className="max-lg:border- b py-10 lg:pt-0 max-lg:pb-4 px-3 lg:hidden">
                    <Link href="/" className="font-bold">RPCLIMO</Link>
                  </li>
                  <li className="max-lg:border-b max-lg:px-3 max-lg:py-2">
                    <Link
                      href="/"
                      className={`${pathname==="/"?` text-accent font-bold  block`:`hover:text-accent`}`}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="max-lg:border-b max-lg:px-3 max-lg:py-2">
                    <Link
                      href="/about"
                      className={`${pathname==="/about"?` text-accent font-bold  block`:`hover:text-accent`}`}
                    >
                      About
                    </Link>
                  </li>
                  <li className="group pt-[2px] text-[14px] max-lg:border-b max-lg:px-3 max-lg:py-2 relative">
                    <Link
                    href="/services"
                    className={`${pathname==="/services"?` text-accent font-bold  block`:`hover:text-accent`}`}
                     
                    >
                      Services
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        className="ml-1 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                          data-name="16"
                          data-original="#000000"
                        />
                      </svg>
                    </Link>
                    <div
                      className="absolute  lg:top-6 max-lg:top-8 
                    -left-6 lg:-left-[3rem] z-99999 flex
                  shadow-lg bg-white max-h-0 overflow-hidden
                  group-hover:opacity-100 group-hover:max-h-fit 
                  group-hover:translate-y-0 transform translate-y-2
                 px-8 group-hover:pb-8 group-hover:pt-6 transition-all
                  duration-500  group-hover:z-999999
                   min-h- [360px]
                    "
                    >
                      <div
                        className="
                    gap-x-16 w-max"
                      >
                       
                          <ul  className="space-y-4">
                            <li  className="rounded">
                              <Link
                                href={""}
                              
                                className="hover:text-accent text-primary font-semibold  block"
                              >
                               Corporate Travel
                              </Link>
                             
                              
                            </li>
                            <li  className="rounded">
                              <Link
                                href={""}
                              
                                className="hover:text-accent text-primary font-semibold  block"
                              >
                               Corporate Travel
                              </Link>
                             
                              
                            </li>
                            <li  className="rounded">
                              <Link
                                href={""}
                              
                                className="hover:text-accent text-primary font-semibold  block"
                              >
                               Airport Transfer
                              </Link>
                             
                              
                            </li>
                          </ul>
                    
                      </div>
                    </div>
                  </li>
                  <li className="max-lg:border-b max-lg:px-3 max-lg:py-2">
                    <Link
                      href="/fleet"
                      className={`${pathname==="/fleet"?` text-accent font-bold  block`:`hover:text-accent`}`}
                    >
                      Fleet
                    </Link>
                  </li>
                  <li className="max-lg:border-b max-lg:px-3 max-lg:py-2">
                    <Link
                      href="/contact"
                      className={`${pathname==="/contact"?` text-accent font-bold  block`:`hover:text-accent`}`}
                    >
                    Contact
                    </Link>
                  </li>
                 
                </ul>
              </div>

              <div className="flex items-center space-x-8 justify-center">
                <div>
                  <ul>
                    <li className="relative group px-1 after:absolute after:bg-black after:w-full after:h-[2px] after:block after:top-8 after:left-0 after:transition-all after:duration-300">
                      <div className="cursor-pointer" onClick={toggleAuth}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          className="hover:fill-black"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M437.02 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.981C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019zM256 482c-66.869 0-127.037-29.202-168.452-75.511C113.223 338.422 178.948 290 256 290c-49.706 0-90-40.294-90-90s40.294-90 90-90 90 40.294 90 90-40.294 90-90 90c77.052 0 142.777 48.422 168.452 116.489C383.037 452.798 322.869 482 256 482z"
                            data-original="#000000"
                          />
                        </svg>
                      </div>

                      <div
                        ref={dropdownRef}
                        className={`bg-white z-20 shadow-md py-6 px-6 sm:min-w-[320px] max-sm:min-w-[250px] absolute lg:right-0 sm:right-0 md:right-0 -right-18 top-14 opacity-0 transform transition-all duration-300 ease-in-out ${
                          auth
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 translate-y-2 pointer-events-none"
                        }`}
                      >
                        <h6 className="font-semibold text-[15px]">
                          Welcome, User
                        </h6>
                        <p className=" text-gray-500 mt-1">
                          To access account 
                        </p>

                        <Link href={"/login"} onClick={toggleAuth}>
                          Login
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <button onClick={toggleMenu} className="lg:hidden ml-7">
                  <svg
                    className="w-7 h-7"
                    fill="#000"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
