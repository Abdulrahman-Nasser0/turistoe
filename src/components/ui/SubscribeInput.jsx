import React, { useState } from "react";
import Button from "./Button";

const SubscribeInput = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing with email:", email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full px-4 py-3 rounded-full bg-white text-black placeholder:text-gray-400 text-sm"
          required
        />
        <div className="absolute right-1 top-1/2 -translate-y-1/2">
          <Button 
            type="submit" 
            className="bg-[#003C82] text-white !m-0 !p-0 !text-sm !w-fit !py-2 !px-6"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SubscribeInput;
