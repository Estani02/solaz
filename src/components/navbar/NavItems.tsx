/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
const navItems = ['Conocenos', 'Beneficios', 'Contactanos']

interface PropsNavItems {
  mobile: boolean
}

function NavItems({ mobile }: PropsNavItems) {
  return (
    <ul
      className={`flex ${
        mobile
          ? 'mt-11 w-full flex-col items-center justify-center gap-6 text-black'
          : 'hidden flex-row gap-9 text-white md:flex'
      }`}
    >
      {navItems.map((items) => (
        <li key={items} className="font-medium">
          <a href="#">{items}</a>
        </li>
      ))}
    </ul>
  )
}

export default NavItems
