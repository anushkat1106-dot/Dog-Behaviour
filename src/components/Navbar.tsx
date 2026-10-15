import React, { useState } from 'react';
import { Search, Menu, X, Sparkles } from 'lucide-react';
import { Link, useRouter } from '../context/RouterContext';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { path } = useRouter();

  const navLinks = [
    { label: 'Behaviour', href: '/b' },
    { label: 'Body Language', href: '/s' },
    { label: 'Problems', href: '/fix' },
    { label: 'Training', href: '/t' },
    { label: 'Breeds', href: '/dog' },
    { label: 'Guides', href: '/g' }
  ];

  const isNavActive = (href: string) => {
    if (href === '/b') return path.startsWith('/b') || path.startsWith('/behaviour');
    if (href === '/s') return path.startsWith('/s') || path.startsWith('/body-language');
    if (href === '/fix') return path.startsWith('/fix') || path.startsWith('/problems');
    if (href === '/t') return path.startsWith('/t') || path.startsWith('/training');
    if (href === '/dog') return path.startsWith('/dog') || path.startsWith('/breeds');
    if (href === '/g') return path.startsWith('/g') || path.startsWith('/guides');
    return path.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand title, single element */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-[#234231] font-display hover:text-[#182F23] transition-colors whitespace-nowrap"
        >
          CanineMind
        </Link>

        {/* Zone 2: Clean 4-6 text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5C4F44]">
          {navLinks.map((link) => {
            const active = isNavActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors whitespace-nowrap ${
                  active ? 'text-[#234231] font-semibold underline decoration-[#8C5E3C] decoration-2 underline-offset-4' : 'hover:text-[#234231]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#6E5D53] hover:text-[#234231] bg-[#F4EFE6] hover:bg-[#ECE4D8] border border-[#E3DAC8] rounded-lg transition-colors cursor-pointer"
            title="Search behaviours, training tips, breeds (⌘K)"
          >
            <Search className="w-3.5 h-3.5 text-[#8C5E3C]" />
            <span className="hidden sm:inline">Search Guide</span>
            <kbd className="hidden lg:inline text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#DDD3C0] text-[#8C5E3C]">
              ⌘K
            </kbd>
          </button>

          <Link
            href="/quiz"
            className="px-4 py-2 text-xs font-semibold text-white bg-[#234231] hover:bg-[#1B3426] rounded-lg transition-all shadow-xs cursor-pointer whitespace-nowrap flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
            <span>Behaviour Quiz</span>
          </Link>

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
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#5C4F44] hover:text-[#234231] hover:bg-[#F4EFE6] rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2.5 text-center text-xs font-semibold text-white bg-[#234231] rounded-lg cursor-pointer"
            >
              Start Behaviour Quiz
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
