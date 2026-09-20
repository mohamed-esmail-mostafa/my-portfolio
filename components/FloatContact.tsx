'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/201022837509"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact me on WhatsApp"
        className="
          group flex h-12 w-12 items-center justify-center
          rounded-full border border-[var(--border)]
          bg-[#111]
          text-[var(--text-secondary)]
          shadow-lg
          transition-all duration-300
          hover:-translate-y-1
          hover:border-primary/40
          hover:bg-primary
          hover:text-black
        "
      >
        <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      </a>

      {/* Phone */}
      <a
        href="tel:+201022837509"
        aria-label="Call me"
        className="
          group flex h-12 w-12 items-center justify-center
          rounded-full border border-[var(--border)]
          bg-[#111]
          text-[var(--text-secondary)]
          shadow-lg
          transition-all duration-300
          hover:-translate-y-1
          hover:border-primary/40
          hover:bg-primary
          hover:text-black
        "
      >
        <Phone className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  );
}