import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',

    name: 'Mohamed Ismail',

    url: 'https://yourdomain.com',

    jobTitle: 'Full-Stack Developer',

    sameAs: [
      'https://github.com/yourusername',
      'https://www.linkedin.com/in/yourusername',
    ],

    knowsAbout: [
      'Laravel',
      'React',
      'Next.js',
      'TypeScript',
      'PHP',
      'JavaScript',
      'Mobile App Development',
      'SaaS',
    ],
  };
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
