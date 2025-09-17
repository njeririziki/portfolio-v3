import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.href.slice(1));
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden lg:block">
      <ul className="space-y-1">
        {navigation.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => handleClick(item.href)}
              className={cn(
                "group flex items-center py-3 px-0 text-sm font-medium smooth-transition",
                "hover:text-bright focus:outline-none focus:text-bright",
                activeSection === item.href.slice(1)
                  ? "text-bright"
                  : "text-muted-foreground"
              )}
            >
              <span className={cn(
                "mr-4 h-px bg-current smooth-transition",
                "group-hover:w-16 group-focus:w-16",
                activeSection === item.href.slice(1) ? "w-16" : "w-8"
              )} />
              <span className="text-xs uppercase tracking-widest">
                {item.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}