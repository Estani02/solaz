import type { MapIteamCarousel } from '@/interfaces'

import Image from 'next/image'
import React from 'react'

function ItemGallery({ itemMap }: { itemMap: MapIteamCarousel[] }) {
  return (
    <ul className="hidden w-fit grid-cols-2 gap-8 md:grid">
      {itemMap.map((item, index) => (
        <div key={item.id}>
          <li
            className={`relative h-[401px] w-[317px] max-w-full text-white ${
              index % 2 === 1 ? 'col-start-2 col-end-3 mt-12' : ''
            }`}
          >
            <Image
              alt="gym"
              className="h-full w-full object-cover object-center"
              layout="fill"
              src={item.img}
            />
          </li>
          <div className="w-[317px] max-w-full">
            <h6 className="font-arial font-semibold uppercase ">{item.title}</h6>
            <p className="text-left text-sm text-[#a4a4a4]">{item.description}</p>
          </div>
        </div>
      ))}
    </ul>
  )
}

export default ItemGallery
