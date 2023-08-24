import BookCard from "@/components/BookCard";
import EasyAndFastCard from "@/components/EasyAndFastCard";
import React from "react";

const EasyAndFast = () => {
  return (
    <section className=" mt-10 pl-4 flex-col sm:flex-row flex items-center justify-around ">
      <div>
        <h3 className="text-xl text-center sm:text-left text-category sm:text-lg font-poppins font-semibold">
          Easy and Fast
        </h3>
        <h2 className="text-xl  text-center sm:text-start sm:text-5xl font-bold sm:w-[500px] pr-1 sm:pt-[15px]">
          Book your next trip in 3 easy steps
        </h2>
        <div className="justify-center flex-col items-center sm:flex-col flex">
          <BookCard
            image="/images/eastandfast/destination.png"
            title="Choose Destination"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
          />
          <BookCard
            image="/images/eastandfast/payment.png"
            title="Make Payment"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
          />
          <BookCard
            image="/images/eastandfast/selected.png"
            title="Reach Airport on Selected Date"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
          />
        </div>
      </div>
      <div className="hidden xl:block">
        <EasyAndFastCard />
      </div>
    </section>
  );
};

export default EasyAndFast;
