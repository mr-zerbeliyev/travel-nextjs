import React from "react";
import Image from "next/image";
import Facebook from "@/images/facebook.png";
import Instagrambg from "@/images/instagrambg.png";
import Twitter from "@/images/twitter.png";
import Google from "@/images/google.png";
import Getiton from "@/images/getiton.png";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex mt-[100px] justify-around">
        <div className="w-[207px]">
          <h3 className="font-poppins text-[44px] font-semibold text-black">
            Jadoo.
          </h3>
          <p className="font-poppins text-[13px]">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-poppins font-bold text-black pb-8">
            Company
          </h3>
          <p className="font-poppins text-lg font-medium text-category pb-3">
            About
          </p>
          <p className="font-poppins text-lg font-medium text-category  pb-3">
            Carrers
          </p>
          <p className="font-poppins text-lg font-medium text-category  pb-3">
            Mobile
          </p>
        </div>
        <div>
          <h3 className="text-xl font-poppins font-bold text-black pb-8">
            Contact
          </h3>
          <p className="font-poppins text-lg font-medium text-category  pb-3">
            Help/FAQ
          </p>
          <p className="font-poppins text-lg font-medium text-category  pb-3">
            Press
          </p>
          <p className="font-poppins text-lg font-medium text-category  pb-3">
            Affilates
          </p>
        </div>
        <div>
          <h3 className="text-xl font-poppins font-bold text-black pb-8">
            More
          </h3>
          <p className="font-poppins text-lg font-medium text-category  pb-3">
            Airlinefees
          </p>
          <p className="font-poppins text-lg font-medium text-category  pb-3">
            Airline
          </p>
          <p className="font-poppins text-lg font-medium text-category  pb-3">
            Low fare tips
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex gap-4  pb-3">
            <Image width={41} height={41} src={Facebook} alt="facebook" />
            <Image width={41} height={41} src={Instagrambg} alt="instagram" />
            <Image width={41} height={41} src={Twitter} alt="twitter" />
          </div>
          <div className=" pb-3">
            <h3 className="font-poppins text-lg font-medium text-category">
              Discover our app
            </h3>
          </div>
          <div className="flex gap-3">
            <div className="w-[107px] h-[35px] rounded-2xl bg-black">
              <div className="flex items-center justify-center h-full cursor-pointer">
                <Image className="w-5 h-5" src={Google} alt="google" />
                <Image className="w-[53px] h-3.5" src={Getiton} alt="getiton" />
              </div>
            </div>
            <div className="w-[107px] h-[35px] rounded-2xl bg-black">
              <div className="flex items-center justify-center h-full cursor-pointer">
                <Image className="w-5 h-5" src={Google} alt="google" />
                <Image className="w-[53px] h-3.5" src={Getiton} alt="getiton" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-center font-poppins text-category my-[86px] ">
        All rights reserved@jadoo.co
      </h3>
    </footer>
  );
};

export default Footer;
