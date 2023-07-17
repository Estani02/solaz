import type { SVGProps } from 'react'

import * as React from 'react'
function NutrIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height={64} viewBox="0 0 512 512" width={64} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M225.3 1.5c-9.9 3-17 9.1-22 18.8-2.2 4.2-2.8 7-3.2 15.2l-.6 10-21.7.5c-20.7.5-21.7.6-24 2.7l-2.4 2.3h-39.7c-44 0-45 .1-48.7 6.2-2 3.3-2 4.4-2 213.6 0 231.3-.5 215.3 6.2 218.9 3.1 1.7 9.3 1.8 118.1 2.1l114.8.2 3.2 3.7c7.6 8.7 12.7 12.3 20.7 14.7 9.4 2.8 20.6 1.4 31.1-4 2.7-1.3 5.7-2.4 6.7-2.4s5.8 1.7 10.7 3.7c8.1 3.3 9.9 3.7 18 3.8 7.7 0 9.8-.4 14.7-2.7 17.8-8.3 35.2-37.8 43-73 1.8-8.1 2.3-13.3 2.2-24.3 0-20.6-3.5-31.5-13.7-42.2-5.4-5.8-16.3-11.9-22.9-13-3.1-.4-3.8-.9-3.3-2.2 4.9-11.9 7-24.1 6.2-35.4-.8-11.4-2.4-15.8-6.4-17.7l-3.3-1.5v-41.6c0-40.6-.1-41.7-2.1-44.3-2.6-3.3-7.9-3.6-10.9-.6-1.9 1.9-2 3.3-2 46.4v44.3l-4.9 2.1c-2.7 1.1-7.4 3.6-10.5 5.6L371 315l-.2-110.5-.3-110.5-3.1-3c-4.3-4.3-8.1-4.9-30.1-5H318V66l36.8.2 36.7.3.3 59.9c.2 60 .2 60 2.4 62.3 2.9 3.1 7.2 3 10.3-.2l2.5-2.4v-62.3c0-57.3-.1-62.6-1.8-65.8-3.4-6.9-3.9-7-48.5-7h-39.8l-3.3-2.5c-3.3-2.5-3.5-2.5-22.9-2.5H271v-6c0-11.9-3.1-20.8-9.8-28.2-9-10-23.6-14.2-35.9-10.3zm21.1 17.2c6.3 4.4 8.8 10 9 19.2l.1 7.6-20.4.3-20.3.2.3-8.8c.4-7.8.7-9.4 3.3-13 1.7-2.6 4.8-5.1 8-6.7 6.7-3.5 14-3 20 1.2zM303 76.5V92H165V61h138v15.5zm-153-.6v9.9l-21.7.4c-19.5.3-22.1.5-25 2.3-6.3 3.8-6.3 3.7-6.3 52.8 0 43.4 0 44.5 2.1 47.1 2.6 3.3 7.3 3.5 10.6.4l2.3-2.1V102h19.5c19.1 0 19.5 0 23.1 2.5l3.7 2.5h75.4c65.6 0 75.8-.2 78.3-1.5 1.7-.9 3-2 3-2.5 0-.6 7.9-1 20.5-1H356v228.9l-3.6 6.6c-2 3.7-4.5 9.2-5.4 12.3-1.7 5.3-2 5.7-4.7 5.5-10.3-.7-26.6-.3-30.8.7-19 4.7-31.9 18.2-36 37.8-1.9 8.6-1.8 26.4 0 36.7.8 4.4 1.5 8.6 1.5 9.2 0 1-9.2 1.3-43 1.3h-42.9l-.3-33.4-.3-33.5-2.9-3c-1.7-1.7-4.6-3.6-6.5-4.1-2.1-.6-17.9-1-36.3-1H112v-75.5c0-74.2 0-75.5-2-77.5-2.7-2.7-8.3-2.7-11 .2-2 2.2-2 3-2 82.9 0 75.4.1 80.8 1.8 82.6.9 1.1 15.4 15 32.2 30.8 16.8 15.9 34.4 32.7 39.3 37.4l8.7 8.6 51.6.5 51.5.5 3.5 8.5c2 4.7 3.8 9.1 4.1 9.7.4 1-21.3 1.3-106.6 1.3H76V66h74v9.9zm252 246.8c0 8-2.4 18.5-5.9 26-2.9 6.1-3.1 6.3-6.8 6.3-5.6 0-15.6 2.6-21.4 5.6-2.8 1.4-5.8 2.3-6.6 2-2.3-.9-1-6.6 3.7-16.1 5.9-12.1 16.2-21.8 28.8-27.1 8.1-3.3 8.2-3.3 8.2 3.3zm-58.9 48.9c3 .9 7.6 2.8 10.4 4.1 7.1 3.6 10.8 3.4 20.6-1.2 7.9-3.7 8.9-3.9 20.1-4.3 20-.7 30.4 4.1 36.8 17.1 9.1 18.7 4.8 51.8-10.7 81.9-7.2 13.9-13.2 21.4-20.3 25.1-7.2 3.8-13.2 3.4-24.9-1.8-10.9-4.8-15-4.8-26 0-10.9 4.8-17.4 5.5-23.5 2.6-16.6-8.1-34.8-47.6-36.3-79.2-1.2-24.2 5.9-38.5 21.9-44 7-2.4 24.2-2.6 31.9-.3zm-167.1 35v24.6l-11.7-11c-6.5-6.1-18.1-17.1-25.8-24.6l-14-13.5h25.8l25.7-.1v24.6z" />
      <path d="M142.5 128.2c-4.8 3.8-5.5 7-5.5 26.8s.7 23 5.5 26.8c2.6 2.1 3.7 2.2 23.7 2.2 30.7 0 29.8.9 29.8-29 0-30.1 1.1-29-29.1-29-20.7 0-21.8.1-24.4 2.2zM181 155v14h-29v-28h29v14zM223.5 133.2c-5 2.7-6 8-2.2 11.6 2.1 2 3.4 2.2 15.4 2.2 13 0 13.2 0 15.2-2.6 3.4-4.3 2.6-8.6-2-10.9-3.4-1.8-23.3-2-26.4-.3zM273.3 133c-4.5 1.8-5.7 8.6-2.3 12 1.9 1.9 3.3 2 28.8 2 25.1 0 27-.1 28.6-1.9 2.5-2.7 2.4-7.8-.3-10.4-2.1-2.1-2.9-2.2-27.4-2.4-13.8-.1-26.2.2-27.4.7zM223.5 163.1c-5 2.8-6 8.2-2.2 11.7l2.3 2.2h51.6c49.3 0 51.6-.1 53.2-1.9 2.5-2.7 2.4-7.8-.3-10.4-2.2-2.2-2.2-2.2-52.4-2.4-35.3-.2-50.8.1-52.2.8zM142.5 206.2c-4.8 3.8-5.5 7-5.5 27 0 20.1.7 23.1 6.3 27.2 2.7 2 4.2 2.1 23.5 2.1 22.7 0 23.9-.3 27.2-5.8 1.8-2.9 2-5.2 2-23.5 0-30.1.9-29.2-29.8-29.2-20 0-21.1.1-23.7 2.2zM181 233v14h-29v-28h29v14zM221.2 213.3c-4 4.3-1.9 10.8 4 12.2 1.3.3 24.5.4 51.5.3 49.1-.3 49.3-.3 51.4-2.5 2.7-2.6 2.8-7.7.3-10.4-1.6-1.8-3.9-1.9-53.4-1.9h-51.7l-2.1 2.3zM221.2 243.3c-3.6 3.8-2.8 8.8 1.9 11.2 2.2 1.2 7.8 1.5 27.4 1.5h24.7l3-3c2.4-2.5 2.9-3.6 2.3-5.8-1.5-6.3-1.2-6.2-30.5-6.2-26.6 0-26.7 0-28.8 2.3zM298 243c-2.7 2.7-2.6 8.1.1 10.6 1.8 1.7 3.7 1.9 15 1.9 11.9 0 13-.2 15-2.2 2.7-2.6 2.8-7.7.3-10.4-1.5-1.7-3.2-1.9-15.1-1.9-12 0-13.5.2-15.3 2zM143.2 284c-5.7 3.5-6.4 6.7-6 28.9.4 28.3.3 28.1 29.2 28.1 21 0 24.2-.7 27.6-6.2 1.8-3 2-5 2-24.1V290l-3.4-3.8-3.4-3.7-21.4-.3c-20-.2-21.5-.1-24.6 1.8zm37.8 27.5v14.6l-14.2-.3-14.3-.3-.3-14.3-.3-14.2H181v14.5zM221.1 291.6c-2.8 3.5-2.6 6.9.4 9.9l2.4 2.5h101l2.5-2.3c3.6-3.2 3.9-7.4.6-10.7-1.9-1.9-3.3-2-53.4-2h-51.5l-2 2.6zM221.1 321.6c-2.8 3.5-2.6 6.9.4 9.9l2.4 2.5h25c16.5 0 25.9-.4 27.5-1.1 5.1-2.3 5.5-10.3.7-12.8-1.2-.7-11.6-1.1-28-1.1h-26l-2 2.6zM298 321c-3 3-2.7 8.3.6 10.9 2.4 1.9 4 2.1 14.5 2.1 10.8 0 12-.2 14.3-2.3 3.6-3.2 3.9-7.4.6-10.7-1.8-1.8-3.3-2-15-2s-13.2.2-15 2zM221.5 369.5c-1.4 1.3-2.5 3.6-2.5 5s1.1 3.7 2.5 5c2.4 2.5 2.6 2.5 20.3 2.5 16.6 0 18-.1 20-2 1.4-1.4 2.2-3.3 2.2-5.5s-.8-4.1-2.2-5.5c-2-1.9-3.4-2-20-2-17.7 0-17.9 0-20.3 2.5zM221.5 399.5c-1.4 1.3-2.5 3.6-2.5 5s1.1 3.7 2.5 5c2.3 2.4 3 2.5 14.5 2.5s12.2-.1 14.5-2.5c1.4-1.3 2.5-3.6 2.5-5s-1.1-3.7-2.5-5c-2.3-2.4-3-2.5-14.5-2.5s-12.2.1-14.5 2.5z" />
    </svg>
  )
}

export default NutrIcon