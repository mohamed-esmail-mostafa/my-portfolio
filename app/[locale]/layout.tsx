import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';


  const title = isAr
    ? 'محمد إسماعيل | مطور Full-Stack'
    : 'Mohamed Ismail | Full-Stack Developer';

  const description = isAr
    ? 'محمد إسماعيل، مطور Full-Stack متخصص في تطوير مواقع الويب وتطبيقات الجوال ومنصات SaaS والحلول البرمجية الحديثة.'
    : 'Mohamed Ismail is a Full-Stack Developer specializing in modern web applications, mobile apps, SaaS platforms, and scalable software solutions.';

  return {
    metadataBase: new URL('https://mohamed-esmail-theta.vercel.app/'),
    title: {
      default: title,
      template: `%s | Mohamed Ismail`,
    },
    description,

    keywords: isAr
      ? [
        'محمد إسماعيل',
        'مطور Full Stack',
        'مطور ويب',
        'مطور تطبيقات',
        'مطور Laravel',
        'مطور React',
        'مطور Next.js',
        'تطوير مواقع',
        'تطوير تطبيقات',
        'برمجة',
      ]
      : [
        'Mohamed Ismail',
        'Full Stack Developer',
        'Web Developer',
        'Laravel Developer',
        'React Developer',
        'Next.js Developer',
        'Software Developer',
        'Mobile App Developer',
      ],

    authors: [
      {
        name: 'Mohamed Ismail',
      },
    ],




    creator: 'Mohamed Ismail',

    alternates: {
      canonical: `/${locale}`,

      languages: {
        en: '/en',
        ar: '/ar',
      },
    },


    openGraph: {
      type: 'website',
      siteName: 'Mohamed Ismail',
      title,
      description,
      url: `/${locale}`,

      locale: isAr ? 'ar_EG' : 'en_US',

      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },



    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
      },
    },



    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-icon.png',
    },




  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'ar')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={geist.variable}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
