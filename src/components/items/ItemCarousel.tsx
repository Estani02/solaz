/* eslint-disable @typescript-eslint/no-base-to-string */
import type { PropsItemCarousel } from '@/interfaces'

import React from 'react'

function ItemCarousel({ title, description, img, opacity }: PropsItemCarousel) {
  return (
    <div
      className="relative m-auto h-[50vh] w-full bg-cover bg-center bg-no-repeat text-white md:h-[60vh] "
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className={`absolute inset-0 bg-black ${opacity ? 'opacity-[0.75]' : 'opacity-0'}`} />
      <div className="relative p-5 text-left md:flex md:h-full md:w-full md:flex-col md:items-center md:justify-center md:text-justify">
        <h2 className="font-arial text-xl font-bold uppercase">{title}</h2>
        <p className="text-left text-xs font-semibold text-[#a4a4a4]">{description}</p>
      </div>
    </div>
  )
}

export default ItemCarousel
