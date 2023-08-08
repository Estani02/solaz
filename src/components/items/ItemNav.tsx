/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import type { Dispatch, SetStateAction } from 'react'

import React from 'react'
const navItems = [
  {
    text: 'Beneficios',
    link: '#Beneficios',
  },
  {
    text: 'App Solaz',
    link: '#AppSolaz',
  },
  {
    text: 'Conocenos',
    link: '#Conocenos',
  },
  {
    text: 'Asociate',
    link: '#Plan',
  },
  {
    text: 'Contactanos',
    link: '#Contactanos',
  },
]

interface PropsNavItems {
  mobile: boolean
  closeNav?: Dispatch<SetStateAction<boolean>>
}

function IteamNav({ mobile, closeNav }: PropsNavItems) {
  const navClose = () => {
    if (closeNav) {
      closeNav(false)
    }
  }

  return (
    <ul
      className={`flex ${
        mobile
          ? 'mt-11 w-full flex-col gap-6 px-5 text-left font-black text-black'
          : 'hidden flex-row gap-9 text-white md:flex'
      }`}
    >
      {navItems.map((items, index) => (
        <li key={index} className="liNav">
          <a className="navLink" href={items.link} onClick={navClose}>
            {items.text}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default IteamNav
