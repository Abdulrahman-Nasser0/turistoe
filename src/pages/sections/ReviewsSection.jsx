import ClientsCarousel from "@/components/ui/ClientsCarousel";
import React from "react";

const ReviewsSection = () => {
  return (
    <section className="p-6">
      <div className="flex flex-col items-center w-full  px-4">
        <h2 className="text-[2rem] font-bold text-center mb-10">
          Our Happy Clients
        </h2>
        <ClientsCarousel />
      </div>
    </section>
  );
};

export default ReviewsSection;
