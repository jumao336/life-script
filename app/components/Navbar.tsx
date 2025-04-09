"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-opacity-80 backdrop-blur-md shadow-md border-b border-primary-gold/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-primary-gold transition-colors">
            <div className="text-primary-gold text-2xl">✧</div>
            <h1 className="text-2xl font-bold gold-gradient-text">人生剧本</h1>
          </Link>
          
          <nav>
            <ul className="flex gap-8">
              <li>
                <Link 
                  href="/" 
                  className="text-white hover:text-primary-gold transition-colors"
                >
                  首页
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-white hover:text-primary-gold transition-colors"
                >
                  关于
                </Link>
              </li>
              <li>
                <Link 
                  href="/examples" 
                  className="text-white hover:text-primary-gold transition-colors"
                >
                  示例
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
} 