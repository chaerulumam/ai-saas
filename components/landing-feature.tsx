"use client";

import { MessageSquare, PencilLine, ImageIcon, Code } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

const features = [
  {
    name: "Conversation",
    description: "Talk with ChatGPT.",
    icon: MessageSquare,
    color: "text-violet-700",
    bgColor: "bg-violet-700/10",
  },
  {
    name: "Grammar Corrector",
    description:
      "Simply type sentences in English to check and decorate your grammar.",
    icon: PencilLine,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    name: "Image Generation",
    description: "Generate an image as you want.",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    name: "Code Generation",
    description: "Create a code with AI.",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  },
];

export const LandingFeature = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {features.map((item) => (
          <Card
            key={item.description}
            className="rounded-lg shadow-sm bg-[#192339] border-none text-white"
          >
            <CardHeader className="flex flex-col space-y-1.5 p-6">
              <CardTitle className="flex items-center gap-x-2">
                <div className={cn("p-2 rounded-md h-fit w-fit", item.bgColor)}>
                  <item.icon className={cn("w-10 h-10", item.color)} />
                </div>
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.description}</p>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
