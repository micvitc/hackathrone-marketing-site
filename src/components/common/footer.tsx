import React from 'react';
import Image from 'next/image';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import styles from './footer.module.css';

/**
 * Renders the footer component of the Hackathrone marketing site.
 * Includes sections for Hackathrone title, MIC TECHNO VIT description, quick passages, and social media links.
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Decorative line separator at the top of the footer */}
      <div className={styles.lineSeparator} style={{ top: '2rem' }}></div>

      {/* Main content container for the footer sections */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 md:justify-between gap-8 md:gap-16 mt-8">
        {/* Hackathrone Title Section: Centered at the top, spans all columns on medium screens and up */}
        <div className="md:col-span-3 text-center md:text-left mb-16">
          <h2 className="font-cinzel-decorative text-[48px] uppercase text-[#CBAA5D]">HACK~A~THRONE</h2>
        </div>

        {/* MIC TECHNO VIT Section: Provides a description of the organization */}
        <div className="text-center md:text-left">
          <h3 className="font-cinzel-decorative text-[32px] uppercase text-[#CBAA5D] mb-2">MIC TECHNO VIT</h3>
          <p className="font-centaur text-[32px] lowercase text-[#F2E6D6] md:text-left">
            {/* TODO: Replace this placeholder text with actual descriptive content for MIC TECHNO VIT */}
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* QUICK PASSAGES Section: Navigation links to important sections of the site */}
        <div className="text-center md:text-left">
          <h3 className="font-cinzel-decorative text-[32px] uppercase text-[#CBAA5D] mb-2">QUICK PASSAGES</h3>
          <ul>
            <li className="font-centaur text-[32px] capitalize text-[#F2E6D6] mb-2"><a href="#" className="hover:underline">Hackathon</a></li>
            <li className="font-centaur text-[32px] capitalize text-[#F2E6D6] mb-2"><a href="#" className="hover:underline">Workshops</a></li>
            <li className="font-centaur text-[32px] capitalize text-[#F2E6D6] mb-2"><a href="#" className="hover:underline">Sponsors</a></li>
            <li className="font-centaur text-[32px] capitalize text-[#F2E6D6]"><a href="#" className="hover:underline">Faqs</a></li>
          </ul>
        </div>

        {/* SEND A RAVEN Section: Contact information and social media links */}
        <div className="text-center">
          <h3 className="font-cinzel-decorative text-[32px] uppercase text-[#CBAA5D] mb-2">SEND A RAVEN</h3>
          <p className="font-centaur text-[32px] lowercase text-[#F2E6D6] mb-4">mic@vit.ac.in</p>
          
          {/* Social Media Icons: Links to Instagram, Twitter, and LinkedIn profiles */}
          <div className={`${styles.socialIcons} justify-center`}>
            <div className={styles.socialIconBox}>
              <a href="https://www.instagram.com/microsoft.innovations.vitc/" target="_blank" rel="noopener noreferrer" className="text-[#CBAA5D] hover:text-gray-400">
                <Instagram size={24} />
              </a>
            </div>
            <div className={styles.socialIconBox}>
              <a href="https://x.com/MicrosoftVitC" target="_blank" rel="noopener noreferrer" className="text-[#CBAA5D] hover:text-gray-400">
                <Twitter size={24} />
              </a>
            </div>
            <div className={styles.socialIconBox}>
              <a href="https://www.linkedin.com/company/microsoft-innovations-club-vitc/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-[#CBAA5D] hover:text-gray-400">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Event Date and Location Image */}
          <div className="mt-8 flex justify-center">
            <Image
              src="/images/sword.png"
              alt="October 29th & 30th, VIT Chennai, MG Auditorium"
              width={276}
              height={137}
              className="w-full h-auto max-w-[276px]"
            />Implement responsive footer with detailed styling
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
