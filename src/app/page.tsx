"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <Button
        onClick={() => router.push("/project-rules")}
        variant={"secondary"}
      >
        Go to Project Rules
      </Button>
    </div>
  );
};

export default Home;
