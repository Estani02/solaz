/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-base-to-string */
import React from 'react'

import CarouselCompont from '@/components/carousel'
import { itemsConocenos } from '@/components/items/contentItem'
import ItemGallery from '@/components/items/ItemGallery'

function Display4() {
  return (
    <section
      className="relative flex flex-col gap-4 px-4 py-6 text-white md:h-full md:w-full md:flex-row md:justify-evenly md:py-24"
      id="Conocenos"
    >
      <div className="flex flex-col gap-4 md:sticky md:bottom-[40px] md:top-[22vh] md:h-fit md:w-[450px]">
        <h4 className="text-center font-arial text-3xl font-bold md:text-left md:text-4xl">
          QUIENES SOMOS
        </h4>
        <div className="text-sm">
          <p>
            <b>Solaz</b> es una amalgama perfecta de innovación tecnológica, profesionalismo y
            calidez humana comprometidos en generar cambios integrales y sostenibles en tu cuerpo y
            salud.
          </p>
        </div>
        <a
          className="w-full rounded-full bg-white px-5 py-3 text-center font-arial font-bold uppercase text-red-600 transition-colors duration-300 md:text-lg md:hover:bg-[#cbcbcb] md:hover:text-red-700"
          href="#Contactanos"
        >
          veni a probar
        </a>
      </div>
      <div className="container mx-auto my-5 block md:hidden xl:px-20">
        <CarouselCompont itemMap={itemsConocenos} />
      </div>
      <ItemGallery itemMap={itemsConocenos} />
    </section>
  )
}

export default Display4
