"use client";
import FAQ from "@/components/home/faq";
import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/how-it-works";
import Testimonials from "@/components/home/testimonials";
import WhyChooseUs from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-20">
        <p className="text-xl text-white  mb-10">
          Premium
          <br />
          <br />
          Cut to Black Prize is a small, curated competition for writers who
          value craft and real access. One winner receives $10,000, a Hollywood
          trip, and a producer meeting. If you were invited, you are in the
          right place to submit.
          <br />
          <br />
          Craft forward
          <br />
          <br />
          We read fewer scripts so we can read deeper. Blind judging across all
          genres, one champion at the end. If you received an invitation, you
          may enter here: Enter Contest.
          <br />
          <br />
          Access oriented
          <br />
          <br />
          This contest is about outcomes, not volume. One writer will leave with
          $10,000, a trip to Hollywood, and time with a working producer. If you
          were invited, claim your spot now.
          <br />
          <br />
          Blind reads. By invitation only. See Official Rules for details.
        </p>
      </div>
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </div>
  );
}
