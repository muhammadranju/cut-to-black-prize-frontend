import type React from "react";

interface GoldButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function GoldButton({
  children,
  className = "",
  ...props
}: GoldButtonProps) {
  return (
    <button
      className={`px-6 py-3 bg-gold text-black font-bold rounded hover:bg-gold/90 transition-colors bg-white cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
