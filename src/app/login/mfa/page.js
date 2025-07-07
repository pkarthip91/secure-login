"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function MfaPage() {
  const router = useRouter()
  const [code, setCode] = useState("")
  const [otp, setOtp] = useState("")
  const [error, setError] = useState("")

  const username = typeof window !== "undefined" ? sessionStorage.getItem("username") : ""

  useEffect(() => {
    if (!username) {
      router.push("/login/username")
      return
    }

    // Get OTP from backend
    const fetchOtp = async () => {
      const res = await fetch("/api/verifyMfa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, action: "generate" }),
      })

      const data = await res.json()
      if (res.ok && data.otp) setOtp(data.otp)
    }

    fetchOtp()
  }, [router, username])

  const handleVerify = async (e) => {
    e.preventDefault()
    setError("")

    const res = await fetch("/api/verifyMfa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, code }),
    })

    const data = await res.json()
    if (res.ok) {
      // Step 1: Save token
      localStorage.setItem("token", data.token || "mock-token")

      // Step 2: Notify all listeners (like Navbar)
      window.dispatchEvent(new Event("storage"))

      // Step 3: Redirect
      router.push("/dashboard")
    } else {
      setError(data.message || "MFA failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={handleVerify} className="max-w-md w-full bg-white shadow p-6 rounded">
        <h1 className="text-2xl font-semibold mb-4">Login - Step 4: MFA</h1>

        {otp && (
          <div className="text-sm text-green-600 mb-4">
            <strong>Your OTP is: {otp}</strong>
          </div>
        )}

        <Input
          type="text"
          placeholder="Enter 6-digit code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          maxLength={6}
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <Button type="submit" className="w-full mt-4">
          Verify
        </Button>
      </form>
    </div>
  )
}
