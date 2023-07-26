/* eslint-disable react/button-has-type */
import React from 'react'

import { itemsBeneficios } from '@/components/items/contentItem'
import ItemGallery from '@/components/items/ItemGallery'

import CarouselCompont from '../../carousel'

function Display2() {
  return (
    <section className="relative flex flex-col items-center gap-4 px-4 py-6 text-white md:h-full md:w-full md:flex-row md:items-start md:justify-evenly md:py-24">
      <div className="flex flex-col gap-4 md:sticky md:bottom-[40px] md:top-[22vh] md:h-fit md:w-[450px]">
        <h3 className="mt-2 font-arial text-3xl font-bold uppercase md:text-4xl">Beneficios</h3>
        <p className="hidden text-sm md:block md:text-justify">
          ¡Bienvenido a Solaz, tu destino para el entrenamiento de clase mundial! Nos enorgullece
          ofrecerte equipamiento de nivel mundial de Life Fitness, un ambiente climatizado para tu
          comodidad, amplias áreas de duchas y vestuarios, taquillas para guardar tus pertenencias,
          estacionamiento propio y un equipo de profesionales altamente calificados.
        </p>
        <p className="block text-sm md:hidden md:text-justify">
          Nuestra exclusiva membresía de gimnasio te brinda todas las herramientas y recursos
          necesarios para llevar tu rendimiento al siguiente nivel.
        </p>
        <button className="w-full rounded-full bg-white px-5 py-3 font-arial font-bold uppercase text-red-600 transition-colors duration-300 md:text-lg md:hover:bg-[#cbcbcb] md:hover:text-red-700">
          asociate
        </button>
      </div>
      <div className="container mx-auto my-5 block text-center md:hidden xl:px-20">
        <CarouselCompont opacity itemMap={itemsBeneficios} />
      </div>
      <ItemGallery itemMap={itemsBeneficios} />
    </section>
  )
}

export default Display2
