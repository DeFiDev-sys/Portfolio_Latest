"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme,setTheme } = useTheme()

  return (
    <>
        {theme === "light" ? (
        <Button variant="ghost" className="rounded-full" size="icon" onClick={() => setTheme("dark")}>
            <Moon/>
        </Button>
        ) : <Button variant="ghost" className="rounded-full" size="icon" onClick={() => setTheme("light")}>
            <Sun/>    
        </Button>}
    </>
  )
}
