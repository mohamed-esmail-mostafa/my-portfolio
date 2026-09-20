'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/types/project';
import { useTranslations } from 'next-intl';
export default function ProjectCard({
  project,
  viewLabel,
}: {
  project: Project;
  viewLabel: string;
}) {
    const t = useTranslations('projects');
  return (
    <article
      className="
        group overflow-hidden
        rounded-2xl
        border border-[var(--border)]
        bg-[var(--bg-card)]
        transition-all duration-500
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
      "
    >
      {/* Image */}
      <div
        className="
          relative aspect-[16/10]
          overflow-hidden
          bg-[#0d0d0d]
        "
      >
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          className="
            object-cover
            transition-transform duration-700
            ease-out
            group-hover:scale-105
          "
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Image Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/60
            via-transparent
            to-transparent
            opacity-70
            transition-opacity duration-500
            group-hover:opacity-90
          "
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span
            className="
              rounded-full
              border border-white/10
              bg-black/60
              px-3 py-1.5
              text-[10px] font-semibold
              uppercase tracking-[0.12em]
              text-white/80
              backdrop-blur-md
            "
          >
            {project.category}
          </span>
        </div>

        {/* Project Number */}
        <div
          className="
            absolute bottom-4 right-4
            text-[10px] font-medium
            uppercase tracking-[0.15em]
            text-white/40
          "
        >
          {project.slug}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Title */}
        <div className="mb-3">
          <h3
            className="
              text-lg font-bold
              tracking-tight
              text-[var(--text-primary)]
              transition-colors duration-300
              group-hover:text-primary
            "
          >
            {project.name}
          </h3>
        </div>

        {/* Description */}
        <p
          className="
            mb-5
            line-clamp-2
            text-sm
            leading-6
            text-[var(--text-secondary)]
          "
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="
                rounded-md
                border border-[var(--border)]
                bg-white/[0.025]
                px-2.5 py-1
                text-[10px] font-medium
                tracking-wide
                text-[var(--text-muted)]
                transition-colors duration-300
                group-hover:border-primary/20
                group-hover:text-[var(--text-secondary)]
              "
            >
              {tech}
            </span>
          ))}

          {project.technologies.length > 5 && (
            <span
              className="
                rounded-md
                border border-[var(--border)]
                px-2.5 py-1
                text-[10px]
                text-[var(--text-muted)]
              "
            >
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* CTA */}
        <button
          type="button"
          className="
            group/button
            flex h-11 w-full
            items-center justify-center gap-2
            rounded-lg
            border border-[var(--border)]
            bg-white/[0.02]
            text-xs font-semibold
            uppercase tracking-[0.08em]
            text-[var(--text-primary)]
            transition-all duration-300
            hover:border-primary
            hover:bg-primary
            hover:text-black
          "
        >
          <span>{t("visit_project")}</span>

          <ArrowUpRight
            className="
              h-4 w-4
              transition-transform duration-300
              group-hover/button:translate-x-0.5
              group-hover/button:-translate-y-0.5
            "
          />
        </button>
      </div>
    </article>
  );
}