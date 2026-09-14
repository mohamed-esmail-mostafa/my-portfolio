import { Project } from '@/types/project';
import React from 'react'

export default function useProjects() {


    const projects: Project[] = [
  {
    name: "Riva",
    slug: "riva",
    description:
      "A modern multi-store food and grocery marketplace that allows users to discover restaurants, cafes, supermarkets, and order products from multiple stores.",
    images: [
      "/images/projects/riva/1.webp",
      "/images/projects/riva/2.webp",
      "/images/projects/riva/3.webp",
    ],
    technologies: [
      "NestJS",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "React Native",
      "Expo",
      "Redux",
      "Cloudinary",
    ],
    duration: "3 Months",
    category: "Marketplace",
    featured: true,
    url: undefined,
  },

  {
    name: "Menu Pro",
    slug: "menu-pro",
    description:
      "A digital menu and restaurant management platform that helps restaurants and cafes manage menus, branches, orders, and customer interactions through QR-based digital menus.",
    images: [
      "/images/projects/menu-pro/1.webp",
      "/images/projects/menu-pro/2.webp",
      "/images/projects/menu-pro/3.webp",
    ],
    technologies: [
      "Laravel",
      "Inertia.js",
      "React",
      "MySQL",
      "Tailwind CSS",
      "Cloudinary",
      "Laravel Echo",
    ],
    duration: "2 Months",
    category: "SaaS",
    featured: true,
    url: undefined,
  },

  {
    name: "Clinic Management System",
    slug: "clinic-management",
    description:
      "An all-in-one clinic management platform for doctors and medical centers to manage patients, appointments, visits, prescriptions, staff, and clinic operations.",
    images: [
      "/images/projects/clinic-management/1.webp",
      "/images/projects/clinic-management/2.webp",
      "/images/projects/clinic-management/3.webp",
    ],
    technologies: [
      "Laravel",
      "Inertia.js",
      "React",
      "MySQL",
      "Tailwind CSS",
      "REST API",
      "Cloudinary",
    ],
    duration: "2 Months",
    category: "Healthcare",
    featured: true,
    url: undefined,
  },

  {
    name: "RO System",
    slug: "ro-system",
    description:
      "A SaaS platform for managing and monitoring reverse osmosis water treatment systems, including stations, readings, water quality, equipment status, alarms, and daily reports.",
    images: [
      "/images/projects/ro-system/1.webp",
      "/images/projects/ro-system/2.webp",
      "/images/projects/ro-system/3.webp",
    ],
    technologies: [
      "Laravel",
      "Inertia.js",
      "React",
      "MySQL",
      "Tailwind CSS",
      "Docker",
      "MQTT",
    ],
    duration: "3 Months",
    category: "Industrial SaaS",
    featured: true,
    url: undefined,
  },

  {
    name: "Palmaal",
    slug: "palmaal",
    description:
      "A modern classified marketplace where users can discover, publish, and manage listings for products, vehicles, real estate, services, and other categories.",
    images: [
      "/images/projects/palmaal/1.webp",
      "/images/projects/palmaal/2.webp",
      "/images/projects/palmaal/3.webp",
    ],
    technologies: [
      "Laravel",
      "Inertia.js",
      "React",
      "MySQL",
      "Tailwind CSS",
      "REST API",
      "Cloudinary",
    ],
    duration: "3 Months",
    category: "Marketplace",
    featured: true,
    url: undefined,
  },
];

  return {
    projects,
    featuredProjects: projects.filter((project) => project.featured),
  }
}
