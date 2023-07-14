import React from 'react'

import CarouselCompont from '../carousel'

function Display2() {
  return (
    <div className="relative flex h-[80vh] flex-col items-center overflow-hidden bg-[#202128] bg-gradient-to-b p-2 text-white">
      <h3 className="mt-2">Beneficios</h3>
      <div className="container mx-auto my-5 grid grid-cols-1 gap-2 text-center md:grid-cols-4 md:gap-4 xl:px-20">
        <CarouselCompont />
      </div>
    </div>
  )
}

export default Display2
