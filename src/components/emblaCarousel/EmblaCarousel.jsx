'use client'
import React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import imgOne from '@/assets/ariking-bg-1.jpg'
import imgTwo from '@/assets/arking-bg-2.jpg'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({delay: 2000})])

  return (
    <div
    className="embla mx-auto h-[95vh] bg-red-300 w-full border"
    ref={emblaRef}
  >
    <div className="embla__container h-full flex">
      {/* Slide 1 */}
      <div className="embla__slide relative flex items-center justify-center w-full">
        <Image src={imgOne} alt="Slide 1" className="" fill />
      </div>

      {/* Slide 2 */}
      <div className="embla__slide relative flex items-center justify-center w-full">
        <Image src={imgTwo} alt="Slide 2" className="" fill />
      </div>

      {/* Slide 3 */}
      <div className="embla__slide relative flex items-center justify-center w-full">
        <Image src={imgOne} alt="Slide 3" className="" fill />
      </div>
    </div>
  </div>
  )
}
