"use client"

import { Button } from "@/components/ui/button"
import { Menu, Search } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">SG</span>
            </div>
            <span className="text-xl font-bold tracking-tight">SlateGuru</span>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="#reviews"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Reviews
          </a>
          <a
            href="#compare"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Compare
          </a>
          <a
            href="#guides"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Guides
          </a>
          <a href="#news" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            News
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <a href="#about" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#reviews" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Reviews
            </a>
            <a href="#compare" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Compare
            </a>
            <a href="#guides" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Guides
            </a>
            <a href="#news" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              News
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
