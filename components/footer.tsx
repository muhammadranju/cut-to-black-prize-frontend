"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-card border-t border-yellow-500 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Portfolio */}
          <div>
            <h3 className="text-yellow-500 font-bold text-lg mb-6">
              PORTFOLIO
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-500 transition text-sm"
                >
                  Films
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-500 transition text-sm"
                >
                  First Submission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-500 transition text-sm"
                >
                  Commercials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-500 transition text-sm"
                >
                  Branded Documentaries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-yellow-500 font-bold text-lg mb-6">CONTACT</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="font-semibold">Cut to Black</span>
                <p>2900 S. Lamar Boulevard Suite 107</p>
              </li>
              <li>
                <p>Austin, Texas 78704</p>
              </li>
              <li>
                <p>texasfilmfest.com</p>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-500 font-bold text-lg mb-6">
              QUICK LINK
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contest-rules"
                  className="text-gray-400 hover:text-yellow-500 transition text-sm"
                >
                  Contest Rules
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-gray-400 hover:text-yellow-500 transition text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-yellow-500 transition text-sm"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-6">
            <img src="./imdb.png" alt="" />
            <img src="./linkdin.png" alt="" />
            <img src="./facebook.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
