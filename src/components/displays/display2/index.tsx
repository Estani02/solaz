import React from 'react'

import { itemsBeneficios } from '@/components/items/contentItem'

import CarouselCompont from '../../carousel'

function Display2() {
  return (
    <section className="relative flex h-[80vh] flex-col items-center p-2 text-white">
      <h3 className="mt-2 font-arial text-3xl font-bold uppercase md:text-4xl">Beneficios</h3>
      <div className="container mx-auto my-5 text-center xl:px-20">
        <CarouselCompont opacity itemMap={itemsBeneficios} />
      </div>
    </section>
  )
}

export default Display2
