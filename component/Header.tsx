"use client"

import { ModeToggle } from '@/components/ModeToggle'
import React from 'react'

function Header() {
  return (
    <div className='text-center flex justify-between'>
        <span>Header</span>
        <ModeToggle/>
    </div>
  )
}

export default Header