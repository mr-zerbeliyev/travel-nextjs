import Card from '@/components/Card'
import React from 'react'
import Group from "@/images/group.png";
import Group1 from "@/images/group1.png";
import Group3 from "@/images/group3.png";

const Category = () => {
  return (
    <section className="mt-[130px] ">
    <h3 className="uppercase text-center font-poppins font-semibold text-lg text-category">
      category
    </h3>
    <h1 className="text-center font-volkhov font-bold text-5xl capitalize mt-[10px]">
      We Offer Best Services
    </h1>
    <div className="mt-10 mb-10 flex gap-10 relative z-40">
      <Card
        image={Group}
        title="Calculated Weather "
        description="Built Wicket longer admire do barton vanity itself do in it."
      />
      <Card
        image={Group1}
        title="Best Flights "
        description="Engrossed listening. Park gate sell they west hard for the."
      />
      <Card
        image={Group3}
        title="Local Events"
        description="Barton vanity itself do in it. Preferd to men it engrossed listening. "
      />
      <Card
        image={Group}
        title="Calculated Weather "
        description="We deliver outsourced aviation services for military customers"
      />
      <div className="absolute w-[100px] h-[100px] bg-orange rounded-tl-[30px] rounded-ee-md -bottom-7 left-80 -z-10" />
    </div>
  </section>
  )
}

export default Category