import React from "react";
import HeroSection from "@/pages/sections/HeroSection";
import ContactSection from "./sections/ContactSection";
import TripSection from "./sections/TripSection";
import ReviewsSection from "./sections/ReviewsSection";

const Home = () => {
  return (
      <div className="flex flex-col gap-8">
        <HeroSection />
        <ContactSection/>
        <ReviewsSection/>
        <TripSection/>
      </div>
  );
};

export default Home;
