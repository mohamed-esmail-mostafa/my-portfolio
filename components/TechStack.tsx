'use client';

import Image from 'next/image';
import useSkills from '@/hooks/use-skills';

export default function TechStack() {
  const { skills, categories } = useSkills();

  // Show a curated subset matching the design
  const featured = ['Laravel', 'React', 'React Native', 'NestJS', 'Node.js', 'MySQL', 'PostgreSQL', 'Docker'];
  const featuredSkills = skills.filter((s) => featured.includes(s.name));

  // Map skill icons to available SVG files
  const iconMap: Record<string, string> = {
    Laravel: '/skills/nest-middleware-js-svgrepo-com.svg', // placeholder
    React: '/skills/react-javascript-js-framework-facebook-svgrepo-com.svg',
    'React Native': '/skills/react-svgrepo-com.svg',
    NestJS: '/skills/nest-middleware-js-svgrepo-com.svg',
    'Node.js': '/skills/node-js-svgrepo-com.svg',
    MySQL: '/skills/mysql-svgrepo-com.svg',
    PostgreSQL: '/skills/nextjs-svgrepo-com.svg',
    Docker: '/skills/docker-svgrepo-com.svg',
  };

  return (
    <section id="stack" style={{ padding: '100px 24px', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(24px, 4vw, 36px)',
          fontWeight: 800,
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: 'var(--text-primary)',
          marginBottom: 60,
        }}>
          Tech Stack
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
          gap: 12,
        }}>
          {featuredSkills.map((skill) => (
            <div
              key={skill.slug}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '24px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                transition: 'border-color 0.2s, background 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                (e.currentTarget as HTMLElement).style.background = 'var(--accent-dim)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLElement).style.background = 'var(--bg-card)';
              }}
            >
              <div style={{ width: 36, height: 36, position: 'relative', flexShrink: 0 }}>
                <Image
                  src={iconMap[skill.name] || '/skills/react-svgrepo-com.svg'}
                  alt={skill.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="36px"
                />
              </div>
              <span style={{
                fontSize: 12,
                fontWeight: 500,
                color: 'var(--text-secondary)',
                textAlign: 'center',
                letterSpacing: '0.02em',
              }}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
