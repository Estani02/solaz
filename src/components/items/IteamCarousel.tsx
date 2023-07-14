import React from 'react'

interface PropsItem {
  name: string
  description: string
  img: string
}

function IteamCarousel({ name, description, img }: PropsItem) {
  return (
    <div
      className="relative m-auto h-[50vh] w-full bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-[0.6]" />
      <div className="relative p-5 text-left">
        <h2 className=" text-xl font-bold uppercase">{name}</h2>
        <p className="text-left text-sm font-medium">{description}</p>
      </div>
    </div>
  )
}

export default IteamCarousel
