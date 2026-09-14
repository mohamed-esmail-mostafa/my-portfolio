import React from "react";

export default function useContact() {
    const contact = {
        phone: "+201XXXXXXXXX",
        email: "your@email.com",
        address: "Egypt",
    };

    const socialLinks = {
        github: "https://github.com/yourusername",
        linkedin: "https://www.linkedin.com/in/yourusername/",
    };

    return {
        contact,
        socialLinks,
    };
}