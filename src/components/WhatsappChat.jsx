import React from "react";
import Image from "next/image";
import whatsappIcon from "@/assets/whatsapp-icon.svg";

export default function WhatsappChat() {
  return (
    <div className="fixed bottom-10 right-4 z-50 rounded-full">
      <a
        href="https://wa.link/q9mmve"
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer"
      >
        <Image src={whatsappIcon} width={60} height={60} alt="WhatsApp Icon" />
      </a>
    </div>
  );
}
