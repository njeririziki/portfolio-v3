import { ExternalLink } from 'lucide-react';

const experiences = [
  {
    period: 'APR 2025 — Present',
    title: 'FullStack Software Engineer / Course Instructor',
    company: 'Zaio Institute of Technology',
    companyUrl: 'https://www.zaio.io/',
    description: 'Design and deliver full-stack development curriculum covering React.js, Next.js, TypeScript, Supabase, Node.js, PostgreSQL, ORMs and DevOps for learners ranging from beginners to intermediate developers. Built internal learning tools that improved student retention by 30%.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Supabase', 'Node.js', 'PostgreSQL'],
  },
  {
    period: 'JUN 2023 — JUL 2025',
    title: 'Senior Frontend Engineer',
    company: 'Impact Rooms',
    companyUrl: 'https://impactrooms.com/',
    description: 'Built and maintained SaaS applications for investment onboarding using React.js, Next.js, TypeScript, Node.js, and Supabase. Designed modular UI architecture with component libraries, improving maintainability by 40%. Developed and integrated REST APIs ensuring secure and performant data flow.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Supabase', 'PostgreSQL', 'Material UI', 'Tailwind'],
  },
  {
    period: 'MAR 2022 — JUN 2023',
    title: 'Lead Frontend Engineer',
    company: 'Adanian Labs / PhemaAgri',
    companyUrl: 'https://adanianlabs.io/',
    description: 'Led frontend architecture for an agri-fintech SaaS platform with React, Next.js, and TypeScript. Collaborated directly with product leads and CTO, delivering features from low-fidelity prototypes to production-ready UI. Mentored junior developers on best practices in Git workflows and REST API integration.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Git', 'REST APIs'],
  },
  {
    period: 'JUL 2021 — APR 2022',
    title: 'Full-Stack Software Engineer',
    company: 'Rensoft Solutions',
    companyUrl: 'https://www.rensoft.co.ke/',
    description: 'Built bancassurance platforms using React.js, Java Spring Boot, Python and CMS solutions. Automated deployment using GCP, Docker and GitHub for CI/CD workflows.',
    technologies: ['React.js', 'Java Spring Boot', 'Python', 'WordPress', 'GCP', 'Docker'],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background-secondary/75 backdrop-blur px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-accent lg:sr-only">
          Experience
        </h2>
      </div>
      <div className="lg:py-24">
        <ol className="group/list">
          {experiences.map((experience, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 smooth-transition sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md smooth-transition lg:block lg:group-hover:bg-card lg:group-hover:shadow-subtle lg:group-hover:drop-shadow-lg" />
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  {experience.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-accent focus-visible:text-accent group/link text-base"
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${experience.title} at ${experience.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {experience.title} ·{" "}
                          <span className="inline-block">
                            {experience.company}
                            <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 ml-1" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {experience.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {experience.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-foreground hover:text-accent focus-visible:text-accent group/link text-base"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full{" "}
              <span className="inline-block">
                Résumé
                <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 ml-1" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}