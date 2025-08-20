import ClientsCarousel from "@/components/ui/ClientsCarousel";
import React from "react";

const ReviewsSection = () => {
  return (
    <section>
      <div className="flex flex-col items-center w-full  ">
        <h2 className="text-[2rem] font-bold text-center mb-10">
          Our Happy Clients
        </h2>
        <ClientsCarousel />
      </div>
    </section>
  );
};

export default ReviewsSection;
