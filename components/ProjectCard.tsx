import { Project } from '@/types/project';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ProjectCard({ project, viewLabel }: { project: Project; viewLabel: string }) {

  const t = useTranslations('projects');

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        overflow: 'hidden',
        transition: 'border-color 0.2s, transform 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', background: '#0d0d0d' }}>
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>

      <div style={{ padding: '20px 20px 16px' }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3, textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: 8 }}>
          {project.name}
          <span style={{ color: 'var(--text-muted)', fontWeight: 400, marginLeft: 8 }}>— {project.category}</span>
        </h3>

        <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 14 }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} style={{
              fontSize: 11,
              padding: '3px 8px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border)',
              borderRadius: 4,
              color: 'var(--text-muted)',
              letterSpacing: '0.03em',
            }}>
              {tech}
            </span>
          ))}
        </div>

        <button className='bg-primary text-white w-full py-3 h-9 rounded-lg'
        >

          {t('visit_project')}
        </button>
      </div>
    </div>
  )
}
