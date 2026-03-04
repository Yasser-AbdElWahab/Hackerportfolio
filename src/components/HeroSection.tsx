import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Shield, Users, Briefcase } from 'lucide-react';

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

export function HeroSection({ onSectionChange }: HeroSectionProps) {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = 'CYBERSECURITY.SPECIALIST';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative matrix-bg">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Terminal Window */}
          <div className="cyber-border bg-black-light/50 rounded-lg p-8 mb-8">
            <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-primary/20">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="ml-4 font-mono text-sm text-muted-foreground">terminal.app</span>
            </div>
            
            <div className="text-left space-y-2 font-mono">
              <div className="text-primary">
                <span className="text-muted-foreground">$</span> whoami
              </div>
              <div className="text-green-dark">Cybersecurity Specialist & Ethical Hacker</div>
              <div className="text-primary">
                <span className="text-muted-foreground">$</span> ls -la portfolio/
              </div>
              <div className="text-green-dark">drwxr-xr-x web-pentesting/</div>
              <div className="text-green-dark">drwxr-xr-x mentoring/</div>
              <div className="text-green-dark">drwxr-xr-x experience/</div>
              <div className="text-primary">
                <span className="text-muted-foreground">$</span> cat mission.txt
              </div>
              <div className="text-green-dark">
                Securing digital infrastructure through ethical hacking.
                <br />
                Specializing in web penetration testing, security training, and vulnerability research.
              </div>
              <div className="text-primary">
                <span className="text-muted-foreground">$</span> echo "{text}"
                {showCursor && <span className="text-primary">_</span>}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <Button
              onClick={() => onSectionChange('pentesting')}
              className="cyber-border bg-black-light hover:bg-primary/10 text-primary border-primary p-6 h-auto flex flex-col items-center space-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              variant="outline"
            >
              <Shield className="w-8 h-8" />
              <span>./pentest.exe</span>
              <span className="text-xs text-muted-foreground">Web Pentesting</span>
            </Button>
            
            <Button
              onClick={() => onSectionChange('mentoring')}
              className="cyber-border bg-black-light hover:bg-primary/10 text-primary border-primary p-6 h-auto flex flex-col items-center space-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              variant="outline"
            >
              <Users className="w-8 h-8" />
              <span>./mentor.py</span>
              <span className="text-xs text-muted-foreground">Cybersecurity Mentoring</span>
            </Button>
            
            <Button
              onClick={() => onSectionChange('experience')}
              className="cyber-border bg-black-light hover:bg-primary/10 text-primary border-primary p-6 h-auto flex flex-col items-center space-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              variant="outline"
            >
              <Briefcase className="w-8 h-8" />
              <span>./experience.md</span>
              <span className="text-xs text-muted-foreground">Experience</span>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center space-y-2 text-primary animate-bounce">
            <span className="font-mono text-sm">scroll_down()</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>
      
      {/* Matrix-style background effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="text-primary font-mono text-xs leading-none overflow-hidden h-full">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="whitespace-nowrap">
              {Array.from({ length: 100 }, (_, j) => (
                <span key={j} className="inline-block w-3">
                  {Math.random() > 0.5 ? '1' : '0'}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}