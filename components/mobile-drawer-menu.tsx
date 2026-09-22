import useCurrentLang from '@/hooks/use-current-lang'
import useNavigationLinks from '@/hooks/use-navigation-links'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

export default function MobileDrawerMenu({ menuOpen, handleLinkClick, active }: any) {
    const { navLinks } = useNavigationLinks()
    const { locale } = useCurrentLang()

    return (
        <div
            className={`
          fixed inset-0 top-20 z-50
          bg-black
          backdrop-blur-xl
          sm:hidden
          transition-all duration-500 ease-in-out
          ${menuOpen
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-5 opacity-0'
                }
        `}
        >
            <div className="flex h-[calc(100vh-5rem)] flex-col px-6 py-10">
                {/* Menu Label */}
                <div
                    className={`
              mb-8 overflow-hidden
              transition-all duration-500
              ${menuOpen
                            ? 'translate-y-0 opacity-100'
                            : '-translate-y-4 opacity-0'
                        }
            `}
                >
                    {/* <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Navigation
            </span> */}

                    <div className="mt-3 h-px w-10 bg-primary" />
                </div>

                {/* Links */}
                <nav className="flex flex-col gap-2">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => handleLinkClick(link.href)}
                            style={{
                                transitionDelay: menuOpen ? `${index * 70 + 100}ms` : '0ms',
                            }}
                            className={`
                  group flex items-center justify-between
                  rounded-xl border border-transparent
                  px-4 py-4
                  text-2xl font-semibold
                  transition-all duration-500
                  ${menuOpen
                                    ? 'translate-x-0 opacity-100'
                                    : '-translate-x-8 opacity-0'
                                }
                  ${active === link.href
                                    ? 'border-primary/20 bg-primary/10 text-primary'
                                    : 'text-[var(--text-primary)] hover:border-[var(--border)] hover:bg-white/[0.03] hover:text-primary'
                                }
                `}
                        >
                            <span>{link.label}</span>

                            <span
                                className="
                    text-xl text-[var(--text-muted)]
                    transition-all duration-300
                    group-hover:translate-x-1
                    group-hover:text-primary
                  "
                            >
                                
                                {locale === 'ar' ? <ArrowLeft /> : <ArrowRight />}
                            </span>
                        </a>
                    ))}
                </nav>

                {/* Bottom */}
                <div
                    style={{
                        transitionDelay: menuOpen ? '400ms' : '0ms',
                    }}
                    className={`
              mt-auto
              border-t border-[var(--border)]
              pt-6
              transition-all duration-500
              ${menuOpen
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-4 opacity-0'
                        }
            `}
                >
                    <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
                        Full-Stack Developer
                    </p>

                    <p className="mt-2 text-sm text-[var(--text-secondary)]">
                        Building modern digital experiences.
                    </p>
                </div>
            </div>
        </div>
    )
}
