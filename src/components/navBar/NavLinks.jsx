"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function NavLinks() {
  const [dropDownOne, setDropDownOne] = useState(false);
  const pathname = usePathname();

  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/service" },
    { title: "Project", path: "/project" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div className="h-full hidden lg:block">
      <div className="flex items-center gap-4 text-sm xl:text-lg h-full">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className={`${pathname === link.path ? "text-purple-500" : ""} hover:text-purple-500`}
          >
            {link.title}
          </Link>
        ))}
     
      </div>
    </div>
  );
}
