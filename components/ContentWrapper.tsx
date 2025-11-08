"use client";
import React from "react";

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-black text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-20">
      {children}
    </div>
  );
};

export default ContentWrapper;
