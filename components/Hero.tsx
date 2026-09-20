'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';

export default function Hero() {
  const t = useTranslations('hero');

  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;
    const glow = glowRef.current;
    const grid = gridRef.current;

    if (!hero || !content || !glow || !grid) return;

    const ctx = gsap.context(() => {
      const badge = content.querySelector('.hero-badge');
      const title = content.querySelector('.hero-title');
      const description = content.querySelector('.hero-description');
      const buttons = content.querySelectorAll('.hero-button');
      const scroll = content.querySelector('.hero-scroll');

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [badge, title, description, ...buttons, scroll, glow, grid],
          {
            opacity: 1,
            y: 0,
            x: 0,
          },
        );

        return;
      }

      // Initial state
      gsap.set(badge, {
        opacity: 0,
        y: 20,
      });

      gsap.set(title, {
        opacity: 0,
        y: 50,
        scale: 0.97,
      });

      gsap.set(description, {
        opacity: 0,
        y: 25,
      });

      gsap.set(buttons, {
        opacity: 0,
        y: 20,
      });

      gsap.set(scroll, {
        opacity: 0,
      });

      gsap.set(grid, {
        opacity: 0,
        scale: 1.1,
      });

      // Hero entrance
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      tl.to(grid, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
      })
        .to(
          badge,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          '-=1',
        )
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
          },
          '-=0.35',
        )
        .to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          '-=0.5',
        )
        .to(
          buttons,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
          },
          '-=0.35',
        )
        .to(
          scroll,
          {
            opacity: 1,
            duration: 0.5,
          },
          '-=0.15',
        );

      // Background glow breathing animation
      gsap.to(glow, {
        scale: 1.15,
        opacity: 0.8,
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Grid subtle floating animation
      gsap.to(grid, {
        y: -15,
        duration: 5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Mouse interaction
      const handleMouseMove = (event: MouseEvent) => {
        const rect = hero.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const moveX = (x / rect.width - 0.5) * 30;
        const moveY = (y / rect.height - 0.5) * 30;

        gsap.to(glow, {
          x: moveX,
          y: moveY,
          duration: 1,
          ease: 'power3.out',
        });

        gsap.to(grid, {
          x: moveX * 0.3,
          y: moveY * 0.3,
          duration: 1.5,
          ease: 'power3.out',
        });
      };

      hero.addEventListener('mousemove', handleMouseMove);

      return () => {
        hero.removeEventListener('mousemove', handleMouseMove);
      };
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="
        relative flex min-h-screen
        items-center justify-center
        overflow-hidden
        px-6
        pb-20 pt-32
      "
    >
      {/* Background Grid */}
      <div
        ref={gridRef}
        className="
          pointer-events-none absolute inset-0
          opacity-0
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.035) 1px,
              transparent 1px
            )
          `,
          backgroundSize: '70px 70px',
          maskImage:
            'radial-gradient(circle at center, black 0%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, black 0%, transparent 70%)',
        }}
      />

      {/* Main Glow */}
      <div
        ref={glowRef}
        className="
          pointer-events-none absolute
          left-1/2 top-[38%]
          h-[500px] w-[500px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-primary/[0.07]
          blur-[100px]
        "
      />

      {/* Small Glow */}
      <div
        className="
          pointer-events-none absolute
          left-[15%] top-[30%]
          h-32 w-32
          rounded-full
          bg-primary/[0.04]
          blur-[70px]
        "
      />

      <div
        ref={contentRef}
        className="
          relative z-10
          mx-auto w-full max-w-[850px]
          text-center
        "
      >
        {/* Badge */}
        <div className="hero-badge mb-6">
          <span
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-primary/20
              bg-primary/[0.06]
              px-4 py-2
              text-[11px] font-semibold
              uppercase tracking-[0.2em]
              text-primary
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(238,163,81,0.8)]" />
            {t('badge')}
          </span>
        </div>

        {/* Heading */}
        <h1
          className="
            hero-title
            text-[clamp(42px,8vw,88px)]
            font-extrabold
            uppercase
            leading-[0.95]
            tracking-[-0.045em]
            text-[var(--text-primary)]
          "
        >
          {t('title')}
        </h1>

        {/* Description */}
        <p
          className="
            hero-description
            mx-auto mt-7
            max-w-[600px]
            text-[15px]
            leading-7
            text-[var(--text-secondary)]
            sm:text-[17px]
          "
        >
          {t('description')}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="
              hero-button
              group
              inline-flex items-center justify-center
              rounded-lg
              bg-primary
              px-7 py-3.5
              text-xs font-bold
              uppercase tracking-[0.08em]
              text-black
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-primary/90
              hover:shadow-[0_12px_35px_rgba(238,163,81,0.2)]
            "
          >
            {t('cta_projects')}

            <span
              className="
                ml-2
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>

          <a
            href="#contact"
            className="
              hero-button
              inline-flex items-center justify-center
              rounded-lg
              border border-[var(--border-hover)]
              bg-white/[0.02]
              px-7 py-3.5
              text-xs font-bold
              uppercase tracking-[0.08em]
              text-[var(--text-primary)]
              transition-all duration-300
              hover:-translate-y-1
              hover:border-primary/40
              hover:bg-primary/[0.06]
              hover:text-primary
            "
          >
            {t('cta_contact')}
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="
            hero-scroll
            mt-20
            flex flex-col
            items-center gap-3
          "
        >
          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[var(--text-muted)]
            "
          >
            Scroll
          </span>

          <div className="relative h-10 w-px overflow-hidden bg-[var(--border)]">
            <div
              className="
                absolute left-0 top-0
                h-1/2 w-full
                bg-primary
                animate-[scrollLine_2s_ease-in-out_infinite]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}