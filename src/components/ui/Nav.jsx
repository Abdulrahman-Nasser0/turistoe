import React, { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/" },
  { label: "About", href: "/" },
  { label: "Contact", href: "/" },
];

const HamburgerIcon = ({ open }) => (
  <div className="flex flex-col justify-center items-center w-6 h-6">
    <span
      className={`block h-0.5 w-5 bg-white rounded transition-all duration-300 ${
        open ? "rotate-45 translate-y-1.5" : ""
      }`}
    />
    <span
      className={`block h-0.5 w-5 bg-white   rounded my-1 transition-all duration-300 ${
        open ? "opacity-0" : ""
      }`}
    />
    <span
      className={`block h-0.5 w-5 bg-white rounded transition-all duration-300 ${
        open ? "-rotate-45 -translate-y-1.5" : ""
      }`}
    />
  </div>
);

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Hamburger Button */}
      <button
        className="border-1 rounded-full p-3 flex items-center justify-center focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open navigation"
      >
        <HamburgerIcon open={open} />
      </button>

      {/* Menu */}
      {open && (
        <div className="absolute top-14 right-0 bg-white rounded-xl shadow-lg py-4 px-6 flex flex-col gap-4 z-50 min-w-[150px]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-blue-900 font-semibold hover:text-blue-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
export default Nav;