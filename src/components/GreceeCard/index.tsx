import Image from "next/image";
import React from "react";
import Greece from "@/images/greece.png";
import {
  BuildingOffice2Icon,
  HeartIcon,
  MapIcon,
  PaperAirplaneIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import Gurup from "@/images/gurup.png";
import Gurup1 from "@/images/gurup1.png";

const GreeceCard = () => {
  return (
    <div className="w-[370] h-[400px] rounded-[36px] px-6 py-5 shadow-card relative">
      <div>
        <Image src={Greece} alt="greece" />
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <h3 className="text-lg font-poppins">Trip To Greece</h3>
        <div className="flex gap-1 font-poppins text-category">
          <span>14-29 June |</span>
          <span>by Robbin joseph</span>
        </div>
        <div className="h-7 flex gap-4  text-category ">
          <MapIcon className="h-full" />
          <PlayCircleIcon className="h-full" />
          <PaperAirplaneIcon className="h-full" />
        </div>
        <div className="flex gap-2 text-category justify-between">
          <div className="flex gap-4 mt-2">
            <BuildingOffice2Icon className="h-7" />
            <span>24 people going</span>
          </div>
          <div>
            <HeartIcon className="h-6 mt-2" />
          </div>
        </div>
      </div>
      <div className="md:hidden lg:block absolute flex -right-20 bottom-20 bg-white rounded-xl w-[263px]  shadow-card border py-4 pl-2">
        <div>
          <Image className="rounded-full" src={Gurup} alt="gurup" />
        </div>
        <div className=" px-2">
          <h3 className="text-category text-sm font-poppins">Ongoing</h3>
          <p className="font-poppins text-lg">Trip to rome</p>
          <p>
            <span className="text-blue-400 pr-2">40%</span>completed
          </p>
          <Image  src={Gurup1} alt="gurup1"/>
        </div>
      </div>
    </div>
  );
};

export default GreeceCard;
