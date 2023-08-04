import Image from 'next/image'
import React from 'react'

import googlePlay from '@/assets/img/google_play.png'
import appStore from '@/assets/img/app_store.png'
import iphone from '@/assets/img/iphone12.png'
import android from '@/assets/img/android_2.png'
import IteamAppPhone from '@/components/items/ItemAppPhone'

function Display3() {
  return (
    <section
      className="relative flex flex-col items-center gap-6 bg-white bg-cover p-2 py-10 text-[#15181C]"
      id="AppSolaz"
      style={{
        backgroundImage:
          'url(https://assets-global.website-files.com/6006f5bf87d96d2131258ef0/627e923543fae8b1070581d0_FONDO%20plataformas.jpg)',
        backgroundPosition: '50% 100%',
      }}
    >
      <h2 className="mt-10 font-arial text-3xl font-bold uppercase md:text-4xl">
        App{' '}
        <b className="self-center whitespace-nowrap font-arial text-3xl font-black tracking-[-0.1em] text-red-600 md:text-4xl">
          SOLAZ
        </b>
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="flex h-fit flex-col items-center gap-2">
          <div className="flex">
            <Image
              alt="pantalla de celular"
              className="object-cover md:h-[382.227px]"
              height={295}
              src={android}
              width={145}
            />
            <Image
              alt="pantalla de celular"
              className="md:h-[382.227px] md:w-auto"
              height={295}
              src={iphone}
            />
          </div>
          <div className="flex gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.arceus.clubsolaz"
              rel="noopener"
              target="_blank"
            >
              <Image alt="Google Play" className="w-[130px] md:w-[200px]" src={googlePlay} />
            </a>
            <a
              href="https://apps.apple.com/app/solaz-club/id6449626352"
              rel="noopener"
              target="_blank"
            >
              <Image alt="App Store" className="w-[130px] md:w-[200px]" src={appStore} />
            </a>
          </div>
        </div>
        <IteamAppPhone />
      </div>
    </section>
  )
}

export default Display3
