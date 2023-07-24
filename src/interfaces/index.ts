import type { StaticImageData } from 'next/image'

export interface PropsItemCarousel {
  title?: string
  description?: string
  opacity?: boolean
  img: string | StaticImageData
}

export interface MapIteamCarousel extends PropsItemCarousel {
  id: number
}
