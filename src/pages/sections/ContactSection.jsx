import { Button } from "@/components/ui/button";
import React from "react";

const ContactSection = () => (
  <section className="p-6">
    <h2 className="text-[2rem] font-bold text-center mb-10">
      Best Way to Travel
    </h2>
    <p className="text-center text-black mb-4">
      We are a travel agency that specializes in creating customized travel
      experiences for our clients. We believe that travel is a journey, not just
      a destination. We want to help our clients create memories that will last
      a lifetime.
    </p>
    <p className="text-center text-black mb-6">
      We have a team of experienced travel professionals who are passionate
      about helping our clients explore the world. We have a deep understanding
      of different cultures and destinations, and we can help you plan the
      perfect trip for your needs and interests.
    </p>
    <div className="flex justify-center gap-12 mb-8 w-full">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-black">1000+</span>
        <span className="text-black">Clients</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-black">500+</span>
        <span className="text-black">Trips</span>
      </div>
    </div>
    <div className="flex justify-center">
      <Button
        variant="outline"
        className="text-[1.25rem] my-6 px-10 py-[1.74rem]"
      >
        Contact Us
      </Button>
    </div>
  </section>
);

export default ContactSection;
