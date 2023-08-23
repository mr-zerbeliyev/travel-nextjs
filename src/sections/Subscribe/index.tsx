import Button from '@/components/Button'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import Groupp from "@/images/group10.png"

const Subscribe = () => {
  return (
    <section className="relative mt-28">
    <div className="hidden  lg:block absolute -right-6 -top-6">
      <Image src={Groupp} alt="groupp" />
    </div>
    <div className="bg-pinky py-[79px] sm:h-[407px] flex  flex-col items-center rounded-tl-[100px]">
      <h3 className="font-poppins text-center font-semibold text-category lg:leading-[54px] text-[32px] xl:w-[882px]">
        Subscribe to get information, latest news and other interesting
        offers about Jadoo
      </h3>
      <div className="flex-col sm:flex-row flex gap-6 mt-[74px]">
        <div className="bg-white h-[68px] sm:w-[421px] items-center flex px-4">
          <div className="flex items-center">
            <EnvelopeIcon className=" hidden sm:block w-[21px] h-[18px]" />
            Your email
          </div>
          <input className="h-8 sm:w-[281px] outline-none px-2" type="text" />
        </div>
        <Button title="Subscribe" />
      </div>
    </div>
  </section>
  )
}

export default Subscribe