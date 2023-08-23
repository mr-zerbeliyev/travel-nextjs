import BookCard from '@/components/BookCard'
import GreeceCard from '@/components/GreceeCard'
import React from 'react'

const EasyAndFast = () => {
  return (
    <section className="flex items-center justify-around ">
        <div>
          <h3 className="text-category text-lg font-poppins font-semibold">
            Easy and Fast
          </h3>
          <h2 className="text-5xl font-bold w-[500px] pr-1 pt-[15px]">
            Book your next trip in 3 easy steps
          </h2>
          <div>
            <BookCard
              image="/images/group7.png"
              title="Choose Destination"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
            />
            <BookCard
              image="/images/group8.png"
              title="Make Payment"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
            />
            <BookCard
              image="/images/group9.png"
              title="Reach Airport on Selected Date"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
            />
          </div>
        </div>
        <div>
          <GreeceCard />
        </div>
      </section>
  )
}

export default EasyAndFast