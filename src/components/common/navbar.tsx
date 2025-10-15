"use client";

import Link from "next/link";
import Image from "next/image";
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
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

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
    <nav
      ref={navRef}
      className="relative w-full h-[72px] top-0 flex justify-between md:justify-center items-center px-4 md:px-8 lg:px-16 bg-[#0B0B0D] z-50"
    >
      {/* Hamburger menu for mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-[#CBAA5D] focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop navigation links */}
      <div className="hidden md:flex md:flex-wrap md:justify-center md:space-x-6 lg:space-x-12">
        {navLinks.map((link) => (
          <div
            key={link.name}
            className={`relative w-[140px] h-[71px] flex flex-col items-center justify-center glow-on-hover ${
              activeLink === link.href ? "glow-active" : ""
            }`}
          >
            <Image
              src="/images/vector.png"
              alt={`${link.name} vector`}
              width={140}
              height={71}
              className="absolute top-0 left-0"
            />
            <Link
              href={link.href}
              className="relative font-cinzel-decorative font-bold text-[16px] leading-[22px] uppercase text-[#878C8E] transition-colors z-10"
            >
              {link.name}
            </Link>
            <Image
              src="/images/vector.png"
              alt={`${link.name} vector rotated`}
              width={140}
              height={71}
              className="absolute bottom-0 left-0 rotate-180"
            />
          </div>
        ))}
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-6 z-20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-cinzel-decorative font-bold text-[22px] leading-[28px] uppercase text-[#CBAA5D] py-3 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
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
