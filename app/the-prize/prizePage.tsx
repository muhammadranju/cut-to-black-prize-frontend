"use client";

import ContentWrapper from "@/components/content-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import WinnerCard, { Winner } from "./WinnerCard";

const winners: Winner[] = [
  {
    id: 1,
    name: "Mr. Johan Islam",
    location: "Camder London",
    prize: 1000,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Mr. Rajib Islam",
    location: "Camder London",
    prize: 800,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Mr. Ranju Miah",
    location: "Camder London",
    prize: 600,
    image:
      "https://images.unsplash.com/photo-1534528741775-53a8c3fbd625?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Mr. Johan Islam",
    location: "Camder London",
    prize: 200,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Mr. Rajib Islam",
    location: "Camder London",
    prize: 500,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  },
  {
    id: 6,
    name: "Mr. Rohim Miah",
    location: "Camder London",
    prize: 600,
    image:
      "https://images.unsplash.com/photo-1534528741775-53a8c3fbd625?w=200&h=200&fit=crop",
  },
  {
    id: 7,
    name: "Mr. Johan Islam",
    location: "Camder London",
    prize: 200,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    id: 8,
    name: "Mr. Rajib Islam",
    location: "Camder London",
    prize: 500,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  },
  {
    id: 9,
    name: "Mr. Rohim Miah",
    location: "Camder London",
    prize: 600,
    image:
      "https://images.unsplash.com/photo-1534528741775-53a8c3fbd625?w=200&h=200&fit=crop",
  },
];

export default function PrizePage() {
  return (
    <ContentWrapper>
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Be the winner of our biggest contest and
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          take home the grand of{" "}
          <span className="text-yellow-500">$10,000</span>
        </h2>
      </div>

      {/* Winners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {winners.map((winner) => (
          <WinnerCard key={winner.id} winner={winner} />
        ))}
      </div>

      {/* CTA */}
      <section className="text-center pt-12 space-y-5">
        <h2 className="text-3xl font-bold text-foreground ">
          Ready to Submit Your Screenplay?
        </h2>
        <p className="text-gray-400 text-base max-w-md mx-auto">
          Fill out the submission form and submit your screenplay to enter the
          contest.
        </p>
        <Link href="/submit">
          <Button>ENTER CONTEST</Button>
        </Link>
      </section>
    </ContentWrapper>
  );
}
