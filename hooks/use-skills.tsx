import React from "react";

export default function useSkills() {
    const skills = [
        // Backend
        {
            name: "Laravel",
            slug: "laravel",
            icon: "/images/skills/laravel.png",
            category: "Backend",
        },
        {
            name: "PHP",
            slug: "php",
            icon: "/images/skills/php.png",
            category: "Backend",
        },
        {
            name: "Node.js",
            slug: "nodejs",
            icon: "/images/skills/nodejs.png",
            category: "Backend",
        },
        {
            name: "NestJS",
            slug: "nestjs",
            icon: "/images/skills/nestjs.png",
            category: "Backend",
        },
        {
            name: "REST API",
            slug: "rest-api",
            icon: "/images/skills/rest-api.png",
            category: "Backend",
        },

        // Frontend
        {
            name: "React",
            slug: "react",
            icon: "/images/skills/react.png",
            category: "Frontend",
        },
        {
            name: "Inertia.js",
            slug: "inertiajs",
            icon: "/images/skills/inertiajs.png",
            category: "Frontend",
        },
        {
            name: "TypeScript",
            slug: "typescript",
            icon: "/images/skills/typescript.png",
            category: "Frontend",
        },
        {
            name: "JavaScript",
            slug: "javascript",
            icon: "/images/skills/javascript.png",
            category: "Frontend",
        },
        {
            name: "Tailwind CSS",
            slug: "tailwindcss",
            icon: "/images/skills/tailwindcss.png",
            category: "Frontend",
        },
        {
            name: "HTML",
            slug: "html",
            icon: "/images/skills/html.png",
            category: "Frontend",
        },
        {
            name: "CSS",
            slug: "css",
            icon: "/images/skills/css.png",
            category: "Frontend",
        },

        // Mobile
        {
            name: "React Native",
            slug: "react-native",
            icon: "/images/skills/react-native.png",
            category: "Mobile",
        },
        {
            name: "Expo",
            slug: "expo",
            icon: "/images/skills/expo.png",
            category: "Mobile",
        },

        // Database
        {
            name: "MySQL",
            slug: "mysql",
            icon: "/images/skills/mysql.png",
            category: "Database",
        },
        {
            name: "PostgreSQL",
            slug: "postgresql",
            icon: "/images/skills/postgresql.png",
            category: "Database",
        },
        {
            name: "Prisma",
            slug: "prisma",
            icon: "/images/skills/prisma.png",
            category: "Database",
        },

        // DevOps
        {
            name: "Docker",
            slug: "docker",
            icon: "/images/skills/docker.png",
            category: "DevOps",
        },
        {
            name: "Git",
            slug: "git",
            icon: "/images/skills/git.png",
            category: "Tools",
        },
        {
            name: "GitHub",
            slug: "github",
            icon: "/images/skills/github.png",
            category: "Tools",
        },

        // Services & Infrastructure
        {
            name: "Cloudinary",
            slug: "cloudinary",
            icon: "/images/skills/cloudinary.png",
            category: "Services",
        },
        {
            name: "MQTT",
            slug: "mqtt",
            icon: "/images/skills/mqtt.png",
            category: "Services",
        },
    ];

    const categories = [
        "Backend",
        "Frontend",
        "Mobile",
        "Database",
        "DevOps",
        "Services",
        "Tools",
    ];

    return {
        skills,
        categories,
    };
}