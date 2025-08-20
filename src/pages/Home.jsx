import React from "react";
import HeroSection from "@/pages/sections/HeroSection";
import ContactSection from "./sections/ContactSection";
import TripSection from "./sections/TripSection";
import ReviewsSection from "./sections/ReviewsSection";
import FooterSection from "./sections/FooterSection";
import UcpSection from "./sections/UcpSection";

const Home = () => {
  return (
      <div className="flex flex-col gap-28">
        <HeroSection />
        <ContactSection/>
        <TripSection/>
        <ReviewsSection/>
        <UcpSection/>
        <FooterSection />
      </div>
  );
};

export default Home;
