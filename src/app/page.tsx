"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();


  const LandingLogo = () => (
    <div className="flex items-center justify-center mb-16 md:mb-20">
      <Image
        src="/images/landing.png"
        alt="Hackathrone Logo"
        width={850}
        height={200}
        className="drop-shadow-[0_0_35px_rgba(201,168,94,0.4)] w-[90%] max-w-[850px] h-auto"
        priority
      />
    </div>
  );


  const LandingButtons = () => {
    const buttonClass =
      "bg-black border border-[#C9A85E] text-[#C9A85E] font-centaur tracking-wider text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-none hover:bg-[#C9A85E] hover:text-black transition-all duration-300 text-center";

    return (
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center items-center">
        <Button variant="outline" className={buttonClass} onClick={() => router.push("/register")}>
          REGISTER NOW
        </Button>

        <Button variant="outline" className={buttonClass} onClick={() => router.push("/events")}>
          EXPLORE EVENTS
        </Button>
      </div>
    );
  };

  return (
    <main className="min-h-[calc(100vh-102.5px)] pt-[102.5px] flex flex-col items-center justify-center bg-[#0B0B0D] text-[#F2E6D6] relative overflow-hidden px-4">
      <div className="w-full max-w-7xl shadow-xl relative">
        <LandingLogo />
        <LandingButtons />
      </div>
    </main>
  );
}
