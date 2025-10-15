"use client";

import Link from "next/link";
import Image from "next/image"; // Import Image component
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "criteria", href: "/criteria" },
  { name: "events", href: "/events" },
  { name: "sponsors", href: "/sponsors" },
  { name: "FAQs", href: "/faqs" },
];

const Navbar = () => {
  // Developers can add their page components in the src/app/ directory.
  // Each folder within src/app/ that contains a page.tsx file will automatically become a route.
  // For example:
  // - To create the "About" page, create src/app/about/page.tsx
  // - For "Events", create src/app/events/page.tsx
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav ref={navRef} className="relative w-full h-[102.5px] top-[66px] flex justify-between md:justify-center items-center px-4 md:px-8 lg:px-16">
      {/* Hamburger menu for mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-[#CBAA5D] focus:outline-none">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Desktop navigation links */}
      <div className="hidden md:flex md:flex-wrap md:justify-center md:space-x-8 lg:space-x-16"> {/* Adjust space-x as needed for overall spacing */}
        {navLinks.map((link) => (
          <div
            key={link.name}
            className={`relative w-[202px] h-[101.5px] flex flex-col items-center justify-center glow-on-hover ${activeLink === link.href ? "glow-active" : ""}`}
          >
            <Image
              src="/images/vector.png"
              alt={`${link.name} vector`}
              width={202}
              height={101.5}
              className="absolute top-0 left-0"
            />

            <Link
              href={link.href}
              className="relative font-cinzel-decorative font-bold text-[18.5px] leading-[25px] uppercase text-[#878C8E] transition-colors z-10"
            >
              {link.name}
            </Link>
            <Image
              src="/images/vector.png"
              alt={`${link.name} vector rotated`}
              width={202}
              height={101.5}
              className="absolute bottom-0 left-0 rotate-180"
            />
          </div>
        ))}
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-8 z-20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-cinzel-decorative font-bold text-[24px] leading-[30px] uppercase text-[#CBAA5D] py-4 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
