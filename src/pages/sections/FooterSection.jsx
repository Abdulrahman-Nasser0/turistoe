import React from "react";
import { Link } from "react-router-dom";
import SubscribeInput from "@/components/ui/SubscribeInput";

const FooterSection = () => {
  return (
    <footer className="p-6 bg-[#003C82] text-white -mt-[7rem]">
      <div className="flex flex-col gap-4 lg:flex-row max-w-7xl lg:mx-auto">
        {/* Row 1*/}
        <div className="border-1 border-white p-6 rounded-3xl order-1 lg:order-2">
          <h3 className="heading-3">Take a trip with us</h3>
          <p className="paragraph text-start pb-6">
            Subscribe to be the first to know about our new trips and additional
            promotions
          </p>
          <SubscribeInput />
        </div>
        {/* Row 2*/}
        <div className="flex flex-row justify-between gap-4 order-2">
          {/* About */}
          <div className="border-1 border-white p-6 rounded-3xl w-[50%]">
            <h3 className="heading-3">About</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className="text-white hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white hover:text-white transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white hover:text-white transition-colors">
                  News & Article
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div className="border-1 border-white p-6 rounded-3xl w-[50%]">
            <h3 className="heading-3">Support</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className="text-white hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Row 3*/}
        {/* Turistoe Description */}
        <div className="border-1 border-white p-6 rounded-3xl order-3 lg:order-1">
          <h3 className="heading-3">Turistoe</h3>
          <p className="paragraph text-start pb-6">
            We create unforgettable travel experiences that you will cherish all your life.
          </p>
          {/* Social Media Links */}
          <div className="flex items-center gap-4 mt-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white hover:bg-white hover:text-[#003C82] transition-colors"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white hover:bg-white hover:text-[#003C82] transition-colors"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white hover:bg-white hover:text-[#003C82] transition-colors"
            >
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white hover:bg-white hover:text-[#003C82] transition-colors"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
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
