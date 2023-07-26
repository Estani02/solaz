import React from 'react'
import Location from '@mui/icons-material/LocationOn'
import dynamic from 'next/dynamic'

function Display5() {
  const MapRender = dynamic(
    () => import('@/components/map/index'), // replace '@components/map' with your component's location
    { ssr: false }, // This line is important. It's what prevents server-side render
  )

  return (
    <div className="mb-10 flex w-full flex-col gap-2 bg-white px-0 text-black md:px-8">
      <span className="flex flex-row text-left">
        <Location className="h-5 w-5" />
        <p className="font-extrabold">UBICACIÓN</p>
      </span>
      <MapRender />
    </div>
  )
}

export default Display5
