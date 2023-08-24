import DestinationCard from "@/components/DestinationCard";
import React from "react";
import Decor from "@/images/topStelling/decor.png";
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
      <div className="flex-col  2xl:w-[1300px] 2xl:mx-auto sm:flex-row flex-wrap  flex gap-[36px] items-center sm:items-start justify-center mt-[60px] relative">
        <div className="hidden xl:block absolute right-20 bottom-10">
          <Image src={Decor} alt="decor" />
        </div>
        <DestinationCard
          image="/images/topstelling/roma.png"
          capital="Rome, Italty"
          price="$5,42k"
          day="10 Days Trip"
        />
        <DestinationCard
          image="/images/topstelling/london.jpeg"
          capital="London, UK"
          price="$5,42k"
          day="12 Days Trip"
        />
        <DestinationCard
          image="/images/topstelling/europe.png"
          capital="Full Europe"
          price="$15k"
          day="28 Days Trip"
        />
      </div>
    </section>
  );
};

export default TopStelling;
