"use client";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface WinnerCardProps {
  winner: Winner;
}

export interface Winner {
  id: number;
  name: string;
  location: string;
  prize: number;
  image: string;
}
function WinnerCard({ winner }: WinnerCardProps) {
  return (
    <Card className="bg-[#1a1a1a] border-yellow-500/20 border-2 p-6 flex flex-col items-center text-center hover:border-yellow-500 transition-colors duration-300">
      {/* Profile Image */}
      <div className="mb-4 relative">
        <div className="w-24 h-24 rounded-full border-2 border-yellow-500 overflow-hidden">
          <img
            src={winner.image || "/placeholder.svg"}
            alt={winner.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Winner Info */}
      <h3 className="text-lg font-semibold text-white mb-1">{winner.name}</h3>

      {/* Location */}
      <div className="flex items-center justify-center gap-1 text-gray-400 mb-4 text-sm">
        <MapPin size={16} className="text-gray-400" />
        <span>{winner.location}</span>
      </div>

      {/* Prize */}
      <p className="text-xl font-bold text-white">
        Prize <span className="text-yellow-500">${winner.prize}</span>
      </p>
    </Card>
  );
}

export default WinnerCard;
