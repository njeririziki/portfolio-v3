export function AboutSection() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background-secondary/75 backdrop-blur px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-accent lg:sr-only">
          About
        </h2>
      </div>
      <div className="lg:py-24">
        <p className="mb-4 text-lg leading-relaxed">
          Fullstack Developer with 5 years of experience building scalable SaaS platforms and developer-focused applications. I'm passionate about creating efficient developer tooling and security-focused platforms that enable smooth workflows from prototyping to production.
        </p>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Currently, I'm a <span className="text-accent font-medium">FullStack Software Engineer and Course Instructor</span> at Zaio Institute of Technology. I design and deliver comprehensive full-stack development curriculum covering React.js, Next.js, TypeScript, Node.js, and PostgreSQL, helping developers ranging from beginners to intermediate levels build production-ready applications.
        </p>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          In the past, I've had the privilege of building software across diverse environments — from agri-fintech SaaS platforms at Adanian Labs to investment onboarding applications at Impact Rooms, and bancassurance platforms at Rensoft Solutions. I've led frontend architecture, mentored junior developers, and consistently delivered features from low-fidelity prototypes to production-ready systems.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          When I'm not coding, I'm mentoring aspiring developers through Mastercraft and organizing tech community events with Google Developer Group Nairobi. I believe in making development more accessible and helping others grow in their tech careers.
        </p>
      </div>
    </section>
  );
}