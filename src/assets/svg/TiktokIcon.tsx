import type { SVGProps } from 'react'

import * as React from 'react'
function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Layer 1"
      fill="#fff"
      stroke="#fff"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.94 1.61v14.17a2.83 2.83 0 0 1-2.83 2.83 2.83 2.83 0 0 1-2.83-2.83 2.84 2.84 0 0 1 2.83-2.84V9.17a6.61 6.61 0 0 0-6.61 6.61 6.61 6.61 0 0 0 6.61 6.61 6.61 6.61 0 0 0 6.61-6.61V9.17l.2.1a8.08 8.08 0 0 0 3.58.84V6.33h-.11a4.84 4.84 0 0 1-3.67-4.7h-3.78Z"
        style={{
          fill: 'none',
          stroke: '#fff',
          strokeMiterlimit: 10,
          strokeWidth: '1.89px',
        }}
      />
    </svg>
  )
}

export default TiktokIcon
