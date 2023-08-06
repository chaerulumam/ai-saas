"use client";

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  return (
    <div className="p-4 transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image src="/logo1.png" alt="logo" fill />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          UniqueAI
        </h1>
      </Link>
      <div className="flex items-center justify-end">
        <Link href="/">
          <Button className="rounded-full" variant="premium">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};
