import ContentWrapper from "@/components/content-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DollarSign,
  FileCheck,
  FileText,
  Scale,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface AccordionSection {
  value: string;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContestRules: React.FC = () => {
  const sections: AccordionSection[] = [
    {
      value: "eligibility",
      icon: <Users className="w-5 h-5" />,
      title: "Eligibility",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            The Cut to Black Prize is open to emerging screenwriters from around
            the world. To be eligible:
          </p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                You must have an invitation code to enter
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                Your screenplay must be original and unpublished
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                You must own or control all rights to your work
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                Scripts must be between 60-120 pages
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                Previous contest winners are welcome to resubmit new work
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                Collaborators must submit jointly with a single invitation code
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      value: "submissions",
      icon: <FileText className="w-5 h-5" />,
      title: "Submission Guidelines",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            All submissions must follow these guidelines:
          </p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                <strong className="text-white">Format:</strong> Standard
                screenplay format (PDF only)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                <strong className="text-white">Font:</strong> Courier, 12pt
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                <strong className="text-white">Margins:</strong> Standard
                screenplay margins
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                <strong className="text-white">File size:</strong> Maximum 20MB
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                No watermarks or DRM protection
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                Cover page must include title, author name, and contact info
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                <strong className="text-white">Optional:</strong> Include a
                synopsis (PDF or DOC, max 10MB)
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      value: "judging",
      icon: <Scale className="w-5 h-5" />,
      title: "Judging Process",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Scripts are judged anonymously by our panel of industry
            professionals based on:
          </p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                Story structure and narrative strength
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                Character development and dialogue
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                Marketability and unique voice
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                Technical screenplay formatting
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                Overall execution and polish
              </span>
            </li>
          </ul>
          <p className="mt-4 text-gray-300 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            Finalists will be announced on [Date]. Winners will be notified
            before public announcement.
          </p>
        </div>
      ),
    },
    {
      value: "fees",
      icon: <DollarSign className="w-5 h-5" />,
      title: "Entry Fees",
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <p className="text-yellow-500 font-semibold text-lg">
              Entry fee: $50 USD per submission
            </p>
          </div>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                Multiple submissions are allowed
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                Each submission requires a separate payment
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">All fees are non-refundable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                Fees collected support judging, administration, and prizes
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      value: "rights",
      icon: <Shield className="w-5 h-5" />,
      title: "Rights and Ownership",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            By submitting your screenplay, you confirm that:
          </p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                You own all rights to the submitted work
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                The work is original and unpublished
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                It does not infringe on any third-party rights
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-1">•</span>
              <span className="text-gray-300">
                You grant permission for judges to read and evaluate the work
              </span>
            </li>
          </ul>
          <div className="mt-4 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <p className="text-green-400">
              The contest organizers retain no rights to submitted scripts. All
              rights remain with the author.
            </p>
          </div>
        </div>
      ),
    },
    {
      value: "terms",
      icon: <FileCheck className="w-5 h-5" />,
      title: "Terms and Conditions",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Complete terms and conditions for this contest are available on our{" "}
            <Link
              href="/terms-conditions"
              className="text-yellow-500 hover:text-yellow-400 underline font-medium"
            >
              Terms and Conditions page
            </Link>
          </p>
          <p className="text-gray-300">
            By submitting, you agree to all terms outlined therein.
          </p>
        </div>
      ),
    },
  ];

  return (
    <ContentWrapper>
      <title>Contest Rules | Cut to Black Prize</title>
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-500 mb-4">
          Contest Rules
        </h1>
        <p className="text-gray-400 text-lg max-w-lg mx-auto">
          Everything you need to know before submitting your screenplay to the
          contest.
        </p>
      </div>

      {/* Accordion */}
      <Accordion type="single" collapsible className="w-full space-y-4 ">
        {sections.map((section) => (
          <AccordionItem
            key={section.value}
            value={section.value}
            className="bg-card border border-gray-100/40 rounded-lg overflow-hidden py-4 hover:border-yellow-500/70 transition-all"
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline group">
              <div className="flex items-center gap-4 text-left">
                <div className="shrink-0 w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                  <span className="text-yellow-500">{section.icon}</span>
                </div>
                <span className="text-xl font-semibold text-white group-hover:text-yellow-500 transition-colors">
                  {section.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="pt-2 border-t border-gray-800">
                {section.content}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ContentWrapper>
  );
};

export default ContestRules;
