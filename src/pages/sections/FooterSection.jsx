import React from "react";
import { Button } from "../../components/ui/button";

const FooterSection = () => {
  return (
    <footer className="p-6 bg-[#003C82] text-white">
      <div className="flex flex-col gap-4">
        <div className="border-1 border-white p-6 rounded-3xl">
          <h2 className="text-[1.5rem] font-bold  mb-6">Take a trip with us</h2>
          <p className="mb-8 max-w-[16rem] text-[0.875rem]">
            Subscribe to be the first to know about our new trips and additional
            promotions
          </p>
          <input type="text" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>

        <div className="flex flex-row justify-between gap-4">
          <div className="border-1 border-white p-6 rounded-3xl w-[50%]">
            <h2 className="text-[1.5rem] font-bold  mb-6">About</h2>
          </div>

          <div className="border-1 border-white p-6 rounded-3xl w-[50%]">
            <h2 className="text-[1.5rem] font-bold  mb-6">Support</h2>
          </div>
        </div>
        <div className="border-1 border-white p-6 rounded-3xl">
          <h2 className="text-[1.5rem] font-bold  mb-6">Turistoe</h2>
          <p className="mb-8 text-[0.875rem]">
            We create unforgettable travel experiences that you will cherish all your life.
          </p>
          
        </div>
      </div>
      <div className="pt-6 text-center">
        <p className="text-[0.875rem]">
          © 2025 Turistoe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
