'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/data/crepeloft/navigation';
import { ThemeSwitch } from '@/components/shared/ThemeSwitch';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50',
        'bg-secondary-100 dark:bg-[#120B0D]',
        'border-b border-[#755D59]/20 dark:border-[#F8DFE3]/10',
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <CrepeIcon className="h-8 w-8 text-primary-500" />
            <span
              className={cn(
                'font-cursive text-2xl font-bold',
                'text-primary-500',
              )}
            >
              CrepeLoft
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  'font-sans text-sm font-medium tracking-wide',
                  'text-[#827D70] dark:text-[#FFF5F7]/70',
                  'transition-colors duration-200',
                  'hover:text-[#0A0303] dark:hover:text-[#FFF5F7]',
                  'focus:outline-none focus-visible:underline focus-visible:underline-offset-4',
                )}
              >
                {link.label}
              </a>
            ))}
            <ThemeSwitch />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeSwitch />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'p-2 rounded-lg',
                'text-[#827D70] dark:text-[#FFF5F7]/70',
                'hover:bg-secondary-200 dark:hover:bg-[#1E1418]',
                'focus:outline-none focus:ring-2 focus:ring-primary-300/40',
              )}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav
            className={cn(
              'md:hidden',
              'border-t border-[#755D59]/10 dark:border-[#F8DFE3]/10',
              'py-4',
            )}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'px-4 py-3 rounded-lg',
                    'font-sans text-base font-medium',
                    'text-[#827D70] dark:text-[#FFF5F7]/70',
                    'transition-colors duration-200',
                    'hover:bg-secondary-200 dark:hover:bg-[#1E1418]',
                    'hover:text-[#0A0303] dark:hover:text-[#FFF5F7]',
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const CrepeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="20" cy="20" r="16" fill="currentColor" fillOpacity="0.15" />
    <path
      d="M12 25C12 25 14 18 20 18C26 18 28 25 28 25"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M14 22C14 22 16 28 20 28C24 28 26 22 26 22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="17" cy="23" r="1.5" fill="currentColor" />
    <circle cx="23" cy="24" r="1.5" fill="currentColor" />
    <circle cx="20" cy="21" r="1" fill="currentColor" />
    {/* Small leaf decoration */}
    <path
      d="M30 12C30 12 32 14 30 16C28 14 30 12 30 12Z"
      fill="currentColor"
      fillOpacity="0.6"
    />
  </svg>
);
