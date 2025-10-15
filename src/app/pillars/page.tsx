"use client";

import PillarCard from "@/components/PillarCard";
import { useEffect } from "react";

const PillarsPage = () => {
  const pillarsData = [
    { image: "/images/image1.png" }, 
    { image: "/images/image3.png" },  
    { image: "/images/image4.png" },  
    { image: "/images/image5.png" },  
  ];
      useEffect(() => {
        const fontLink = document.createElement("link");
        // Reverting to the public Google Fonts URL for stability
        fontLink.href = "https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap";
        fontLink.rel = "stylesheet";
        document.head.appendChild(fontLink);

        return () => {
            // Clean up the element when the component unmounts
            document.head.removeChild(fontLink);
        };
    }, []); 
  return (
    <section
      className="relative overflow-x-hidden min-h-screen"  
      style={{ backgroundColor: "#0B0B0D" }}
    >
      {/* Main Content */}
      <div className="relative z-20 w-full h-full text-white text-center flex flex-col">


        <div className="mt-4 px-4">
          <h1
            className="font-cinzel font-normal text-[48px] sm:text-[64px] md:text-[96px] leading-[100%] max-md:leading-tight tracking-normal uppercase"
            style={{ fontFamily: 'Cinzel Decorative, serif' }}  
          >
            THE JUDGEMENT PILLARS
          </h1>
          <p className="text-base sm:text-xl mt-2 sm:mt-4 font-light opacity-80">
            The Four Crowns Of Innovation
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto mb-8 mt-12 sm:mt-16">
          
          <div className="-mx-4 lg:hidden"> 
            <div className="flex gap-4 overflow-x-auto px-4 py-2">
              {pillarsData.map((pillar, index) => (
                <div key={index} className="flex-none w-64">
                  <PillarCard image={pillar.image} />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-4 gap-0">
            {pillarsData.map((pillar, index) => (
              <PillarCard key={index} image={pillar.image} />
            ))}
          </div>
        </div>
      </div>

      <img
        src="./images/image6.png"
        alt=""
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[140px] sm:w-[200px] md:w-[300px] z-[15]"
      />
    </section>
  );
};

export default PillarsPage;
