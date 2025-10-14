"use client";

import { CurvedBorder } from "@/components/curvedBorder";
import "@fontsource/cinzel-decorative/400.css";
import "@fontsource/cinzel-decorative/700.css";
import "@fontsource/cinzel-decorative/900.css";
// Centaur is not available via npm or Google Fonts; use a similar font-family fallback for demo/development
import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const centaurFont = `'Centaur', 'EB Garamond', 'Georgia', serif`;

export default function AboutPage() {
  return (
    <section className=" bg-[#0B0B0D] flex flex-col justify-center items-center py-1 px-2">
      {/* Outer Container */}
      <div className=" w-full  pb-10 pt-6 px-3 md:px-8 shadow-xl relative">
        {/* ABOUT US Heading */}
        <div className="flex flex-col items-center">
          <h1
            className="text-5xl md:text-6xl text-[#F2E6D6] mb-8 font-normal "
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              letterSpacing: "0.04em",
            }}
          >
            ABOUT US
          </h1>
        </div>
            
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 md:ml-16 md:mr-16">
          {/* Left: Challenge Awaits */}
          <CurvedBorder className="p-2" strokeColor="#F2E6D6" strokeWidth={2}>
          <CurvedBorder className="p-1" strokeColor="#F2E6D6" strokeWidth={1}>
          <div className="p-8 bg-[#0B0B0D] relative">
            
            <h2
              className="text-2xl md:text-2xl text-[#F2E6D6] mb-5 font-bold flex justify-center items-center"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                letterSpacing: "0.02em",
              }}
            >
              THE CHALLENGE AWAITS
            </h2>
            <p
              className="text-xl text-[#F2E6D6] leading-8 mb-7"
              style={{
                fontFamily: centaurFont,
                fontWeight: 400,
                fontSize: "1rem",
              }}
            >
              HackaThrone, The Flagship National Hackathon Of VIT Chennai, Powered By The Microsoft Innovations Club (MIC), Is Where Visionaries Step Forward To Build What Others Only Imagine. <br />
              It’s 24 Hours Of Sleepless Coding, Raw Ideas, And Relentless Execution —<br />
              A Playground For Minds Wired To Disrupt, Innovate, And Lead.
            </p>

            {/* Timeline and Info */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-yellow-400 text-2xl font-bold">
                  <svg width="30vw" height="3vh" viewBox="0 0 471 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="235.819" cy="16.1063" rx="13.1084" ry="13.4584" fill="#ECC363"/>
                    <ellipse cx="210.374" cy="16.1062" rx="7.71084" ry="8.41152" fill="#ECC363"/>
                    <ellipse cx="7.71084" cy="8.41152" rx="7.71084" ry="8.41152" transform="matrix(-1 0 0 1 268.976 7.6947)" fill="#ECC363"/>
                    <ellipse cx="33.0249" cy="16.1062" rx="4.6265" ry="5.04691" fill="#ECC363"/>
                    <ellipse cx="4.6265" cy="5.04691" rx="4.6265" ry="5.04691" transform="matrix(-1 0 0 1 443.24 11.0593)" fill="#ECC363"/>
                    <line x1="210.374" y1="15.9238" x2="33.0247" y2="15.9238" stroke="#ECC363" strokeWidth="3"/>
                    <line y1="-1.5" x2="177.349" y2="-1.5" transform="matrix(1 0 0 -1 261.265 14.4238)" stroke="#ECC363" strokeWidth="3"/>
                    <path d="M30.8555 0.965454C32.4722 0.965454 34.0281 1.25134 35.4824 1.77893C29.6584 3.8917 25.4582 9.88411 25.458 16.9469C25.458 24.0098 29.6584 30.002 35.4824 32.1149C34.028 32.6425 32.4723 32.9293 30.8555 32.9293C22.7644 32.9291 16.2051 25.7733 16.2051 16.9469C16.2053 8.12072 22.7645 0.965709 30.8555 0.965454Z" fill="#ECC363"/>
                    <path d="M441.626 0.965454C440.009 0.965487 438.454 1.25142 437 1.77893C442.824 3.89178 447.024 9.88421 447.024 16.9469C447.024 24.0097 442.824 30.0019 437 32.1149C438.454 32.6424 440.009 32.9293 441.626 32.9293C449.717 32.9293 456.277 25.7735 456.277 16.9469C456.277 8.12056 449.717 0.965454 441.626 0.965454Z" fill="#ECC363"/>
                    <path d="M12.976 16.9781C12.976 21.1591 17.6605 24.5485 12.976 24.5485C8.29158 24.5485 2.18084 19.4708 0.638672 16.9781C2.18084 14.4239 8.29158 9.37695 12.976 9.37695C17.6605 9.37695 12.976 12.7971 12.976 16.9781Z" fill="#ECC363"/>
                    <path d="M458.663 16.9781C458.663 21.1591 453.978 24.5485 458.663 24.5485C463.347 24.5485 469.458 19.4708 471 16.9781C469.458 14.4239 463.347 9.37695 458.663 9.37695C453.978 9.37695 458.663 12.7971 458.663 16.9781Z" fill="#ECC363"/>
                    </svg>

                </span>
              </div>
              <div className="relative flex sm:flex-row flex-col gap-6 justify-around text-base text-[#F2E6D6]" style={{ fontFamily: centaurFont }}>
                <div className="flex flex-col items-center">
                  <FaCalendarAlt className="text-2xl text-[#78a6c8]" />
                  <span className="mt-1">November 24-26</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl">👥</span>
                  <span className="mt-1">4 Members</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaMapMarkerAlt className="text-2xl text-[#78a6c8]" />
                  <span className="mt-1">Mg Auditorium</span>
                </div>
              </div>
            </div>
          </div>
          
          </CurvedBorder></CurvedBorder>

          {/* Right: Rewards */}
          <CurvedBorder className="p-2" strokeColor="#F2E6D6" strokeWidth={2}>
          <CurvedBorder className="p-1 " strokeColor="#F2E6D6" strokeWidth={1}>
            <div className=" p-8 bg-[#0B0B0D] relative flex flex-col items-center">
            <h2
              className="text-3xl md:text-3xl text-[#F2E6D6] mb-5 font-bold"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                letterSpacing: "0.02em",
              }}
            >
              REWARDS
            </h2>
            <div className="flex flex-col gap-5 w-full justify-evenly h-">
              <div className="w-full h-20 bg-gradient-to-r from-[#d6af60] via-[#cdb88a] to-[#0B0B0D]  flex items-center px-6">
                <div className="bg-[#a37a29] h-20 w-2 -translate-x-6"></div>
                <span
                  className="text-xl text-[#F2E6D6] font-bold"
                  style={{ fontFamily: "'Cinzel Decorative', serif" }}
                >
                  1ST PRIZE
                </span>
              </div>
              <div className="w-full h-20 bg-gradient-to-r from-[#4689a7] via-[#61a2b1] to-[#0B0B0D]  flex flex-row items-center px-6">
                <div className="bg-[#3d6c82] h-20 w-2 -translate-x-6"></div>
                <span
                  className="text-xl text-[#F2E6D6] font-bold"
                  style={{ fontFamily: "'Cinzel Decorative', serif" }}
                >
                  2ND PRIZE
                </span>
              </div>
              <div className="w-full h-20 bg-gradient-to-r from-[#d6af60] via-[#cdb88a] to-[#0B0B0D]  flex items-center px-6">
                <div className="bg-[#b59554] h-20 w-2 -translate-x-6"></div>
                <span
                  className="text-xl text-[#F2E6D6] font-bold"
                  style={{ fontFamily: "'Cinzel Decorative', serif" }}
                >
                  3RD PRIZE
                </span>
              </div>
            </div>
          </div></CurvedBorder></CurvedBorder>
        </div>
      </div>
      {/* Optionally add a custom border using absolute positioned divs if needed, or use SVG */}
    </section>
  );
}