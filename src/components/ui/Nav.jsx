import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const navItems = [
  { label: "About", to: "/" },
  { label: "Trip", to: "/" },
  { label: "Blog", to: "/" },
  { label: "Reviews", to: "/" },
];

const HamburgerIcon = ({ open }) => (
  <div className="flex flex-col justify-center items-center w-6 h-6">
    <span
      className={`block h-0.5 w-5 ${!open ? "bg-white" : "bg-[#003C82]"} rounded transition-all duration-300 ${
        open ? "rotate-45 translate-y-1.5" : ""
      }`}
    />
    <span
      className={`block h-0.5 w-5 ${!open ? "bg-white" : "bg-[#003C82] "} rounded my-1 transition-all duration-300 ${
        open ? "opacity-0" : ""
      }`}
    />
    <span
      className={`block h-0.5 w-5 ${!open ? " bg-white" : "bg-[#003C82]"} rounded transition-all duration-300 ${
        open ? "-rotate-45 -translate-y-1.5" : ""
      }`}
    />
  </div>
);

const Nav = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center justify-center rounded-full bg-[#003C82]/20 backdrop-blur-sm px-8 py-2">
        {navItems.map((item, index) => (
          <Link
            key={item.label}
            to={item.to}
            className={`text-white hover:text-white/80 transition-colors px-6 py-2 text-sm font-medium
              ${index !== navItems.length - 1 ? 'border-r border-white/20' : ''}
            `}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden border-1 cursor-pointer border-white rounded-full p-3 flex items-center justify-center focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
      >
        <HamburgerIcon open={false} />
      </button>

      {/* Mobile Full Screen Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white transition-transform duration-500 ease-in-out transform ${
        open ? "translate-x-0" : "translate-x-full"
      } z-50`}>
        {/* Close Button */}
        <button
          className="fixed top-18 right-6 cursor-pointer border-1 border-[#003C82] rounded-full p-3 flex items-center justify-center focus:outline-none"
          onClick={() => setOpen(false)}
          aria-label="Close navigation"
        >
          <HamburgerIcon open={true} />
        </button>
        <div className="flex flex-col items-center mt-60 h-full gap-8">
          {navItems.map((item) => (
            <Button
              key={item.label}
              onClick={() => {
                navigate(item.to);
                setOpen(false);
              }}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Nav;