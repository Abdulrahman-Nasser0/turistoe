import TripCarousel from "@/components/ui/TripCarousel";
import React from "react";

const TripSection = () => {
  return (
    <section className="p-6 ">
        {/* Content */}
        <div className="
          md:p-6 max-w-7xl mx-auto mb-16
          self-end
        ">
          <h2 className="heading-2 text-center md:text-start ">
            Ultimate Travel Experience
          </h2>
          <p className="paragraph text-center md:text-start">
            We offer a wide range of services, including flight booking, hotel
            booking, car rental, visa assistance, insurance, and tours and
            activities. We work with leading global service providers to ensure
            you have the best possible travel experience. We also offer
            customized solutions for our clients that can be adapted to their
            specific needs and budget.{" "}
          </p>
        </div>
        {/* Carousel */}
        <div className=" max-w-7xl mx-auto md:mb-16">
          <TripCarousel />
        </div>
    </section>
  );
};

export default TripSection;
