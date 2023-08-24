import Image from "next/image";
import React from "react";

type Props = {
  image: string;
};

const StickerCard: React.FC<Props> = ({ image }) => {
  return (
    <div>
      <Image width={100} height={40} src={image} alt="image" />
    </div>
  );
};

export default StickerCard;
