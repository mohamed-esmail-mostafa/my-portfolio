'use client';

import { useTranslations } from 'next-intl';
import useContact from '@/hooks/use-contact';

export default function Contact() {
  const t = useTranslations('contact');

  const { contact, socialLinks } = useContact();

  const email = contact.find((item) => item.name === 'email');
  const phone = contact.find((item) => item.name === 'phone');
  const whatsapp = contact.find((item) => item.name === 'whatsapp');
  const address = contact.find((item) => item.name === 'address');

  return (
    <section
      id="contact"
      className="border-t border-[var(--border)] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t('label')}
          </p>

          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl">
            {t('heading')}
            <br />
            <span className="text-[var(--text-secondary)]">
              {t('subheading')}
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            {t('description')}
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">

          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">

            {/* Contact Details */}
            <div className="p-6 sm:p-8 lg:p-10">

              <div className="grid gap-3 sm:grid-cols-2">

                {/* Email */}
                {email && (
                  <a
                    href={`mailto:${email.value}`}
                    className="group rounded-xl border border-[var(--border)] bg-black/10 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:bg-white/[0.03]"
                  >
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <email.icon className="h-5 w-5" />
                    </div>

                    <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-[var(--text-muted)]">
                      {t('email_label')}
                    </p>

                    <p className="break-all text-sm font-medium text-[var(--text-primary)]">
                      {email.value}
                    </p>
                  </a>
                )}

                {/* Phone */}
                {phone && (
                  <a
                    href={`tel:${phone.value}`}
                    className="group rounded-xl border border-[var(--border)] bg-black/10 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:bg-white/[0.03]"
                  >
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <phone.icon className="h-5 w-5" />
                    </div>

                    <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-[var(--text-muted)]">
                      {t('phone_label')}
                    </p>

                    <p className="text-sm font-medium text-[var(--text-primary)]">
                      {phone.value}
                    </p>
                  </a>
                )}

                {/* WhatsApp */}
                {whatsapp && (
                  <a
                    href={`https://wa.me/${whatsapp.value.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-[var(--border)] bg-black/10 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:bg-white/[0.03]"
                  >
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <whatsapp.icon className="h-5 w-5" />
                    </div>

                    <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-[var(--text-muted)]">
                      {t('whatsapp_label')}
                    </p>

                    <p className="text-sm font-medium text-[var(--text-primary)]">
                      {whatsapp.value}
                    </p>
                  </a>
                )}

                {/* Location */}
                {address && (
                  <div className="rounded-xl border border-[var(--border)] bg-black/10 p-5">
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <address.icon className="h-5 w-5" />
                    </div>

                    <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-[var(--text-muted)]">
                      {t('address_label')}
                    </p>

                    <p className="text-sm font-medium text-[var(--text-primary)]">
                      {address.value}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Panel */}
            <div className="flex flex-col justify-between border-t border-[var(--border)] bg-white/[0.02] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">

              <div>
                <span className="mb-6 block text-4xl">↗</span>

                <h3 className="text-2xl font-bold leading-tight text-[var(--text-primary)] sm:text-3xl">
                  {t('cta_heading')}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
                  {t('cta_description')}
                </p>
              </div>

              <div className="mt-10">

                {email && (
                  <a
                    href={`mailto:${email.value}`}
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                  >
                    {t('cta')}
                    <span className="ml-2">→</span>
                  </a>
                )}

                {/* Social Links */}
                <div className="mt-8 flex items-center gap-2 border-t border-[var(--border)] pt-6">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>









              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}