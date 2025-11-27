"use client"

import { Moon, Sun, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme,setTheme } = useTheme()

  return (
    <>
        {theme === "light" ? (
        <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
            <Moon/>
        </Button>
        ) : <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
            <Sun/>    
        </Button>}
    </>
  )
}
