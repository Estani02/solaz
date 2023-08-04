/* eslint-disable react/button-has-type */
import React from 'react'

import IteamRedes from '../../items/ItemRedes'

function Display1() {
  return (
    <section
      className="relative flex h-[100vh] flex-col items-center justify-between bg-cover bg-fixed bg-center bg-no-repeat p-2 "
      id="Inicio"
      style={{
        backgroundImage: `url(https://lirp.cdn-website.com/bfcdb538/dms3rep/multi/opt/DSC00170+%281%29-1920w.jpg)`,
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-[1]"
        style={{
          background: 'linear-gradient(#15181c00 -100%, #16191d 88%, #1F2128 95%)',
        }}
      />
      <div className="relative mt-[72px] flex h-full flex-col gap-4 text-white">
        <h2 className="relative mt-[50px] text-center font-arial text-2xl font-bold uppercase md:text-4xl">
          <b>Fortalece</b> tu cuerpo <br /> y <b>transforma</b> tu vida
        </h2>
        <p className="mb-12 text-center text-[#ffffffb8] md:text-xl">
          Unite a la familia <b>Solaz</b>
        </p>
        <div className="flex h-[38%] flex-col items-center justify-between">
          <button className="w-fit rounded-full bg-white px-5 py-3 font-arial font-bold uppercase text-red-600 transition-colors duration-300 md:text-xl md:hover:bg-[#cbcbcb] md:hover:text-red-700">
            Conoce los beneficios
          </button>
          <IteamRedes />
        </div>
      </div>
    </section>
  )
}

export default Display1
