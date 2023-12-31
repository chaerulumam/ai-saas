"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Kudus",
    avatar: "K",
    title: "Software Engineer",
    description: "This is the best application i've ever used!",
  },
  {
    name: "Tiffany",
    avatar: "T",
    title: "Bussiness Development",
    description: "This application help me a lot for Bussines Research!",
  },
  {
    name: "Osaman",
    avatar: "O",
    title: "Product Manager",
    description: "I love this application cause help me to delevop my proudct!",
  },
  {
    name: "Joey Barton",
    avatar: "J",
    title: "UI/UX Research",
    description:
      "This app has changed my life, cannot imagine working without it!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-sm">{item.title}</p>
                  <p className="text-zinc-400 text-sm">{item.name}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
