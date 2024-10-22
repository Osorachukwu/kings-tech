import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import logo from "@/assets/kings-tech-logo.jpeg";
import Hambourger from "./Hambourger";

export default function NavBar() {
  return (
    <section>
      {/* And co... 💥*/}
      <div className="relative w-full flex gap-16 justify-center items-center h-20 bg-white shadow-2xl z-50">
        <div className="h-full pl-5 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 whitespace-nowrap"
          >
            <Image
              src={logo}
              alt="Logo"
              className="h-full w-8 lg:h-16 lg:w-16 rounded-full"
            />
            <div>
              <p className="text-lg font-medium">Kings Tech</p>
              <p className="text-xs">..your vision, our code</p>
            </div>
          </Link>
        </div>
        <NavLinks />
        <Hambourger />
      </div>
    </section>
  );
}
