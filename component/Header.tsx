"use client"

import { ModeToggle } from '@/components/ModeToggle'
import LinkeData from '@/data/linkdata'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='text-center font-bold flex justify-between border-b-2 p-4 dark:border-b-gray-700 sticky top-0 bg-white dark:bg-gray-900 z-50'>
        <span>Juwon Bowofola</span>
        <div className='flex gap-4 items-center'>
          <div className='flex justify-between gap-4'>
            {/* Navigation Links */
              LinkeData.map((link, i)=>(<Link key={i} href={link.url} className=''>{link.name}</Link>))
            }
          </div>
          <ModeToggle/>
        </div>
    </div>
  )
}

export default Header