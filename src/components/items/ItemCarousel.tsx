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
      <div className={`absolute inset-0 bg-black ${opacity ? 'opacity-[0.6]' : 'opacity-0'}`} />
      <div className="relative p-5 text-left">
        <h2 className="font-arial text-xl font-bold uppercase">{title}</h2>
        <p className="rounded-md text-left text-xs font-medium text-white">{description}</p>
      </div>
    </div>
  )
}

export default ItemCarousel
