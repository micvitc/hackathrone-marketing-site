"use client";

import "@fontsource/cinzel-decorative/400.css";
import "@fontsource/cinzel-decorative/700.css";
import "@fontsource/cinzel-decorative/900.css";
import React from "react";

export default function SponsorsPage() {
  return (
    <>
      <style jsx global>{`
        body > div > div:last-child > div:first-child {
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
      `}</style>
      <div 
      className="relative w-full min-h-screen bg-[#0b0b0b] flex flex-col items-center justify-start overflow-hidden pt-4 sm:pt-8 px-4"
    >
      {/* Title */}
      <h1 
        className="text-4xl sm:text-5xl md:text-6xl text-[#F2E6D6] mb-0 font-normal text-center"
        style={{
          fontFamily: "'Cinzel Decorative', serif",
          letterSpacing: "0.04em",
        }}
      >
        SPONSORS
      </h1>

      {/* Hex Formation */}
      <div className="flex flex-col items-center gap-0 mt-4 sm:mt-2">
        {/* Top Row - 3 shields */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
          <div 
            className="w-[140px] h-[168px] sm:w-[200px] sm:h-[238px] md:w-[250px] md:h-[298px] lg:w-[309px] lg:h-[369px] bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: "url('/images/Shield.png')" }}
          />
          <div 
            className="w-[140px] h-[168px] sm:w-[200px] sm:h-[238px] md:w-[250px] md:h-[298px] lg:w-[309px] lg:h-[369px] bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: "url('/images/Shield.png')" }}
          />
          <div 
            className="w-[140px] h-[168px] sm:w-[200px] sm:h-[238px] md:w-[250px] md:h-[298px] lg:w-[309px] lg:h-[369px] bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: "url('/images/Shield.png')" }}
          />
        </div>

        {/* Bottom Row - 2 shields */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 -mt-[60px] sm:-mt-[80px] md:-mt-[100px] lg:-mt-[130px]">
          <div 
            className="w-[140px] h-[168px] sm:w-[200px] sm:h-[238px] md:w-[250px] md:h-[298px] lg:w-[309px] lg:h-[369px] bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: "url('/images/Shield.png')" }}
          />
          <div 
            className="w-[140px] h-[168px] sm:w-[200px] sm:h-[238px] md:w-[250px] md:h-[298px] lg:w-[309px] lg:h-[369px] bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: "url('/images/Shield.png')" }}
          />
        </div>
      </div>

      {/* End Line */}
      <div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-[80%] sm:w-[70%] h-3 sm:h-4 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/images/image6.png')" }}
      />
    </div>
    </>
  );
}
