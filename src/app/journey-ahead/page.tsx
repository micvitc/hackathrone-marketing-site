"use client";
import React, { useState } from "react";

const JourneyAhead = () => {
  const [rotation, setRotation] = useState(0);

  const rot = (angle: number) => {
    setRotation(angle);
  };

  return (
    <div className="flex items-center justify-center flex-col h-screen bg-black text-[#F2E6D6] text-4xl font-bold ">
      <h1 className="mb-10">The Journey Ahead</h1>

      <div className="flex items-center gap-8">
        {/* Image buttons */}
        <div className="flex items-center gap-6">
          {[0, 45, 90, 135, 180].map((angle, index) => (
            <img
              key={index}
              className="max-w-25 max-h-25 cursor-pointer hover:scale-110 transition-transform duration-200"
              src="/images/journeyAhead1.png"
              alt={`Rotate ${angle}°`}
              onClick={() => rot(angle)}
            />
          ))}
        </div>

        {/* Rotating wheel */}
        <img
          id="rotating-wheel"
          src="/images/journeyAhead2.png"
          alt="Rotating Wheel"
          className="wtransition-transform duration-500 ease-in-out"
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
        />
      </div>
    </div>
  );
};

export default JourneyAhead;

