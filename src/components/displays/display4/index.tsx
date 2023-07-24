/* eslint-disable @typescript-eslint/no-base-to-string */
import React from 'react'
import Location from '@mui/icons-material/LocationOn'
import Image from 'next/image'

import Map from '@/components/map'
import CarouselCompont from '@/components/carousel'
import { itemsConocenos } from '@/components/items/contentItem'

function Display4() {
  return (
    <section className="flex flex-col gap-4 bg-white text-black md:w-full">
      <div className="relative flex flex-col bg-[#15181c] px-4 py-6 text-white md:h-full md:w-full md:flex-row md:justify-evenly md:py-24">
        <div className="flex flex-col gap-2 md:sticky md:bottom-[40px] md:top-[22vh] md:h-fit md:w-[450px]">
          <h4 className="text-center font-arial text-3xl font-bold md:text-left md:text-4xl">
            QUIENES SOMOS
          </h4>
          <div className="text-justify text-sm md:text-left">
            <p>
              <b>Solaz</b> es una amalgama perfecta de innovación tecnológica, profesionalismo y
              calidez humana comprometidos en generar cambios integrales y sostenibles en tu cuerpo
              y salud.
            </p>
          </div>
        </div>
        <div className="container mx-auto my-5 block md:hidden xl:px-20">
          <CarouselCompont itemMap={itemsConocenos} />
        </div>
        <ul className="grid w-fit grid-cols-2 gap-8">
          {itemsConocenos.map((item, index) => (
            <li
              key={item.id}
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
              <p className="relative z-20 text-3xl text-white">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-10 flex w-full flex-col gap-2 bg-white px-0 text-black md:px-8">
        <span className="flex flex-row text-left">
          <Location className="h-5 w-5" />
          <p className="font-extrabold">UBICACIÓN</p>
        </span>
        {/* <Map /> */}
      </div>
    </section>
  )
}

export default Display4
