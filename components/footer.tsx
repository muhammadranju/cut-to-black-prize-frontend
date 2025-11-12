"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isDashboardRoute, setIsDashboardRoute] = useState(false);

  const pathname = usePathname(); // Get current route

  useEffect(() => {
    if (pathname.startsWith("/dashboard")) {
      setIsDashboardRoute(true);
    } else {
      setIsDashboardRoute(false);
    }
  }, [pathname]);

  return (
    <footer
      className={`w-full bg-card border-t border-yellow-500 py-5 pt-10 px-4 sm:px-6 lg:px-8 ${
        isDashboardRoute ? "hidden" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Portfolio */}
          <div className="text-left">
            <h3 className="text-yellow-500 font-bold text-sm sm:text-lg mb-4 sm:mb-6">
              Address
            </h3>

            <ul className="space-y-2 sm:space-y-3 text-sm text-neutral-400">
              <li>
                <p className="mt-1">Call Sheet Media</p>
              </li>
              <li>
                <p> 1800 Vine Street</p>
              </li>
              <li>Hollywood, California 90028</li>
              <li>United States of America</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="ltext-left">
            <h3 className="text-yellow-500 font-bold text-base sm:text-lg mb-4 sm:mb-6">
              Contact
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm text-neutral-400">
              <li>
                <p className="mt-1">New York, NY</p>
              </li>
              <li>
                <p>Central Park Studios</p>
              </li>
              <li>contest@cuttoblackprize.com</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-yellow-500 font-bold text-base sm:text-lg mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/contest-rules"
                  className="text-neutral-400 hover:text-yellow-500 transition text-sm inline-block"
                >
                  Contest Rules
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-neutral-400 hover:text-yellow-500 transition text-sm inline-block"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-neutral-400 hover:text-yellow-500 transition text-sm inline-block"
                >
                  Privacy and Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="">
            {/* <h3 className="font-bold  text-3xl ">Cut to Black Prize</h3> */}
            <p className="text-yellow-500 font-bold text-base mb-3">
              Sponsored by{" "}
              <span className="text-white font-black text-xl">
                Call Sheet Media
              </span>
            </p>
            <Image
              width={400}
              height={500}
              src="https://cuttoblackprize.com/assets/images/1800Vine.jpg"
              alt="1800 Vine Street"
              className="lg:w-96 mb-3  object-contain rounded-lg"
            />
          </div>
        </div>
        <div className="border-t border-neutral-500 py-3 "></div>
        <p className="text-center text-neutral-400 text-sm">
          © 2023 Cut to Black Prize. All rights reserved.
          <br />
          Cut to Black Prize is a trademark of Call Sheet Media LLC.
        </p>
      </div>
    </footer>
  );
}
