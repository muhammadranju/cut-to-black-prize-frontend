"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { storage } from "@/lib/storage"

export default function DashboardNav() {
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = () => {
    storage.clearInvitationCode()
    localStorage.removeItem("ctb_payment_status")
    router.push("/")
  }

  return (
    <div className="flex gap-4">
      <Link
        href="/dashboard"
        className={`px-4 py-2 rounded ${pathname === "/dashboard" ? "bg-accent text-primary" : "text-foreground hover:bg-secondary"}`}
      >
        Dashboard
      </Link>
      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded text-foreground hover:bg-secondary hover:text-destructive transition-colors"
      >
        Logout
      </button>
    </div>
  )
}
