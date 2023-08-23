import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  description: string;
  image: StaticImageData;
};

const Card = (props: Props) => {
  return (
    <div className="px-[50px] w-[276px] h-[314px] flex flex-col items-center text-center rounded-es-[35px] shadow-card z-40">
      <div className="w-[166px] h-[153px] flex justify-center items-center">
        <Image src={props.image} alt={props.title} />
      </div>
      <h5 className="text-xl font-semibold w-[190px]">{props.title} </h5>
      <p className="w-[181px] mt-[18px] font-medium font-poppins text-category ">
        {props.description}
      </p>
    </div>
  );
};

export default Card;
