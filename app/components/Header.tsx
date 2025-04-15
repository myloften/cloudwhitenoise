'use client';

import Link from 'next/link';
import { useState } from 'react';
import { soundCategories } from '../data/sounds';

interface HeaderProps {
  onCategoryChange: (category: string | null) => void;
  selectedCategory: string | null;
  onTimerClick: () => void;
  onPresetsClick: () => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export default function Header({ 
  onCategoryChange, 
  selectedCategory, 
  onTimerClick, 
  onPresetsClick,
  isDarkMode,
  onThemeToggle
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-[#66B2B2] text-xl font-semibold hover:text-[#7CC9C9] transition-colors">
              Cloud White Noise
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/blog" className="text-[#66B2B2] hover:text-[#7CC9C9] transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-[#66B2B2] hover:text-[#7CC9C9] transition-colors">
              About
            </Link>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-[#66B2B2] hover:text-[#7CC9C9]"
            >
              {isDarkMode ? '🌞' : '🌜'}
            </button>
          </div>
        </div>
      </nav>
      {/* Categories */}
      <div className="px-6 pb-4">
        <div className="flex gap-3 overflow-x-auto hide-scrollbar">
          <button
            className={`category-button ${!selectedCategory ? 'bg-mint text-dark-bg' : ''}`}
            onClick={() => onCategoryChange(null)}
          >
            All
          </button>
          {soundCategories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'bg-mint text-dark-bg' : ''}`}
              onClick={() => onCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
} 