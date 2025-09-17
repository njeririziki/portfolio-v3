import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/njeririziki',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/njeri-kariukiwebdeveloper',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:rizikinjeri@gmail.com',
    icon: Mail,
  },
  {
    name: 'Resume',
    href: '/resume.pdf',
    icon: FileText,
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center space-x-6 mt-8">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="text-muted-foreground hover:text-accent smooth-transition"
          aria-label={link.name}
        >
          <link.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}