/* eslint-disable react/button-has-type */
import React from 'react'

import WhatsappIcon from '@/assets/svg/WhatsappIcon'
import TiktokIcon from '@/assets/svg/TiktokIcon'
import FacebookIcon from '@/assets/svg/FacebookIcon'
import InstagramIcon from '@/assets/svg/InstagramIcon'

function Display1() {
  return (
    <div
      className="relative flex h-[100vh] flex-col items-center justify-between bg-cover bg-fixed bg-center bg-no-repeat p-2 "
      style={{
        backgroundImage: `url(https://lirp.cdn-website.com/bfcdb538/dms3rep/multi/opt/DSC00170+%281%29-1920w.jpg)`,
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-[1]"
        style={{
          background: 'linear-gradient(#15181c00 -100%, #16191d 85%, #15181c 90%)',
        }}
      />
      <div className="relative mt-[72px] flex h-full flex-col gap-4 text-white">
        <h2 className="relative mt-[50px] text-center font-arial text-2xl font-bold uppercase md:text-4xl">
          <b>Fortalece</b> tu cuerpo <br /> y <b>transforma</b> tu vida
        </h2>
        <p className="mb-12 text-center text-[#ffffffb8] md:text-xl">
          Unite a la familia <b>Solaz</b>
        </p>
        <div className="flex h-1/2 flex-col items-center justify-between">
          <button className="w-fit rounded-full bg-white px-5 py-3 font-arial font-bold uppercase text-red-600 transition-colors duration-300 md:text-xl md:hover:bg-[#ffffff] md:hover:text-red-900">
            Conoce los beneficios
          </button>
          <div className="flex w-3/4 flex-row justify-between">
            <a
              className="h-10 w-10 rounded-full bg-white p-1 md:h-12 md:w-12 md:transition-all md:hover:scale-125"
              href="https://wa.me/5493512012426"
              rel="noopener"
              target="_blank"
            >
              <WhatsappIcon />
            </a>
            <a
              className="h-10 w-10 rounded-full bg-white p-1 md:h-12 md:w-12 md:transition-all md:hover:scale-125"
              href="https://www.tiktok.com/@solaz.club"
              rel="noopener"
              target="_blank"
            >
              <TiktokIcon />
            </a>
            <a
              className="h-10 w-10 rounded-full bg-white p-1 md:h-12 md:w-12 md:transition-all md:hover:scale-125"
              href="https://www.facebook.com/solazclubmendiolaza/?locale=es_LA"
              rel="noopener"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a
              className="h-10 w-10 rounded-full bg-white p-1 md:h-12 md:w-12 md:transition-all md:hover:scale-125"
              href="https://www.instagram.com/solaz.club/?igshid=NGExMmI2YTkyZg"
              rel="noopener"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Display1
