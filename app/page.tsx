import Image from "next/image";
import Navbar from "@/components/Navbar";
import "./Navbar.css";
import HomeSection from "@/components/Home";
import "./home.css";
import "./stats.css";
import Stats from "@/components/stats";
import "./Client.css";
import ClientSection from "@/components/Client";
import AccredianSection from "@/components/Accredian";
import "./accredian.css";
import FooterSection from "@/components/Footer";
import "./Footer.css";



export default function Home() {
  return (
    
      <main>
      <Navbar/>
      <HomeSection/>
      <Stats/>
      <ClientSection/>
      <AccredianSection/>
      <FooterSection/>
      </main>
  );
}
