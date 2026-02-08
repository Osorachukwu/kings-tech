"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Instagram, Mail, Phone } from "lucide-react";

export default function ContactCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  return (
    <div
      className="embla mx-auto w-full md:hidden borde border-b border-base-300 py-3 text-white"
      ref={emblaRef}
    >
      <div className="embla__container h-full flex">
        <div className="embla__slide relative flex items-center justify-center w-full">
          <div href="tel:+2348125208257" className="flex items-center gap-2">
            <Phone size={20} />
            <span>+234 812 520 8257</span>
          </div>
        </div>

        <div className="embla__slide relative flex items-center justify-center w-full">
          <div href="tel:+2347037803410" className="flex items-center gap-2">
            <Phone size={20} />
            <span>+234 703 780 3410</span>
          </div>
        </div>

        <div className="embla__slide relative flex items-center justify-center w-full">
          <div
            href="mailto:olisahdaniel75@gmail.com"
            className="flex items-center gap-2"
          >
            <Mail size={20} />
            <span>olisahdaniel75@gmail.com</span>
          </div>
        </div>
        <div className="embla__slide relative flex items-center justify-center w-full">
        <div
          href="https://www.instagram.com/kingtech820"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Instagram size={20} />
          <span>Conect with us on Instagram</span>
        </div>
        </div>
      </div>
    </div>
  );
}
