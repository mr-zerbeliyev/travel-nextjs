import React from "react";
import Landing from "@/sections/Landing";
import Category from "@/sections/Category";
import TopStelling from "@/sections/TopStelling";
import Testimonials from "@/sections/Testimonials";
import Partner from "@/sections/Partner";
import Subscribe from "@/sections/Subscribe";

const Home = () => {
  return (
    <main className="px-[140px]">
      <Landing />
      <Category />
      <TopStelling />
      <Testimonials />
      <Partner />
      <Subscribe />
    </main>
  );
};

export default Home;
