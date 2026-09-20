'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import useSkills from '@/hooks/use-skills';

export default function TechStack() {
  const t = useTranslations('stack');
  const { skills } = useSkills();

  return (
    <section
      id="stack"
      className="border-t border-[var(--border)] px-6 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Section Header */}
        <div className="mb-14 text-center sm:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Technologies
          </p>

          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--text-primary)] sm:text-4xl">
            {t('heading')}
          </h2>

          <div className="mx-auto mt-5 h-px w-12 bg-primary" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill.slug}
              className="
                group relative flex min-h-[150px] flex-col
                items-center justify-center
                overflow-hidden rounded-2xl
                border border-[var(--border)]
                bg-[var(--bg-card)]
                px-4 py-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary/40
                hover:bg-primary/[0.04]
                hover:shadow-[0_12px_35px_rgba(238,163,81,0.08)]
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  pointer-events-none absolute -right-8 -top-8
                  h-20 w-20 rounded-full
                  bg-primary/0 blur-2xl
                  transition-all duration-500
                  group-hover:bg-primary/10
                "
              />

              {/* Icon */}
              <div
                className="
                  relative mb-5 flex h-12 w-12
                  items-center justify-center
                  rounded-xl border border-[var(--border)]
                  bg-black/20
                  p-2.5
                  transition-all duration-300
                  group-hover:border-primary/30
                  group-hover:bg-primary/5
                  group-hover:scale-105
                "
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain p-2"
                  sizes="48px"
                />
              </div>

              {/* Skill Name */}
              <span
                className="
                  text-center text-xs font-medium
                  text-[var(--text-secondary)]
                  transition-colors duration-300
                  group-hover:text-[var(--text-primary)]
                "
              >
                {skill.name}
              </span>

              {/* Bottom Accent */}
              <div
                className="
                  absolute bottom-0 left-1/2
                  h-[2px] w-0
                  -translate-x-1/2
                  bg-primary
                  transition-all duration-300
                  group-hover:w-8
                "
              />
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="mx-auto mt-10 max-w-xl text-center text-xs leading-6 text-[var(--text-muted)]">
          {t('description')}
        </p>
      </div>
    </section>
  );
}