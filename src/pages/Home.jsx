import Header from "@/components/ui/Header";
import React from "react";

const Home = () => {
  return (
    <div
      className="min-h-[100vh] "
      style={{
        backgroundImage: "url('/bg-mobile.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
        {/* Background Overlay */}
      <div
        className="absolute z-0 inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #003C82 0%, #003C8200 100%)",
        }}
      />


      <div className="relative z-10">
        <Header/>
      </div>
    </div>
  );
};

export default Home;
