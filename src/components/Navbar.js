"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { DialogTitle } from "@/components/ui/dialog" // ✅ Added for accessibility

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const menuItems = [
    { name: "Showcase", href: "/showcase" },
    { name: "Docs", href: "/docs" },
    { name: "Blogs", href: "/blogs" },
    { name: "Analytics", href: "/analytics" },
    { name: "Templates", href: "/templates" },
    { name: "Enterprises", href: "/enterprises" },
  ]

  // ✅ Detect login status and update on route change
  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token")
      setIsLoggedIn(!!token)
    }

    checkToken()
    window.addEventListener("storage", checkToken)
    return () => window.removeEventListener("storage", checkToken)
  }, [pathname])

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    router.push("/login/username")
  }

  const showLogout = isLoggedIn && pathname === "/dashboard"

  return (
    <header className="w-full shadow bg-white fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo + Menu */}
        <div className="flex items-center gap-8">
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-4">
                <DialogTitle className="text-2xl font-bold mb-4">AENO</DialogTitle> {/* ✅ Fix accessibility */}
                <nav className="flex flex-col gap-4 mt-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium ${
                        pathname.startsWith(item.href)
                          ? "text-blue-600 font-semibold"
                          : "text-gray-800"
                      } hover:underline`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  {showLogout ? (
                    <Button
                      onClick={() => {
                        handleLogout()
                        setIsOpen(false)
                      }}
                      className="mt-4 w-full"
                    >
                      Logout
                    </Button>
                  ) : (
                    <Link href="/login/username" onClick={() => setIsOpen(false)}>
                      <Button className="mt-4 w-full">Login</Button>
                    </Link>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop: Logo + Links */}
          <Link href="/" className="text-xl font-bold tracking-wide">
            AENO
          </Link>
          <nav className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`hover:underline ${
                  pathname.startsWith(item.href)
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Search + Login/Logout */}
        <div className="hidden md:flex items-center gap-4">
          <Input type="text" placeholder="Search..." className="w-64" />
          {showLogout ? (
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Link href="/login/username">
              <Button variant="default">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
