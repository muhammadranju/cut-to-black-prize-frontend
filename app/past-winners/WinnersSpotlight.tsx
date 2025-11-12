"use client";
import ContentWrapper from "@/components/content-wrapper";
import { Award, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const winners: Winner[] = [
  {
    id: 1,
    name: "Ms. Nadia Rahman",
    price: "$10,000",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Ms. Nabila Rahman",
    price: "$10,000",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Mr. Saiful Alam",
    price: "$10,000",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Dr. Tanvir Ahmed",
    price: "$10,000",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Mrs. Farzana Karim",
    price: "$10,000",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Mr. Rezaul Islam",
    price: "$10,000",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    name: "Mr. Mohammad Rahman",
    price: "$10,000",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    name: "Mr. Mahfuz Rahman",
    price: "$10,000",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
  },
];

interface Winner {
  id: number;
  name: string;
  price: string;
  image: string;
}

const WinnersSpotlight: React.FC = () => {
  return (
    <ContentWrapper>
      {/* Header Section */}
      <div className="mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          Spotlight on Our Winners...
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-5xl text-gray-300">
          Every winner listed here started with a script and a dream. With the
          support of the PAGE Award, many have gone on to write for major
          studios, streaming platforms, and independent productions around the
          world. Their journeys continue, and this is where they began.
        </p>
      </div>

      {/* Winners Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 lg:px-8">
        {winners.map((winner) => (
          <div
            key={winner.id}
            className="bg-[#1a1a1a] border border-gray-700 rounded-lg overflow-hidden hover:border-yellow-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
          >
            {/* Image Container */}
            <div className="aspect-square overflow-hidden">
              <Image
                width={400}
                height={400}
                src={winner.image}
                alt={winner.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Info Section */}
            <div className="p-3 sm:p-4 space-y-2">
              {/* Name */}
              <div className="flex items-center gap-2">
                <div className="shrink-0 w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-medium truncate">
                  {winner.name}
                </span>
              </div>

              {/* Winner Price */}
              <div className="flex items-center gap-2">
                <div className="shrink-0 w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                  Winning : {winner.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
};

export default WinnersSpotlight;
