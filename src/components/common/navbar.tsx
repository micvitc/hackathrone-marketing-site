"use client";

import Link from "next/link";
import Image from "next/image"; // Import Image component
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <nav className="relative  h-[102.5px] w-[100vw] overflow-x-auto top-[66px] flex justify-left md:justify- items-center">
      <div className="flex space-x-16"> {/* Adjust space-x as needed for overall spacing */}
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
    </nav>
  );
};

export default Navbar;
