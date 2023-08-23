import StickerCard from '@/components/StickerCard'
import React from 'react'

const Partner = () => {
  return (
    <section className="flex justify-center">
    <div className="flex  items-center gap-[90px] mt-24">
      <StickerCard image="/images/axon.png" />
      <StickerCard image="/images/jetstar.png" />
      <StickerCard image="/images/expedia.png" />
      <StickerCard image="/images/qantas.png" />
      <StickerCard image="/images/alitali.png" />
    </div>
  </section>
  )
}

export default Partner