import ClientsCarousel from "@/components/ui/ClientsCarousel";
import React from "react";

const ReviewsSection = () => {
  return (
    <section>
      <div className="flex flex-col items-center w-full  ">
        <h2 className="heading-2 text-center">
          Our Happy Clients
        </h2>
        <ClientsCarousel />
      </div>
    </section>
  );
};

export default ReviewsSection;
