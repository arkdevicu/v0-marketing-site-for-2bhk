"use client"

import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={handleLogoClick}
          className="text-2xl font-bold text-primary hover:opacity-80 transition cursor-pointer bg-none border-none p-0"
        >
          EVEREST
        </button>

        <nav className="hidden md:flex gap-8">
          <a href="#features" className="text-foreground hover:text-primary transition">
            Features
          </a>
          <a href="#amenities" className="text-foreground hover:text-primary transition">
            Amenities
          </a>
          <a href="#floor-plan" className="text-foreground hover:text-primary transition">
            Floor Plan
          </a>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-secondary rounded-lg transition">
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-foreground transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span className={`h-0.5 w-full bg-foreground transition-all ${isOpen ? "opacity-0" : ""}`}></span>
            <span
              className={`h-0.5 w-full bg-foreground transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </div>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t border-border bg-secondary">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#features" className="text-foreground hover:text-primary transition">
              Features
            </a>
            <a href="#amenities" className="text-foreground hover:text-primary transition">
              Amenities
            </a>
            <a href="#floor-plan" className="text-foreground hover:text-primary transition">
              Floor Plan
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
