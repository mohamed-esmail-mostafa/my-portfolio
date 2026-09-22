import { useLocale } from 'next-intl';

export default function useCurrentLang() {
    const locale = useLocale();
    const nextLocale = locale === 'en' ? 'ar' : 'en';
  return {
    nextLocale , locale
  }
}
