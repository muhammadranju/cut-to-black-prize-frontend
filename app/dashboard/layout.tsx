"use client";
import type React from "react";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { storage } from "@/lib/storage";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user has entered contest
    const token = Cookies.get("__ACCESS-TOKEN");

    if (!token) {
      router.push("/login");
    } else {
      setHasAccess(true);
    }
  }, [router]);

  if (!hasAccess) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - Handles both mobile and desktop */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Top Bar for Mobile */}
        <header className="bg-card border-b border-border p-4 flex items-center justify-between md:hidden">
          <h1 className="text-xl font-semibold text-foreground">
            CTB Dashboard
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(true)}
            className="text-foreground"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
