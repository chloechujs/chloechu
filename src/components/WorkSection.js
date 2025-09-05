"use client";

import { Card, CardContent } from "@/components/ui/card.js";

export default function WorkSection() {
  const works = [
    {
      id: 1,
      title: "GRIDS, LAYOUT\n& TYPOGRAPHY",
      category: "WEB DESIGN, ART DIRECTION", 
      description: "In 2024, I decided to pick up web design to expand my skillset. To build a strong foundation, I started a project called Becoming.",
      image: "https://placehold.co/690x800"
    },
    {
      id: 2,
      title: "NODE\nBRAND IDENTITY",
      category: "BRAND IDENTITY, BRAND GUIDELINES",
      description: "In 2024, I decided to pick up web design to expand my skillset. To build a strong foundation, I started a project called Becoming.", 
      image: "https://placehold.co/690x800"
    },
    {
      id: 3,
      title: "CIRCLE\nBRAND IDENTITY",
      category: "BRAND IDENTITY, BRAND DESIGN",
      description: "In 2024, I decided to pick up web design to expand my skillset. To build a strong foundation, I started a project called Becoming.",
      image: "https://placehold.co/690x800"
    }
  ];

  return (
    <section className="mx-auto relative pb-20 bg-primary-orange" id="works">
      {/* Works Grid */}
      <div className="relative z-10 flex flex-col items-center space-y-20">
        {works.map((work, index) => (
          <Card 
            key={work.id}
            className="w-full max-w-[1200px] h-[800px] mx-auto border-none rounded-none shadow-none bg-primary-gray hover:bg-gray-300 transition-colors duration-300"
          >
            <CardContent className="p-0 h-full relative">
              <div className="flex h-full">
                {/* Content Side - Left */}
                <div className="flex-1 flex flex-col justify-center px-12 py-16">
                  {/* Title */}
                  <h2 className="text-primary-orange font-bold font-mango text-8xl leading-[80px] mb-8 whitespace-pre-line">
                    {work.title}
                  </h2>
                  
                  {/* Category */}
                  <p className="text-primary-orange font-bold font-['Inter'] text-xl uppercase leading-normal mb-8 tracking-wide">
                    {work.category}
                  </p>
                  
                  {/* Description */}
                  <div className="max-w-80 mt-auto">
                    <p className="text-primary-orange font-normal font-['Inter'] text-2xl leading-normal">
                      {work.description}
                    </p>
                  </div>
                </div>

                {/* Image Side - Right */}
                <div className="w-[690px] h-full relative overflow-hidden">
                  <img 
                    src={work.image}
                    alt={work.title.replace('\n', ' ')}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary-orange opacity-0 hover:opacity-20 transition-opacity duration-300" />
                </div>
              </div>

              {/* Optional: Decorative element */}
              <div className="absolute bottom-0 left-12 w-20 h-1 bg-primary-orange" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Optional: Section divider */}
      <div className="w-full h-px bg-primary-orange mt-20 opacity-30" />
    </section>
  );
}
