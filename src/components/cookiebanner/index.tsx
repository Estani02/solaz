/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper'

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false)

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null)

    setCookieConsent(storedCookieConsent)
  }, [setCookieConsent])

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied'

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    })

    setLocalStorage('cookie_consent', cookieConsent)

    //For Testing
    // eslint-disable-next-line no-console
    console.log('Cookie Consent: ', cookieConsent)
  }, [cookieConsent])

  return (
    <div
      className={`${
        cookieConsent != null ? 'animate-jump-out' : 'flex'
      } fixed inset-x-0 bottom-0 z-[100000000] mx-auto my-10 flex max-w-max flex-col items-center justify-between gap-4 rounded-lg bg-white p-3 text-sm shadow sm:flex-row md:max-w-screen-sm md:px-4 md:text-base`}
    >
      <div className="text-center">
        <Link href="/info/cookies">
          <p>
            Usamos <span className="font-bold">cookies</span> para mejora tu experiencia
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          className="rounded-md border-gray-900 bg-gray-200 px-5 py-2 text-gray-400"
          onClick={() => setCookieConsent(false)}
        >
          Denegar
        </button>
        <button
          className="rounded-lg bg-gray-900 px-5 py-2 text-white"
          onClick={() => setCookieConsent(true)}
        >
          Aceptar
        </button>
      </div>
    </div>
  )
}
