'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  const links = [
    { href: '#', label: t('home') },
    { href: '#projects', label: t('projects') },
    { href: '#about', label: t('about') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '24px' }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <nav style={{ display: 'flex', gap: 20 }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: 12,
                color: 'var(--text-muted)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.03em' }}>
          {t('copyright', { year })}
        </p>
      </div>
    </footer>
  );
}
