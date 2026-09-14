import React from "react";

export default function useServices() {
    const services = [
        {
            name: "Web Development",
            slug: "web-development",
            description:
                "Building modern, fast, and scalable web applications tailored to your business needs.",
            icon: "/images/services/web-development.png",
            category: "Development",
        },
        {
            name: "Mobile App Development",
            slug: "mobile-app-development",
            description:
                "Creating cross-platform mobile applications with modern technologies and seamless user experiences.",
            icon: "/images/services/mobile-app-development.png",
            category: "Development",
        },
        {
            name: "SaaS Development",
            slug: "saas-development",
            description:
                "Designing and developing scalable SaaS platforms that solve real business problems.",
            icon: "/images/services/saas-development.png",
            category: "Development",
        },
        {
            name: "Custom Software",
            slug: "custom-software",
            description:
                "Developing custom software solutions designed around your workflow, requirements, and business goals.",
            icon: "/images/services/custom-software.png",
            category: "Development",
        },
        {
            name: "API Development",
            slug: "api-development",
            description:
                "Building secure and scalable REST APIs that connect web, mobile, and third-party applications.",
            icon: "/images/services/api-development.png",
            category: "Backend",
        },
        {
            name: "System Integration",
            slug: "system-integration",
            description:
                "Connecting applications and third-party services to create seamless and automated workflows.",
            icon: "/images/services/system-integration.png",
            category: "Backend",
        },
    ];

    return {
        services,
        featuredServices: services.slice(0, 4),
    };
}