/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
const navItems = ['Conocenos', 'Beneficios', 'Contactanos']

interface PropsNavItems {
  mobile: boolean
}

function IteamNav({ mobile }: PropsNavItems) {
  return (
    <ul
      className={`flex ${
        mobile
          ? 'mt-11 w-full flex-col items-center justify-center gap-6 text-black'
          : 'hidden flex-row gap-9 text-white md:flex'
      }`}
    >
      {navItems.map((items) => (
        <li key={items} className="liNav">
          <a className="navLink" href="#">
            {items}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default IteamNav
