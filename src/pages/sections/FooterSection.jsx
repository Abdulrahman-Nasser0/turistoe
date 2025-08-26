import React from "react";
import Button from "@/components/ui/Button";

const FooterSection = () => {
  return (
    <footer className="p-6 bg-[#003C82] text-white -mt-[7rem]">
      <div className="flex flex-col gap-4">
        <div className="border-1 border-white p-6 rounded-3xl">
          <h3 className="heading-3">Take a trip with us</h3>
          <p className="paragraph text-start">
            Subscribe to be the first to know about our new trips and additional
            promotions
          </p>
          <input 
            type="text" 
            placeholder="Enter your email address"
            className="py-2 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 w-full mb-4"
          />
          <Button>Subscribe</Button>
        </div>

        <div className="flex flex-row justify-between gap-4">
          <div className="border-1 border-white p-6 rounded-3xl w-[50%]">
            <h3 className="heading-3">About</h3>
          </div>

          <div className="border-1 border-white p-6 rounded-3xl w-[50%]">
            <h3 className="heading-3">Support</h3>
          </div>
        </div>
        <div className="border-1 border-white p-6 rounded-3xl">
          <h3 className="heading-3">Turistoe</h3>
          <p className="paragraph text-start">
            We create unforgettable travel experiences that you will cherish all your life.
          </p>
          
        </div>
      </div>
      <div className="pt-6 text-center">
        <p className="text-sm">
          © 2025 Turistoe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
