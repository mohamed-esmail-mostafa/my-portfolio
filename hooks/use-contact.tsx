import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
} from 'lucide-react';

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

export default function useContact() {
  const contact = [
    {
      name: 'phone',
      value: '+201022837509',
      icon: Phone,
    },
    {
      name: 'email',
      value: 'mohamed.esmail.mostafa@gmail.com',
      icon: Mail,
    },
    {
      name: 'whatsapp',
      value: '+201022837509',
      icon: MessageCircle,
    },
    {
      name: 'address',
      value: 'Egypt',
      icon: MapPin,
    },
  ];

  const socialLinks = [
    {
      name: 'github',
      url: 'https://github.com/yourusername',
      icon: FaGithub,
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yourusername/',
      icon: FaLinkedin,
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/yourusername',
      icon: FaFacebook,
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/yourusername',
      icon: FaInstagram,
    },
  ];

  return {
    contact,
    socialLinks,
  };
}