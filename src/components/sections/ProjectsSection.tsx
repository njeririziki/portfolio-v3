import { ExternalLink, Github } from 'lucide-react';
import IRPhoto from '../../assets/impactrooms.png';
import TFNPhoto from '../../assets/tfn.png';
import LisaPhoto from '../../assets/lisaai.png';

const projects = [
    {
    title: 'Lisa AI',
    description: 'Lisa is a web app for analysing and visualizing data that helps business increase efficiency and productivity.',
    image: LisaPhoto,
    technologies: ['Next.js', 'TypeScript', 'Git', 'REST APIs','Styled Components'],
    links: {
      external: 'https://phindor.com/lisa-ai/',
      github: 'https://github.com/njeririziki/AnalyticsProject',
    },
  },
  {
    title: 'Tech for Nonprofits',
    description: 'A collection of free resources and tools for nonprofits and social enterprises to help them leverage technology for greater impact.',
    image: TFNPhoto,
    technologies: ['Next.js', 'Django', 'Rest APIs', 'GCP', 'Docker',  'Styled Components'],
    links: {
      external: 'https://tfn-ke.com/',
      // github: 'https://github.com',
    },
  },
  {
    title: 'Impact Rooms',
    description: 'Impact Rooms are platforms for investment groups, investors and startups seeking funding',
    image: IRPhoto,
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Supabase', 'PostgreSQL', 'Material UI', 'Tailwind'],
    links: {
      external: 'https://impactrooms.com/',
      // github: 'https://github.com',
    },
  },

];

export function ProjectsSection() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background-secondary/75 backdrop-blur px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-accent lg:sr-only">
          Projects
        </h2>
      </div>
      <div className="lg:py-24">
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 smooth-transition sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md smooth-transition lg:block lg:group-hover:bg-card lg:group-hover:shadow-subtle lg:group-hover:drop-shadow-lg" />
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-accent focus-visible:text-accent group/link text-base"
                      href={project.links.external}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        <span className="inline-block">
                          {project.title}
                          <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 ml-1" />
                        </span>
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {project.description}
                  </p>
                  {project.links.github && (
                    <div className="mt-2 flex text-sm font-medium text-muted-foreground space-x-4">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center hover:text-accent smooth-transition"
                        aria-label="GitHub repository"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        {/* Code */}
                      </a>
                    </div>
                  )}
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  alt={project.title}
                  loading="lazy"
                  width={200}
                  height={48}
                  decoding="async"
                  className="rounded border-2 border-muted smooth-transition group-hover:border-accent/50 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  src={project.image}
                />
              </div>
            </li>
          ))}
        </ul>
        {/* <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-foreground hover:text-accent focus-visible:text-accent group/link text-base"
            href="https://github.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Project Archive (opens in a new tab)"
          >
            <span>
              View Full{" "}
              <span className="inline-block">
                Project Archive
                <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 ml-1" />
              </span>
            </span>
          </a>
        </div> */}
      </div>
    </section>
  );
}