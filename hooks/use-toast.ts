"use client"

import { useState, useCallback } from "react"

interface Toast {
  title: string
  description?: string
  variant?: "default" | "destructive"
}

export function useToast() {
  const [toasts, setToasts] = useState<(Toast & { id: string })[]>([])

  const toast = useCallback((props: Toast) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { ...props, id }
    setToasts((prev) => [...prev, newToast])

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }, [])

  return { toast, toasts }
}
