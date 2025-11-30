import { Heart } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className='py-8 px-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800'>
        <div className="container mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
          Made with <Heart className="h-6 w-6 md:h-4 md:w-4 text-red-500 fill-current" /> by Juwon Bowofola (DeFiDev-sys)
          <span className="mx-2">•</span>
          <span>{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer