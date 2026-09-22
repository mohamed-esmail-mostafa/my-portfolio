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
      className='px-3 py-1 hover:bg-primary text-white rounded-2xl'
      aria-label={`Switch to ${nextLocale === 'ar' ? 'Arabic' : 'English'}`}
    >
      {nextLocale === 'ar' ? 'عربي' : 'EN'}
    </button>
  );
}
