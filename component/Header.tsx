"use client"

import { ModeToggle } from '@/components/ModeToggle'
import React from 'react'

function Header() {
  return (
    <div className='text-center flex justify-between border-2 p-4 dark:border-gray-700'>
        <span>Header</span>
        <ModeToggle/>
    </div>
  )
}

export default Header