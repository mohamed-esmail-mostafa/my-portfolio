import React from "react";

export default function useContact() {
    const contact = {
        phone: "+201022837509",
        email: "mohamed.esmail.mostafa@gmail.com",
        whatsup:"+201022837509",
        address: "Egypt",
    };

    const socialLinks = {
        github: "https://github.com/yourusername",
        linkedin: "https://www.linkedin.com/in/yourusername/",
        facebook: "https://www.linkedin.com/in/yourusername/",
        instagram: "https://www.linkedin.com/in/yourusername/",
    };

    return {
        contact,
        socialLinks,
    };
}