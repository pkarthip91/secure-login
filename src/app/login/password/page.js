
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import sha256 from "crypto-js/sha256"

export default function PasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")

    const username = sessionStorage.getItem("username")
    const secureWord = sessionStorage.getItem("secureWord")

    if (!username || !secureWord) {
      router.push("/login/username")
      return
    }

    const hashedPassword = sha256(password).toString()

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, secureWord, hashedPassword }),
    })

    const data = await res.json()
    console.log("Login response:", data)
    if (res.ok) {
  localStorage.setItem("token", data.token)

  // Trigger OTP generation in the backend
  await fetch("/api/verifyMfa", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, action: "generate" }),
  })

  router.push("/login/mfa")
} else {
  setError(data.message || "Login failed")
}
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={handleLogin} className="max-w-md w-full bg-white shadow p-6 rounded">
        <h1 className="text-2xl font-semibold mb-4">Login - Step 3: Password</h1>
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <Button type="submit" className="w-full mt-4">
          Submit
        </Button>
      </form>
    </div>
  )
}