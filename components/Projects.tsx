'use client';

import { useTranslations } from 'next-intl';
import useProjects from '@/hooks/use-projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const t = useTranslations('projects');
  const { featuredProjects } = useProjects();

  return (
    <section
      id="projects"
      className="border-t border-[var(--border)] px-6 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section Header */}
        <div className="mb-14 text-center sm:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t('label') || 'Selected Work'}
          </p>

          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--text-primary)] sm:text-4xl">
            {t('heading')}
          </h2>

          <div className="mx-auto mt-5 h-px w-12 bg-primary" />
        </div>

        {/* Projects */}
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              viewLabel={t('view_case')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}