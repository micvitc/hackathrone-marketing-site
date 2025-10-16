
import React from "react";

export default function GameOfDomains() {
  const domains = [
    {
      title: "WEB DEV",
      color: "border-sky-400 text-sky-300 shadow-sky-400/40",
      icon: "public/images/image2.png",
    },
    {
      title: "AI / ML",
      color: "border-purple-400 text-purple-300 shadow-purple-400/40",
      icon: "",
    },
    {
      title: "CYBERSECURITY",
      color: "border-rose-400 text-rose-300 shadow-rose-400/40",
      icon: "/icons/cyber.png",
    },
  ];

  return (
    <section className="relative bg-[#0b0b0c] text-white py-24 px-6 border-4 border-yellow-600 rounded-3xl mx-6 shadow-[0_0_25px_rgba(255,215,0,0.3)]">
      {/* Golden frame corners */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-yellow-600 rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-yellow-600 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-yellow-600 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-yellow-600 rounded-br-3xl"></div>
      </div>

      {/* Title */}
      <h2 className="text-6xl font-serif text-center mb-6 tracking-wide text-yellow-100">
        GAME OF DOMAINS
      </h2>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16 italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {domains.map((d) => (
          <div
            key={d.title}
            className={`relative group border-2 ${d.color} rounded-2xl text-center p-10 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_var(--tw-shadow-color)]`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <img
              src={d.icon}
              alt={d.title}
              className="h-20 mx-auto mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            />
            <h3
              className={`text-3xl font-semibold mb-3 ${d.color} font-serif`}
            >
              {d.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor
            </p>
          </div>
        ))}
      </div>

      {/* Bottom gold flourish */}
      <div className="flex justify-center mt-16">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full"></div>
      </div>
    </section>
  );
}
