"use client";

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  return (
    <div className="p-4 transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-16 w-16 mr-0">
          <Image src="/logo.png" alt="logo" fill />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Unique
        </h1>
      </Link>
    </div>
  );
};
