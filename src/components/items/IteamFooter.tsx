/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import React from 'react'

import EmailIcon from '@/assets/svg/EmaiIcon'
import LocationIcon from '@/assets/svg/LocationIcon'
import PhoneIcon from '@/assets/svg/PhoneIcon'

const Iteam = [
  {
    id: 1,
    icon: <LocationIcon className="h-7" />,
    text: 'Av. Malvinas 812, Mendiolaza - Córdoba',
  },
  {
    id: 2,
    icon: <PhoneIcon className="h-7" />,
    text: '+5493512012426',
    type: 'phone',
  },
  {
    id: 3,
    icon: <EmailIcon className="h-7" />,
    text: 'csolazm@gmail.com',
    type: 'email',
  },
]

function IteamFooter() {
  return (
    <ul className="flex flex-col gap-2">
      {Iteam.map((iteam) => (
        <li key={iteam.id} className="flex items-center gap-2 font-bold">
          {iteam.icon}
          {iteam.type ? (
            <a
              href={
                iteam.type === 'email'
                  ? 'mailto:csolazm@gmail.com'
                  : 'https://www.solaz-club.com/tel:+5493512012426'
              }
            >
              {iteam.text}
            </a>
          ) : (
            <p>{iteam.text}</p>
          )}
        </li>
      ))}
    </ul>
  )
}

export default IteamFooter
