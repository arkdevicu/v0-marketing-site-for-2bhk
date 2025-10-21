"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">EVEREST</div>

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
          {isOpen ? <X size={24} /> : <Menu size={24} />}
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
