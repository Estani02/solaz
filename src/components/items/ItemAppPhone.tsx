import React from 'react'

import MancuernaIcono from '@/assets/svg/MancuernaIcon'
import GraficoIcon from '@/assets/svg/GraficoIcon'
import NutrIcon from '@/assets/svg/NutrIcon'
import QrIcon from '@/assets/svg/QrIcono'

const Iteams = [
  {
    id: 1,
    title: 'Planes de entrenamiento personalizado',
    text: 'Descripción de cada ejercicio, series ,repeticiones , pausa y video explicativo con los equipos de solaz',
    component: <MancuernaIcono />,
  },
  {
    id: 2,
    title: 'Seguimineto de tu progreso',
    text: 'La app registra peso, agua, sueño, entrenamiento y actividad física, generando gráficos para un seguimiento preciso',
    component: <GraficoIcon />,
  },
  {
    id: 3,
    title: 'Planes de alimentación personalizado',
    text: 'Nuestro licenciado en nutrición diseñará un plan de acuerdo a tus objetivos, el cual podrás visualizar acompañado de deliciosas recetas',
    component: <NutrIcon />,
  },
  {
    id: 4,
    title: 'Accedé fácil y rápido',
    text: 'Esta app propia está diseñada para que el usuaria tenga una experiencia amigable y auto gestionable',
    component: <QrIcon />,
  },
]

function ItemAppPhone() {
  return (
    <ul className="container mt-10 grid w-fit grid-cols-1 gap-5 p-5 xl:grid-cols-2">
      {Iteams.map((item) => (
        <li key={item.id} className="flex flex-col items-center justify-center md:w-[400px]">
          {item.component}
          <span className="text-center md:text-left">
            <h4 className="mb-3 text-center text-2xl font-extrabold">{item.title}</h4>
            <p className="text-left text-sm text-[#7f7f7f] md:text-base">{item.text}</p>
          </span>
        </li>
      ))}
    </ul>
  )
}

export default ItemAppPhone
