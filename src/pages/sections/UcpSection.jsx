import Button from "@/components/ui/Button";
import React from "react";

const UcpSection = () => {
  return (
    <section className="p-6 py-20 text-center text-white mb-12 relative">
      <div
        className="absolute inset-0 pointer-events-none -z-1"
        style={{
          backgroundImage: "url('/bg-ucp.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none -z-1"
        style={{
          background: "linear-gradient(to top, #003C82 0%, #003C8200 100%)",
        }}
      />
      <h2 className="text-[2rem] font-bold text-center mb-10">
        Let Us Show You the World
      </h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        We'll work with you to create a customized travel plan that fits your
        needs and budget. We'll also help you book your flights, hotels, and
        activities. And best of all, we'll give you a 10% discount on your first
        trip with us!{" "}
      </p>
      <Button
        className="text-white border-white hover:bg-white/10"
      >
        Contact Us
      </Button>
    </section>
  );
};

export default UcpSection;
