import React from "react";

export default function useSkills() {
    const skills = [
        // Backend
        {
            name: "Laravel",
            slug: "laravel",
            icon: "/skills/laravel-svgrepo-com.svg",
            category: "Backend",
        },
        {
            name: "PHP",
            slug: "php",
            icon: "/skills/php2-svgrepo-com.svg",
            category: "Backend",
        },
        {
            name: "Node.js",
            slug: "nodejs",
            icon: "/skills/node-js-svgrepo-com.svg",
            category: "Backend",
        },
        {
            name: "NestJS",
            slug: "nestjs",
            icon: "/skills/nest-middleware-js-svgrepo-com.svg",
            category: "Backend",
        },


        // Frontend
        {
            name: "React",
            slug: "react",
            icon: "/skills/react-svgrepo-com.svg",
            category: "Frontend",
        },
        {
            name: "TypeScript",
            slug: "typescript",
            icon: "/skills/typescript-icon-svgrepo-com.svg",
            category: "Frontend",
        },
        {
            name: "JavaScript",
            slug: "javascript",
            icon: "/skills/js-svgrepo-com.svg",
            category: "Frontend",
        },
        {
            name: "Tailwind CSS",
            slug: "tailwindcss",
            icon: "/skills/tailwind-svgrepo-com.svg",
            category: "Frontend",
        },
        {
            name: "HTML",
            slug: "html",
            icon: "/skills/html-5-svgrepo-com.svg",
            category: "Frontend",
        },
        {
            name: "CSS",
            slug: "css",
            icon: "/skills/css-3-svgrepo-com.svg",
            category: "Frontend",
        },

        // Mobile
        {
            name: "React Native",
            slug: "react-native",
            icon: "/skills/react-javascript-js-framework-facebook-svgrepo-com.svg",
            category: "Mobile",
        },
        {
            name: "Expo",
            slug: "expo",
            icon: "/skills/expo-svgrepo-com.svg",
            category: "Mobile",
        },

        // Database
        {
            name: "MySQL",
            slug: "mysql",
            icon: "/skills/mysql-svgrepo-com.svg",
            category: "Database",
        },
        {
            name: "Prisma",
            slug: "prisma",
            icon: "/skills/prisma-svgrepo-com.svg",
            category: "Database",
        },

        // DevOps
        {
            name: "Docker",
            slug: "docker",
            icon: "/skills/docker-svgrepo-com.svg",
            category: "DevOps",
        },
        {
            name: "Kubernates",
            slug: "Kubernates",
            icon: "/skills/kubernetes-svgrepo-com.svg",
            category: "DevOps",
        },
        {
            name: "Git",
            slug: "git",
            icon: "/skills/git-svgrepo-com.svg",
            category: "Tools",
        },
        {
            name: "GitHub",
            slug: "github",
            icon: "/images/skills/github.png",
            category: "Tools",
        },

       
        // {
        //     name: "MQTT",
        //     slug: "mqtt",
        //     icon: "/images/skills/mqtt.png",
        //     category: "Services",
        // },

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