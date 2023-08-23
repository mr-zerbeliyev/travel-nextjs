import Button from "@/components/Button";
import { PlayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import Traveller from "@/images/traveller.png";
import Plane from "@/images/plane.svg";
import Heading from "@/images/heading.png";

const Landing = () => {
  return (
    <section className="relative">
      <div>
        <h3 className="uppercase font-poppins font-bold text-xl text-orange mt-[134px] mb-">
          Beest destinapitons around the world
        </h3>
        <Image className="mt-[24px]" src={Heading} alt="heading" />
        <p className="w-[477px] font-poppins text-base font-medium leading-[30px] mt-[30px]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
      </div>
      <div className=" mt-8  flex items-center gap-[44px]">
        <div className=" flex">
          <Button title="Find out more" />
        </div>
        <div className="flex items-center  gap-[21px]">
          <button className="h-[52px] w-[52px] bg-orange rounded-[52px] flex items-center justify-center">
            <PlayIcon className="w-5 h-5 stroke-white" />
          </button>
          <span>Play Demo</span>
        </div>
      </div>
      <div className="absolute right-0 -top-40">
        <Image src={Traveller} alt="traveller" />
      </div>
      <Image className="absolute right-0 top-0" src={Plane} alt="plane" />
      <Image
        className="absolute right-[470px] -top-20"
        src={Plane}
        alt="plane"
      />
    </section>
  );
};

export default Landing;
