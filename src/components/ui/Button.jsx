import React from "react";

const Button = ({ children, className, type = "button", ...props }) => {
  return (
    <button
      type={type}
      className={`py-[1.2rem] w-[18.3125rem] text-[#003C82] 
        text-[1.55rem] border-1 rounded-4xl border-[#003C82] hover:bg-[#003C82] hover:text-white cursor-pointer   
        inline-flex items-center justify-center whitespace-nowrap font-medium transition-all shrink-0 outline-none 
        ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
