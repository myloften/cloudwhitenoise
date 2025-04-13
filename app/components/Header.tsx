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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-white/5 rounded-lg"
        >
          <svg
            className="w-6 h-6 text-mint"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Center: Logo and Description */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <img src="/images/logo.svg" alt="Cloud White Noise" className="h-8 w-8" />
            <h1 className="text-xl font-semibold text-mint">Cloud White Noise</h1>
          </div>
          <p className="text-xs text-white/60">Relax with soothing ambient sounds</p>
        </div>

        {/* Right: Theme Toggle */}
        <button
          onClick={onThemeToggle}
          className="p-2 hover:bg-white/5 rounded-lg"
        >
          {isDarkMode ? (
            <svg
              className="w-6 h-6 text-mint"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-mint"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>

        {/* Menu Panel */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-64 bg-dark-bg border-r border-white/10 h-screen">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-mint mb-4">Menu</h2>
              <nav className="space-y-2">
                <a href="#" className="block px-4 py-2 hover:bg-white/5 rounded text-white/80">
                  About
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-white/5 rounded text-white/80">
                  How to Use
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-white/5 rounded text-white/80">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
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