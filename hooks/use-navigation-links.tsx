import { useTranslations } from 'next-intl';

export default function useNavigationLinks() {
    const t = useTranslations('nav');
     const navLinks = [
    { href: '#projects', label: t('projects') },
    { href: '#about', label: t('about') },
    { href: '#stack', label: t('stack') },
    { href: '#contact', label: t('contact') },
  ];
  return {
    navLinks
  }
}
