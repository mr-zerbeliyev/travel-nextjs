import Button from "@/components/Button";
import { PlayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import Traveller from "@/images/landing/traveller.png";
import Plane from "@/images/landing/plane.svg";
import Heading from "@/images/landing/heading.png";

const Landing = () => {
  return (
    <section className="relative ">
      <div>
        <h3 className="mt-[20px] uppercase font-poppins font-bold sm:text-xl text-orange sm:mt-[134px]">
          Beest destinapitons around the world
        </h3>
        <Image className=" sm:mt-[24px]" src={Heading} alt="heading" />
        <p className="w-full sm:w-[477px] font-poppins text-base font-medium leading-[30px] mt-[30px]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
      </div>
      <div className="flex-col sm:flex-row mt-8  flex items-center gap-[44px]">
        <div className="flex">
          <Button title="Find out more" />
        </div>
        <div className="flex items-center  gap-[21px]">
          <button className="h-[52px] w-[52px] bg-orange rounded-[52px] flex items-center justify-center">
            <PlayIcon className="w-5 h-5 stroke-white" />
          </button>
          <span>Play Demo</span>
        </div>
      </div>
      <div className="hidden lg:block md:-right-20 absolute right-0 -top-40  lg:w-[400px] xl:w-auto xl:right-0">
        <Image src={Traveller} alt="traveller" />
      </div>
      <Image
        className="hidden  sm:absolute right-0 top-0"
        src={Plane}
        alt="plane"
      />
      <Image
        className=" hidden sm:block absolute right-20 lg:right-[470px] -top-20"
        src={Plane}
        alt="plane"
      />
    </section>
  );
};

export default Landing;
