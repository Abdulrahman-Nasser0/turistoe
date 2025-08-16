import React from "react";
import HeroSection from "@/pages/sections/HeroSection";
import ContactSection from "./sections/ContactSection";
import TripSection from "./sections/TripSection";

const Home = () => {
  return (
      <div className="flex flex-col gap-26">
        <HeroSection />
        <ContactSection/>
        <TripSection/>
      </div>
  );
};

export default Home;
