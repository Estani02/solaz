'use client'

import type { MapIteamCarousel } from '@/interfaces'

import React from 'react'
import Carousel from 'react-material-ui-carousel'

import ItemCarousel from '../items/ItemCarousel'

function CarouselCompont({
  itemMap,
  opacity = false,
}: {
  itemMap: MapIteamCarousel[]
  opacity?: boolean
}) {
  return (
    <Carousel
      indicators
      animation="slide"
      className="rounded-lg"
      duration={800}
      fullHeightHover={false}
    >
      {itemMap.map((item) => (
        <ItemCarousel
          key={item.id}
          description={item.description}
          img={item.img}
          opacity={opacity}
          title={item.title}
        />
      ))}
    </Carousel>
  )
}

export default CarouselCompont
