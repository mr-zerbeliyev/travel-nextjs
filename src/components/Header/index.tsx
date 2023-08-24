import React from "react";
import Logo from "@/images/logo.svg";
import Image from "next/image";
import Vector from "@/images/vector.svg";
import Decore from "@/images/decore.png";
import HamburgerMenu from "../HamburgerMenu";

const Header = () => {
  return (
    <header className="text-header relative">
      <div className="h-[250px] w-[200px]  absolute right-0  lg:w-[766px] lg:h-[872px] -z-40">
        <Image src={Decore} alt="decore" className="ml-auto" />
      </div>
      <div className="flex px-4 items-center md:px-10 py-4 xl:px-[140px] sm:py-[48px] justify-between ">
        <Image src={Logo} alt="logo" />
        <div className="hidden  lg:block">
          <ul className="flex gap-[55px] font-normal  items-center font-sans">
            <li className="cursor-pointer ">Desitnations</li>
            <li className="cursor-pointer ">Hotels</li>
            <li className="cursor-pointer ">Flights</li>
            <li className="cursor-pointer ">Bookings</li>
            <li className="cursor-pointer ">Login</li>
            <button className="w-[102px] border border-black rounded-md h-[40px] px-[21px] py-[9px]">
              Sign up
            </button>
            <div className="flex">
              <span className="pr-1">En</span>
              <Image className="pt-1" src={Vector} alt="vector" />
            </div>
          </ul>
        </div>
        <div className="lg:hidden">
          <HamburgerMenu/>
        
        </div>
      </div>
    </header>
  );
};

export default Header;
