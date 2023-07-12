import type { SVGProps } from 'react'

import * as React from 'react'
function NavIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="#fff"
      stroke="#fff"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>bars</title>
      <path d="M2 9.249h28a1.25 1.25 0 0 0 0-2.5H2a1.25 1.25 0 0 0 0 2.5zm28 5.501H2a1.25 1.25 0 0 0 0 2.5h28a1.25 1.25 0 0 0 0-2.5zm0 8H2a1.25 1.25 0 0 0 0 2.5h28a1.25 1.25 0 0 0 0-2.5z" />
    </svg>
  )
}

export default NavIcon
