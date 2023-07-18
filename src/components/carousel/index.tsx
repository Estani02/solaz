'use client'
import React from 'react'
import Carousel from 'react-material-ui-carousel'

import IteamCarousel from '../items/IteamCarousel'

function CarouselCompont() {
  const items = [
    {
      id: 1,
      name: 'Entrenamiento Personalizado',
      description:
        'Nuestros profesores altamente capacitados diseñarán un programa de entrenamiento personalizado adaptado a tus metas y necesidades individuales. Obtén resultados óptimos y maximiza tu potencial físico.',
      img: 'https://www.styku.com/hubfs/_CW15488.jpg',
    },
    {
      id: 2,
      name: 'Tecnología de Última Generación',
      description:
        'Experimenta la revolución del fitness con nuestra avanzada tecnología. Contamos con equipos de entrenamiento de última generación.!',
      img: 'https://architect.bjc.es/wp-content/uploads/2019/06/90078304_m.jpg',
    },
    {
      id: 3,
      name: 'Aplicación Móvil Inteligente',
      description:
        'Tu compañero de entrenamiento personalizado. Sigue rutinas, recibe recomendaciones y conecta con otros miembros.',
      img: 'https://blogs.funiber.org/wp-content/uploads/2019/03/deportes.jpg',
    },
  ]

  return (
    <Carousel
      animation="slide"
      className="rounded-lg"
      duration={800}
      fullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
      indicators={false}
    >
      {items.map((item) => (
        <IteamCarousel
          key={item.id}
          description={item.description}
          img={item.img}
          name={item.name}
        />
      ))}
    </Carousel>
  )
}

export default CarouselCompont
