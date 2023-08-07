import React from 'react'
import CheckIcon from '@mui/icons-material/Check'

function Display6() {
  return (
    <section className="flex flex-col items-center gap-4 px-4 py-6" id="Plan">
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-arial text-2xl font-bold uppercase">Elegi tu plan</h2>
        <p className="text-center text-sm text-[#b6b6b6]">
          El cambio que deseas comienza aquí. Únete a nuestro plan de gym ahora.
        </p>
      </div>
      <div
        className="flex w-full flex-col rounded-xl bg-[#ffff] bg-cover px-5 py-8 text-black md:w-auto"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1635545195955-e65d68631341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80)',
        }}
      >
        <h6 className="border-b-2 border-black text-xl font-bold">PLAN TOTAL</h6>
        <div className="flex flex-col gap-2 py-6 text-center">
          <div className="flex h-[156px] flex-col justify-between gap-6 text-center">
            <span className="text-sm font-semibold">¡Accedé a todo los beneficios!</span>
            <span className="text-2xl font-extrabold">
              <span className="text-red-500">6</span> cutos SIN INTERÉS
            </span>
            <span className="font-extrabold text-red-500">*CUPOS LIMITADOS</span>
          </div>
          <a
            className="w-full rounded-lg bg-[#1976d2] py-2 text-lg font-bold uppercase text-white"
            href="https://wa.me/5493512012426"
            rel="noopener"
            target="_blank"
          >
            asociate
          </a>
        </div>
        <ul className="flex flex-col gap-3 text-sm font-bold">
          <li className="flex gap-3">
            <CheckIcon className="h-5 w-5 text-green-500" />
            <p>2 meses de regalo</p>
          </li>
          <li className="flex gap-3">
            <CheckIcon className="h-5 w-5 text-green-500" />
            <p>1 Eco-botella</p>
          </li>
          <li className="flex gap-3">
            <CheckIcon className="h-5 w-5 text-green-500" />
            <p>1 Consulta con nutricionista</p>
          </li>
          <li className="flex gap-3">
            <CheckIcon className="h-5 w-5 text-green-500" />
            <a
              className="border-b-2 border-blue-500 text-left text-sm text-blue-500 transition-colors duration-150 md:hover:border-sky-500 md:hover:text-sky-500"
              href="#Beneficios"
            >
              Ver más beneficios
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Display6
