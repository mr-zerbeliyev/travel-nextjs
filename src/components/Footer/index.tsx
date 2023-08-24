import React from "react";
import Image from "next/image";
import Facebook from "@/images/footer/facebook.png";
import Instagrambg from "@/images/footer/instagrambg.png";
import Twitter from "@/images/footer/twitter.png";
import Google from "@/images/footer/google.png";
import Getiton from "@/images/footer/getiton.png";
import FooterItem from "../Footer/FooterItem";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex-col  text-center sm:text-center items-center xl:items-start md:flex-row  md:text-center xl:text-start flex mt-[100px] sm:justify-around">
        <div className="w-[207px]">
          <h3 className="font-poppins text-[44px] font-semibold text-black">
            Jadoo.
          </h3>
          <p className="font-poppins text-[13px]">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <FooterItem title="Company" items={["About", "Carrers", "Mobile"]} />
        <FooterItem
          title="Contact"
          items={["Help/FAQ", "Press", "Affilates"]}
        />
        <FooterItem
          title="More"
          items={["Airlinefees", "Airline", "Airline"]}
        />
        <div className="flex flex-col items-center  justify-around">
          <div className="flex justify-center items-center lg:justify-start gap-4  pb-3">
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
      <h3 className="text-center font-poppins text-category mt-[50px] ">
        All rights reserved@jadoo.co
      </h3>
    </footer>
  );
};

export default Footer;
