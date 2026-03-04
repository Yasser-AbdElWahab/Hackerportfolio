import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PortfolioGrid } from './components/PortfolioGrid';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import cymatrixLogo from 'figma:asset/eb28f351d8801fe7e5c14a8d00b04d9c56b46915.png';
import ieeeLogo from 'figma:asset/7f27a6729446b3c785cd36af0d8be7845bef8df9.png';
import gdgLogo from 'figma:asset/3b47a0d8a614b40950503a92ebbc38ce51ce9810.png';
import mtiLogo from 'figma:asset/a1fcc30fad758fc014bd72cd1132d06dbe94ebcc.png';

// Cybersecurity portfolio data
const portfolioData = {
  pentesting: [],
  mentoring: [
    {
      id: 'mentor-1',
      title: 'CyMatriX - Web PenTesting Community',
      description: 'Co-Founder & Lead Instructor (Sep 2025 - Present) | Established a specialized community (200+ Members) focused on web application security and penetration testing. Develop and deliver training modules covering exploitation techniques and remediation strategies, deep-diving into OWASP Top 10 web vulnerabilities.',
      image: cymatrixLogo,
      tags: ['Community Building', 'OWASP Top 10', 'Web Security', 'Training'],
      type: 'mentoring' as const,
      links: { info: '#' }
    },
    {
      id: 'mentor-2',
      title: 'IEEE Student Branch',
      description: 'Penetration Testing Instructor (Feb 2026 - Present) | Deliver hands-on workshops and technical sessions on ethical hacking, empowering students with practical cybersecurity skills.',
      image: ieeeLogo,
      tags: ['Ethical Hacking', 'Workshop', 'IEEE', 'Hands-on Training'],
      type: 'mentoring' as const,
      links: { info: '#' }
    },
    {
      id: 'mentor-3',
      title: 'GDG on Campus – Obour Institute',
      description: 'Penetration Testing Instructor & Event Organizer (Nov 2025 - Present) | Design cybersecurity training programs and host workshops on web exploitation and network security for students and tech enthusiasts.',
      image: gdgLogo,
      tags: ['GDG', 'Web Exploitation', 'Network Security', 'Event Organizing'],
      type: 'mentoring' as const,
      links: { info: '#' }
    },
    {
      id: 'mentor-4',
      title: 'MTI University - Computer Science Department',
      description: 'Class Leader | Act as a communication bridge between 700+ students and faculty to streamline academic coordination.',
      image: mtiLogo,
      tags: ['Leadership', 'Communication', 'Academic Coordination', 'MTI'],
      type: 'mentoring' as const,
      links: { info: '#' }
    }
  ]
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection onSectionChange={setActiveSection} />;
      case 'pentesting':
        return <PortfolioGrid items={portfolioData.pentesting} type="pentesting" />;
      case 'mentoring':
        return <PortfolioGrid items={portfolioData.mentoring} type="mentoring" />;
      case 'experience':
        return <ExperienceSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className={activeSection === 'home' ? '' : 'pt-20'}>
        {renderSection()}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-primary/20 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="font-mono text-muted-foreground text-sm">
            © 2026 CyberSec.Portfolio - Security through obscurity is not security
          </p>
          <p className="font-mono text-xs text-muted-foreground mt-2">
            System.Status: <span className="text-primary">Online</span> | 
            Last.Update: <span className="text-primary">2026.02.26</span> |
            Build.Version: <span className="text-primary">v2.0.0</span>
          </p>
        </div>
      </footer>
    </div>
  );
}