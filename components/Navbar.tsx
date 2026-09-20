'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';

import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';

export default function Navbar() {
  const t = useTranslations('nav');

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  const navLinks = [
    { href: '#projects', label: t('projects') },
    { href: '#about', label: t('about') },
    { href: '#stack', label: t('stack') },
    { href: '#contact', label: t('contact') },
  ];

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
        fixed inset-x-0 top-0 z-[100]
        border-b
        transition-all duration-300
        ${
          scrolled
            ? 'border-[var(--border)] bg-black/90 backdrop-blur-md'
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
      <div
        className={`
          fixed inset-0 top-20 z-[-1]
          bg-[#0a0a0a]/[0.98]
          backdrop-blur-xl
          sm:hidden
          transition-all duration-500 ease-in-out
          ${
            menuOpen
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-5 opacity-0'
          }
        `}
      >
        <div className="flex h-[calc(100vh-5rem)] flex-col px-6 py-10">
          {/* Menu Label */}
          <div
            className={`
              mb-8 overflow-hidden
              transition-all duration-500
              ${
                menuOpen
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-4 opacity-0'
              }
            `}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Navigation
            </span>

            <div className="mt-3 h-px w-10 bg-primary" />
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                style={{
                  transitionDelay: menuOpen ? `${index * 70 + 100}ms` : '0ms',
                }}
                className={`
                  group flex items-center justify-between
                  rounded-xl border border-transparent
                  px-4 py-4
                  text-2xl font-semibold
                  transition-all duration-500
                  ${
                    menuOpen
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-8 opacity-0'
                  }
                  ${
                    active === link.href
                      ? 'border-primary/20 bg-primary/10 text-primary'
                      : 'text-[var(--text-primary)] hover:border-[var(--border)] hover:bg-white/[0.03] hover:text-primary'
                  }
                `}
              >
                <span>{link.label}</span>

                <span
                  className="
                    text-xl text-[var(--text-muted)]
                    transition-all duration-300
                    group-hover:translate-x-1
                    group-hover:text-primary
                  "
                >
                  →
                </span>
              </a>
            ))}
          </nav>

          {/* Bottom */}
          <div
            style={{
              transitionDelay: menuOpen ? '400ms' : '0ms',
            }}
            className={`
              mt-auto
              border-t border-[var(--border)]
              pt-6
              transition-all duration-500
              ${
                menuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }
            `}
          >
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
              Full-Stack Developer
            </p>

            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Building modern digital experiences.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}