import React from "react";
import HeroSection from "@/pages/sections/HeroSection";
import ContactSection from "./sections/ContactSection";
import TripSection from "./sections/TripSection";
import ClientsCarousel from "@/components/ui/ClientsCarousel";

const Home = () => {
  return (
      <div className="flex flex-col gap-26">
        <HeroSection />
        <ContactSection/>
        <ClientsCarousel/>
        <TripSection/>
      </div>
  );
};

export default Home;
