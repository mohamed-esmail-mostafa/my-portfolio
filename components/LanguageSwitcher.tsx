'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const nextLocale = locale === 'en' ? 'ar' : 'en';

  const handleSwitch = () => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={handleSwitch}
      disabled={isPending}
      style={{
        padding: '5px 12px',
        background: 'transparent',
        border: '1px solid var(--border-hover)',
        borderRadius: 6,
        color: 'var(--text-secondary)',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.08em',
        cursor: 'pointer',
        transition: 'all 0.2s',
        opacity: isPending ? 0.5 : 1,
        fontFamily: 'inherit',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
        (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
        (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
      }}
      aria-label={`Switch to ${nextLocale === 'ar' ? 'Arabic' : 'English'}`}
    >
      {nextLocale === 'ar' ? 'عربي' : 'EN'}
    </button>
  );
}
