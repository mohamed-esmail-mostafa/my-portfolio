'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';

import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';
import useNavigationLinks from '@/hooks/use-navigation-links';
import MobileDrawerMenu from './mobile-drawer-menu';

export default function Navbar() {
  const t = useTranslations('nav');
  const {navLinks}=useNavigationLinks()

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        border-b
        transition-all duration-300
        ${
          scrolled
            ? 'border-(--border) bg-black/90 backdrop-blur-md'
            : 'border-transparent bg-transparent'
        }
      `}
    >
      {/* Navbar */}
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`
                rounded-md px-3 py-2
                text-sm font-medium
                transition-all duration-300
                ${
                  active === link.href
                    ? 'bg-primary text-black'
                    : 'text-[var(--text-secondary)] hover:bg-primary/10 hover:text-primary'
                }
              `}
            >
              {link.label}
            </a>
          ))}

          <div className="ml-2">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 sm:hidden">
          <LanguageSwitcher />

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-lg
              border border-[var(--border)]
              bg-white/[0.03]
              text-[var(--text-primary)]
              transition-all duration-300
              hover:border-primary/40
              hover:bg-primary/10
              hover:text-primary
            "
          >
            <div
              className={`
                transition-transform duration-300
                ${menuOpen ? 'rotate-90' : 'rotate-0'}
              `}
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      
      <MobileDrawerMenu menuOpen={menuOpen} handleLinkClick={handleLinkClick} active={active} />
    </header>
  );
}