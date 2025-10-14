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
      <div className="relative w-full min-h-screen h-screen flex flex-col justify-start items-center text-white p-10 " style={{ fontFamily: "Centaur, serif" }}>
     

        <div className="w-full max-w-4xl flex flex-col items-center">
          <h1
        className="text-[64px] leading-[80px] font-normal uppercase mb-8"
        style={{ fontFamily: "Cinzel Decorative, serif" }}
          >
        FAQs
          </h1>
          <div className="w-full flex flex-col gap-6 max-h-[90vh]  overflow-y-auto pr-2">
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
          <br />
          <svg
            width="399"
            height="28"
            viewBox="0 0 399 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="199.18" cy="14.2482" rx="11.1019" ry="11.3983" fill="#ECC363" />
            <ellipse cx="177.63" cy="14.2482" rx="6.53051" ry="7.12394" fill="#ECC363" />
            <ellipse cx="220.731" cy="14.2481" rx="6.53051" ry="7.12394" fill="#ECC363" />
            <ellipse cx="27.4281" cy="14.2481" rx="3.91831" ry="4.27436" fill="#ECC363" />
            <ellipse cx="374.851" cy="14.2481" rx="3.91831" ry="4.27436" fill="#ECC363" />
            <line x1="27.4281" y1="14.1729" x2="177.63" y2="14.1729" stroke="#ECC363" strokeWidth="3" />
            <line x1="220.731" y1="14.1729" x2="374.851" y2="14.1729" stroke="#ECC363" strokeWidth="3" />
            <path d="M25.5918 27.0713C26.9608 27.0713 28.2783 26.8295 29.5098 26.3828C24.5773 24.5934 21.0206 19.5178 21.0205 13.5361C21.0205 7.55457 24.5775 2.48004 29.5098 0.69043C28.2781 0.24362 26.961 0 25.5918 0C18.7392 0.000116348 13.1836 6.06077 13.1836 13.5361C13.1838 21.0113 18.7393 27.0712 25.5918 27.0713Z" fill="#ECC363" />
            <path d="M373.484 27.0713C372.115 27.0713 370.797 26.8296 369.565 26.3828C374.498 24.5935 378.056 19.5179 378.056 13.5361C378.056 7.55439 374.498 2.4799 369.565 0.69043C370.797 0.243471 372.115 0 373.484 0C380.337 0.000257492 385.892 6.06085 385.892 13.5361C385.891 21.0113 380.337 27.071 373.484 27.0713Z" fill="#ECC363" />
            <path d="M10.4488 13.5096C10.4488 9.96864 14.4162 7.09809 10.4488 7.09809C6.48145 7.09809 1.3061 11.3985 0 13.5096C1.3061 15.6729 6.48145 19.9473 10.4488 19.9473C14.4162 19.9473 10.4488 17.0506 10.4488 13.5096Z" fill="#ECC363" />
            <path d="M387.913 13.5096C387.913 9.96864 383.945 7.09809 387.913 7.09809C391.88 7.09809 397.055 11.3985 398.361 13.5096C397.055 15.6729 391.88 19.9473 387.913 19.9473C383.945 19.9473 387.913 17.0506 387.913 13.5096Z" fill="#ECC363" />
          </svg>

        </div>
      </div>
    </>
  );
};

export default Home;
