import Button from "@/components/ui/Button";
import React from "react";

const ContactSection = () => (
<section className="p-6 text-base flex flex-col md:flex-row items-center gap-[2rem] w-full max-w-7xl mx-auto">
    {/** Content */}
    <div>
      <h2 className="heading-2 text-center md:text-start">
      Best Way to Travel
    </h2>
    <p className="paragraph text-center md:text-start">
      We are a travel agency that specializes in creating customized travel
      experiences for our clients. We believe that travel is a journey, not just
      a destination. We want to help our clients create memories that will last
      a lifetime.
    </p>
    <p className="paragraph text-center md:text-start">
      We have a team of experienced travel professionals who are passionate
      about helping our clients explore the world. We have a deep understanding
      of different cultures and destinations, and we can help you plan the
      perfect trip for your needs and interests.
    </p>
    <div className="flex justify-center md:justify-start md:my-12 gap-12 mb-8 w-full">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-black">1000+</span>
        <span className="text-black">Clients</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-black">500+</span>
        <span className="text-black">Trips</span>
      </div>
    </div>
    <div className="flex justify-center md:justify-start">
      <Button>Contact Us</Button>
    </div>
    </div>

    
    {/** Image Container */}
    <div className="
    self-start p-2 border-1
     border-black rounded-xl 
     overflow-hidden  mx-auto 
     mt-16 md:mt-0">
      <img 
        src="/contact-img.jpg" 
        alt="Contact section image" 
        className=" 
        w-[25rem] h-[28rem] object-cover
         
        rounded-lg hover:scale-105 transition-transform duration-300"
      />
    </div>
  </section>
);

export default ContactSection;
