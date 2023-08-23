import React from "react";
import Image from "next/image";
import Navigation from "@/images/navigation.png";

type Props = {
  image: string;
  capital: string;
  price: string;
  day: string;
};

const DestinationCard: React.FC<Props> = ({ capital, image, price, day }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={`w-[285px] sm:w-[314px] h-[457px] font-base bg-cover bg-no-repeat relative shadow-card rounded-3xl`}
    >
      <div className="px-3 sm:px-5 h-[130px] absolute bottom-0 left-0 w-full bg-white">
        <div className="flex justify-between font-poppins mt-[27px]">
          <span>{capital}</span>
          <span>{price}</span>
        </div>
        <div className="flex gap-2 mt-[19px] ">
          <Image src={Navigation} alt="navigation" />
          <span>{day}</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
