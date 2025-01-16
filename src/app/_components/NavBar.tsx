"use client";
import Link from 'next/link'
import logowhite from "../_assets/svg/logowhite.svg";
import servicearrow from "../_assets/svg/servicesarrow.svg";
import Image from "next/image";
import { useState } from "react";
import humberger from "../_assets/svg/hamburgerWhite.svg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropDown = () => setIsDropdownOpen(!isDropdownOpen);
  return (
    <>
      <div className="bg-none flex h-[20vh]  px-[20px] md:px-[50px] lg:px-[86px] w-full items-center justify-between relative">
        <div className="md:w-[30%] lg:w-[35%]">
        <Link  href="/" >  <Image src={logowhite} width={194} height={135.43} alt="White logo" /> </Link>
        </div>
        <div className="md:w-[70%] lg:w-[65%] flex justify-end ">
          <ul className="text-white font-[600] text-[15px] md-text-[16px] lg-text-[22px] hidden md:block ">
            <li className="inline-block px-[15px] md:px-[20px] lg:px-[25px] cursor-pointer hover:!text-[#FF9D00]">
            <Link href="/">Home</Link>
            </li>
            <li className="inline-block px-[15px] md:px-[20px] lg:px-[25px] cursor-pointer hover:!text-[#FF9D00]">
            <Link href="/blog">Blog</Link>
            </li>
            <li
              className="inline-block px-[15px] md:px-[20px] lg:px-[25px] cursor-pointer hover:!text-[#FF9D00] relative"
              onClick={dropDown}
            >
             <Link href="#">Services</Link>{" "}
              <Image
                className="inline-block "
                src={servicearrow}
                alt="servicearrow"
              />
              {isDropdownOpen && (
                <ul className=" bg-[#000000] text-white  py-2 px-3 absolute w-[200px] h-[80px] mt-[10px] p-[30px] ">
                  <Link href= "/services/Construction-Services"> <li>Construction</li></Link> 
                  <Link href="/services/selling-and-purchasing-services"> <li>Selling & Purchasing</li> </Link>
                </ul>
              )}
            </li>
            <li className="inline-block  lg:ps-[20px] cursor-pointer hover:!text-[#FF9D00]">
            <Link href="/about">About Us</Link>
            </li>
            <li className="inline-block mb-[100px] md:mb-[0px] ms-0 md:ms-[25px] lg:ms-[50px] border-[1px] p-[12px] rounded-[8px] hover:!border-[#FF9D00] hover:text-[#ff9c00] cursor-pointer">
            <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
          <div className="flex md:hidden ">
            <button onClick={toggleMenu}>
              <Image src={humberger} width={50} height={50} alt="White logo" />
            </button>
            {isOpen && (
              <div className="md:hidden bg-[#2B4463] sm-w-auto w-[65%] h-[300px] absolute left-[20%] top-[130px] rounded-[15px] text-center text-white flex items-center justify-center z-50 ">
                <ul>
                  <li className="block py-[15px] cursor-pointer hover:!text-[#FF9D00]">
                  <Link href="/">Home</Link>
                  </li>
                  <li className="block py-[5px] cursor-pointer hover:!text-[#FF9D00]">
                  <Link href="/blog">Blog</Link>
                  </li>
                  <li
                    className="inline-block py-[5px] cursor-pointer hover:!text-[#FF9D00] relative"
                    onClick={dropDown}
                  >
                    <Link href="#">Services</Link>{" "}
                    <Image
                      className="inline-block"
                      src={servicearrow}
                      alt="servicearrow"
                    />
                    {isDropdownOpen && (
                      <ul className="bg-[#1e2551] text-white py-2 px-3  absolute">
                          <Link href= "/services/Construction-Services"> <li>Construction</li></Link> 
                          <Link href="/services/selling-and-purchasing-services"> <li>Selling & Purchasing</li> </Link>
                      </ul>
                    )}
                  </li>
                  <li className="block  py-[5px] cursor-pointer hover:!text-[#FF9D00]">
                  <Link href="/about">About Us</Link>
                  </li>
                  <li className="inline-block mt-[10px] md:mb-[0px] ms-0 md:ms-[25px] lg:ms-[150px] border-[1px] p-[12px] rounded-[8px] hover:!border-[#FF9D00] hover:text-[#ff9c00] cursor-pointer">
                  <Link href="/contact-us">Contact Us</Link> 
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}