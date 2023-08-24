import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
};

const BookCard: React.FC<Props> = ({ image, title, description }) => {
  return (
    <div className="flex-col items-center text-center sm:text-center sm:flex-row flex sm:gap-5 mt-10 sm:items-center ">
      <div className="w-12">
        <Image width={48} height={48} src={image} alt="group 7" />
      </div>
      <div>
        <h3 className="font-poppins text-category font-bold">{title}</h3>
        <p className="text-category w-[327px]">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;
