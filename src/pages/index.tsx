import React from "react";
import Landing from "@/sections/Landing";
import Category from "@/sections/Category";
import TopStelling from "@/sections/TopStelling";
import Testimonials from "@/sections/Testimonials";
import Partner from "@/sections/Partner";
import Subscribe from "@/sections/Subscribe";
import EasyAndFast from "@/sections/EasyAndFast";

const Home = () => {
  return (
    <main className="px-4 sm:px-2 md:px-2.5 lg:px-[140px]">
      <Landing />
      <Category />
      <TopStelling />
      <Testimonials />
      <EasyAndFast />
      <Partner />
      <Subscribe />
    </main>
  );
};

export default Home;
