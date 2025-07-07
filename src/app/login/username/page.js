"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function UsernamePage() {
  const [username, setUsername] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      const res = await fetch("/api/getSecureWord", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      })

      const data = await res.json()

      if (res.ok) {
        sessionStorage.setItem("username", username)
        sessionStorage.setItem("secureWord", data.secureWord)
        sessionStorage.setItem("issuedAt", data.issuedAt)
        router.push("/login/secure-word")
      } else {
        setError(data.message || "Something went wrong")
      }
    } catch (err) {
      setError("Failed to fetch secure word")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="max-w-md w-full bg-white shadow p-6 rounded">
        <h1 className="text-2xl font-semibold mb-4">Login - Step 1: Enter Username</h1>
        <Input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <Button type="submit" className="w-full mt-4">
          Get Secure Word
        </Button>
      </form>
    </div>
  )
}