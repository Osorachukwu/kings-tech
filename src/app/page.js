import Image from "next/image";
import NavBar from "../components/navBar/NavBar";
import Hero from "@/components/Hero";
import Porfolio from "@/components/portfolio/Portfolio";
import OurServices from "@/components/OurServices";
import AboutUs from "@/components/AboutUs";
import WhatsappChat from "@/components/WhatsappChat";
import CaptivateYourAudience from "@/components/CaptivateYourAudience";
import Portfolio from "@/components/portfolio/Portfolio";

export default function Home() {
  return (
    <>
    {/* <NavBar /> */}
    <Hero />
    <AboutUs />
    <OurServices />
    <Portfolio />
    <WhatsappChat />
    <CaptivateYourAudience />
    {/* <Porfolio /> */}
    </>

  );
}
