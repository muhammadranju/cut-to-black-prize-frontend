"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Enter Contest",
    href: "/submit",
  },
  {
    name: "The Prize",
    href: "/the-prize",
  },
  {
    name: "Contest Rules",
    href: "/contest-rules",
  },
  {
    name: "Past Winners",
    href: "/past-winners",
  },

  {
    name: "About",
    href: "/about",
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isHome, setIsHome] = useState(false);

  const isActive = (href: string) => {
    // Exact match for home page
    if (href === "/" && pathname === "/") {
      // setIsHome(true);
      return true;
    }
    // For other pages, check if pathname starts with href (but not home)
    if (href !== "/" && pathname.startsWith(href)) {
      // setIsHome(false);
      return true;
    }
    // setIsHome(false);
    return false;
  };

  useEffect(() => {
    if (pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [pathname]);

  console.log(isHome);

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${
        isHome
          ? "bg-transparent border-transparent backdrop-blur-xs"
          : "bg-black/20 backdrop-blur-sm border-b border-gray-800/20"
      }`}
    >
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-4">
            <Image
              height={10}
              width={10}
              src="./logo.png"
              alt=""
              className="w-fit h-10 mr-4"
            />
          </Link>
          <div className="flex items-center gap-4">
            {NavLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className={`px-4 py-2 border rounded-md text-sm font-medium transition ${
                  isActive(link.href)
                    ? "bg-white text-black border-white"
                    : "border-gray-200 text-gray-50 hover:text-white hover:bg-black/80 hover:border-gray-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
