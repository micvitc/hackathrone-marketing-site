"use client"
import React, { useRef, useState } from "react";

type Props = {};

const Home = (props: Props) => {
  const questionsanswers = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum."
    },
    {
      question: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
      answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      question: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      question: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?",
      answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];
  
  const [openIndex, setOpenIndex] = useState<number | null>(-1);

  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <>
          <link href="https://fonts.googleapis.com/css2?family=Centaur:wght@400;700&display=swap" rel="stylesheet" />

      <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap" rel="stylesheet" />
      <style>
        
      </style>
      <div className="relative w-full min-h-screen h-screen flex flex-col justify-start items-center bg-[#0B0B0D] text-white p-10 " style={{ fontFamily: "Centaur, serif" }}>
     

        <div className="w-full max-w-4xl flex flex-col items-center">
          <h1
        className="text-[64px] leading-[80px] font-normal uppercase mb-8"
        style={{ fontFamily: "Cinzel Decorative, serif" }}
          >
        FAQs
          </h1>
          <div className="w-full flex flex-col gap-6 max-h-[60vh]  overflow-y-auto pr-2">
        {questionsanswers.map((qa, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border border-[#CBAA5D] p-0 bg-[#232323] w-full">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggle(index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4"
              >
                <div className="text-[32px] leading-[36px] font-normal lowercase font-centaur text-white">
                  {qa.question}
                </div>
                <div
                  className={`transition-transform duration-300 text-[#CBAA5D] ${isOpen ? "rotate-180" : "rotate-0"}`}
                >
                  ▼
                </div>
              </button>

              <div
                ref={(el) => { contentRefs.current[index] = el; }}
                className="overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(.2,.8,.2,1)] bg-[#232323] border-t border-[#CBAA5D]"
                style={{
                  maxHeight: isOpen ? `${contentRefs.current[index]?.scrollHeight ?? 0}px` : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="p-6">
                  <span className="text-[20px] leading-[28px] font-normal lowercase text-white">
                    {qa.answer}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
