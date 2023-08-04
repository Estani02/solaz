import React from 'react'
import Location from '@mui/icons-material/LocationOn'
import dynamic from 'next/dynamic'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

import ContactForm from '@/components/contactForm'

function Display5() {
  const MapRender = dynamic(
    () => import('@/components/map/index'), // replace '@components/map' with your component's location
    { ssr: false }, // This line is important. It's what prevents server-side render
  )

  return (
    <section
      className="bg-white bg-cover py-10 text-black md:py-0"
      id="Contactanos"
      style={{
        backgroundImage:
          'url(https://assets-global.website-files.com/6006f5bf87d96d2131258ef0/627e923543fae8b1070581d0_FONDO%20plataformas.jpg)',
        backgroundPosition: '50% 100%',
        transform: 'rotate(180deg)',
      }}
    >
      <div className="flex w-full rotate-180 flex-col gap-4 px-4 py-6 md:flex-row-reverse md:justify-evenly md:px-8 md:py-24">
        <div className="relative z-10 flex flex-col gap-2 md:w-full">
          <div className="flex w-full items-center justify-between ">
            <span className="flex flex-row items-center text-left font-normal">
              <Location className="h-5 w-5 md:h-8 md:w-8" />
              <p>UBICACIÓN</p>
            </span>

            <a
              className="flex w-fit flex-row items-center gap-1 border-b-[1.5px] border-sky-500 text-left text-sm text-sky-500 transition-colors duration-150 md:hover:border-sky-700 md:hover:text-sky-700"
              href="https://www.google.com/maps/place/Solaz+Club/@-31.2695372,-64.3020727,17z/data=!3m1!4b1!4m6!3m5!1s0x94329d327dc338a5:0x57109a11506d73f8!8m2!3d-31.2695372!4d-64.3020727!16s%2Fg%2F11f__7c4fz?entry=ttu"
              rel="noopener"
              target="_blank"
            >
              <OpenInNewIcon className="h-5 w-5 md:h-6 md:w-6" />
              Cómo llegar
            </a>
          </div>
          <MapRender />
        </div>
        <div className="mt-4 flex flex-col justify-between gap-2 md:w-[600px]">
          <h6 className="border-t-[1.5px] border-gray-600 py-2 text-left font-bold uppercase md:border-none">
            Deja tu consulta
          </h6>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Display5
