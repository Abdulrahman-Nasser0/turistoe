import React from "react";

import AccordionForm from "../../components/forms/AccordionForm";
import Header from "@/components/ui/Header";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen relative p-6"
      style={{
        backgroundImage: "url('/bg-mobile.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #003C82 0%, #003C8200 100%)",
        }}
      />
      <div className="relative z-10">
        <Header />
        <div className="flex flex-col justify-center ">
          {/* Hero Heading */}
          <h1
            className="text-center text-white font-inter text-[4rem] md:text-[6rem] lg:text-[8rem]  lg:mt-[15rem] font-bold leading-none mt-16
          "
          >
            Explore Our Delightful World
          </h1>

          {/* Hero Accordion */}
          <AccordionForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
