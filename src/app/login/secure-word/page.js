"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function SecureWordPage() {
  const router = useRouter()
  const [secureWord, setSecureWord] = useState("")
  const [expiresIn, setExpiresIn] = useState(0)

  useEffect(() => {
    const word = sessionStorage.getItem("secureWord")
    const issuedAt = parseInt(sessionStorage.getItem("issuedAt"), 10)
    if (!word || !issuedAt) {
      router.push("/login/username")
      return
    }

    setSecureWord(word)
    const expireTime = issuedAt + 60000 // 60 seconds
    const interval = setInterval(() => {
      const remaining = Math.max(0, Math.floor((expireTime - Date.now()) / 1000))
      setExpiresIn(remaining)
      if (remaining <= 0) {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleNext = () => {
    if (expiresIn <= 0) {
      alert("Secure word expired. Please restart login.")
      router.push("/login/username")
    } else {
      router.push("/login/password")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow p-6 rounded text-center">
        <h1 className="text-2xl font-semibold mb-4">Login - Step 2: Secure Word</h1>
        <p className="text-xl font-mono">{secureWord}</p>
        <p className="text-sm text-gray-600 mt-2">Expires in: {expiresIn} sec</p>
        <Button onClick={handleNext} className="w-full mt-6">
          Next
        </Button>
      </div>
    </div>
  )
}
