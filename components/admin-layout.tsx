"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { adminStorage } from "@/lib/admin-storage"
import Link from "next/link"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const handleLogout = () => {
    adminStorage.logout()
    router.push("/admin/login")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-background border-r border-accent/20 p-6 flex flex-col">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-accent">CTB Admin</h2>
            <p className="text-xs text-muted-foreground mt-1">Management Panel</p>
          </div>

          <nav className="space-y-3 flex-1">
            <Link
              href="/admin"
              className="block px-4 py-2 rounded hover:bg-accent/10 text-foreground hover:text-accent transition"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/submissions"
              className="block px-4 py-2 rounded hover:bg-accent/10 text-foreground hover:text-accent transition"
            >
              Submissions
            </Link>
            <Link
              href="/admin/invitation-codes"
              className="block px-4 py-2 rounded hover:bg-accent/10 text-foreground hover:text-accent transition"
            >
              Invitation Codes
            </Link>
          </nav>

          <Button onClick={handleLogout} className="w-full bg-red-600 hover:bg-red-700 text-white">
            Logout
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-auto">{children}</div>
      </div>
    </div>
  )
}
