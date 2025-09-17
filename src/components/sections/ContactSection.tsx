export function ContactSection() {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background-secondary/75 backdrop-blur px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-accent lg:sr-only">
          Contact
        </h2>
      </div>
      <div className="lg:py-24">
        <p className="mb-4 text-lg leading-relaxed">
          I'm always interested in hearing about new opportunities, whether that's for a role at your company or collaborating on a project together.
        </p>
        <p className="mb-8 leading-relaxed text-muted-foreground">
          My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div>
          <a
            href="mailto:rizikinjeri@gmail.com"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-accent text-accent hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 smooth-transition"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}