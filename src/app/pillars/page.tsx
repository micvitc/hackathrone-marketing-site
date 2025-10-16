"use client";

import PillarCard from "@/components/PillarCard";
import { useCallback, useEffect, useRef, useState } from "react";

const PillarsPage = () => {
  const pillarsData = [
    { image: "/images/image1.png" }, 
    { image: "/images/image3.png" },  
    { image: "/images/image4.png" },  
    { image: "/images/image5.png" },  
  ];
    const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isUserScrolling = useRef(false);
      useEffect(() => {
        const fontLink = document.createElement("link");
        fontLink.href = "https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap";
        fontLink.rel = "stylesheet";
        document.head.appendChild(fontLink);

        return () => {
            document.head.removeChild(fontLink);
        };
    }, []); 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1 && !isUserScrolling.current) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: scrollRef.current,
        rootMargin: "0px",
        threshold: 0.5, 
      }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [scrollRef.current]);

  // --- Auto-Swipe Logic (Interval) ---
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isUserScrolling.current) {
        const nextIndex = (activeIndex + 1) % pillarsData.length;
        if (scrollRef.current && cardRefs.current[nextIndex]) {
            scrollRef.current.scroll({
                left: cardRefs.current[nextIndex]!.offsetLeft - 24,
                behavior: 'smooth',
            });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, pillarsData.length]);


  const handleDotClick = useCallback((index: number) => {
    if (scrollRef.current && cardRefs.current[index]) {
      isUserScrolling.current = true; 
      
      scrollRef.current.scroll({
        left: cardRefs.current[index]!.offsetLeft - 24,
        behavior: 'smooth',
      });
      setActiveIndex(index);

      setTimeout(() => {
        isUserScrolling.current = false;
      }, 500); 
    }
  }, []);
  return (
    <section
      className="relative overflow-x-hidden min-h-screen"  
      style={{ backgroundColor: "#0B0B0D" }}
    >
      <div className="relative z-20 w-full h-full text-white text-center flex flex-col">


        <div className="mt-4 px-4">
          <h1
            className="font-cinzel font-normal text-[48px] sm:text-[64px] md:text-[96px] leading-[100%] max-md:leading-tight tracking-normal uppercase"
            style={{ fontFamily: 'Cinzel Decorative, serif', paddingTop: '50px' }}  
          >
            THE JUDGEMENT PILLARS
          </h1>
          <p className="text-base sm:text-xl mt-2 sm:mt-4 font-light opacity-80">
            The Four Crowns Of Innovation
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto mb-8 mt-12 sm:mt-16">
          
          <div className="-mx-4 lg:hidden"> 
  <div 
  ref={scrollRef}
  className="flex gap-4 overflow-x-auto px-[calc(50%-8rem)] py-16 snap-x snap-mandatory scroll-smooth overflow-x-hidden"
>
  {pillarsData.map((pillar, index) => (
    <div 
      key={index}
      ref={el => { cardRefs.current[index] = el; }}
      className="flex-none w-64 snap-center"
    >
      <PillarCard image={pillar.image} />
    </div>
  ))}
</div>

</div>
         <div className="flex justify-center mt-4 space-x-2 lg:hidden">
            {pillarsData.map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === activeIndex ? 'bg-yellow-400 scale-110' : 'bg-white opacity-40 hover:opacity-70'
                    }`}
                    aria-label={`Go to pillar ${index + 1}`}
                />
            ))}
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
