import { Navigation } from '@/components/Navigation';
import { SocialLinks } from '@/components/SocialLinks';
import { MobileMenu } from '@/components/MobileMenu';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Left sidebar - Fixed on large screens */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            {/* Mobile menu */}
            <div className="flex justify-between items-center mb-8 lg:hidden">
              <h1 className="text-2xl font-bold text-foreground">Sharon Njeri</h1>
              <MobileMenu />
            </div>

            {/* Hero section */}
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                <span className="text-gradient">Sharon Njeri</span>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-accent sm:text-xl">
                FullStack Software Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
                I build scalable SaaS platforms and developer-focused applications.
              </p>
            </div>

            {/* Navigation - Desktop only */}
            <div className="mt-16 hidden lg:block">
              <Navigation />
            </div>
          </div>

          {/* Social links */}
          <div className="hidden lg:block">
            <SocialLinks />
          </div>
        </header>

        {/* Main content */}
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />

          {/* Mobile social links */}
          <div className="lg:hidden">
            <SocialLinks />
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0 lg:hidden">
        <p>
          Loosely designed in{" "}
          <a
            href="https://www.figma.com/"
            className="font-medium text-accent hover:text-accent/80 focus-visible:text-accent"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Figma (opens in a new tab)"
          >
            Figma
          </a>{" "}
          and coded in{" "}
          <a
            href="https://code.visualstudio.com/"
            className="font-medium text-accent hover:text-accent/80 focus-visible:text-accent"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visual Studio Code (opens in a new tab)"
          >
            Visual Studio Code
          </a>{" "}
          by yours truly. Built with{" "}
          <a
            href="https://react.dev/"
            className="font-medium text-accent hover:text-accent/80 focus-visible:text-accent"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="React (opens in a new tab)"
          >
            React
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            className="font-medium text-accent hover:text-accent/80 focus-visible:text-accent"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Tailwind CSS (opens in a new tab)"
          >
            Tailwind CSS
          </a>
          , deployed with{" "}
          <a
            href="https://lovable.dev/"
            className="font-medium text-accent hover:text-accent/80 focus-visible:text-accent"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Lovable (opens in a new tab)"
          >
            Lovable
          </a>
          . All text is set in the{" "}
          <a
            href="https://rsms.me/inter/"
            className="font-medium text-accent hover:text-accent/80 focus-visible:text-accent"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Inter (opens in a new tab)"
          >
            Inter
          </a>{" "}
          typeface.
        </p>
      </footer>
    </div>
  );
};

export default Index;
