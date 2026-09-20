'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';
import { Menu,X } from 'lucide-react';

export default function Navbar() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  console.log(active)
  const navLinks = [
    { href: '#projects', label: t('projects') },
    { href: '#about', label: t('about') },
    { href: '#stack', label: t('stack') },
    { href: '#contact', label: t('contact') },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-[100] border-b transition-all duration-300 ${scrolled
        ? 'border-(--border) bg-black/90 backdrop-blur-md'
        : 'border-transparent bg-transparent'
      }`}

    >
      <div className='container m-auto flex justify-between items-center'

      >

        <Logo />

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="hide-mobile">
          {navLinks.map((link) => (
            <a
              className={` px-3 py-1 hover:bg-primary rounded-md ${active === link.href ? 'bg-primary' : 'bg-transparent'} `}
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Mobile: switcher + hamburger */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="show-mobile">
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: 'var(--text-primary)' }}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {menuOpen ? (
                <Menu />
                
              ) : (
              <X />
                
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="show-mobile"
          style={{
            background: 'rgba(10,10,10,0.97)',
            borderTop: '1px solid var(--border)',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => { setActive(link.href); setMenuOpen(false); }}
              style={{
                padding: '12px 16px',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .hide-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 640px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
