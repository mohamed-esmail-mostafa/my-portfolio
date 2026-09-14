'use client';

import Image from 'next/image';
import useServices from '@/hooks/use-services';

export default function About() {
  const { featuredServices } = useServices();

  return (
    <section id="about" style={{ padding: '100px 24px', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(22px, 3.5vw, 30px)',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--text-primary)',
          marginBottom: 48,
        }}>
          About
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 48,
          alignItems: 'start',
        }}
          className="about-grid"
        >
          {/* Profile image */}
          <div style={{
            width: 160,
            height: 200,
            borderRadius: 12,
            overflow: 'hidden',
            border: '1px solid var(--border)',
            flexShrink: 0,
            position: 'relative',
          }}>
            <Image
              src="/1.jpeg"
              alt="Mohamed Ismail"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              sizes="160px"
            />
          </div>

          {/* Text */}
          <div>
            <p style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: 32,
              maxWidth: 560,
            }}>
              Passionate developer focused on building scalable products, solving
              complex problems, and turning ideas into impactful software.
            </p>

            <p style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              marginBottom: 16,
            }}>
              Core Services
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '8px 32px',
            }}>
              {featuredServices.map((s) => (
                <div key={s.slug} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 14,
                  color: 'var(--text-secondary)',
                }}>
                  <span style={{ color: 'var(--accent)', fontSize: 16 }}>•</span>
                  {s.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
