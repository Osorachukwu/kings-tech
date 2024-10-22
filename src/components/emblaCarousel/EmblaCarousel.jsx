"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import imgOne from "@/assets/carousel-img-1.webp";
import imgTwo from "@/assets/carousel-img-2.webp";
import imgThree from "@/assets/carousel-img-3.webp";


export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div
      className="embla mx-auto h-[80vh] bg-red-300 w-full border"
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
          <Image src={imgThree} alt="Slide 3" className="" fill />
        </div>
      </div>
    </div>
  );
}


// go to embla carousel website https://www.embla-carousel.com/
// Click on get started then React follow the instruction
// 1. npm install embla-carousel-react --save
// 2. copy "The component structure"
// import React from 'react'
// import useEmblaCarousel from 'embla-carousel-react'

// export function EmblaCarousel() {
//   const [emblaRef] = useEmblaCarousel()

//   return (
//     <div className="embla" ref={emblaRef}>
//       <div className="embla__container">
//         <div className="embla__slide">Slide 1</div>
//         <div className="embla__slide">Slide 2</div>
//         <div className="embla__slide">Slide 3</div>
//       </div>
//     </div>
//   )
// }
// 💥

// 3. copy the css and paste in your global css
// .embla {
//     overflow: hidden;
//   }
//   .embla__container {
//     display: flex;
//   }
//   .embla__slide {
//     flex: 0 0 100%;
//     min-width: 0;
//   }
