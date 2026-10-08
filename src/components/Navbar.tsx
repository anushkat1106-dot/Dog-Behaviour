import React, { useState } from 'react';
import { Search, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenQuiz }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Behaviour', href: '#understanding' },
    { label: 'Body Language', href: '#body-language' },
    { label: 'Problems', href: '#problems' },
    { label: 'Training', href: '#training' },
    { label: 'Breeds', href: '#breeds' },
    { label: 'Guides', href: '#guides' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand title, single element */}
        <a
          href="#"
          className="text-2xl font-semibold tracking-tight text-[#234231] font-display hover:text-[#182F23] transition-colors whitespace-nowrap"
        >
          CanineMind
        </a>

        {/* Zone 2: Clean 4-6 text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5C4F44]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#234231] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#6E5D53] hover:text-[#234231] bg-[#F4EFE6] hover:bg-[#ECE4D8] border border-[#E3DAC8] rounded-lg transition-colors cursor-pointer"
            title="Search behaviours, training tips, breeds"
          >
            <Search className="w-3.5 h-3.5 text-[#8C5E3C]" />
            <span className="hidden sm:inline">Search Guide</span>
            <kbd className="hidden lg:inline text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#DDD3C0] text-[#8C5E3C]">
              ⌘K
            </kbd>
          </button>

          <button
            onClick={onOpenQuiz}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#234231] hover:bg-[#1B3426] rounded-lg transition-all shadow-xs cursor-pointer whitespace-nowrap flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
            <span>Behaviour Quiz</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#5C4F44] hover:text-[#234231] rounded-lg cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8DFC8] bg-[#FAF7F2] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#5C4F44] hover:text-[#234231] hover:bg-[#F4EFE6] rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-[#234231] rounded-lg cursor-pointer"
            >
              Start Behaviour Quiz
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
