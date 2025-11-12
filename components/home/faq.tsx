"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can I participate in the Cut to Black Prize contest?",
      answer:
        "Participation is by invitation only. You must first request and receive an official invitation before submitting your screenplay entry. Once invited, you can submit one original, unproduced script in PDF format during the open submission period.",
    },
    {
      question: "What is the grand prize for the winner?",
      answer:
        "The grand prize winner will receive a cash award of 10,000 USD, paid within 30 days after verification. In addition, the winner will be awarded a Hollywood trip package that includes round-trip economy airfare to Los Angeles, two or three nights of standard hotel accommodation, and a face-to-face meeting with a producer or development executive. The total prize value can reach up to 12,500 USD. If travel is not possible, the sponsor may offer a 1,500 USD cash alternative or an equivalent virtual meeting package.",
    },
    {
      question: "When is the entry period and how much is the entry fee?",
      answer:
        "The entry period for the contest runs from November 15, 2025, through June 30, 2026, with multiple phases: pre-registration, early, regular, late, and extended. Entry fees range from 100 to 150 USD depending on the phase of submission. All fees are nonrefundable, and the submission process will close once the participant quota is reached.",
    },
    {
      question: "How are scripts judged and when will winners be announced?",
      answer:
        "Scripts are evaluated through blind judging by experienced producers, screenwriters, and development executives. The judging process focuses on storytelling, originality, character development, structure, pacing, dialogue, and market potential. Quarterfinalists will be announced on July 10, 2026, followed by semifinalists on July 20, finalists on August 3, and the grand prize winner on August 14, 2026. All judges’ decisions are final.",
    },
  ];

  return (
    <section className="w-full  py-10 mb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-white/20 rounded-lg overflow-hidden hover:border-yellow-100/80 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-neutral-800 transition"
              >
                <span className="text-left text-white font-semibold">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-yellow-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400 border-t border-neutral-800">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
