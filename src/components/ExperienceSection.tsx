import { Calendar, Award, Code2, Shield, BookOpen, Briefcase, Target, GraduationCap } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      role: 'Bug Bounty Hunting',
      company: 'Active on HackerOne, Bugcrowd, and other platforms',
      period: 'Ongoing',
      description: 'Actively hunting for vulnerabilities in web applications and reporting critical security flaws to major companies through responsible disclosure programs.',
      achievements: [],
      icon: Target
    },
    {
      id: 2,
      role: 'DEPI – Digital Egypt Pioneers Initiative',
      company: 'Global Knowledge | Penetration Testing Trainee',
      period: '2024',
      description: 'Engaging in professional training focused on penetration testing frameworks and vulnerability research.',
      achievements: [],
      icon: Shield
    }
  ];

  const certifications = [
    { name: 'Red Teaming Course', issuer: 'Red Nexus – Hossam Shady', year: 'Post-Exploitation and Linux Privilege Escalation' },
    { name: 'CompTIA Network+', issuer: 'CompTIA', year: 'Secure network architecture, firewalls, packet analysis' },
    { name: 'CS50', issuer: 'Harvard University', year: 'Introduction to Computer Science' }
  ];

  return (
    <section className="min-h-screen py-20 px-4 matrix-bg">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-primary font-mono">$</span>
            <h1 className="font-mono">cat experience.md</h1>
          </div>
          <div className="cyber-border bg-black-light/50 p-1 rounded"></div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h2 className="font-mono text-primary mb-8 flex items-center space-x-2">
            <Briefcase className="w-5 h-5" />
            <span># Professional Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div 
                  key={exp.id}
                  className="cyber-border bg-black-light/50 rounded-lg p-6 hover:bg-black-light/70 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-mono text-primary mb-1">{exp.role}</h3>
                        <p className="text-green-dark font-mono text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground font-mono text-sm mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-green-dark font-mono text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-green-dark font-mono text-sm">
                        <span className="text-primary mt-1">▸</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="font-mono text-primary mb-8 flex items-center space-x-2">
            <Award className="w-5 h-5" />
            <span># Certifications</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="cyber-border bg-black-light/50 rounded-lg p-4 hover:bg-black-light/70 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-primary">{cert.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{cert.year}</span>
                </div>
                <p className="text-green-dark font-mono text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Output */}
        <div className="mt-12 cyber-border bg-black-light/50 rounded-lg p-6">
          <div className="font-mono text-sm space-y-1">
            <div className="text-primary">
              <span className="text-muted-foreground">$</span> grep -i &quot;summary&quot; experience.md
            </div>
            <div className="text-green-dark">
              &gt; Active bug bounty hunter on major platforms
            </div>
            <div className="text-green-dark">
              &gt; Professional penetration testing training and certifications
            </div>
            <div className="text-green-dark">
              &gt; Specialized in web application security and red teaming
            </div>
            <div className="text-green-dark">
              &gt; Continuous learning in offensive security techniques
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}