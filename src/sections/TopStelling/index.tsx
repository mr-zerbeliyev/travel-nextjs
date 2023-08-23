import DestinationCard from "@/components/DestinationCard";
import React from "react";
import Decor from "@/images/decor.png";
import Image from "next/image";

const TopStelling = () => {
  return (
    <section className="my-[100px]">
      <h3 className="text-center text-lg font-poppins text-category font-semibold">
        Top Stelling
      </h3>
      <h2 className="text-center font-volkhov font-bold text-5xl capitalize mt-[10px]">
        Top Destinations
      </h2>
      <div className="flex gap-[36px] justify-center mt-[60px] relative">
        <div className="absolute right-14 bottom-10">
          <Image src={Decor} alt="decor" />
        </div>
        <DestinationCard
          image="/images/roma.png"
          capital="Rome, Italty"
          price="$5,42k"
          day="10 Days Trip"
        />
        <DestinationCard
          image="/images/london.jpeg"
          capital="London, UK"
          price="$5,42k"
          day="12 Days Trip"
        />
        <DestinationCard
          image="/images/europe.png"
          capital="Full Europe"
          price="$15k"
          day="28 Days Trip"
        />
      </div>
    </section>
  );
};

export default TopStelling;