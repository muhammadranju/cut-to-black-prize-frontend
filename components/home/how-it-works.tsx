"use client";

import { Clapperboard, PartyPopper, Youtube } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Premium",
      description:
        "Cut to Black Prize is a small, curated competition for writers who value craft and real access. One winner receives $10,000, a Hollywood trip, and a producer meeting. If you were invited, you are in the right place to submit.",
      icon: <Clapperboard />,
    },
    {
      title: "Craft forward",
      description:
        "We read fewer scripts so we can read deeper. Blind judging across all genres, one champion at the end. If you received an invitation, you may enter here: Enter Contest.",
      icon: <Youtube />,
    },
    {
      title: "Access oriented",
      description:
        "This contest is about outcomes, not volume. One writer will leave with $10,000, a trip to Hollywood, and time with a working producer. If you were invited, claim your spot now.",
      icon: <PartyPopper />,
    },
  ];

  return (
    <section className="w-full  py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Cut to Black Prize
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center border border-yellow-100/60 rounded-lg p-8 transition-colors hover:border-white hover:bg-white/10"
            >
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-yellow-400/40 to-yellow-500 flex items-center justify-center mb-3">
                <span className="text-3xl">{step.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
