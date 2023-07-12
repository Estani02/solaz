/* eslint-disable react/button-has-type */
import React from 'react'

import WhatsappIcon from '@/assets/svg/WhatsappIcon'
import TiktokIcon from '@/assets/svg/TiktokIcon'
import FacebookIcon from '@/assets/svg/FacebookIcon'
import InstagramIcon from '@/assets/svg/InstagramIcon'

function Display1() {
  return (
    <div
      className="relative mt-[72px] flex h-[80vh] flex-col items-center justify-between bg-cover bg-fixed bg-center bg-no-repeat p-2"
      style={{
        backgroundImage: `url(https://lirp.cdn-website.com/bfcdb538/dms3rep/multi/opt/DSC00170+%281%29-1920w.jpg)`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-[0.7]" />
      <div className="relative flex flex-col gap-4 text-white">
        <h2 className="relative mt-[50px] text-center text-2xl font-extrabold uppercase">
          <b>Fortalece</b> tu cuerpo <br /> y <b>transforma</b> tu vida
        </h2>
        <p className="mb-12 text-center text-[#ffffffb8]">Unite a la familia Solaz</p>
        <button className="m-auto w-fit rounded-full bg-white px-5 py-3 font-extrabold uppercase text-red-600">
          Conoce los beneficios
        </button>
        <div className="flex h-3/4 w-3/5 flex-row">
          <span className="h-10 w-10 rounded-full bg-white p-3">
            <WhatsappIcon />
          </span>
          <span className="h-4 rounded-full bg-white">
            <TiktokIcon />
          </span>
          <span className="h-4 rounded-full bg-white">
            <FacebookIcon />
          </span>
          <span className="h-4 rounded-full bg-white">
            <InstagramIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Display1
